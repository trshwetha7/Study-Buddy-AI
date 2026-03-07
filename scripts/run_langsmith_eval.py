#!/usr/bin/env python3
"""Run local LangSmith-friendly evaluations for StudyBuddyAI tutor variants."""

from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path
from statistics import mean
from typing import Any, Dict, List

PROJECT_ROOT = Path(__file__).resolve().parents[1]
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

try:
    from langsmith import traceable
except Exception:  # pragma: no cover
    def traceable(*decorator_args, **decorator_kwargs):
        if decorator_args and callable(decorator_args[0]) and len(decorator_args) == 1 and not decorator_kwargs:
            return decorator_args[0]

        def _passthrough(func):
            return func

        return _passthrough

from backend.tutor_backend import DEFAULT_VARIANT, TutorEngine, VARIANT_CONFIGS

WORD_RE = re.compile(r"[a-zA-Z0-9_+-]+")
REPORT_DIR = PROJECT_ROOT / "reports"
CASES_PATH = PROJECT_ROOT / "evals" / "langsmith_eval_cases.json"


def load_env_file() -> None:
    env_path = PROJECT_ROOT / ".env"
    if not env_path.exists():
        return
    for raw_line in env_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip())


def tokenize(text: str) -> List[str]:
    return [token.lower() for token in WORD_RE.findall(text)]


def score_answer(answer: str, expected_keywords: List[str]) -> Dict[str, Any]:
    normalized_answer = answer.lower()
    matched = []
    for keyword in expected_keywords:
        keyword_lower = keyword.lower()
        if keyword_lower in normalized_answer:
            matched.append(keyword)

    keyword_recall = len(matched) / max(len(expected_keywords), 1)
    word_count = len(tokenize(answer))
    concise_score = 1.0 if word_count <= 260 else max(0.0, 1 - ((word_count - 260) / 260))
    failed = ("request failed" in normalized_answer) or ("unavailable" in normalized_answer)
    final_score = 0.0 if failed else round((0.75 * keyword_recall) + (0.25 * concise_score), 4)
    return {
        "matched_keywords": matched,
        "keyword_recall": round(keyword_recall, 4),
        "word_count": word_count,
        "concise_score": round(concise_score, 4),
        "failed": failed,
        "final_score": final_score,
    }


@traceable(name="studybuddy_eval_case", run_type="chain")
def evaluate_case(engine: TutorEngine, case: Dict[str, Any], variant: str) -> Dict[str, Any]:
    response = engine.tutor(
        question=case["question"],
        lesson_id=case.get("lesson_id"),
        learner_level="beginner",
        history=[],
        variant=variant,
    )
    metrics = score_answer(response.get("answer", ""), case.get("expected_keywords", []))
    return {
        "case_id": case["id"],
        "variant": variant,
        "lesson_id": case.get("lesson_id"),
        "question": case["question"],
        "metrics": metrics,
        "sources": response.get("sources", []),
        "mode": response.get("mode"),
        "answer_preview": response.get("answer", "")[:400],
    }


def aggregate_variant_results(rows: List[Dict[str, Any]]) -> Dict[str, Any]:
    keyword_scores = [row["metrics"]["keyword_recall"] for row in rows]
    concise_scores = [row["metrics"]["concise_score"] for row in rows]
    final_scores = [row["metrics"]["final_score"] for row in rows]
    failures = [row for row in rows if row["metrics"]["failed"]]
    return {
        "avg_keyword_recall": round(mean(keyword_scores), 4) if keyword_scores else 0.0,
        "avg_concise_score": round(mean(concise_scores), 4) if concise_scores else 0.0,
        "avg_final_score": round(mean(final_scores), 4) if final_scores else 0.0,
        "failure_rate": round(len(failures) / max(len(rows), 1), 4),
        "failed_case_ids": [row["case_id"] for row in failures],
    }


def build_improvement_notes(summary: Dict[str, Dict[str, Any]]) -> List[str]:
    baseline = summary.get("baseline")
    improved = summary.get("improved")
    if not baseline or not improved:
        return ["Could not compute variant comparison because one variant did not run."]

    notes = []
    final_delta = improved["avg_final_score"] - baseline["avg_final_score"]
    keyword_delta = improved["avg_keyword_recall"] - baseline["avg_keyword_recall"]
    concise_delta = improved["avg_concise_score"] - baseline["avg_concise_score"]

    notes.append(
        f"Variant comparison: improved final score changed by {final_delta:+.3f} versus baseline."
    )
    notes.append(
        f"Coverage change: improved keyword recall changed by {keyword_delta:+.3f}; conciseness changed by {concise_delta:+.3f}."
    )

    if final_delta < 0:
        notes.append(
            "Action item: reduce prompt constraints in improved variant to recover answer completeness."
        )
    else:
        notes.append(
            "Action item: keep improved variant as default and continue tuning retrieval depth for hard questions."
        )
    return notes


def write_summary_markdown(
    result_payload: Dict[str, Any],
    summary_by_variant: Dict[str, Dict[str, Any]],
    notes: List[str],
) -> None:
    lines = [
        "# StudyBuddyAI LangSmith Evaluation Summary",
        "",
        f"- Tutor mode during eval: `{result_payload['engine_status']['mode']}`",
        f"- Default variant: `{DEFAULT_VARIANT}`",
        f"- Cases evaluated: `{len(result_payload['cases'])}`",
        "",
        "## Variant Scores",
        "",
        "| Variant | Avg Final Score | Avg Keyword Recall | Avg Concise Score | Failure Rate |",
        "|---|---:|---:|---:|---:|",
    ]
    for variant, metrics in summary_by_variant.items():
        lines.append(
            f"| `{variant}` | {metrics['avg_final_score']:.3f} | {metrics['avg_keyword_recall']:.3f} | "
            f"{metrics['avg_concise_score']:.3f} | {metrics['failure_rate']:.3f} |"
        )
    lines.extend([
        "",
        "## Concrete Improvements Logged",
        "",
    ])
    for note in notes:
        lines.append(f"- {note}")

    summary_path = REPORT_DIR / "langsmith_eval_summary.md"
    summary_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    load_env_file()
    REPORT_DIR.mkdir(parents=True, exist_ok=True)

    cases = json.loads(CASES_PATH.read_text(encoding="utf-8"))
    engine = TutorEngine()
    if engine.mode != "langchain-rag":
        print("LangChain tutor is not active. Set OPENAI_API_KEY and dependencies first, then rerun.")
        print(f"Current mode: {engine.mode}")
        return 2

    variants_to_test = ["baseline", "improved"]
    variants_to_test = [v for v in variants_to_test if v in VARIANT_CONFIGS]

    rows: List[Dict[str, Any]] = []
    for variant in variants_to_test:
        for case in cases:
            rows.append(evaluate_case(engine=engine, case=case, variant=variant))

    by_variant: Dict[str, List[Dict[str, Any]]] = {}
    for row in rows:
        by_variant.setdefault(row["variant"], []).append(row)

    summary_by_variant = {
        variant: aggregate_variant_results(result_rows)
        for variant, result_rows in by_variant.items()
    }
    notes = build_improvement_notes(summary_by_variant)

    result_payload = {
        "engine_status": engine.status(),
        "cases": cases,
        "results": rows,
        "summary_by_variant": summary_by_variant,
        "concrete_improvements": notes,
        "failure_samples": engine.get_failures(limit=10),
    }
    report_path = REPORT_DIR / "langsmith_eval_report.json"
    report_path.write_text(json.dumps(result_payload, indent=2), encoding="utf-8")
    write_summary_markdown(result_payload, summary_by_variant, notes)

    print(f"Wrote report: {report_path}")
    print(f"Wrote summary: {REPORT_DIR / 'langsmith_eval_summary.md'}")
    print("Summary by variant:")
    for variant, metrics in summary_by_variant.items():
        print(f"  - {variant}: {metrics}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

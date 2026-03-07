"""Backend tutor engine with LangChain + OpenAI RAG and LangSmith-ready tracing hooks."""

from __future__ import annotations

import json
import os
import re
from datetime import datetime, timezone
from dataclasses import dataclass
from typing import Any, Dict, List, Optional

from backend.tutor_knowledge import LESSON_KNOWLEDGE

try:
    from langchain_core.documents import Document
    from langchain_core.messages import HumanMessage, SystemMessage
    from langchain_core.vectorstores import InMemoryVectorStore
    from langchain_openai import ChatOpenAI, OpenAIEmbeddings

    HAS_LANGCHAIN = True
except Exception:
    HAS_LANGCHAIN = False

try:
    from langsmith import traceable
except Exception:  # pragma: no cover - fallback when LangSmith is unavailable.
    def traceable(*decorator_args, **decorator_kwargs):
        if decorator_args and callable(decorator_args[0]) and len(decorator_args) == 1 and not decorator_kwargs:
            return decorator_args[0]

        def _passthrough(func):
            return func

        return _passthrough


WORD_RE = re.compile(r"[a-zA-Z0-9_+-]+")

DEFAULT_VARIANT = "improved"
VARIANT_CONFIGS: Dict[str, Dict[str, Any]] = {
    "baseline": {
        "retrieval_k": 4,
        "prompt_style": "baseline",
        "description": "Minimal tutoring prompt used as baseline.",
    },
    "improved": {
        "retrieval_k": 6,
        "prompt_style": "improved",
        "description": "Structured prompt optimized for concise, student-friendly explanations with stronger technical term coverage.",
    },
}


@dataclass
class RetrievedChunk:
    chunk_id: str
    title: str
    track: str
    text: str
    score: float


class TutorEngine:
    def __init__(self) -> None:
        self.mode = "langchain-unavailable"
        self.last_error: Optional[str] = None
        self.docs = LESSON_KNOWLEDGE
        self.vector_store = None
        self.llm = None
        self.failure_log: List[Dict[str, Any]] = []
        self._init_langchain()

    def _init_langchain(self) -> None:
        if not HAS_LANGCHAIN:
            self.last_error = "LangChain packages are not installed."
            return

        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            self.last_error = "OPENAI_API_KEY is not set."
            return

        model_name = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
        embed_model = os.getenv("OPENAI_EMBED_MODEL", "text-embedding-3-small")

        try:
            embeddings = OpenAIEmbeddings(model=embed_model, api_key=api_key)
            vector_store = InMemoryVectorStore(embedding=embeddings)
            lc_docs = [
                Document(
                    page_content=self._chunk_text(chunk),
                    metadata={
                        "id": chunk["id"],
                        "title": chunk["title"],
                        "track": chunk["track"],
                    },
                )
                for chunk in self.docs
            ]
            vector_store.add_documents(lc_docs)
            self.vector_store = vector_store
            self.llm = ChatOpenAI(
                model=model_name,
                api_key=api_key,
                temperature=0.2,
                timeout=30,
                max_retries=2,
            )
            self.mode = "langchain-rag"
            self.last_error = None
        except Exception as exc:
            self.last_error = f"LangChain initialization failed: {exc}"
            self.mode = "langchain-unavailable"
            self.vector_store = None
            self.llm = None

    def _normalize_variant(self, variant: Optional[str]) -> str:
        if not variant:
            return DEFAULT_VARIANT
        key = variant.strip().lower()
        if key in VARIANT_CONFIGS:
            return key
        return DEFAULT_VARIANT

    def available_variants(self) -> Dict[str, Dict[str, Any]]:
        return VARIANT_CONFIGS

    def _record_failure(
        self,
        stage: str,
        error: Exception | str,
        variant: str = DEFAULT_VARIANT,
        question: str = "",
        extra: Optional[Dict[str, Any]] = None,
    ) -> None:
        entry = {
            "time_utc": datetime.now(timezone.utc).isoformat(),
            "stage": stage,
            "variant": variant,
            "question_preview": (question or "").strip()[:160],
            "error": str(error),
        }
        if extra:
            entry["extra"] = extra
        self.failure_log.append(entry)
        self.failure_log = self.failure_log[-50:]

    def get_failures(self, limit: int = 20) -> List[Dict[str, Any]]:
        safe_limit = max(1, min(limit, 50))
        return list(reversed(self.failure_log[-safe_limit:]))

    def status(self) -> Dict[str, Any]:
        return {
            "mode": self.mode,
            "langchain_available": HAS_LANGCHAIN,
            "provider": "openai",
            "openai_model": os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
            "openai_embed_model": os.getenv("OPENAI_EMBED_MODEL", "text-embedding-3-small"),
            "openai_api_configured": bool(os.getenv("OPENAI_API_KEY")),
            "langsmith_tracing": os.getenv("LANGSMITH_TRACING", "false"),
            "variants": self.available_variants(),
            "default_variant": DEFAULT_VARIANT,
            "failure_count": len(self.failure_log),
            "message": self.last_error or "AI tutor backend ready.",
        }

    def _langchain_unavailable_response(self) -> Dict[str, Any]:
        return {
            "answer": (
                "### LangChain tutor unavailable\n\n"
                "The AI tutor is configured to use LangChain + OpenAI, but that backend is not active right now.\n\n"
                "Check three things:\n"
                "- `OPENAI_API_KEY` is present in `/Users/trshwetha7/Desktop/AI tutor/.env`\n"
                "- Python dependencies from `/Users/trshwetha7/Desktop/AI tutor/requirements.txt` are installed\n"
                "- the server was restarted after updating `.env`\n\n"
                f"Backend status: {self.last_error or 'LangChain backend not initialized.'}"
            ),
            "sources": [],
            "mode": self.mode,
        }

    def _chunk_text(self, chunk: Dict[str, Any]) -> str:
        parts = [
            chunk["title"],
            chunk["track"],
            chunk["summary"],
            f"Analogy: {chunk['analogy']}",
            f"Real world: {chunk['real_world']}",
            f"Keywords: {', '.join(chunk['keywords'])}",
        ]
        return "\n".join(parts)

    def _tokenize(self, text: str) -> List[str]:
        return [token.lower() for token in WORD_RE.findall(text)]

    def _lesson_bonus(self, chunk_id: str, lesson_id: Optional[str]) -> float:
        if not lesson_id:
            return 0.0
        if chunk_id == lesson_id:
            return 8.0
        if chunk_id.split("-")[0] == lesson_id.split("-")[0]:
            return 2.0
        return 0.0

    def _lexical_retrieve(self, query: str, lesson_id: Optional[str], k: int = 4) -> List[RetrievedChunk]:
        q_tokens = self._tokenize(query)
        q_set = set(q_tokens)
        scored: List[RetrievedChunk] = []

        for chunk in self.docs:
            text = self._chunk_text(chunk)
            c_tokens = self._tokenize(text)
            overlap = sum(1 for token in c_tokens if token in q_set)
            title_bonus = 3.0 if any(token in self._tokenize(chunk["title"]) for token in q_set) else 0.0
            keyword_bonus = 2.0 * sum(1 for token in chunk["keywords"] if token.lower() in q_set)
            lesson_bonus = self._lesson_bonus(chunk["id"], lesson_id)
            score = overlap + title_bonus + keyword_bonus + lesson_bonus
            if score <= 0:
                continue
            scored.append(
                RetrievedChunk(
                    chunk_id=chunk["id"],
                    title=chunk["title"],
                    track=chunk["track"],
                    text=text,
                    score=score,
                )
            )

        scored.sort(key=lambda item: item.score, reverse=True)
        if scored:
            return scored[:k]

        # Guaranteed fallback: return lesson-specific chunk or first chunks.
        fallback_chunks = []
        for chunk in self.docs:
            if lesson_id and chunk["id"] == lesson_id:
                fallback_chunks.append(chunk)
        if not fallback_chunks:
            fallback_chunks = self.docs[:k]
        return [
            RetrievedChunk(
                chunk_id=chunk["id"],
                title=chunk["title"],
                track=chunk["track"],
                text=self._chunk_text(chunk),
                score=0.0,
            )
            for chunk in fallback_chunks[:k]
        ]

    def retrieve(self, query: str, lesson_id: Optional[str] = None, k: int = 4) -> List[RetrievedChunk]:
        if self.mode != "langchain-rag" or self.vector_store is None:
            return self._lexical_retrieve(query, lesson_id, k=k)

        try:
            search_query = query if not lesson_id else f"{query}\nCurrent lesson id: {lesson_id}"
            docs = self.vector_store.similarity_search(search_query, k=k)
            results = []
            for idx, doc in enumerate(docs):
                results.append(
                    RetrievedChunk(
                        chunk_id=doc.metadata.get("id", f"doc-{idx}"),
                        title=doc.metadata.get("title", "Untitled"),
                        track=doc.metadata.get("track", "Unknown"),
                        text=doc.page_content,
                        score=float(k - idx),
                    )
                )
            return results
        except Exception as exc:
            self.last_error = f"Vector retrieval failed: {exc}"
            self._record_failure(
                stage="retrieve",
                error=exc,
                question=query,
                extra={"lesson_id": lesson_id, "k": k},
            )
            return self._lexical_retrieve(query, lesson_id, k=k)

    def _local_tutor_response(self, question: str, lesson_id: Optional[str], learner_answer: Optional[str] = None) -> Dict[str, Any]:
        chunks = self.retrieve(question, lesson_id, k=3)
        best = chunks[0]
        lines = [
            "### Technical Explanation",
            best.text.splitlines()[2],
            "",
            "### Simple Explanation",
            best.text.splitlines()[3].replace("Analogy: ", ""),
            "",
            "### Real-World Example",
            best.text.splitlines()[4].replace("Real world: ", ""),
        ]
        if learner_answer:
            verdict = self._heuristic_verdict(learner_answer, best.text)
            lines.extend(["", "### Answer Review", verdict])
        lines.extend([
            "",
            "### Note",
            "This reply used the built-in lesson retrieval fallback. Add an OpenAI API key and LangChain OpenAI package for richer tutoring."
        ])
        return {
            "answer": "\n\n".join(lines),
            "sources": self._serialize_sources(chunks),
            "mode": self.mode,
        }

    def _serialize_sources(self, chunks: List[RetrievedChunk]) -> List[Dict[str, Any]]:
        return [
            {
                "id": chunk.chunk_id,
                "title": chunk.title,
                "track": chunk.track,
                "score": round(chunk.score, 2),
            }
            for chunk in chunks
        ]

    def _heuristic_verdict(self, learner_answer: str, reference_text: str) -> str:
        learner_tokens = set(self._tokenize(learner_answer))
        reference_tokens = set(self._tokenize(reference_text))
        overlap = len(learner_tokens & reference_tokens)
        if overlap >= 8:
            return "Mostly correct. Your answer overlaps with many key concepts from the retrieved lesson context."
        if overlap >= 4:
            return "Partly correct. You captured some of the idea, but the explanation is missing important details from the lesson context."
        return "Likely incorrect or too vague. The answer does not overlap much with the retrieved lesson context."

    def _extract_keyword_candidates(self, chunks: List[RetrievedChunk], limit: int = 12) -> List[str]:
        out: List[str] = []
        seen = set()
        for chunk in chunks:
            for line in chunk.text.splitlines():
                if not line.lower().startswith("keywords:"):
                    continue
                for raw in line.split(":", 1)[1].split(","):
                    token = raw.strip()
                    if not token:
                        continue
                    key = token.lower()
                    if key in seen:
                        continue
                    seen.add(key)
                    out.append(token)
                    if len(out) >= limit:
                        return out
        return out

    def _build_system_prompt(self, prompt_style: str) -> str:
        if prompt_style == "baseline":
            return (
                "You are StudyBuddyAI, an AI tutor. "
                "Answer the learner's question using the retrieved context. "
                "Be accurate and clear."
            )
        return (
            "You are StudyBuddyAI, a patient AI educator. "
            "Answer the learner's latest question directly instead of forcing a fixed lesson template. "
            "Use warm, human teaching language. Keep the answer focused on what was actually asked. "
            "Keep the answer compact by default: roughly 160 to 280 words unless the learner explicitly asks for a deep dive. "
            "If the learner asks for a simpler version, prioritize the simpler version first. "
            "Use short markdown headings only when they help clarity. Do not use filler headings if one clear explanation is enough. "
            "Use clean markdown only: short headings, normal paragraphs, and bullets when useful. Do not leave stray asterisks in the text. "
            "Avoid robotic phrasing, avoid repeating the entire lesson, and do not restate unrelated sections. "
            "For interview-readiness, include a short 'Core terms' bullet list with 5 to 7 exact technical terms from the provided keyword candidates whenever relevant. "
            "For comparison questions, explicitly name both sides (for example one-vs-rest and one-vs-one). "
            "When math notation helps, write it in inline LaTeX such as $x^2$, $\\theta$, or $P(D\\mid\\theta)$ so symbols render correctly. "
            "Stay grounded in the retrieved lesson context."
        )

    @traceable(name="studybuddy_invoke_llm", run_type="llm")
    def _invoke_llm(
        self,
        system_prompt: str,
        user_prompt: str,
        *,
        run_name: str,
        tags: Optional[List[str]] = None,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> str:
        if self.mode != "langchain-rag" or self.llm is None:
            raise RuntimeError("LLM is not available in current mode.")
        config = {
            "run_name": run_name,
            "tags": tags or [],
            "metadata": metadata or {},
        }
        response = self.llm.invoke([
            SystemMessage(content=system_prompt),
            HumanMessage(content=user_prompt),
        ], config=config)
        return response.content if isinstance(response.content, str) else json.dumps(response.content)

    @traceable(name="studybuddy_tutor_chain", run_type="chain")
    def tutor(
        self,
        question: str,
        lesson_id: Optional[str] = None,
        learner_level: str = "beginner",
        history: Optional[List[Dict[str, str]]] = None,
        variant: Optional[str] = None,
    ) -> Dict[str, Any]:
        if self.mode != "langchain-rag":
            return self._langchain_unavailable_response()

        selected_variant = self._normalize_variant(variant)
        variant_config = VARIANT_CONFIGS[selected_variant]
        retrieval_k = variant_config["retrieval_k"]
        prompt_style = variant_config["prompt_style"]

        chunks = self.retrieve(question, lesson_id, k=retrieval_k)
        context = "\n\n".join(chunk.text for chunk in chunks)
        cleaned_history = []
        for item in history or []:
            role = (item.get("role") or "").strip().lower()
            content = (item.get("content") or "").strip()
            if role in {"user", "assistant"} and content:
                cleaned_history.append({"role": role, "content": content})
        cleaned_history = cleaned_history[-6:]
        history_block = "\n".join(
            f"{entry['role'].upper()}: {entry['content']}" for entry in cleaned_history
        )
        system_prompt = self._build_system_prompt(prompt_style)
        keyword_candidates = self._extract_keyword_candidates(chunks, limit=12)
        keyword_block = ""
        if prompt_style == "improved" and keyword_candidates:
            keyword_block = (
                "Keyword candidates (use relevant terms verbatim when accurate): "
                + ", ".join(keyword_candidates)
                + "\n\n"
            )
        user_prompt = (
            f"Learner level: {learner_level}\n"
            f"Recent conversation:\n{history_block or 'No prior conversation.'}\n\n"
            f"{keyword_block}"
            f"Latest learner question: {question}\n\n"
            f"Retrieved lesson context:\n{context}"
        )
        try:
            answer = self._invoke_llm(
                system_prompt,
                user_prompt,
                run_name=f"studybuddy_tutor_{selected_variant}",
                tags=[
                    "studybuddy",
                    "tutor",
                    f"variant:{selected_variant}",
                    f"lesson:{lesson_id or 'none'}",
                ],
                metadata={
                    "variant": selected_variant,
                    "learner_level": learner_level,
                    "lesson_id": lesson_id or "",
                    "retrieval_k": retrieval_k,
                },
            )
            return {
                "answer": answer,
                "sources": self._serialize_sources(chunks),
                "mode": self.mode,
                "variant": selected_variant,
            }
        except Exception as exc:
            self.last_error = f"Tutor generation failed: {exc}"
            self._record_failure(
                stage="tutor",
                error=exc,
                variant=selected_variant,
                question=question,
                extra={"lesson_id": lesson_id, "learner_level": learner_level},
            )
            return {
                "answer": (
                    "### Tutor request failed\n\n"
                    "The LangChain + OpenAI tutor did not complete this request.\n\n"
                    f"Backend error: {self.last_error}"
                ),
                "sources": self._serialize_sources(chunks),
                "mode": self.mode,
                "variant": selected_variant,
            }

    @traceable(name="studybuddy_review_chain", run_type="chain")
    def review_answer(
        self,
        question: str,
        learner_answer: str,
        reference_answer: str,
        lesson_id: Optional[str] = None,
        variant: Optional[str] = None,
    ) -> Dict[str, Any]:
        if self.mode != "langchain-rag":
            return self._langchain_unavailable_response()

        selected_variant = self._normalize_variant(variant)
        variant_config = VARIANT_CONFIGS[selected_variant]
        retrieval_k = variant_config["retrieval_k"]
        chunks = self.retrieve(f"{question} {reference_answer}", lesson_id, k=retrieval_k)
        context = "\n\n".join(chunk.text for chunk in chunks)
        system_prompt = (
            "You are an AI tutor reviewing a learner's answer. "
            "Return clean markdown with exactly these headings: "
            "### Verdict, ### Why It Is Right or Wrong, ### Correct Explanation, ### How To Improve. "
            "Be educational, not harsh. Use simple human language first, then one short technical clarification."
        )
        user_prompt = (
            f"Question: {question}\n"
            f"Learner answer: {learner_answer}\n"
            f"Reference answer: {reference_answer}\n\n"
            f"Retrieved lesson context:\n{context}"
        )
        try:
            answer = self._invoke_llm(
                system_prompt,
                user_prompt,
                run_name=f"studybuddy_review_{selected_variant}",
                tags=[
                    "studybuddy",
                    "review",
                    f"variant:{selected_variant}",
                    f"lesson:{lesson_id or 'none'}",
                ],
                metadata={
                    "variant": selected_variant,
                    "lesson_id": lesson_id or "",
                    "retrieval_k": retrieval_k,
                },
            )
            return {
                "answer": answer,
                "sources": self._serialize_sources(chunks),
                "mode": self.mode,
                "variant": selected_variant,
            }
        except Exception as exc:
            self.last_error = f"Answer review failed: {exc}"
            self._record_failure(
                stage="review_answer",
                error=exc,
                variant=selected_variant,
                question=question,
                extra={"lesson_id": lesson_id},
            )
            return {
                "answer": (
                    "### Review request failed\n\n"
                    "The LangChain + OpenAI tutor could not review this answer right now.\n\n"
                    f"Backend error: {self.last_error}"
                ),
                "sources": self._serialize_sources(chunks),
                "mode": self.mode,
                "variant": selected_variant,
            }


ENGINE = TutorEngine()

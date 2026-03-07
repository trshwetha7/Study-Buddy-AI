# LangSmith Local Test Playbook

This project now includes LangSmith-ready tracing and an eval workflow you can run locally before pushing.

## 1) Configure environment

Add these to `/Users/trshwetha7/Desktop/AI tutor/.env`:

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini
OPENAI_EMBED_MODEL=text-embedding-3-small

LANGSMITH_TRACING=true
LANGSMITH_API_KEY=your_langsmith_api_key_here
LANGSMITH_PROJECT=studybuddyai
```

Install dependencies:

```bash
cd "/Users/trshwetha7/Desktop/AI tutor"
pip3 install -r requirements.txt
```

## 2) Run app and generate traceable tutor runs

Start server:

```bash
cd "/Users/trshwetha7/Desktop/AI tutor"
python3 server.py
```

Ask a few tutor questions in the UI.

Each tutor/review run is tagged with metadata such as:
- `variant:baseline` or `variant:improved`
- lesson id
- retrieval depth

## 3) Inspect failures locally

Use this endpoint:

```bash
curl -s "http://127.0.0.1:8000/api/langsmith/failures?limit=20"
```

This returns recent backend failures (stage, error, variant, time).

## 4) Run eval comparison (baseline vs improved)

```bash
cd "/Users/trshwetha7/Desktop/AI tutor"
python3 scripts/run_langsmith_eval.py
```

Eval cases live in:
- `/Users/trshwetha7/Desktop/AI tutor/evals/langsmith_eval_cases.json`

Outputs:
- `/Users/trshwetha7/Desktop/AI tutor/reports/langsmith_eval_report.json`
- `/Users/trshwetha7/Desktop/AI tutor/reports/langsmith_eval_summary.md`

## 5) What this demonstrates for LangChain role screening

- tracing of tutor and review runs in LangSmith
- inspection of failures with local endpoint + run logs
- prompt/chain comparison (`baseline` vs `improved`)
- multiple eval examples
- concrete improvement notes generated from eval deltas

"""Backend tutor engine with optional LangChain + OpenAI RAG and local fallback."""

from __future__ import annotations

import json
import os
import re
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


WORD_RE = re.compile(r"[a-zA-Z0-9_+-]+")


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

    def status(self) -> Dict[str, Any]:
        return {
            "mode": self.mode,
            "langchain_available": HAS_LANGCHAIN,
            "provider": "openai",
            "openai_model": os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
            "openai_embed_model": os.getenv("OPENAI_EMBED_MODEL", "text-embedding-3-small"),
            "openai_api_configured": bool(os.getenv("OPENAI_API_KEY")),
            "langsmith_tracing": os.getenv("LANGSMITH_TRACING", "false"),
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

    def _invoke_llm(self, system_prompt: str, user_prompt: str) -> str:
        if self.mode != "langchain-rag" or self.llm is None:
            raise RuntimeError("LLM is not available in current mode.")
        response = self.llm.invoke([
            SystemMessage(content=system_prompt),
            HumanMessage(content=user_prompt),
        ])
        return response.content if isinstance(response.content, str) else json.dumps(response.content)

    def tutor(
        self,
        question: str,
        lesson_id: Optional[str] = None,
        learner_level: str = "beginner",
        history: Optional[List[Dict[str, str]]] = None,
    ) -> Dict[str, Any]:
        if self.mode != "langchain-rag":
            return self._langchain_unavailable_response()

        chunks = self.retrieve(question, lesson_id, k=4)
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
        system_prompt = (
            "You are StudyBuddyAI, a patient AI educator. "
            "Answer the learner's latest question directly instead of forcing a fixed lesson template. "
            "Use warm, human teaching language. Keep the answer focused on what was actually asked. "
            "Keep the answer compact by default: roughly 120 to 220 words unless the learner explicitly asks for a deep dive. "
            "If the learner asks for a simpler version, prioritize the simpler version first. "
            "Use short markdown headings only when they help clarity. Do not use filler headings if one clear explanation is enough. "
            "Use clean markdown only: short headings, normal paragraphs, and bullets when useful. Do not leave stray asterisks in the text. "
            "Avoid robotic phrasing, avoid repeating the entire lesson, and do not restate unrelated sections. "
            "When math notation helps, write it in inline LaTeX such as $x^2$, $\\theta$, or $P(D\\mid\\theta)$ so symbols render correctly. "
            "Stay grounded in the retrieved lesson context."
        )
        user_prompt = (
            f"Learner level: {learner_level}\n"
            f"Recent conversation:\n{history_block or 'No prior conversation.'}\n\n"
            f"Latest learner question: {question}\n\n"
            f"Retrieved lesson context:\n{context}"
        )
        try:
            answer = self._invoke_llm(system_prompt, user_prompt)
            return {
                "answer": answer,
                "sources": self._serialize_sources(chunks),
                "mode": self.mode,
            }
        except Exception as exc:
            self.last_error = f"Tutor generation failed: {exc}"
            return {
                "answer": (
                    "### Tutor request failed\n\n"
                    "The LangChain + OpenAI tutor did not complete this request.\n\n"
                    f"Backend error: {self.last_error}"
                ),
                "sources": self._serialize_sources(chunks),
                "mode": self.mode,
            }

    def review_answer(
        self,
        question: str,
        learner_answer: str,
        reference_answer: str,
        lesson_id: Optional[str] = None,
    ) -> Dict[str, Any]:
        if self.mode != "langchain-rag":
            return self._langchain_unavailable_response()

        chunks = self.retrieve(f"{question} {reference_answer}", lesson_id, k=4)
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
            answer = self._invoke_llm(system_prompt, user_prompt)
            return {
                "answer": answer,
                "sources": self._serialize_sources(chunks),
                "mode": self.mode,
            }
        except Exception as exc:
            self.last_error = f"Answer review failed: {exc}"
            return {
                "answer": (
                    "### Review request failed\n\n"
                    "The LangChain + OpenAI tutor could not review this answer right now.\n\n"
                    f"Backend error: {self.last_error}"
                ),
                "sources": self._serialize_sources(chunks),
                "mode": self.mode,
            }


ENGINE = TutorEngine()

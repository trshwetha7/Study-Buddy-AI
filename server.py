"""Serve the StudyBuddyAI frontend and backend tutor APIs."""

from __future__ import annotations

import json
import mimetypes
import os
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent


def load_env_file() -> None:
    env_path = ROOT / ".env"
    if not env_path.exists():
        return
    for raw_line in env_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip())


load_env_file()

from backend.tutor_backend import ENGINE


class AppHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        parsed = urlparse(path)
        relative = parsed.path.lstrip("/")
        if not relative:
            relative = "index.html"
        return str((ROOT / relative).resolve())

    def _send_json(self, payload: dict, status: int = HTTPStatus.OK) -> None:
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/health":
            self._send_json(ENGINE.status())
            return
        if parsed.path == "/" and not (ROOT / "index.html").exists():
            self._send_json({"error": "Frontend not found."}, status=HTTPStatus.NOT_FOUND)
            return
        super().do_GET()

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        content_length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(content_length)
        try:
            payload = json.loads(raw.decode("utf-8") or "{}")
        except json.JSONDecodeError:
            self._send_json({"error": "Invalid JSON body."}, status=HTTPStatus.BAD_REQUEST)
            return

        if parsed.path == "/api/tutor":
            question = (payload.get("question") or "").strip()
            if not question:
                self._send_json({"error": "question is required"}, status=HTTPStatus.BAD_REQUEST)
                return
            response = ENGINE.tutor(
                question=question,
                lesson_id=payload.get("lessonId"),
                learner_level=payload.get("learnerLevel") or "beginner",
                history=payload.get("history") or [],
            )
            self._send_json(response)
            return

        if parsed.path == "/api/review-answer":
            question = (payload.get("question") or "").strip()
            learner_answer = (payload.get("learnerAnswer") or "").strip()
            reference_answer = (payload.get("referenceAnswer") or "").strip()
            if not question or not learner_answer or not reference_answer:
                self._send_json(
                    {"error": "question, learnerAnswer, and referenceAnswer are required"},
                    status=HTTPStatus.BAD_REQUEST,
                )
                return
            response = ENGINE.review_answer(
                question=question,
                learner_answer=learner_answer,
                reference_answer=reference_answer,
                lesson_id=payload.get("lessonId"),
            )
            self._send_json(response)
            return

        self._send_json({"error": "Unknown API route."}, status=HTTPStatus.NOT_FOUND)

    def end_headers(self) -> None:
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def guess_type(self, path: str) -> str:
        if path.endswith(".js"):
            return "application/javascript; charset=utf-8"
        return mimetypes.guess_type(path)[0] or "application/octet-stream"


def run() -> None:
    port = 8000
    server = ThreadingHTTPServer(("127.0.0.1", port), AppHandler)
    print(f"StudyBuddyAI running at http://127.0.0.1:{port}")
    server.serve_forever()


if __name__ == "__main__":
    run()

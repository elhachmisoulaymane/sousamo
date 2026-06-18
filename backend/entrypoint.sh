#!/bin/sh
set -e

echo "→ Esecuzione migrazioni Alembic…"
alembic upgrade head

echo "→ Seed iniziale (idempotente)…"
python seed.py || echo "seed skipped"

echo "→ Avvio Uvicorn…"
exec uvicorn app.main:app --host 0.0.0.0 --port "${PORT:-8000}"

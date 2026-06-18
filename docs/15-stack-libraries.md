# 15 · Stack & librerie

## Frontend
- **Next.js 14** (App Router, output standalone) + **React 18** + **TypeScript 5**.
- **Tailwind CSS 3.4** + PostCSS + Autoprefixer.
- **Zustand 5** (stato carrello/UI, persist).
- **lucide-react** (icone), **clsx** + **tailwind-merge** (classi).
- **next/font/google** (Cormorant Garamond, Inter).

## Backend
- **Python 3.12**, **FastAPI 0.115**, **Uvicorn**.
- **Pydantic v2** + **pydantic-settings**.
- **SQLAlchemy 2 async** + **asyncpg** + **Alembic**.
- **httpx** (HTTP client), **tenacity** (retry CAPI), **structlog** (log).
- **phonenumbers** (normalizzazione telefono), **email-validator**.

## Perché queste scelte
- Next 14 (non 15) per stabilità ecosistema.
- Zustand: store leggero, semplice, con persist per il carrello.
- SQLAlchemy async + asyncpg: performance e migrazioni versionate con Alembic.
- httpx+tenacity: chiamate CAPI resilienti senza bloccare la risposta (BackgroundTasks).

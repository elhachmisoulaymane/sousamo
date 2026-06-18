# 16 · Regole di coding

## Principi
- Codice leggibile, tipizzato, componenti piccoli e a responsabilità singola.
- Niente commenti ovvi; commenta solo intenti/vincoli non evidenti.
- Mobile-first, accessibilità di base (label, aria-label, contrasto).

## Frontend (React/Next.js)
- Server Components di default; `"use client"` solo dove serve (stato, eventi).
- Dati mock in `lib/data/`, tipi in `lib/types.ts`, util in `lib/utils/`.
- Stato globale in `lib/store/` (Zustand). Stile via Tailwind + helper `cn`.
- Naming: componenti PascalCase, file componenti `Nome.tsx`, hook `useNome`.
- Immagini sempre con `SmartImage` (fallback automatico).

## Backend (FastAPI)
- Struttura: `app/api/*` (router per dominio), `app/services/*` (logica esterna),
  `app/models.py`, `app/schemas.py`, `app/config.py`, `app/db.py`.
- Operazioni esterne (CAPI, Sheet) in **BackgroundTasks**, mai bloccare la risposta.
- Config solo via env (`pydantic-settings`). Nessun segreto nel codice.
- Migrazioni con Alembic; mai `create_all` in produzione.

## Git
- Branch `main`. Commit chiari. `.env` mai committato (solo `.env.example`).

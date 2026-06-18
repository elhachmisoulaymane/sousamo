# Néllia · sousamo

E-commerce DTC brandizzato per l'Italia, pagamento alla consegna (COD).
Frontend Next.js 14 + Backend FastAPI + PostgreSQL, deploy Docker/EasyPanel.

## Struttura
```
sousamo/
├── frontend/   # Next.js 14 (sito)
├── backend/    # FastAPI (API, CAPI, webhook Sheet)
├── sheets/     # Google Apps Script + template ordini
└── docs/       # Documentazione completa (00 → 20)
```

## Avvio rapido (locale)
### Frontend
```bash
cd frontend
npm install        # se node_modules manca
npm run dev        # http://localhost:3000
```
### Backend (richiede Python 3.12 + Postgres)
```bash
cd backend
python -m venv .venv && .venv\Scripts\activate   # Windows
pip install -r requirements.txt
copy .env.example .env   # imposta DATABASE_URL
alembic upgrade head && python seed.py
uvicorn app.main:app --reload --port 8000
```

## Documentazione
Parti da `docs/00-START-HERE.md`. Deploy: `docs/19-deploy-easypanel.md`.
Checklist di lancio: `docs/20-checklist-launch.md`.

## Note
- Il frontend funziona anche **senza backend** (checkout COD simulato → `/grazie`).
  Imposta `NEXT_PUBLIC_API_BASE_URL` per collegarlo al backend reale.
- Inserisci le foto in `frontend/public/images/` (vedi file istruzioni lì dentro).

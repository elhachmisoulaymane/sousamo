# 19 · Deploy su EasyPanel

## Prerequisiti
- Repo su GitHub (frontend + backend).
- PostgreSQL già attivo su EasyPanel, DB `sousamo`.
- Dominio `www.sousamo.com`.

## 1. Push su GitHub
```bash
cd sousamo
git init && git add . && git commit -m "Néllia store"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

## 2. Backend (EasyPanel → App)
- Source: repo GitHub, **build dir** `backend/`, Dockerfile.
- Env: copia da `backend/.env.example` (DATABASE_URL con link interno, token CAPI, webhook…).
- Porta: 8000. Le migrazioni Alembic + seed girano automaticamente (`entrypoint.sh`).
- Dominio API: es. `api.sousamo.com`.

## 3. Frontend (EasyPanel → App)
- Source: repo GitHub, **build dir** `frontend/`, Dockerfile (Next standalone).
- Env: da `frontend/.env.example` (`NEXT_PUBLIC_API_BASE_URL=https://api.sousamo.com`, pixel id…).
- Porta: 3000. Dominio: `www.sousamo.com`.

## 4. Google Sheet
- Distribuisci `sheets/Code.gs`, metti l'URL in `SHEETS_WEBHOOK_URL` (backend).

## 5. Verifica
- `GET https://api.sousamo.com/api/health` → ok.
- Home frontend, ordine di test → riga su Sheet + Purchase nei manager pixel.

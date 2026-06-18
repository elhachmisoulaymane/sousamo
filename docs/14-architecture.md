# 14 · Architettura

```
[Browser] --(HTTPS)--> [Frontend Next.js]  -- /api/* --> [Backend FastAPI] -- async --> [PostgreSQL "sousamo"]
     |                          |                               |
   pixel web              SmartImage / SSR              CAPI -> Meta/TikTok/Snap
   (deferred)                                           webhook (HMAC) -> Google Sheet
```

## Servizi (Docker / EasyPanel)
- **frontend**: Next.js standalone, porta 3000.
- **backend**: FastAPI/Uvicorn, porta 8000, migrazioni Alembic all'avvio.
- **postgres**: già installato su EasyPanel, DB `sousamo`.

## Repo layout
```
sousamo/
├── frontend/        # Next.js 14
├── backend/         # FastAPI
│   ├── app/ (config, db, models, schemas, main, api/, services/)
│   ├── alembic/ (env.py, versions/0001_init.py)
│   ├── seed.py, entrypoint.sh, Dockerfile, requirements.txt
├── sheets/          # Code.gs, CSV, README
└── docs/            # questa documentazione
```

## Schema DB (tabelle)
- `orders` — ordini COD (+ attribution UTM/fbp/fbc, status, sheet_synced).
- `products` — catalogo (slug, packs, rating).
- `reviews` — recensioni (approved per moderazione).
- `pixel_events` — log eventi per dedup/debug CAPI.
- `contact_messages` — messaggi dal form contatti.

## Endpoint API (prefix `/api`)
- `POST /orders` — crea ordine, scatena Purchase CAPI + push Sheet.
- `POST /track` — registra evento + dispatch CAPI.
- `GET /products`, `GET /products/{slug}`.
- `GET /reviews/{slug}`.
- `POST /contact`.
- `GET /health`.

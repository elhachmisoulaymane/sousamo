# BUILD PROMPT — per AI coder

Sei l'AI coder che mantiene ed estende **Néllia / sousamo**, un e-commerce DTC
brandizzato per l'Italia con pagamento alla consegna (COD).

## Contesto
Il progetto è **già implementato** (frontend + backend funzionanti). Usa questo
prompt per estenderlo o rifinirlo. Leggi prima la documentazione in `docs/`:

- Strategia: `docs/00-START-HERE.md`, `01-niche-research.md`, `03-positioning.md`, `04-icp.md`.
- Copy/emozioni: `05-language-italian.md`, `06-emotions-pain-desire.md`.
- Prova/scienza: `07-authority-proof.md`, `08-science-ingredients.md`, `09-social-proof.md`.
- Conversione: `10-cro-conversion.md`, `11-confirmation-delivery-aov.md`.
- Design: `12-design-system.md`, `13-pages.md`.
- Tecnico: `14-architecture.md`, `15-stack-libraries.md`, `16-coding-rules.md`,
  `17-pixels-tracking.md`, `18-sheets-webhook.md`, `19-deploy-easypanel.md`, `20-checklist-launch.md`.

## Regole
- Rispetta `docs/16-coding-rules.md` e il design system (`docs/12-design-system.md`).
- Nessun claim vietato (`docs/08-science-ingredients.md`).
- Operazioni esterne (CAPI, Sheet) sempre in BackgroundTasks.
- Immagini sempre tramite `SmartImage`.
- Segreti solo via env; mai committare `.env`.

## Stack
Next.js 14 + React 18 + TS + Tailwind + Zustand (frontend);
FastAPI + SQLAlchemy async + Alembic + PostgreSQL (backend);
Docker su EasyPanel; pixel Meta/TikTok/Snap + CAPI con dedup.

## Definizione di "fatto"
- `npm run build` (frontend) e `alembic upgrade head` (backend) senza errori.
- Checklist `docs/20-checklist-launch.md` verificata per la feature toccata.

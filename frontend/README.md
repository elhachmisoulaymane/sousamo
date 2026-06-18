# Néllia — Frontend (Next.js 14)

## Sviluppo locale
1. Installa **Node.js LTS** (https://nodejs.org) se `npm` non è disponibile.
2. Installa le dipendenze (solo la prima volta o se manca `node_modules`):
   ```bash
   npm install
   ```
3. Avvia il dev server:
   ```bash
   npm run dev
   ```
   Apri http://localhost:3000

## Script
- `npm run dev` — sviluppo
- `npm run build` — build produzione (standalone)
- `npm run start` — avvia la build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript

## Env
Copia `.env.example` in `.env.local`. In demo lascia `NEXT_PUBLIC_API_BASE_URL`
vuoto: il checkout COD è simulato e porta a `/grazie`. Per collegare il backend
reale imposta l'URL dell'API.

## Immagini
Inserisci le foto in `public/images/` (vedi `public/images/LEGGIMI-FOTO.txt`).
Finché mancano, viene mostrato un placeholder (nessuna immagine rotta).

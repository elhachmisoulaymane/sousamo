# 00 · START HERE — Néllia / sousamo

> Negozio DTC brandizzato, mercato Italia, pagamento alla consegna (COD).
> Dominio: **www.sousamo.com** · Brand: **Néllia** · DB: **sousamo**

## Cos'è questo progetto
Un e-commerce premium che vende prodotti (in dropshipping) a prezzo alto,
posizionandosi come **numero 1 in Italia** nella cura dei capelli a casa.
La percezione di marca, l'autorità e la prova sociale giustificano il prezzo.

## Niche
**Il rituale italiano per capelli sani e luminosi a casa.**

## I 3 prodotti
1. **Néllia Pro Styler 4 in 1** — spazzola asciugacapelli multifunzione (prodotto faro).
2. **Néllia Siero Termo-Attivo** — protezione termica + nutrimento.
3. **Néllia Rituale Polvere** — integratore in polvere per capelli forti.

## Prezzi (per ogni prodotto)
| Pack | Prezzo | €/pezzo |
|------|--------|---------|
| 1 pezzo | 105 € | 105 € |
| 2 pezzi | 179 € | 89,5 € |
| 3 pezzi | 249 € | 83 € |

- **Upsell** post-checkout: 1 unità extra a **49 €** (unico sconto del sito).
- **Cross-sell**: nel cart drawer si propongono gli altri prodotti del rituale.

## Stack
- **Frontend**: Next.js 14 (App Router) + React 18 + TypeScript + Tailwind + Zustand.
- **Backend**: Python FastAPI + SQLAlchemy async + Alembic + PostgreSQL.
- **Tracking**: Meta/TikTok/Snapchat pixel (deferred) + CAPI server-side (dedup).
- **Ordini**: salvati su Postgres + inviati a Google Sheet via webhook firmato HMAC.
- **Deploy**: Docker su EasyPanel, push su GitHub.

## Indice documentazione
| File | Contenuto |
|------|-----------|
| 01-niche-research | Ricerca nicchia, oversold, perché funziona |
| 02-products | Schede prodotto, prezzi, bundle, schema dati |
| 03-positioning | Brand, promessa, USP, tono, logo |
| 04-icp | Cliente ideale, persone, journey |
| 05-language-italian | Copy in italiano, microcopy |
| 06-emotions-pain-desire | Leve emotive, pain, frasi pronte |
| 07-authority-proof | Autorità professionale, scientifica, sociale |
| 08-science-ingredients | Conformità legale claim cosmetici/integratori |
| 09-social-proof | Recensioni, schema, moderazione |
| 10-cro-conversion | Leve CRO, layout PDP, checkout, upsell |
| 11-confirmation-delivery-aov | KPI COD, conferma, consegna, AOV |
| 12-design-system | Colori, tipografia, componenti, animazioni |
| 13-pages | Contenuto e layout di ogni pagina |
| 14-architecture | Architettura, servizi, schema DB, API |
| 15-stack-libraries | Librerie frontend/backend |
| 16-coding-rules | Regole di coding e convenzioni |
| 17-pixels-tracking | Pixel + CAPI, dedup, hashing PII |
| 18-sheets-webhook | Google Sheet, struttura, Apps Script |
| 19-deploy-easypanel | Deploy EasyPanel passo-passo |
| 20-checklist-launch | Checklist pre-lancio |

## Stato attuale
- ✅ Frontend completo e funzionante (demo con checkout COD simulato).
- ✅ Backend FastAPI completo (API, CAPI, webhook Sheet, migrazioni).
- ⏳ Inserire foto reali in `frontend/public/images/`.
- ⏳ Configurare env (pixel, token CAPI, DB, webhook) su EasyPanel.

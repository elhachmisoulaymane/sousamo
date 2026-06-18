# 09 · Prova sociale

## Tipi usati
- **Recensioni verificate** con nome, città, stelle, "acquisto verificato".
- **Aggregati**: media 4.6-4.8/5, conteggio recensioni, distribuzione stelle.
- **Toast in tempo reale**: "Giulia da Milano ha ordinato… 3 minuti fa".
- **Numeri di marca**: "N.1 in Italia", "12.000+ clienti".

## Schema recensione
Vedi `Review` in `frontend/lib/types.ts` e tabella `reviews` nel backend:
id, productSlug, author, city, rating, date, title, body, verified, approved.

## Generazione & moderazione
- Recensioni iniziali realistiche e coerenti col prodotto.
- Backend: campo `approved` per moderare prima della pubblicazione.
- Mantieni un mix credibile (qualche 4 stelle, linguaggio naturale).

## Implementazione
- Componente: `frontend/components/product/ReviewsList.tsx`.
- API: `GET /api/reviews/{slug}` (solo `approved`).

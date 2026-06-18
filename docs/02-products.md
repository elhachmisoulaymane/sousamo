# 02 · Prodotti

Fonte dati frontend: `frontend/lib/data/products.ts`. Seed backend: `backend/seed.py`.

## 1. Néllia Pro Styler 4 in 1 (`nellia-pro-styler`)
- **Tagline**: la spazzola asciugacapelli che sostituisce phon, piastra e arricciacapelli.
- **Benefici**: 4 funzioni, ioni anti-crespo, calore controllato, risparmio di tempo.
- **Specifiche**: 1200 W, 4 accessori, ioni negativi, 220-240V, garanzia 24 mesi.
- **Prodotto faro** (immagini fornite dal cliente).

## 2. Néllia Siero Termo-Attivo (`nellia-siero-termo`)
- **Tagline**: scudo termico che protegge e nutre prima dello styling.
- **Benefici**: protezione fino 230°C, oli botanici (argan, cheratina, vit. E), luce immediata, non unge.
- **INCI** (esempio conforme): Aqua, Argania Spinosa Kernel Oil, Hydrolyzed Keratin, Tocopherol, Panthenol, Parfum.

## 3. Néllia Rituale Polvere (`nellia-rituale-polvere`)
- **Tagline**: integratore in polvere per capelli forti dall'interno.
- **Benefici**: biotina/zinco/collagene, benessere capelli e unghie, si scioglie facile, 30 dosi.
- **Nota legale**: integratore notificato al Ministero della Salute, non sostituisce dieta varia.

## Prezzi (uguali per i 3 prodotti)
| Pack | Prezzo | €/pezzo | Badge |
|------|--------|---------|-------|
| 1 | 105 € | 105 € | — |
| 2 | 179 € | 89,5 € | Più scelto (highlight) |
| 3 | 249 € | 83 € | Miglior prezzo |

## AOV — logica
- **Default selezionato**: pack 2 (ancoraggio sul "più scelto").
- **Cross-sell** (cart drawer): gli altri 2 prodotti del rituale a 105 €.
- **Upsell** (post-validazione checkout, timer 15s): +1 unità a **49 €** del prodotto principale.

## Schema dati prodotto (TypeScript)
Vedi interfaccia `Product` in `frontend/lib/types.ts`:
slug, name, tagline, shortDescription, description, rating, reviewsCount, images[],
heroImage, packs[], benefits[], features[], specs[], faq[], ingredients?, crossSellSlugs[], upsellPrice.

# 13 · Pagine

Tutte in `frontend/app/`. Layout globale: `app/layout.tsx` (TrustStrip, Header,
Footer, CartDrawer, CheckoutPopup, CookieBanner, NotificationToast).

| Rotta | File | Contenuto |
|-------|------|-----------|
| `/` | `app/page.tsx` | Hero, pilastri fiducia, collezione, metodo (3 step), recensioni, CTA finale |
| `/collezione` | `app/collezione/page.tsx` | Griglia 3 prodotti |
| `/prodotti/[slug]` | `app/prodotti/[slug]/page.tsx` | PDP completa (vedi doc 10) |
| `/chi-siamo` | `app/chi-siamo/page.tsx` | Storia, missione, valori |
| `/contatti` | `app/contatti/page.tsx` | Form + contatti |
| `/grazie` | `app/grazie/page.tsx` + `GrazieClient.tsx` | Conferma ordine, invio a backend/Sheet |
| `/policy/*` | `app/policy/*` | termini, privacy, cookie, resi, spedizioni, avvertenze |
| `/api/health` | `app/api/health/route.ts` | Health check |
| 404 | `app/not-found.tsx` | Pagina non trovata |

## Note
- Header: logo (N nel cerchio + "Néllia" / "sousamo"), menu, carrello con badge.
- Footer: tutti i menu, social, info dominio e COD.
- Immagini: hero in home, 3-4 immagini per PDP/collezione (placeholder finché non caricate).

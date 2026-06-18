# 17 · Pixel & tracking (CAPI)

Frontend: `lib/pixels/loader.ts` (caricamento) + `lib/pixels/events.ts` (eventi).
Backend: `app/services/capi.py` + `app/api/track.py`.

## Piattaforme
- **Meta (Facebook)**: Pixel web + Conversions API (Graph v21).
- **TikTok**: Pixel web + Events API v1.3.
- **Snapchat**: Pixel web + Conversions API v3.

## Deferred loading
I pixel si caricano **solo dopo consenso cookie** e con **delay ~1500ms**
(`CookieBanner` → `loadPixels()`), per non penalizzare le performance/LCP.

## Deduplicazione
- Ogni evento genera un **`event_id`** univoco lato browser.
- Lo **stesso `event_id`** viene passato sia al pixel web sia alla CAPI server-side
  → le piattaforme deduplicano (Meta: `eventID` web == `event_id` CAPI).
- Purchase server-side usa `order_{order_ref}` come id deterministico.

## Hashing PII
- **Web pixel**: NESSUN hashing manuale (lo gestisce la libreria/piattaforma).
- **CAPI server**: **SHA-256** su email/telefono normalizzati.
- **Telefono**: E.164 **senza '+'** (es. `393331234567`) prima dell'hash
  (richiesto da Meta; TikTok/Snap accettano l'hash dell'E.164). Vedi `services/hashing.py`.

## Mappa eventi
| Azione | Evento |
|--------|--------|
| Vista PDP | ViewContent |
| Add to cart | AddToCart |
| Apertura checkout | InitiateCheckout |
| Ordine confermato | Purchase |

## Env necessari
Frontend: `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID`, `NEXT_PUBLIC_SNAP_PIXEL_ID`, `NEXT_PUBLIC_API_BASE_URL`.
Backend: `META_PIXEL_ID/META_CAPI_TOKEN`, `TIKTOK_PIXEL_ID/TIKTOK_ACCESS_TOKEN`, `SNAP_PIXEL_ID/SNAP_CAPI_TOKEN`.

# 20 · Checklist di lancio

## Contenuti
- [ ] Foto reali in `frontend/public/images/` (pro-styler-1..4, siero-1..3, polvere-1..3, about).
- [ ] Testi prodotto rivisti (claim conformi, doc 08).
- [ ] Recensioni iniziali realistiche e moderate.

## Tecnico
- [ ] Env frontend e backend impostate su EasyPanel.
- [ ] `DATABASE_URL` con link interno Postgres, DB `sousamo`.
- [ ] Migrazioni + seed eseguiti (log backend).
- [ ] `GET /api/health` ok su frontend e backend.

## Tracking
- [ ] Pixel ID Meta/TikTok/Snap inseriti.
- [ ] Token CAPI inseriti; evento di test verificato in ogni manager.
- [ ] Dedup confermata (web + CAPI stesso event_id).
- [ ] Cookie banner attivo (consenso → pixel deferiti).

## Ordini
- [ ] Apps Script distribuito, `SHEETS_WEBHOOK_URL` impostato.
- [ ] HMAC secret coincidente backend/Apps Script.
- [ ] Ordine di test → riga su Sheet + record su Postgres.

## Legale
- [ ] Policy compilate (termini, privacy, cookie, resi, spedizioni, avvertenze).
- [ ] Dati azienda/contatti corretti nel footer.

## Performance/SEO
- [ ] Immagini ottimizzate (AVIF/WebP via next/image).
- [ ] Metadata/title per pagina.
- [ ] Test mobile completo (checkout COD + upsell).

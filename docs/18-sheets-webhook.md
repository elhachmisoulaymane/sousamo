# 18 · Google Sheet & webhook

Vedi cartella `sheets/` (`Code.gs`, `orders-template.csv`, `README.md`).

## Flusso
1. Cliente conferma ordine → frontend `POST /api/orders`.
2. Backend salva su Postgres e in **BackgroundTask** chiama `push_order_to_sheet`.
3. Il backend invia JSON firmato (HMAC-SHA256, header `X-Signature`) alla web app Apps Script.
4. `Code.gs` verifica la firma e fa `appendRow` nel foglio `Ordini`.

## Colonne (15)
`order_ref, created_at, full_name, phone, address, city, postal_code, items, total, currency, status, notes, utm_source, utm_medium, utm_campaign`

## Sicurezza
- `SHEETS_HMAC_SECRET` (backend) == `SHARED_SECRET` (Apps Script).
- Senza firma valida la richiesta viene rifiutata.

## Setup
Vedi `sheets/README.md` per la distribuzione della web app e l'URL da mettere in
`SHEETS_WEBHOOK_URL`.

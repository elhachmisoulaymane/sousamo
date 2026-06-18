# Google Sheet — Ricezione ordini

Questo modulo riceve gli ordini dal backend e li registra in un Google Sheet.

## File
- `Code.gs` — script Apps Script da incollare nel tuo Google Sheet.
- `orders-template.csv` — intestazioni colonne + riga di esempio.

## Setup passo-passo
1. Crea un nuovo Google Sheet (es. "Néllia Ordini").
2. (Opzionale) Importa `orders-template.csv` per avere le colonne pronte, oppure lascia che lo script crei il foglio `Ordini`.
3. Vai su **Estensioni → Apps Script**, cancella il contenuto e incolla `Code.gs`.
4. In `Code.gs` imposta `SHARED_SECRET` con lo **stesso valore** di `SHEETS_HMAC_SECRET` del backend.
5. **Distribuisci → Nuova distribuzione**:
   - Tipo: **App web**
   - Esegui come: **Te stesso**
   - Chi ha accesso: **Chiunque**
6. Copia l'**URL della web app** e impostalo come `SHEETS_WEBHOOK_URL` nelle env del backend (EasyPanel).

## Sicurezza
Il backend firma il corpo della richiesta con `HMAC-SHA256` usando `SHEETS_HMAC_SECRET`.
Lo script ricalcola la firma e rifiuta le richieste con firma non valida.

## Colonne
`order_ref, created_at, full_name, phone, address, city, postal_code, items, total, currency, status, notes, utm_source, utm_medium, utm_campaign`

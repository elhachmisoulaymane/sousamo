# 22 · Integrazione Roxod

Quando un cliente conferma un ordine su sousamo.com, il backend invia
automaticamente i dati a **Roxod** (oltre a Google Sheet, se configurato).

## Flusso

1. Cliente → checkout → pagina `/grazie`
2. Frontend → `POST https://api.sousamo.com/api/orders`
3. Backend salva su Postgres
4. In background invia l'ordine a:
   - Google Sheet (se `SHEETS_WEBHOOK_URL` impostato)
   - **Roxod** (se `ROXOD_WEBHOOK_URL` impostato)

## Configurazione Easypanel (servizio **API**)

Aggiungi queste variabili in **Ambiente**:

| Variabile | Esempio | Obbligatorio |
|---|---|---|
| `ROXOD_WEBHOOK_URL` | URL fornito da Roxod | Sì |
| `ROXOD_API_KEY` | token API Roxod | Se Roxod lo chiede |
| `ROXOD_AUTH_HEADER` | `Authorization` o `X-Api-Key` | No |
| `ROXOD_DEFAULT_SKU` | `RCOD-GZRLDNKF` (Pro Styler) | No |

Poi **Deploy** del servizio **API** (non solo web).

## Payload inviato a Roxod (JSON)

```json
{
  "order_ref": "NL-A1B2C3D4",
  "created_at": "2026-06-21T20:00:00",
  "sku": "RCOD-GZRLDNKF",
  "customer": {
    "full_name": "Giulia Rossi",
    "phone": "+393331234567",
    "address": "Via Roma 12",
    "city": "Milano",
    "postal_code": "20100"
  },
  "items": [
    {
      "sku": "RCOD-GZRLDNKF",
      "slug": "nellia-pro-styler",
      "name": "Néllia Pro Styler 4 in 1",
      "qty": 2,
      "unit_label": "2 pezzi",
      "price": 179,
      "is_upsell": false
    }
  ],
  "total": 179,
  "currency": "EUR",
  "payment_method": "cod",
  "status": "new",
  "notes": "",
  "utm_source": "",
  "utm_medium": "",
  "utm_campaign": "",
  "source": "sousamo.com"
}
```

## Cosa ti serve da Roxod

Chiedi al supporto Roxod:

1. **URL webhook** o endpoint API per ricevere ordini
2. **API key** (se richiesta)
3. **Formato JSON** accettato (se diverso, adattiamo il payload)
4. Se preferiscono **Shopify**, **WooCommerce** o integrazione custom

## Verifica

1. Fai un ordine di test sul sito
2. Controlla che l'ordine compaia in Roxod
3. Nei log API Easypanel cerca `roxod_push_ok` o `roxod_push_failed`

## Nota repo GitHub

- Frontend live → repo `elhachmisoulaymane/frontend`
- Backend API → repo `elhachmisoulaymane/backend` (build path `/` su Easypanel)

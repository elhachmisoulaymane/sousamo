# Collegare sousamo.com → RoxCod (Foglio Google)

RoxCod **non** si collega direttamente al sito custom. Il percorso corretto è:

```
sousamo.com (ordine)
    ↓
api.sousamo.com (backend)
    ↓
Google Sheet (riga ordine + SKU RCOD-GZRLDNKF)
    ↓
RoxCod (legge il foglio con chiave API)
```

---

## PARTE 1 — Google Sheet (una volta sola)

### 1. Crea un Google Sheet
Nome consigliato: **Néllia Ordini sousamo**

### 2. Importa le colonne
Usa `sheets/orders-template.csv` oppure crea il foglio **Ordini** con queste colonne:

`order_ref, created_at, full_name, phone, address, city, postal_code, sku, qty, items, total, currency, status, notes, utm_source, utm_medium, utm_campaign`

### 3. Apps Script
1. **Estensioni → Apps Script**
2. Incolla il contenuto di `sheets/Code.gs`
3. Imposta `SHARED_SECRET` uguale a `SHEETS_HMAC_SECRET` del backend
4. **Distribuisci → App web** → accesso **Chiunque**
5. Copia l'URL web app

### 4. Easypanel — servizio **API**
Aggiungi in **Ambiente**:

| Variabile | Valore |
|---|---|
| `SHEETS_WEBHOOK_URL` | URL web app Apps Script |
| `SHEETS_HMAC_SECRET` | stesso secret di Code.gs |

Clicca **Distribuisci** sul servizio **api**.

---

## PARTE 2 — RoxCod (schermata che hai aperto)

Sei nel posto giusto: **Integrazioni → Foglio Google**.

### 1. Clicca **Documentazione**
Leggi il formato colonne richiesto da RoxCod. Deve combaciare con il nostro foglio (soprattutto **sku** = `RCOD-GZRLDNKF`).

### 2. Clicca **Genera chiave API** ✅ (fatto)
Hai già la chiave. **Non condividerla** in chat — mettila solo in Easypanel.

### 3. Collega il Google Sheet in RoxCod
Segui la documentazione RoxCod per:
- incollare l'URL del foglio Google
- autorizzare l'accesso (account Google)
- associare la chiave API

### 4. Verifica
1. Fai un **ordine di test** su sousamo.com
2. Controlla che la riga compaia nel Google Sheet (con sku `RCOD-GZRLDNKF`)
3. Controlla che l'ordine compaia in **RoxCod → Orders**

---

## SKU prodotto

| Prodotto | SKU RoxCod |
|---|---|
| Néllia Pro Styler 4 in 1 | `RCOD-GZRLDNKF` |

---

## Supporto RoxCod

In basso a sinistra nel pannello: **Yasmine** — chiedile:
> "Ho un sito custom che scrive ordini su Google Sheet. Come collego il foglio con la chiave API?"

---

## Note

- **Shopify / WooCommerce** in RoxCod: non servono (il tuo sito non è Shopify)
- **Foglio Google**: è l'integrazione giusta per te
- Dopo ogni modifica al backend: **Distribuisci** servizio **api** su Easypanel

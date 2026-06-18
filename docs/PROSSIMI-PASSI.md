# Prossimi passi — dal codice alla pubblicità

Questa è la tua guida unica per mettere online **sousamo.com** e iniziare a fare
ads. Il sito è **già costruito** (frontend + backend + tracking + ordini). Qui
trovi solo il lavoro operativo, in ordine. Tempo stimato: mezza giornata.

Legenda: ✅ = già fatto da me · 👉 = devi farlo tu (richiede i tuoi account).

---

## 0. Stato attuale (✅ già fatto)
- ✅ Sito completo: home, prodotti, collezione, chi siamo, contatti, policy, carrello, checkout COD, pagina grazie.
- ✅ 6 immagini prodotto generate e inserite (`frontend/public/images/`).
- ✅ Backend FastAPI con migrazioni automatiche all'avvio.
- ✅ Tracking Meta + TikTok + Snapchat (pixel + CAPI) con deduplica.
- ✅ Integrazione Google Sheet per ricevere gli ordini.
- ✅ Repository Git inizializzato + primo commit.

---

## 1. 👉 Carica il progetto su GitHub
Serve a EasyPanel per scaricare e buildare il sito.

1. Crea un repo **vuoto e privato** su GitHub (es. `sousamo`). NON aggiungere README/gitignore.
2. Nel terminale (PowerShell), dalla cartella del progetto:

```powershell
cd C:\dev\sousamo
git remote add origin https://github.com/TUO-UTENTE/sousamo.git
git push -u origin main
```

> Prima volta: GitHub ti chiede il login. Usa il browser o un Personal Access Token.

---

## 2. 👉 Backend su EasyPanel
1. EasyPanel → **Create Service → App** (es. nome `sousamo-api`).
2. **Source**: il tuo repo GitHub, branch `main`, **Build path** = `backend/`.
3. **Build**: Dockerfile (già presente in `backend/Dockerfile`).
4. **Port**: `8000`.
5. **Environment**: incolla le variabili da `backend/.env.example` (vedi sotto, sezione 5).
6. **Domains**: aggiungi `api.sousamo.com`.
7. Deploy. Nei log devi vedere le migrazioni Alembic + il seed dei prodotti.

✅ Le migrazioni e il seed partono da soli (`entrypoint.sh`). Non devi fare nulla a mano sul DB.

---

## 3. 👉 Frontend su EasyPanel
1. EasyPanel → **Create Service → App** (es. nome `sousamo-web`).
2. **Source**: stesso repo, branch `main`, **Build path** = `frontend/`.
3. **Build**: Dockerfile (già presente in `frontend/Dockerfile`).
4. **Port**: `3000`.
5. **Environment**: variabili da `frontend/.env.example` (sezione 5).
6. **Domains**: aggiungi `sousamo.com` (e `www.sousamo.com`).
7. Deploy.

---

## 4. 👉 DNS del dominio
Nel pannello dove gestisci `sousamo.com` crea record che puntano all'IP del server EasyPanel:
- `sousamo.com` → A record → IP server
- `www.sousamo.com` → A (o CNAME a sousamo.com)
- `api.sousamo.com` → A record → IP server

EasyPanel genera il certificato HTTPS (Let's Encrypt) in automatico.

---

## 5. 👉 Variabili d'ambiente (riempi i campi vuoti)

### Backend (servizio `sousamo-api`)
| Variabile | Valore |
|---|---|
| `ENVIRONMENT` | `production` |
| `API_PREFIX` | `/api` |
| `CORS_ORIGINS` | `https://sousamo.com,https://www.sousamo.com` |
| `INTERNAL_API_TOKEN` | una stringa random di 32+ caratteri |
| `DATABASE_URL` | `postgres://sousamo:sousamo@sousamo_dadabis:5432/sousamo?sslmode=disable` |
| `META_PIXEL_ID` | dal tuo Meta Events Manager |
| `META_CAPI_TOKEN` | token CAPI Meta |
| `TIKTOK_PIXEL_ID` | dal TikTok Events Manager |
| `TIKTOK_ACCESS_TOKEN` | token Events API TikTok |
| `SNAP_PIXEL_ID` | dal Snap Events Manager |
| `SNAP_CAPI_TOKEN` | token CAPI Snap |
| `SHEETS_WEBHOOK_URL` | URL dell'Apps Script (vedi sezione 6) |
| `SHEETS_HMAC_SECRET` | un secret a tua scelta (uguale in Code.gs) |

### Frontend (servizio `sousamo-web`)
| Variabile | Valore |
|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | `https://api.sousamo.com` |
| `NEXT_PUBLIC_SITE_URL` | `https://sousamo.com` |
| `NEXT_PUBLIC_ENVIRONMENT` | `production` |
| `NEXT_PUBLIC_META_PIXEL_ID` | stesso ID del backend |
| `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | stesso ID del backend |
| `NEXT_PUBLIC_SNAP_PIXEL_ID` | stesso ID del backend |
| `INTERNAL_API_TOKEN` | **stesso** valore del backend |

> Il sito funziona anche **senza** i pixel (i campi vuoti vengono ignorati). Ma per fare ads servono.

---

## 6. 👉 Google Sheet (ricevere gli ordini)
1. Crea un Google Sheet nuovo.
2. Estensioni → **Apps Script**, incolla il contenuto di `sheets/Code.gs`.
3. In `Code.gs` metti lo stesso secret di `SHEETS_HMAC_SECRET`.
4. **Deploy → Nuova distribuzione → Web app**, accesso "Chiunque".
5. Copia l'URL e mettilo in `SHEETS_WEBHOOK_URL` (backend).
6. (Opzionale) Importa `sheets/orders-template.csv` per avere le colonne pronte.

---

## 7. 👉 Pixel e CAPI (per le ads)
Per ogni piattaforma: crea il Pixel, prendi l'**ID** e genera il **token CAPI/Events API**.
- **Meta**: Events Manager → Impostazioni → Conversions API → genera token.
- **TikTok**: Events Manager → Web Events → Events API → access token.
- **Snapchat**: Events Manager → Conversions API → token.

Metti ID nelle env frontend+backend e i token solo nel backend. Poi fai un ordine
di test e controlla che l'evento **Purchase** arrivi in ogni manager (una sola
volta grazie alla deduplica).

---

## 8. ✅/👉 Test finale prima delle ads
- [ ] `https://api.sousamo.com/api/health` risponde ok.
- [ ] Home, pagine prodotto e immagini si vedono bene.
- [ ] Ordine di test COD → pagina "Grazie" + **riga sul Google Sheet**.
- [ ] Evento Purchase visibile nei manager pixel.
- [ ] Test su mobile (la maggior parte del traffico ads è mobile).
- [ ] Policy e dati azienda nel footer corretti (obbligo legale in Italia).

Quando questi punti sono verdi → **sei pronto per la pubblicità.** 🚀

---

## Aggiornare il sito in futuro
Modifichi i file → poi:
```powershell
cd C:\dev\sousamo
git add -A
git commit -m "descrizione modifica"
git push
```
EasyPanel ribuilda in automatico (se hai attivato l'auto-deploy) o premi "Deploy".

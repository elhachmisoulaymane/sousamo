# 11 · Conferma, consegna & AOV (COD)

## KPI
- **CR** (Confirmation Rate): % ordini confermati / totali.
- **DR** (Delivery Rate): % consegnati / spediti.
- **AOV**: valore medio ordine.

## Leve per la conferma (CR)
- SMS automatico immediato + chiamata del call center entro poche ore.
- Riconoscibilità del brand (riduce "ordini pentiti").
- Aspettative chiare su prezzo, tempi, pagamento alla consegna.

## Leve per la consegna (DR)
- Corriere affidabile con tracking + avviso SMS prima della consegna.
- Conferma telefonica prima della spedizione (filtra ordini falsi).
- Spedizione veloce (3-5 gg) per ridurre ripensamenti.

## Leve per l'AOV
- Pricing a scaglioni (anchor 2 pezzi).
- Cross-sell nel cart drawer.
- Upsell post-validazione (49 €, timer).

## Dati raccolti per ottimizzare
Ordini su Postgres + Google Sheet: stato, UTM, items, totale. Eventi pixel su `pixel_events`.

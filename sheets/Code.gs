/**
 * Néllia · sousamo — Google Apps Script webhook receiver
 * Riceve gli ordini dal backend e li scrive nel Google Sheet.
 *
 * Setup:
 * 1. Apri il tuo Google Sheet → Estensioni → Apps Script.
 * 2. Incolla questo file.
 * 3. Imposta SHARED_SECRET uguale a SHEETS_HMAC_SECRET del backend.
 * 4. Distribuisci → Nuova distribuzione → Tipo: App web →
 *    Esegui come: te stesso · Accesso: Chiunque.
 * 5. Copia l'URL e mettilo in SHEETS_WEBHOOK_URL del backend.
 */

var SHARED_SECRET = "INCOLLA-LO-STESSO-SECRET-DEL-BACKEND";
var SHEET_NAME = "Ordini";

var HEADERS = [
  "order_ref", "created_at", "full_name", "phone", "address", "city",
  "postal_code", "sku", "qty", "items", "total", "currency", "status", "notes",
  "utm_source", "utm_medium", "utm_campaign"
];

function doPost(e) {
  try {
    var body = e.postData.contents;
    var signature = (e.parameter && e.parameter.sig) ||
      (e.headers ? e.headers["X-Signature"] || e.headers["x-signature"] : null);

    var expected = computeHmac_(body, SHARED_SECRET);
    if (signature && signature !== expected) {
      return json_({ ok: false, error: "invalid signature" });
    }

    var data = JSON.parse(body);
    var sheet = getSheet_();

    var row = HEADERS.map(function (h) {
      return data[h] !== undefined && data[h] !== null ? data[h] : "";
    });
    sheet.appendRow(row);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
  return sheet;
}

function computeHmac_(message, key) {
  var raw = Utilities.computeHmacSha256Signature(message, key);
  return raw.map(function (b) {
    var v = (b < 0 ? b + 256 : b).toString(16);
    return v.length === 1 ? "0" + v : v;
  }).join("");
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

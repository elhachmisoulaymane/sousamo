"""Invio ordini a Google Sheet tramite webhook (Google Apps Script).

Il payload viene firmato con HMAC-SHA256 per autenticare la richiesta.
"""

import hashlib
import hmac
import json

import httpx
import structlog

from app.config import settings

log = structlog.get_logger()


def _sign(body: str) -> str:
    return hmac.new(
        settings.sheets_hmac_secret.encode("utf-8"),
        body.encode("utf-8"),
        hashlib.sha256,
    ).hexdigest()


async def push_order_to_sheet(order) -> bool:
    if not settings.sheets_webhook_url:
        return False

    row = {
        "order_ref": order.order_ref,
        "created_at": order.created_at.isoformat() if order.created_at else "",
        "full_name": order.full_name,
        "phone": order.phone,
        "address": order.address,
        "city": order.city,
        "postal_code": order.postal_code,
        "items": "; ".join(f"{i.get('name')} x{i.get('qty')}" for i in (order.items or [])),
        "total": order.total,
        "currency": order.currency,
        "status": order.status,
        "notes": order.notes or "",
        "utm_source": order.utm_source or "",
        "utm_medium": order.utm_medium or "",
        "utm_campaign": order.utm_campaign or "",
    }
    body = json.dumps(row, ensure_ascii=False)
    headers = {
        "Content-Type": "application/json",
        "X-Signature": _sign(body),
    }
    try:
        async with httpx.AsyncClient(timeout=10) as client:
            r = await client.post(settings.sheets_webhook_url, content=body, headers=headers)
            r.raise_for_status()
        return True
    except Exception as e:  # noqa: BLE001
        log.warning("sheet_push_failed", error=str(e), order=order.order_ref)
        return False

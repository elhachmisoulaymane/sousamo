"""Invio ordini a Roxod (webhook / API esterna).

Configura in Easypanel (servizio API):
  ROXOD_WEBHOOK_URL=https://...
  ROXOD_API_KEY=...            (opzionale)
  ROXOD_AUTH_HEADER=Authorization  (default: Authorization)
"""

import json

import httpx
import structlog

from app.config import settings

log = structlog.get_logger()

# Mappa slug negozio → SKU Roxod
ROXOD_SKU_BY_SLUG: dict[str, str] = {
    "nellia-pro-styler": "RCOD-GZRLDNKF",
}


def _roxod_sku(slug: str) -> str:
    return ROXOD_SKU_BY_SLUG.get(slug) or settings.roxod_default_sku


def _build_payload(order) -> dict:
    items = order.items or []
    line_items = []
    for i in items:
        slug = i.get("slug", "")
        qty = i.get("qty", 1)
        sku = _roxod_sku(slug)
        line_items.append(
            {
                "sku": sku,
                "slug": slug,
                "name": i.get("name", ""),
                "qty": qty,
                "quantity": qty,
                "unit_label": i.get("unitLabel", ""),
                "price": i.get("price", 0),
                "is_upsell": bool(i.get("isUpsell")),
            }
        )

    primary_sku = line_items[0]["sku"] if line_items else settings.roxod_default_sku

    return {
        "order_ref": order.order_ref,
        "created_at": order.created_at.isoformat() if order.created_at else "",
        "sku": primary_sku,
        "customer": {
            "full_name": order.full_name,
            "phone": order.phone,
            "address": order.address,
            "city": order.city,
            "postal_code": order.postal_code,
        },
        "items": line_items,
        "total": order.total,
        "currency": order.currency or "EUR",
        "payment_method": "cod",
        "status": order.status,
        "notes": order.notes or "",
        "utm_source": order.utm_source or "",
        "utm_medium": order.utm_medium or "",
        "utm_campaign": order.utm_campaign or "",
        "source": "sousamo.com",
    }


async def push_order_to_roxod(order) -> bool:
    if not settings.roxod_webhook_url and not (settings.roxod_api_url and settings.roxod_api_key):
        return False

    payload = _build_payload(order)
    body = json.dumps(payload, ensure_ascii=False)
    headers = {"Content-Type": "application/json", "Accept": "application/json"}

    if settings.roxod_api_key:
        header_name = settings.roxod_auth_header or "Authorization"
        if header_name.lower() == "authorization":
            headers["Authorization"] = f"Bearer {settings.roxod_api_key}"
        else:
            headers[header_name] = settings.roxod_api_key

    target_url = settings.roxod_webhook_url or settings.roxod_api_url

    try:
        async with httpx.AsyncClient(timeout=15) as client:
            r = await client.post(target_url, content=body, headers=headers)
            r.raise_for_status()
        log.info("roxod_push_ok", order=order.order_ref, target=target_url)
        return True
    except Exception as e:  # noqa: BLE001
        log.warning("roxod_push_failed", error=str(e), order=order.order_ref, target=target_url)
        return False

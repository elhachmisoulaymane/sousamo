"""Conversion API server-side per Meta, TikTok e Snapchat.

Tutti gli eventi usano lo stesso `event_id` del pixel web per la deduplica.
"""

import time

import httpx
import structlog
from tenacity import retry, stop_after_attempt, wait_exponential

from app.config import settings
from app.services.hashing import hash_email, hash_phone

log = structlog.get_logger()


@retry(stop=stop_after_attempt(3), wait=wait_exponential(min=1, max=8), reraise=False)
async def _post(url: str, json: dict) -> dict:
    async with httpx.AsyncClient(timeout=10) as client:
        r = await client.post(url, json=json)
        r.raise_for_status()
        return r.json()


async def send_meta(event: str, event_id: str, data: dict, email=None, phone=None, fbp=None, fbc=None):
    if not (settings.meta_pixel_id and settings.meta_capi_token):
        return
    user_data: dict = {}
    if email:
        user_data["em"] = [hash_email(email)]
    if phone:
        user_data["ph"] = [hash_phone(phone)]
    if fbp:
        user_data["fbp"] = fbp
    if fbc:
        user_data["fbc"] = fbc

    payload = {
        "data": [
            {
                "event_name": event,
                "event_time": int(time.time()),
                "event_id": event_id,
                "action_source": "website",
                "user_data": user_data,
                "custom_data": {
                    "currency": data.get("currency", "EUR"),
                    "value": data.get("value", 0),
                },
            }
        ]
    }
    if settings.meta_test_event_code:
        payload["test_event_code"] = settings.meta_test_event_code

    url = (
        f"https://graph.facebook.com/v21.0/{settings.meta_pixel_id}/events"
        f"?access_token={settings.meta_capi_token}"
    )
    try:
        await _post(url, payload)
    except Exception as e:  # noqa: BLE001
        log.warning("meta_capi_failed", error=str(e))


async def send_tiktok(event: str, event_id: str, data: dict, email=None, phone=None):
    if not (settings.tiktok_pixel_id and settings.tiktok_access_token):
        return
    user: dict = {}
    if email:
        user["email"] = hash_email(email)
    if phone:
        # TikTok richiede E.164 hashed; normalize_phone restituisce senza '+',
        # TikTok accetta il numero hashed in formato E.164.
        user["phone"] = hash_phone(phone)

    payload = {
        "event_source": "web",
        "event_source_id": settings.tiktok_pixel_id,
        "data": [
            {
                "event": event,
                "event_time": int(time.time()),
                "event_id": event_id,
                "user": user,
                "properties": {
                    "currency": data.get("currency", "EUR"),
                    "value": data.get("value", 0),
                },
            }
        ],
    }
    url = "https://business-api.tiktok.com/open_api/v1.3/event/track/"
    headers = {"Access-Token": settings.tiktok_access_token}
    try:
        async with httpx.AsyncClient(timeout=10) as client:
            r = await client.post(url, json=payload, headers=headers)
            r.raise_for_status()
    except Exception as e:  # noqa: BLE001
        log.warning("tiktok_capi_failed", error=str(e))


async def send_snap(event: str, event_id: str, data: dict, email=None, phone=None):
    if not (settings.snap_pixel_id and settings.snap_capi_token):
        return
    payload = {
        "data": [
            {
                "event_name": event,
                "event_time": int(time.time() * 1000),
                "event_id": event_id,
                "action_source": "WEB",
                "user_data": {
                    "em": hash_email(email) if email else None,
                    "ph": hash_phone(phone) if phone else None,
                },
                "custom_data": {
                    "currency": data.get("currency", "EUR"),
                    "value": str(data.get("value", 0)),
                },
            }
        ]
    }
    url = f"https://tr.snapchat.com/v3/{settings.snap_pixel_id}/events?access_token={settings.snap_capi_token}"
    try:
        await _post(url, payload)
    except Exception as e:  # noqa: BLE001
        log.warning("snap_capi_failed", error=str(e))


async def dispatch_capi(event: str, event_id: str, data: dict, email=None, phone=None, fbp=None, fbc=None):
    await send_meta(event, event_id, data, email, phone, fbp, fbc)
    await send_tiktok(event, event_id, data, email, phone)
    await send_snap(event, event_id, data, email, phone)

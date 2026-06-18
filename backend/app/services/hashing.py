"""PII hashing per le Conversion API.

Regole:
- Web pixel (browser): NESSUN hashing (lo fa la libreria/piattaforma).
- CAPI (server): SHA-256 su valori normalizzati (lowercase, trim).
- Telefono: formato E.164 SENZA '+' per Meta/Snap, normalizzato per TikTok.
"""

import hashlib
import re

import phonenumbers


def _sha256(value: str) -> str:
    return hashlib.sha256(value.strip().lower().encode("utf-8")).hexdigest()


def hash_email(email: str | None) -> str | None:
    if not email:
        return None
    return _sha256(email)


def normalize_phone(phone: str, region: str = "IT") -> str | None:
    """Ritorna E.164 senza il prefisso '+', es. 393331234567."""
    if not phone:
        return None
    raw = re.sub(r"[^\d+]", "", phone)
    try:
        parsed = phonenumbers.parse(raw, region)
        e164 = phonenumbers.format_number(parsed, phonenumbers.PhoneNumberFormat.E164)
    except Exception:
        # fallback: forza prefisso IT
        digits = re.sub(r"\D", "", phone)
        if digits.startswith("39"):
            e164 = f"+{digits}"
        else:
            e164 = f"+39{digits}"
    return e164.lstrip("+")


def hash_phone(phone: str | None) -> str | None:
    """SHA-256 del telefono in E.164 senza '+' (richiesto da Meta CAPI)."""
    norm = normalize_phone(phone) if phone else None
    if not norm:
        return None
    return _sha256(norm)

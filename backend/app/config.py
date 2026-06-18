from functools import lru_cache
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    # App
    environment: str = "development"
    api_prefix: str = "/api"
    cors_origins: str = "http://localhost:3000,https://www.sousamo.com"
    internal_api_token: str = "change-me"

    # Database
    database_url: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/sousamo"

    # Meta CAPI
    meta_pixel_id: str = ""
    meta_capi_token: str = ""
    meta_test_event_code: str = ""

    # TikTok Events API
    tiktok_pixel_id: str = ""
    tiktok_access_token: str = ""

    # Snapchat CAPI
    snap_pixel_id: str = ""
    snap_capi_token: str = ""

    # Google Sheets webhook
    sheets_webhook_url: str = ""
    sheets_hmac_secret: str = ""

    @field_validator("database_url")
    @classmethod
    def _normalize_database_url(cls, v: str) -> str:
        """Accetta l'URL così come fornito da EasyPanel.

        - Converte lo schema `postgres://` / `postgresql://` in
          `postgresql+asyncpg://` (richiesto dal driver async).
        - Rimuove parametri libpq non supportati da asyncpg (es. `sslmode`).
        """
        if not v:
            return v
        for prefix in ("postgresql+asyncpg://",):
            if v.startswith(prefix):
                base = v
                break
        else:
            if v.startswith("postgres://"):
                v = "postgresql+asyncpg://" + v[len("postgres://"):]
            elif v.startswith("postgresql://"):
                v = "postgresql+asyncpg://" + v[len("postgresql://"):]
            base = v

        parts = urlsplit(base)
        if parts.query:
            kept = [(k, val) for k, val in parse_qsl(parts.query) if k.lower() != "sslmode"]
            base = urlunsplit((parts.scheme, parts.netloc, parts.path, urlencode(kept), parts.fragment))
        return base

    @property
    def cors_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()

import structlog
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import contact, orders, products, reviews, track
from app.config import settings

log = structlog.get_logger()

app = FastAPI(
    title="Néllia API",
    version="1.0.0",
    description="Backend COD per sousamo.com (ordini, tracking CAPI, webhook Sheet).",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PREFIX = settings.api_prefix
app.include_router(orders.router, prefix=PREFIX)
app.include_router(track.router, prefix=PREFIX)
app.include_router(products.router, prefix=PREFIX)
app.include_router(reviews.router, prefix=PREFIX)
app.include_router(contact.router, prefix=PREFIX)


@app.get("/api/health")
async def health():
    return {"status": "ok", "service": "nellia-backend", "env": settings.environment}


@app.get("/")
async def root():
    return {"service": "nellia-backend", "docs": "/docs"}

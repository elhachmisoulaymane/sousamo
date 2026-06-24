"""Popola products e reviews. Idempotente (skip se gia presenti)."""

import asyncio

from sqlalchemy import select

from app.db import SessionLocal
from app.models import Product, Review

PRODUCTS = [
    {
        "slug": "nellia-pro-styler",
        "name": "Néllia Pro Styler 4 in 1",
        "tagline": "La spazzola asciugacapelli che sostituisce phon, piastra e arricciacapelli",
        "rating": 4.8,
        "reviews_count": 1247,
        "packs": [
            {"qty": 1, "price": 105},
            {"qty": 2, "price": 179},
            {"qty": 3, "price": 249},
        ],
    },
    {
        "slug": "nellia-siero-termo",
        "name": "Néllia Siero Termo-Attivo",
        "tagline": "Lo scudo termico che protegge e nutre prima dello styling",
        "rating": 4.7,
        "reviews_count": 863,
        "packs": [
            {"qty": 1, "price": 105},
            {"qty": 2, "price": 179},
            {"qty": 3, "price": 249},
        ],
    },
    {
        "slug": "nellia-rituale-polvere",
        "name": "Néllia Rituale Polvere",
        "tagline": "L'integratore in polvere per capelli forti dall'interno",
        "rating": 4.6,
        "reviews_count": 541,
        "packs": [
            {"qty": 1, "price": 105},
            {"qty": 2, "price": 179},
            {"qty": 3, "price": 249},
        ],
    },
]

REVIEWS = [
    {"product_slug": "nellia-pro-styler", "author": "Giulia M.", "city": "Milano", "rating": 5,
     "title": "Finalmente piega da salone a casa", "body": "Lo uso ogni mattina, in 10 minuti ho i capelli lisci e voluminosi."},
    {"product_slug": "nellia-pro-styler", "author": "Francesca R.", "city": "Roma", "rating": 5,
     "title": "Vale ogni euro", "body": "Robusto e fa davvero la differenza. Capelli molto meno crespi."},
    {"product_slug": "nellia-siero-termo", "author": "Valentina D.", "city": "Napoli", "rating": 5,
     "title": "I capelli non si bruciano più", "body": "Morbidissimi e luminosi. Non unge per niente."},
    {"product_slug": "nellia-rituale-polvere", "author": "Elena P.", "city": "Firenze", "rating": 5,
     "title": "Gesto piacevole ogni mattina", "body": "Lo metto nel caffè e non si sente. Mi trovo benissimo."},
]


async def main() -> None:
    async with SessionLocal() as db:
        existing = await db.execute(select(Product.slug))
        slugs = {s for s in existing.scalars().all()}
        for p in PRODUCTS:
            if p["slug"] not in slugs:
                db.add(Product(**p))

        rcount = await db.execute(select(Review.id))
        if not rcount.scalars().first():
            for r in REVIEWS:
                db.add(Review(**r))

        await db.commit()
    print("seed: done")


if __name__ == "__main__":
    asyncio.run(main())

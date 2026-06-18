from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db import get_db
from app.models import Product
from app.schemas import ProductOut

router = APIRouter(prefix="/products", tags=["products"])


@router.get("", response_model=list[ProductOut])
async def list_products(db: AsyncSession = Depends(get_db)):
    rows = await db.execute(select(Product).where(Product.active.is_(True)))
    return rows.scalars().all()


@router.get("/{slug}", response_model=ProductOut)
async def get_product(slug: str, db: AsyncSession = Depends(get_db)):
    row = await db.execute(select(Product).where(Product.slug == slug))
    product = row.scalar_one_or_none()
    if not product:
        raise HTTPException(status_code=404, detail="Prodotto non trovato")
    return product

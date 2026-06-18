from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db import get_db
from app.models import Review
from app.schemas import ReviewOut

router = APIRouter(prefix="/reviews", tags=["reviews"])


@router.get("/{slug}", response_model=list[ReviewOut])
async def reviews_for(slug: str, db: AsyncSession = Depends(get_db)):
    rows = await db.execute(
        select(Review).where(Review.product_slug == slug, Review.approved.is_(True))
    )
    return rows.scalars().all()

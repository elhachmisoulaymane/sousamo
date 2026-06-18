from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db import get_db
from app.models import ContactMessage
from app.schemas import ContactIn

router = APIRouter(prefix="/contact", tags=["contact"])


@router.post("")
async def contact(payload: ContactIn, db: AsyncSession = Depends(get_db)):
    db.add(
        ContactMessage(
            name=payload.name,
            email=str(payload.email),
            subject=payload.subject,
            message=payload.message,
        )
    )
    await db.commit()
    return {"ok": True}

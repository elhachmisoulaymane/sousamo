from fastapi import APIRouter, BackgroundTasks, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db import get_db
from app.models import PixelEvent
from app.schemas import TrackIn
from app.services.capi import dispatch_capi

router = APIRouter(prefix="/track", tags=["track"])


@router.post("")
async def track(payload: TrackIn, background: BackgroundTasks, db: AsyncSession = Depends(get_db)):
    db.add(PixelEvent(event_id=payload.event_id, event_name=payload.event, payload=payload.data))
    await db.commit()

    background.add_task(
        dispatch_capi,
        payload.event,
        payload.event_id,
        payload.data,
        payload.email,
        payload.phone,
        payload.fbp,
        payload.fbc,
    )
    return {"ok": True, "event_id": payload.event_id}

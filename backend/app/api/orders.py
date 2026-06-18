import secrets

from fastapi import APIRouter, BackgroundTasks, Depends, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.db import get_db
from app.models import Order
from app.schemas import OrderIn, OrderOut
from app.services.capi import dispatch_capi
from app.services.sheets import push_order_to_sheet

router = APIRouter(prefix="/orders", tags=["orders"])


def _order_ref() -> str:
    return "NL-" + secrets.token_hex(4).upper()


@router.post("", response_model=OrderOut)
async def create_order(
    payload: OrderIn,
    request: Request,
    background: BackgroundTasks,
    db: AsyncSession = Depends(get_db),
):
    order = Order(
        order_ref=_order_ref(),
        full_name=payload.fullName,
        phone=payload.phone,
        address=payload.address,
        city=payload.city,
        postal_code=payload.postalCode,
        notes=payload.notes,
        items=[i.model_dump() for i in payload.items],
        total=payload.total,
        currency="EUR",
        status="new",
        fbp=payload.fbp,
        fbc=payload.fbc,
        utm_source=payload.utm_source,
        utm_medium=payload.utm_medium,
        utm_campaign=payload.utm_campaign,
        user_agent=request.headers.get("user-agent"),
        ip_address=request.client.host if request.client else None,
    )
    db.add(order)
    await db.commit()
    await db.refresh(order)

    # Purchase server-side (deduplicato lato pixel con event_id Purchase)
    background.add_task(
        dispatch_capi,
        "Purchase",
        f"order_{order.order_ref}",
        {"value": order.total, "currency": "EUR"},
        None,
        order.phone,
        order.fbp,
        order.fbc,
    )
    background.add_task(push_order_to_sheet, order)

    return order

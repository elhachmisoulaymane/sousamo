from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class CartItemIn(BaseModel):
    slug: str
    name: str
    qty: int = 1
    unitLabel: str = ""
    price: float = 0.0
    isUpsell: bool = False


class OrderIn(BaseModel):
    fullName: str = Field(min_length=2, max_length=160)
    phone: str = Field(min_length=6, max_length=32)
    address: str = Field(min_length=3, max_length=255)
    city: str = Field(min_length=2, max_length=120)
    postalCode: str = Field(min_length=4, max_length=12)
    notes: str | None = None
    items: list[CartItemIn] = []
    total: float = 0.0

    # attribution (optional)
    fbp: str | None = None
    fbc: str | None = None
    utm_source: str | None = None
    utm_medium: str | None = None
    utm_campaign: str | None = None


class OrderOut(BaseModel):
    order_ref: str
    status: str
    total: float
    currency: str
    created_at: datetime

    class Config:
        from_attributes = True


class TrackIn(BaseModel):
    event: str
    event_id: str
    data: dict = {}
    email: str | None = None
    phone: str | None = None
    fbp: str | None = None
    fbc: str | None = None


class ContactIn(BaseModel):
    name: str = Field(min_length=2, max_length=160)
    email: EmailStr
    subject: str = ""
    message: str = Field(min_length=2)


class ProductOut(BaseModel):
    slug: str
    name: str
    tagline: str
    rating: float
    reviews_count: int
    packs: list

    class Config:
        from_attributes = True


class ReviewOut(BaseModel):
    author: str
    city: str
    rating: int
    title: str
    body: str
    verified: bool
    created_at: datetime

    class Config:
        from_attributes = True

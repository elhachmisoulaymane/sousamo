export interface PackTier {
  qty: number;
  price: number;
  label: string;
  pricePerUnit: number;
  badge?: string;
  highlight?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  rating: number;
  reviewsCount: number;
  images: string[];
  heroImage: string;
  packs: PackTier[];
  benefits: { icon: string; title: string; text: string }[];
  features: string[];
  specs: { label: string; value: string }[];
  faq: { q: string; a: string }[];
  ingredients?: string;
  crossSellSlugs: string[];
  upsellPrice: number;
}

export interface Review {
  id: string;
  productSlug: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}

export interface CartItem {
  slug: string;
  name: string;
  image: string;
  qty: number;
  unitLabel: string;
  price: number;
  isUpsell?: boolean;
}

export interface OrderForm {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes?: string;
}

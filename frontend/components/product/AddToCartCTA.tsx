"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldCheck, Truck, Clock } from "lucide-react";
import { PackSelector } from "./PackSelector";
import { Stars } from "@/components/ui/Stars";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/lib/types";
import { useCart } from "@/lib/store/cart";
import { useUI } from "@/lib/store/ui";
import { Pixels } from "@/lib/pixels/events";
import { formatEuro } from "@/lib/utils/format";

export function AddToCartCTA({ product }: { product: Product }) {
  const [qty, setQty] = useState(2);
  const addItem = useCart((s) => s.addItem);
  const openCart = useUI((s) => s.openCart);
  const available = product.available !== false;

  const pack = product.packs.find((p) => p.qty === qty) ?? product.packs[0];

  function handleAdd() {
    addItem({
      slug: product.slug,
      name: product.name,
      image: product.heroImage,
      qty: pack.qty,
      unitLabel: pack.label,
      price: pack.price,
    });
    Pixels.addToCart({
      content_name: product.name,
      content_ids: [product.slug],
      value: pack.price,
      currency: "EUR",
      quantity: pack.qty,
    });
    openCart();
  }

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Badge tone="rose">N.1 in Italia nella cura capelli a casa</Badge>
        <h1 className="font-serif text-3xl font-semibold leading-tight text-espresso-900 sm:text-4xl">
          {product.name}
        </h1>
        <p className="text-lg text-espresso-700/80">{product.tagline}</p>
        <Stars rating={product.rating} count={product.reviewsCount} showValue className="pt-1" />
      </div>

      <p className="text-espresso-800">{product.shortDescription}</p>

      {available ? (
        <>
          <PackSelector packs={product.packs} selected={qty} onSelect={setQty} />

          <div className="rounded-2xl bg-cipria-100 p-4 text-sm text-veluxa-700">
            🔥 Offerta valida solo oggi · scorte limitate per il pagamento alla consegna
          </div>

          <Button size="lg" fullWidth onClick={handleAdd}>
            Aggiungi al carrello — {formatEuro(pack.price)}
          </Button>
        </>
      ) : (
        <div className="space-y-4 rounded-2xl border border-argento-200 bg-argento-50 p-5">
          <p className="font-semibold text-espresso-900">Al momento non disponibile</p>
          <p className="text-sm text-espresso-700/80">
            Stiamo rifornendo le scorte. Nel frattempo scopri il nostro bestseller, disponibile con pagamento alla consegna.
          </p>
          <Link href="/prodotti/nellia-pro-styler">
            <Button size="lg" fullWidth>Vai al Pro Styler 4 in 1</Button>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-3 gap-3 text-center text-xs text-espresso-700/80">
        <span className="flex flex-col items-center gap-1">
          <Truck size={18} className="text-veluxa-500" /> Consegna 3-5 gg
        </span>
        <span className="flex flex-col items-center gap-1">
          <ShieldCheck size={18} className="text-veluxa-500" /> Paghi alla consegna
        </span>
        <span className="flex flex-col items-center gap-1">
          <Clock size={18} className="text-veluxa-500" /> Reso 14 giorni
        </span>
      </div>
    </div>
  );
}

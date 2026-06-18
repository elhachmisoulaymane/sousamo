"use client";

import { useEffect, useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { formatEuro } from "@/lib/utils/format";
import type { Product } from "@/lib/types";

export function UpsellStep({
  product,
  onAccept,
  onDecline,
}: {
  product: Product;
  onAccept: () => void;
  onDecline: () => void;
}) {
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    if (seconds <= 0) {
      onDecline();
      return;
    }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, onDecline]);

  return (
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-wide text-veluxa-600">
        Offerta esclusiva · solo ora
      </p>
      <h3 className="mt-2 font-serif text-2xl font-semibold text-espresso-900">
        Aggiungi un&apos;altra {product.name}
      </h3>
      <p className="mt-1 text-sm text-espresso-700/80">
        Solo per questo ordine, una unità extra a un prezzo riservato.
      </p>

      <div className="mx-auto my-5 h-40 w-40 overflow-hidden rounded-2xl bg-cipria-100">
        <div className="relative h-full w-full">
          <SmartImage src={product.heroImage} alt={product.name} fill sizes="160px" className="object-cover" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <span className="text-espresso-700/50 line-through">{formatEuro(product.packs[0].price)}</span>
        <span className="font-serif text-3xl font-semibold text-veluxa-600">
          {formatEuro(product.upsellPrice)}
        </span>
      </div>

      <p className="mt-2 text-sm font-medium text-error">
        Offerta scade tra {seconds}s
      </p>

      <div className="mt-5 space-y-2">
        <Button size="lg" fullWidth onClick={onAccept}>
          Sì, aggiungi a {formatEuro(product.upsellPrice)}
        </Button>
        <button onClick={onDecline} className="text-sm text-espresso-700/60 underline">
          No grazie, completa l&apos;ordine
        </button>
      </div>
    </div>
  );
}

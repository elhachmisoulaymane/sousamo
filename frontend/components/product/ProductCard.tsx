import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { Stars } from "@/components/ui/Stars";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatEuro } from "@/lib/utils/format";
import type { Product } from "@/lib/types";
import { Flame } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const from = product.packs[0].price;
  const available = product.available !== false;
  const productHref = `/prodotti/${product.slug}`;

  const imageBlock = (
    <div className="relative block aspect-square overflow-hidden bg-cipria-100">
      <SmartImage
        src={product.heroImage}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className={`object-cover transition-transform duration-500 ${available ? "group-hover:scale-105" : "opacity-90"}`}
      />
      <span className="absolute left-3 top-3">
        {available ? (
          <Badge tone="dark">
            <Flame size={12} /> Best seller
          </Badge>
        ) : (
          <Badge tone="neutral">Non disponibile</Badge>
        )}
      </span>
    </div>
  );

  const titleBlock = (
    <h3 className="font-serif text-xl font-semibold text-espresso-900">{product.name}</h3>
  );

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-argento-200 bg-white shadow-soft transition-shadow hover:shadow-card">
      {available ? (
        <Link href={productHref} className="relative block">
          {imageBlock}
        </Link>
      ) : (
        imageBlock
      )}

      <div className="flex flex-1 flex-col p-5">
        {available ? <Link href={productHref}>{titleBlock}</Link> : titleBlock}
        <p className="mt-1 line-clamp-2 text-sm text-espresso-700/80">{product.tagline}</p>

        <div className="mt-3">
          <Stars rating={product.rating} count={product.reviewsCount} showValue />
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-espresso-700/60">da</p>
            <p className="font-serif text-2xl font-semibold text-espresso-900">{formatEuro(from)}</p>
          </div>
          {available ? (
            <span className="rounded-full bg-cipria-100 px-3 py-1 text-xs font-semibold text-veluxa-700">
              Solo pochi pezzi
            </span>
          ) : (
            <span className="rounded-full bg-argento-100 px-3 py-1 text-xs font-semibold text-espresso-700/70">
              Torna presto
            </span>
          )}
        </div>

        {available ? (
          <Link href={`/prodotti/${product.slug}`} className="mt-4">
            <Button fullWidth>Scopri di più</Button>
          </Link>
        ) : (
          <Button
            fullWidth
            variant="secondary"
            disabled
            aria-disabled
            className="mt-4 cursor-not-allowed opacity-70"
          >
            Al momento non disponibile
          </Button>
        )}
      </div>
    </div>
  );
}

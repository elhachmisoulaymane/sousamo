"use client";

import { X, Plus, Trash2, ShoppingBag } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/store/cart";
import { useUI } from "@/lib/store/ui";
import { formatEuro } from "@/lib/utils/format";
import { getCrossSell, getAvailableProducts, isProductAvailable } from "@/lib/data/products";
import { Pixels } from "@/lib/pixels/events";

export function CartDrawer() {
  const { items, removeItem, addItem, total } = useCart();
  const { cartOpen, closeCart, openCheckout } = useUI();

  const baseSlug = items.find((i) => !i.isUpsell)?.slug ?? getAvailableProducts()[0]?.slug ?? "";
  const crossSell = baseSlug ? getCrossSell(baseSlug).filter(
    (p) => !items.some((i) => i.slug === p.slug),
  ) : [];

  function addCross(slug: string) {
    if (!isProductAvailable(slug)) return;
    const p = getAvailableProducts().find((x) => x.slug === slug);
    if (!p) return;
    addItem({
      slug: p.slug,
      name: p.name,
      image: p.heroImage,
      qty: 1,
      unitLabel: "1 pezzo",
      price: p.packs[0].price,
    });
    Pixels.addToCart({ content_ids: [p.slug], value: p.packs[0].price, currency: "EUR" });
  }

  function goCheckout() {
    Pixels.initiateCheckout({ value: total(), currency: "EUR", num_items: items.length });
    openCheckout();
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-espresso-900/40 transition-opacity ${
          cartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-crema-50 shadow-card transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-argento-200 p-5">
          <h2 className="font-serif text-2xl text-espresso-900">Il tuo carrello</h2>
          <button onClick={closeCart} aria-label="Chiudi"><X size={24} /></button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
            <ShoppingBag size={40} className="text-argento-300" />
            <p className="text-espresso-700/70">Il carrello è vuoto.</p>
            <Button variant="secondary" onClick={closeCart}>Continua lo shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {items.map((item) => (
                <div key={`${item.slug}-${item.isUpsell ? "u" : "n"}`} className="flex gap-3 rounded-2xl border border-argento-200 bg-white p-3">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cipria-100">
                    <SmartImage src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-semibold text-espresso-900">{item.name}</p>
                      <p className="text-xs text-espresso-700/70">{item.unitLabel}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-espresso-900">{formatEuro(item.price)}</span>
                      <button onClick={() => removeItem(item.slug, item.isUpsell)} aria-label="Rimuovi" className="text-espresso-700/50 hover:text-error">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {crossSell.length > 0 && (
                <div className="rounded-2xl bg-cipria-100 p-4">
                  <p className="mb-3 text-sm font-semibold text-espresso-900">Completa il tuo rituale</p>
                  <div className="space-y-3">
                    {crossSell.map((p) => (
                      <div key={p.slug} className="flex items-center gap-3 rounded-xl bg-white p-2">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-cipria-100">
                          <SmartImage src={p.heroImage} alt={p.name} fill sizes="56px" className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-espresso-900">{p.name}</p>
                          <p className="text-xs text-espresso-700/70">{formatEuro(p.packs[0].price)}</p>
                        </div>
                        <button
                          onClick={() => addCross(p.slug)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-veluxa-600 text-white hover:bg-veluxa-700"
                          aria-label={`Aggiungi ${p.name}`}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-argento-200 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-espresso-700/80">Totale</span>
                <span className="font-serif text-2xl font-semibold text-espresso-900">{formatEuro(total())}</span>
              </div>
              <Button size="lg" fullWidth onClick={goCheckout}>
                Procedi all&apos;ordine
              </Button>
              <p className="mt-3 text-center text-xs text-espresso-700/60">
                Paghi comodamente alla consegna · spedizione tracciata
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

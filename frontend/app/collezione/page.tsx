import type { Metadata } from "next";
import { ProductCard } from "@/components/product/ProductCard";
import { getProduct } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Pro Styler 4 in 1",
  description: "Néllia Pro Styler 4 in 1 — spazzola asciugacapelli professionale. Da 49 €, pagamento alla consegna.",
};

export default function CollezionePage() {
  const product = getProduct("nellia-pro-styler")!;

  return (
    <div className="py-14">
      <div className="section text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-veluxa-600">Néllia</p>
        <h1 className="mt-2 font-serif text-4xl text-espresso-900 sm:text-5xl">Pro Styler 4 in 1</h1>
        <p className="mx-auto mt-3 max-w-xl text-espresso-700/80">
          Asciuga, liscia, arriccia e volumizza in un solo gesto.
          Pagamento alla consegna in tutta Italia — da 49 €.
        </p>
      </div>
      <div className="section mt-10 mx-auto max-w-md">
        <ProductCard product={product} />
      </div>
    </div>
  );
}

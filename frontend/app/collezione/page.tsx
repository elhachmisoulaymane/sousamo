import type { Metadata } from "next";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Collezione",
  description: "Scopri il rituale completo Néllia per capelli sani e luminosi.",
};

export default function CollezionePage() {
  return (
    <div className="py-14">
      <div className="section text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-veluxa-600">La collezione Néllia</p>
        <h1 className="mt-2 font-serif text-4xl text-espresso-900 sm:text-5xl">Il rituale completo</h1>
        <p className="mx-auto mt-3 max-w-xl text-espresso-700/80">
          Tre prodotti che lavorano in sinergia per capelli più sani, forti e luminosi.
          Pagamento alla consegna in tutta Italia.
        </p>
      </div>
      <div className="section mt-10 grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}

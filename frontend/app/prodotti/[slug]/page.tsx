import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductGallery } from "@/components/product/ProductGallery";
import { AddToCartCTA } from "@/components/product/AddToCartCTA";
import { ReviewsList } from "@/components/product/ReviewsList";
import { FAQAccordion } from "@/components/product/FAQAccordion";
import { ProductCard } from "@/components/product/ProductCard";
import { Icon } from "@/components/ui/Icon";
import { getProduct, getCrossSell, getAvailableProducts, isProductAvailable } from "@/lib/data/products";
import { getReviews } from "@/lib/data/reviews";
import { Check } from "lucide-react";

export function generateStaticParams() {
  return getAvailableProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product || !isProductAvailable(product.slug)) return { title: "Prodotto non trovato" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product || !isProductAvailable(product.slug)) notFound();

  const reviews = getReviews(product.slug);
  const crossSell = getCrossSell(product.slug);

  return (
    <>
      <section className="py-10 lg:py-14">
        <div className="section grid gap-10 lg:grid-cols-2">
          <ProductGallery images={product.images} name={product.name} />
          <AddToCartCTA product={product} />
        </div>
      </section>

      <section className="bg-crema-50 py-12">
        <div className="section grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {product.benefits.map((b) => (
            <div key={b.title} className="rounded-3xl border border-argento-200 bg-white p-6 shadow-soft">
              <Icon name={b.icon} className="text-veluxa-600" size={26} />
              <h3 className="mt-3 font-serif text-lg text-espresso-900">{b.title}</h3>
              <p className="mt-1 text-sm text-espresso-700/80">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="section grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-espresso-900">Perché sceglierlo</h2>
            <p className="mt-3 text-espresso-800">{product.description}</p>
            <ul className="mt-6 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-espresso-800">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                    <Check size={12} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-argento-200 bg-white p-6 shadow-soft">
            <h3 className="font-serif text-xl text-espresso-900">Specifiche</h3>
            <dl className="mt-4 divide-y divide-argento-200">
              {product.specs.map((s) => (
                <div key={s.label} className="flex justify-between py-2.5 text-sm">
                  <dt className="text-espresso-700/70">{s.label}</dt>
                  <dd className="font-medium text-espresso-900">{s.value}</dd>
                </div>
              ))}
            </dl>
            {product.ingredients && (
              <div className="mt-4 rounded-xl bg-cipria-100 p-3 text-xs text-espresso-800">
                <span className="font-semibold">Ingredienti:</span> {product.ingredients}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-crema-50 py-14">
        <div className="section">
          <h2 className="mb-8 font-serif text-3xl text-espresso-900">Recensioni verificate</h2>
          <ReviewsList reviews={reviews} rating={product.rating} total={product.reviewsCount} />
        </div>
      </section>

      <section className="py-14">
        <div className="section">
          <h2 className="mb-8 font-serif text-3xl text-espresso-900">Domande frequenti</h2>
          <FAQAccordion items={product.faq} />
        </div>
      </section>

      {crossSell.length > 0 && (
        <section className="bg-cipria-100 py-14">
          <div className="section">
            <h2 className="mb-8 text-center font-serif text-3xl text-espresso-900">Completa il tuo rituale</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {crossSell.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

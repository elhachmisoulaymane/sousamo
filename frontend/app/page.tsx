import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { SmartImage } from "@/components/ui/SmartImage";
import { getAvailableProducts } from "@/lib/data/products";
import { reviews } from "@/lib/data/reviews";
import { Sparkles, ShieldCheck, Truck, Award, Heart } from "lucide-react";

const pillars = [
  { icon: Award, title: "Qualità da salone", text: "Strumenti e formule professionali selezionati per la donna italiana." },
  { icon: ShieldCheck, title: "Sicuro e certificato", text: "Prodotti conformi alle normative europee, testati e garantiti 24 mesi." },
  { icon: Heart, title: "Amato in tutta Italia", text: "Migliaia di clienti soddisfatte da Milano a Palermo." },
  { icon: Truck, title: "Paghi alla consegna", text: "Ordini in sicurezza, paghi solo quando ricevi il pacco a casa." },
];

const steps = [
  { n: "01", title: "Prepara", text: "Parti da capelli puliti e tamponati, pronti per lo styling." },
  { n: "02", title: "Modella", text: "Asciuga e dai forma con il Pro Styler 4 in 1 in pochi minuti." },
  { n: "03", title: "Risultato", text: "Capelli lisci, voluminosi e luminosi come da salone, ogni mattina." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-crema-50 py-14">
        <div className="section">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-3xl border border-argento-200 bg-white p-6 text-center shadow-soft">
                <p.icon className="mx-auto text-veluxa-600" size={28} />
                <h3 className="mt-3 font-serif text-xl text-espresso-900">{p.title}</h3>
                <p className="mt-2 text-sm text-espresso-700/80">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-veluxa-600">La collezione</p>
          <h2 className="mt-2 font-serif text-4xl text-espresso-900">Il bestseller Néllia</h2>
          <p className="mx-auto mt-3 max-w-xl text-espresso-700/80">
            Il Pro Styler 4 in 1 per protezione, styling e risultati da salone a casa.
          </p>
        </div>
        <div className="section mt-10 grid gap-6 md:grid-cols-3">
          {getAvailableProducts().map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-espresso-900 py-16 text-white">
        <div className="section grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-square overflow-hidden rounded-[2rem] bg-espresso-800 lg:order-1">
            <SmartImage src="/images/pro-styler-2.png" alt="Rituale Néllia" fill sizes="(max-width:1024px) 100vw, 560px" className="object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-veluxa-400">Il metodo Néllia</p>
            <h2 className="mt-2 font-serif text-4xl">Tre gesti, capelli trasformati</h2>
            <div className="mt-8 space-y-6">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-4">
                  <span className="font-serif text-3xl font-semibold text-veluxa-400">{s.n}</span>
                  <div>
                    <h3 className="font-serif text-xl">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/collezione" className="mt-8 inline-block">
              <Button size="lg">Scopri il rituale</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section text-center">
          <Sparkles className="mx-auto text-oro-400" size={28} />
          <h2 className="mt-3 font-serif text-4xl text-espresso-900">Le donne italiane ci amano</h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <Stars rating={4.8} showValue />
            <span className="text-espresso-700/70">su 2.600+ recensioni verificate</span>
          </div>
        </div>
        <div className="section mt-10 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <div key={r.id} className="rounded-3xl border border-argento-200 bg-white p-6 shadow-soft">
              <Stars rating={r.rating} size={15} />
              <h4 className="mt-3 font-serif text-lg text-espresso-900">{r.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-espresso-800">{r.body}</p>
              <p className="mt-4 text-sm font-semibold text-espresso-900">{r.author} · <span className="font-normal text-espresso-700/60">{r.city}</span></p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cipria-100 py-16">
        <div className="section text-center">
          <h2 className="font-serif text-4xl text-espresso-900">Inizia oggi il tuo rituale</h2>
          <p className="mx-auto mt-3 max-w-lg text-espresso-700/80">
            Spedizione veloce, pagamento alla consegna e garanzia soddisfatti o rimborsati.
          </p>
          <Link href="/prodotti/nellia-pro-styler" className="mt-6 inline-block">
            <Button size="lg">Acquista il Pro Styler 4 in 1</Button>
          </Link>
        </div>
      </section>
    </>
  );
}

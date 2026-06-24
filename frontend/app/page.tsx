import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { SmartImage } from "@/components/ui/SmartImage";
import { getProduct } from "@/lib/data/products";
import { getReviews } from "@/lib/data/reviews";
import { Sparkles, ShieldCheck, Truck, Award, Heart } from "lucide-react";

const proStyler = getProduct("nellia-pro-styler")!;

const pillars = [
  { icon: Award, title: "Qualità da salone", text: "Styling professionale a casa, senza andare dal parrucchiere." },
  { icon: ShieldCheck, title: "Garanzia 24 mesi", text: "Prodotto certificato CE, conforme alle normative europee." },
  { icon: Heart, title: "Amato in tutta Italia", text: "Migliaia di clienti soddisfatte da Milano a Palermo." },
  { icon: Truck, title: "Paghi alla consegna", text: "Ordini in sicurezza, paghi solo quando ricevi il pacco a casa." },
];

const steps = [
  { n: "01", title: "Scegli l'accessorio", text: "Spazzola, lisciante, concentratore o diffusore — 4 in 1 inclusi." },
  { n: "02", title: "Asciuga e modella", text: "Capelli umidi, accendi il Pro Styler e lavora sezione per sezione." },
  { n: "03", title: "Risultato in 10 min", text: "Liscio, volume o ricci definiti. Senza crespo, senza danni." },
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
          <p className="text-sm font-semibold uppercase tracking-wide text-veluxa-600">Il nostro prodotto</p>
          <h2 className="mt-2 font-serif text-4xl text-espresso-900">Néllia Pro Styler 4 in 1</h2>
          <p className="mx-auto mt-3 max-w-xl text-espresso-700/80">
            L&apos;unico strumento che ti serve per capelli da salone ogni giorno. Da soli 49 €.
          </p>
        </div>
        <div className="section mt-10 mx-auto max-w-md">
          <ProductCard product={proStyler} />
        </div>
      </section>

      <section className="bg-espresso-900 py-16 text-white">
        <div className="section grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-square overflow-hidden rounded-[2rem] bg-espresso-800 lg:order-1">
            <SmartImage src="/images/pro-styler-2.png" alt="Néllia Pro Styler 4 in 1" fill sizes="(max-width:1024px) 100vw, 560px" className="object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-veluxa-400">Come funziona</p>
            <h2 className="mt-2 font-serif text-4xl">Piega perfetta in 3 passi</h2>
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
            <Link href="/prodotti/nellia-pro-styler" className="mt-8 inline-block">
              <Button size="lg">Ordina ora — da 49 €</Button>
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
            <span className="text-espresso-700/70">su 1.200+ recensioni verificate</span>
          </div>
        </div>
        <div className="section mt-10 grid gap-6 md:grid-cols-3">
          {getReviews("nellia-pro-styler").slice(0, 3).map((r) => (
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
          <h2 className="font-serif text-4xl text-espresso-900">Provalo senza rischi</h2>
          <p className="mx-auto mt-3 max-w-lg text-espresso-700/80">
            Spedizione in 3-5 giorni, pagamento alla consegna e reso entro 14 giorni.
          </p>
          <Link href="/prodotti/nellia-pro-styler" className="mt-6 inline-block">
            <Button size="lg">Acquista il Pro Styler — 49 €</Button>
          </Link>
        </div>
      </section>
    </>
  );
}

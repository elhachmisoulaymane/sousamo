import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { Stars } from "@/components/ui/Stars";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cipria-100 via-crema-50 to-cipria-200">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div className="order-2 lg:order-1">
          <Badge tone="rose">★ N.1 in Italia · oltre 12.000 clienti</Badge>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] text-espresso-900 sm:text-5xl lg:text-6xl">
            Il salone a casa tua, ogni mattina
          </h1>
          <p className="mt-5 max-w-md text-lg text-espresso-700/85">
            Néllia è il rituale italiano per capelli sani, lisci e luminosi.
            Tecnologia professionale e formule botaniche per risultati da
            parrucchiere senza uscire di casa.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Stars rating={4.8} showValue />
            <span className="text-sm text-espresso-700/70">4.8/5 · 2.600+ recensioni</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/prodotti/nellia-pro-styler">
              <Button size="lg">Scopri il Pro Styler 4 in 1</Button>
            </Link>
            <Link href="/collezione">
              <Button size="lg" variant="secondary">Vedi la collezione</Button>
            </Link>
          </div>

          <p className="mt-5 text-sm text-espresso-700/70">
            💳 Pagamento alla consegna · 🚚 Spedizione in 3-5 giorni · <strong>da 49 €</strong>
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-cipria-200 shadow-card">
            <SmartImage
              src="/images/pro-styler-1.png"
              alt="Néllia Pro Styler 4 in 1"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

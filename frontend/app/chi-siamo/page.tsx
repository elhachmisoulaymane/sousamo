import type { Metadata } from "next";
import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { Award, Heart, Leaf, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Chi siamo",
  description: "La storia di Néllia: il rituale italiano per capelli sani e luminosi.",
};

const values = [
  { icon: Award, title: "Qualità senza compromessi", text: "Selezioniamo solo strumenti e formule che useremmo su noi stesse." },
  { icon: Leaf, title: "Ingredienti che rispettano", text: "Formule botaniche, sicure e conformi alle normative europee." },
  { icon: Heart, title: "Vicine alle nostre clienti", text: "Un'assistenza italiana, gentile e sempre disponibile." },
  { icon: Users, title: "Una community che cresce", text: "Migliaia di donne italiane si fidano di Néllia ogni giorno." },
];

export default function ChiSiamoPage() {
  return (
    <>
      <section className="bg-cipria-100 py-16">
        <div className="section max-w-3xl text-center">
          <h1 className="font-serif text-4xl text-espresso-900 sm:text-5xl">La cura dei capelli, all&apos;italiana</h1>
          <p className="mt-5 text-lg text-espresso-700/85">
            Néllia nasce da un&apos;idea semplice: ogni donna merita capelli sani e
            luminosi, senza dover passare ore dal parrucchiere. Uniamo tecnologia
            professionale e tradizione cosmetica italiana per portare il salone a
            casa tua.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[2rem] bg-cipria-100 lg:order-1">
            <SmartImage src="/images/about.png" alt="Il laboratorio Néllia" fill sizes="(max-width:1024px) 100vw, 560px" className="object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl text-espresso-900">La nostra missione</h2>
            <p className="mt-4 text-espresso-800">
              Crediamo che prendersi cura di sé sia un gesto quotidiano di amore.
              Per questo abbiamo creato un rituale completo — protezione, styling e
              benessere — pensato per i capelli delle donne italiane e per i loro
              ritmi di vita.
            </p>
            <p className="mt-4 text-espresso-800">
              Ogni prodotto Néllia è selezionato con cura, testato e garantito.
              Perché la fiducia si costruisce con la qualità, ogni giorno.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-crema-50 py-16">
        <div className="section grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-argento-200 bg-white p-6 text-center shadow-soft">
              <v.icon className="mx-auto text-veluxa-600" size={28} />
              <h3 className="mt-3 font-serif text-lg text-espresso-900">{v.title}</h3>
              <p className="mt-2 text-sm text-espresso-700/80">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="section text-center">
          <h2 className="font-serif text-3xl text-espresso-900">Unisciti al rituale Néllia</h2>
          <Link href="/collezione" className="mt-6 inline-block">
            <Button size="lg">Scopri la collezione</Button>
          </Link>
        </div>
      </section>
    </>
  );
}

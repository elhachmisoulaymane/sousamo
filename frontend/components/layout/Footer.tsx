import Link from "next/link";
import { Logo } from "./Logo";
import { Instagram, Facebook, Mail } from "lucide-react";

const cols = [
  {
    title: "Negozio",
    links: [
      { href: "/prodotti/nellia-pro-styler", label: "Pro Styler 4 in 1" },
    ],
  },
  {
    title: "Azienda",
    links: [
      { href: "/chi-siamo", label: "Chi siamo" },
      { href: "/contatti", label: "Contatti" },
    ],
  },
  {
    title: "Assistenza",
    links: [
      { href: "/policy/spedizioni", label: "Spedizioni" },
      { href: "/policy/resi", label: "Resi e rimborsi" },
      { href: "/policy/termini", label: "Termini e condizioni" },
      { href: "/policy/privacy", label: "Privacy" },
      { href: "/policy/cookie", label: "Cookie" },
      { href: "/policy/avvertenze", label: "Avvertenze" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-espresso-900 text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Il rituale italiano per capelli sani e luminosi a casa. Qualità da
              salone, ogni giorno.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:border-veluxa-400">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-white/20 p-2 hover:border-veluxa-400">
                <Facebook size={18} />
              </a>
              <a href="mailto:info@sousamo.com" aria-label="Email" className="rounded-full border border-white/20 p-2 hover:border-veluxa-400">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 font-serif text-lg text-white">{c.title}</h4>
              <ul className="space-y-2 text-sm">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/60 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Néllia · sousamo. Tutti i diritti riservati.</p>
          <p>sousamo.com · Pagamento alla consegna in tutta Italia</p>
        </div>
      </div>
    </footer>
  );
}

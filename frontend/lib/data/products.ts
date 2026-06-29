import type { Product } from "@/lib/types";

const PLACEHOLDER = "https://placehold.co/800x800/FBEAEE/C8366A?text=N%C3%A9llia";

function packs(): Product["packs"] {
  return [
    {
      qty: 1,
      price: 105,
      pricePerUnit: 105,
      label: "1 pezzo",
    },
    {
      qty: 2,
      price: 179,
      pricePerUnit: 89.5,
      label: "2 pezzi",
      badge: "Più scelto",
      highlight: true,
    },
    {
      qty: 3,
      price: 249,
      pricePerUnit: 83,
      label: "3 pezzi",
      badge: "Miglior prezzo",
    },
  ];
}

export const products: Product[] = [
  {
    slug: "nellia-pro-styler",
    name: "Néllia Pro Styler 4 in 1",
    tagline: "La spazzola asciugacapelli che sostituisce phon, piastra e arricciacapelli",
    shortDescription:
      "Asciuga, liscia, modella e dona volume in un solo gesto. Tecnologia a ioni per capelli morbidi e luminosi senza danni.",
    description:
      "Il Néllia Pro Styler 4 in 1 nasce per ridare alle donne italiane il salone a casa propria. Grazie alla tecnologia a ioni negativi e al controllo intelligente del calore, asciuga e modella i capelli riducendo crespo e doppie punte. Quattro accessori intercambiabili per ogni esigenza: spazzola tonda per il volume, piastra per il liscio, concentratore e diffusore per i ricci.",
    rating: 4.8,
    reviewsCount: 1247,
    images: [
      "/images/pro-styler-1.png",
      "/images/pro-styler-2.png",
      "/images/pro-styler-3.png",
    ],
    heroImage: "/images/pro-styler-1.png",
    packs: packs(),
    benefits: [
      { icon: "Wind", title: "4 funzioni", text: "Asciuga, liscia, modella e dà volume con un unico strumento." },
      { icon: "Sparkles", title: "Tecnologia a ioni", text: "Riduce il crespo e dona lucentezza da salone." },
      { icon: "ShieldCheck", title: "Calore protetto", text: "Temperatura controllata per non bruciare i capelli." },
      { icon: "Clock", title: "Risparmia tempo", text: "Piega completa in metà del tempo, ogni mattina." },
    ],
    features: [
      "4 accessori intercambiabili inclusi",
      "Tecnologia a ioni negativi anti-crespo",
      "3 livelli di temperatura + colpo d'aria fredda",
      "Cavo girevole a 360° da 2,5 m",
      "Manico ergonomico antiscivolo",
      "Adatto a tutti i tipi di capello",
    ],
    specs: [
      { label: "Potenza", value: "1200 W" },
      { label: "Accessori", value: "4 inclusi" },
      { label: "Tecnologia", value: "Ioni negativi" },
      { label: "Voltaggio", value: "220-240V (IT/EU)" },
      { label: "Garanzia", value: "24 mesi" },
    ],
    faq: [
      { q: "Va bene per capelli ricci?", a: "Sì, include diffusore e concentratore pensati per definire i ricci senza appesantirli." },
      { q: "Rovina i capelli?", a: "No. Il controllo del calore e gli ioni negativi proteggono la fibra, riducendo i danni rispetto a phon e piastra separati." },
      { q: "Quanto dura la spedizione?", a: "Consegna in 3-5 giorni lavorativi in tutta Italia, con pagamento alla consegna." },
    ],
    crossSellSlugs: [],
    upsellPrice: 49,
    roxodSku: "RCOD-GZRLDNKF",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAvailableProducts(): Product[] {
  return products.filter((p) => p.available !== false);
}

export function isProductAvailable(slug: string): boolean {
  const product = getProduct(slug);
  return product ? product.available !== false : false;
}

export function getCrossSell(slug: string): Product[] {
  const p = getProduct(slug);
  if (!p) return [];
  return p.crossSellSlugs
    .map((s) => getProduct(s))
    .filter((x): x is Product => Boolean(x && x.available !== false));
}

export { PLACEHOLDER };

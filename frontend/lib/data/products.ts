import type { Product } from "@/lib/types";

const PLACEHOLDER = "https://placehold.co/800x800/FBEAEE/C8366A?text=N%C3%A9llia";

function packs(): Product["packs"] {
  return [
    {
      qty: 1,
      price: 49,
      pricePerUnit: 49,
      label: "1 pezzo",
    },
    {
      qty: 2,
      price: 79,
      pricePerUnit: 39.5,
      label: "2 pezzi",
      badge: "Più scelto",
      highlight: true,
    },
    {
      qty: 3,
      price: 99,
      pricePerUnit: 33,
      label: "3 pezzi",
      badge: "Miglior prezzo",
    },
  ];
}

export const products: Product[] = [
  {
    slug: "nellia-pro-styler",
    name: "Néllia Pro Styler 4 in 1",
    tagline: "Asciuga, liscia, arriccia e volumizza in un solo gesto — risultato da salone a casa",
    shortDescription:
      "La spazzola asciugacapelli professionale con 4 accessori intercambiabili. Tecnologia a ioni negativi, 3 temperature e pagamento alla consegna. Solo 49 €.",
    description:
      "Smetti di perdere tempo (e soldi) tra phon, piastra e arricciacapelli. Il Néllia Pro Styler 4 in 1 unisce tutto in un unico strumento leggero e potente: asciuga i capelli in pochi minuti, liscia senza crespo, dona volume alla radice e modella ricci definiti. La tecnologia a ioni negativi sigilla le cuticole e lascia i capelli morbidi, lucenti e setosi — come appena uscita dal parrucchiere, ma ogni mattina a casa tua. Quattro accessori inclusi: spazzola ovale per volume, spazzola lisciante, concentratore per pieghe precise e diffusore per ricci naturali. Plug EU 220V, pronto per l'Italia.",
    rating: 4.8,
    reviewsCount: 1252,
    images: [
      "/images/pro-styler-1.png",
      "/images/pro-styler-2.png",
      "/images/pro-styler-3.png",
      "/images/pro-styler-lifestyle-1.jpg",
      "/images/pro-styler-lifestyle-2.jpg",
    ],
    heroImage: "/images/pro-styler-1.png",
    packs: packs(),
    benefits: [
      { icon: "Wind", title: "4 in 1 vero", text: "Sostituisce phon, piastra, arricciacapelli e spazzola volumizzante." },
      { icon: "Sparkles", title: "Ioni negativi", text: "Riduce crespo e statica. Capelli più lucenti già dalla prima passata." },
      { icon: "ShieldCheck", title: "Calore sicuro", text: "3 livelli di temperatura + aria fredda per proteggere la fibra capillare." },
      { icon: "Clock", title: "10 minuti", text: "Piega completa prima di uscire. Niente più ore davanti allo specchio." },
    ],
    features: [
      "4 accessori intercambiabili inclusi nella confezione",
      "Tecnologia a ioni negativi anti-crespo",
      "2 velocità + 3 livelli di temperatura + colpo d'aria fredda",
      "Potenza 1000 W per asciugatura rapida",
      "Cavo girevole a 360° — 2 metri",
      "Spina EU 220-240V, adatta all'Italia",
      "Leggero, ergonomico, facile da usare anche per principianti",
      "Adatto a capelli lisci, mossi, ricci e fini",
    ],
    specs: [
      { label: "Potenza", value: "1000 W" },
      { label: "Accessori", value: "4 inclusi" },
      { label: "Tecnologia", value: "Ioni negativi + ceramica" },
      { label: "Temperature", value: "3 livelli + aria fredda" },
      { label: "Voltaggio", value: "220-240V (spina EU)" },
      { label: "Cavo", value: "2 m, girevole 360°" },
      { label: "Garanzia", value: "24 mesi" },
      { label: "Pagamento", value: "Alla consegna (COD)" },
    ],
    faq: [
      { q: "Quanto costa?", a: "Solo 49 € per 1 pezzo. Offerte speciali: 2 pezzi a 79 € e 3 pezzi a 99 €. Paghi alla consegna, zero rischi." },
      { q: "Va bene per capelli ricci?", a: "Sì. Il diffusore definisce i ricci senza appesantirli. Il concentratore aiuta a lisciare le ciocche più rebelle." },
      { q: "Rovina i capelli?", a: "No. Gli ioni negativi e il controllo del calore riducono i danni rispetto a phon + piastra usati separatamente." },
      { q: "È difficile da usare?", a: "No. Dopo la prima volta capisci subito. Molte clienti lo usano ogni mattina in meno di 10 minuti." },
      { q: "Quanto dura la spedizione?", a: "3-5 giorni lavorativi in tutta Italia. Ricevi il pacco e paghi solo quando lo hai in mano." },
      { q: "Posso restituirlo?", a: "Sì, hai 14 giorni per il reso se non sei soddisfatta. Nessun anticipo, nessun rischio." },
    ],
    crossSellSlugs: [],
    upsellPrice: 39,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCrossSell(slug: string): Product[] {
  const p = getProduct(slug);
  if (!p) return [];
  return p.crossSellSlugs
    .map((s) => getProduct(s))
    .filter((x): x is Product => Boolean(x));
}

export { PLACEHOLDER };

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
    available: true,
  },
  {
    slug: "nellia-siero-termo",
    name: "Néllia Siero Termo-Attivo",
    tagline: "Lo scudo termico che protegge e nutre prima dello styling",
    shortDescription:
      "Siero leggero con oli botanici che protegge dal calore fino a 230°C, riduce il crespo e dona luce immediata.",
    description:
      "Il Néllia Siero Termo-Attivo è il gesto indispensabile prima di ogni styling. La sua formula con olio di argan, cheratina vegetale e vitamina E crea uno scudo invisibile contro il calore di phon e piastra, sigilla le cuticole e regala capelli morbidi, luminosi e disciplinati per tutto il giorno.",
    rating: 4.7,
    reviewsCount: 863,
    images: [
      "/images/siero-1.png",
    ],
    heroImage: "/images/siero-1.png",
    packs: packs(),
    benefits: [
      { icon: "Flame", title: "Protezione 230°C", text: "Scudo termico per phon, piastra e styling quotidiano." },
      { icon: "Droplet", title: "Oli botanici", text: "Argan, cheratina vegetale e vitamina E nutrono in profondità." },
      { icon: "Sparkles", title: "Luce immediata", text: "Capelli morbidi e luminosi dal primo utilizzo." },
      { icon: "Feather", title: "Non unge", text: "Texture leggera che non appesantisce né lascia residui." },
    ],
    features: [
      "Protezione termica fino a 230°C",
      "Con olio di argan e cheratina vegetale",
      "Anti-crespo fino a 48h",
      "Adatto a capelli colorati",
      "Senza siliconi pesanti né parabeni",
      "Made in Italy",
    ],
    specs: [
      { label: "Formato", value: "100 ml" },
      { label: "Protezione", value: "Fino a 230°C" },
      { label: "Tipo capello", value: "Tutti" },
      { label: "Profumo", value: "Fiori bianchi" },
      { label: "Origine", value: "Made in Italy" },
    ],
    faq: [
      { q: "Quando si applica?", a: "Su capelli umidi tamponati, prima di asciugare o piastrare. Bastano 2-3 spruzzi." },
      { q: "Va bene per capelli colorati?", a: "Sì, protegge il colore e ne prolunga la brillantezza." },
      { q: "Appesantisce?", a: "No, la texture è ultra-leggera e si assorbe rapidamente senza ungere." },
    ],
    ingredients:
      "Aqua, Argania Spinosa Kernel Oil, Hydrolyzed Keratin, Tocopherol (Vitamina E), Panthenol, Parfum.",
    crossSellSlugs: ["nellia-pro-styler", "nellia-rituale-polvere"],
    upsellPrice: 49,
    available: false,
  },
  {
    slug: "nellia-rituale-polvere",
    name: "Néllia Rituale Polvere",
    tagline: "L'integratore in polvere per capelli forti dall'interno",
    shortDescription:
      "Polvere quotidiana con biotina, zinco e collagene marino per nutrire i capelli dalla radice. Un gesto di benessere ogni mattina.",
    description:
      "Il Néllia Rituale Polvere completa il rituale di bellezza dall'interno. Una miscela quotidiana con biotina, zinco, collagene marino e estratti botanici da sciogliere nella tua bevanda preferita. Sostiene la normale fisiologia di capelli e unghie e accompagna il benessere con un gesto semplice e piacevole ogni giorno.",
    rating: 4.6,
    reviewsCount: 541,
    images: [
      "/images/polvere-1.png",
    ],
    heroImage: "/images/polvere-1.png",
    packs: packs(),
    benefits: [
      { icon: "Leaf", title: "Formula botanica", text: "Biotina, zinco e collagene marino in un gesto quotidiano." },
      { icon: "HeartPulse", title: "Benessere interno", text: "Sostiene la normale fisiologia di capelli e unghie." },
      { icon: "Coffee", title: "Si scioglie facile", text: "Da aggiungere a caffè, tè o smoothie. Gusto neutro." },
      { icon: "CalendarCheck", title: "30 giorni", text: "Un mese di rituale in ogni confezione." },
    ],
    features: [
      "Con biotina, zinco e collagene marino",
      "30 dosi giornaliere",
      "Gusto neutro, si scioglie in qualsiasi bevanda",
      "Senza zuccheri aggiunti",
      "Notificato al Ministero della Salute",
      "Made in Italy",
    ],
    specs: [
      { label: "Formato", value: "150 g (30 dosi)" },
      { label: "Ingredienti chiave", value: "Biotina, Zinco, Collagene" },
      { label: "Durata", value: "30 giorni" },
      { label: "Gusto", value: "Neutro" },
      { label: "Origine", value: "Made in Italy" },
    ],
    faq: [
      { q: "Come si assume?", a: "Una dose al giorno sciolta in acqua, caffè, tè o nel tuo smoothie preferito." },
      { q: "In quanto tempo si vedono i risultati?", a: "I primi benefici sul benessere si percepiscono dopo 4-8 settimane di uso costante." },
      { q: "È un farmaco?", a: "No, è un integratore alimentare notificato al Ministero della Salute. Non sostituisce una dieta varia ed equilibrata." },
    ],
    ingredients:
      "Collagene marino idrolizzato, Inulina, L-Biotina, Zinco gluconato, Estratto di equiseto, Aroma naturale.",
    crossSellSlugs: ["nellia-pro-styler", "nellia-siero-termo"],
    upsellPrice: 49,
    available: false,
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

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
    crossSellSlugs: ["nellia-siero-termo", "nellia-rituale-polvere"],
    upsellPrice: 39,
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

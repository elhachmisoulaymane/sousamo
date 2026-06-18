# 12 · Design system

Sorgente: `frontend/tailwind.config.ts` e `frontend/app/globals.css`.

## Palette
- **Rosa Veluxa** (brand/CTA): `#C8366A` (600), hover `#A52854` (700).
- **Cipria** (sfondi soft): `#FBEAEE` (100), `#F5DDE2` (200).
- **Crema** (sfondo pagina): `#FAF5EE`.
- **Espresso** (testo/dark): `#1F1A17` (900), `#2A2421` (800).
- **Argento** (bordi): `#E5E6E7` (200), `#C8CACC` (300).
- **Oro** (accenti/stelle): `#D9A47B` (400).
- Semantici: success `#2D8C5F`, error `#C53B3B`.

## Tipografia
- **Serif** (titoli): Cormorant Garamond — elegante, premium.
- **Sans** (testo/UI): Inter.
- Variabili font: `--font-cormorant`, `--font-inter` (via `next/font`).

## Componenti UI base
Button (primary/secondary/ghost/dark), Stars, Badge, Input/Textarea, SmartImage,
Logo, TrustStrip. Arrotondamenti generosi (`rounded-2xl/3xl/full`), ombre soft.

## Animazioni
fade-up, fade-in, slide-in-right (drawer), pulse-soft. Transizioni 200-300ms.

## Layout
- Container `max-w-7xl`, padding `px-4`.
- Sezioni desktop alternate: testo/immagine, immagine/testo.
- Mobile-first, completamente responsivo.

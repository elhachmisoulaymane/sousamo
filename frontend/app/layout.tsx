import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustStrip } from "@/components/layout/TrustStrip";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CheckoutPopup } from "@/components/checkout/CheckoutPopup";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { NotificationToast } from "@/components/layout/NotificationToast";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sousamo.com"),
  title: {
    default: "Néllia · Il rituale italiano per capelli sani e luminosi",
    template: "%s · Néllia",
  },
  description:
    "Néllia (sousamo): tecnologia professionale e formule botaniche per capelli da salone a casa tua. Pagamento alla consegna in tutta Italia.",
  openGraph: {
    title: "Néllia · Il salone a casa tua",
    description: "Capelli sani, lisci e luminosi. Pagamento alla consegna in tutta Italia.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans">
        <TrustStrip />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CartDrawer />
        <CheckoutPopup />
        <CookieBanner />
        <NotificationToast />
      </body>
    </html>
  );
}

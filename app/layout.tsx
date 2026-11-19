import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
// Design system (fuente de verdad en /external)
import "../external/tokens.css";
import "../external/components/bundle.css";
import "./globals.css";
import "./theme.css";
import { AnnouncementBar, WhatsAppFab } from "@/components/Chrome";
import { CartProvider } from "@/components/CartProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
  description: `Medicamentos, dermocosmética, mamá y bebé, nutrición y botiquín con delivery en ${site.deliveryZones}. Atención farmacéutica por WhatsApp.`,
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE" data-theme="light" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body>
        <CartProvider>
          <a className="skip-link" href="#contenido">
            Saltar al contenido
          </a>
          <AnnouncementBar />
          <Header />
          <main id="contenido">{children}</main>
          <Footer />
          <WhatsAppFab />
        </CartProvider>
      </body>
    </html>
  );
}

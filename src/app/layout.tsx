import type { Metadata } from "next";
import localFont from "next/font/local";
import { Exo_2, Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["italic", "normal"],
  variable: "--font-exo",
});

const avenirBook = localFont({
  src: "../../fonts/Avenir-Book.otf",
  weight: "400",
  style: "normal",
  variable: "--font-avenir-book",
});

const avenirHeavy = localFont({
  src: "../../fonts/Avenir-Heavy.otf",
  weight: "900",
  style: "normal",
  variable: "--font-avenir-heavy",
});

const podium = localFont({
  src: "../../fonts/Fontspring-DEMO-podiumsharp-6.8italic.otf",
  weight: "650",
  style: "italic",
  variable: "--font-podium",
});

export const metadata: Metadata = {
  title: {
    default: "GAT Global Auto Tech | Repuestos automotrices de calidad premium",
    template: "%s | GAT Global Auto Tech",
  },
  description:
    "Filtros, bujías, correas, fluidos y repuestos automotrices de alto rendimiento con certificación TÜV IATF 16949.",
  icons: { icon: "/images/logo-gat.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${exo.variable} ${avenirBook.variable} ${avenirHeavy.variable} ${podium.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

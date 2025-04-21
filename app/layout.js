import { Geist, Geist_Mono, Bitter } from "next/font/google";
import "./globals.css";
import Navbar from "./nopage/components/navbar";
import Footer from "./nopage/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CosmoTarot & Healing",
  description: "CosmoTarot & Healing offers Tarot readings, Reiki healing, and a variety of spiritual products like stones, bracelets, and candles.",
  openGraph: {
    title: "CosmoTarot & Healing",
    description: "CosmoTarot & Healing offers Tarot readings, Reiki healing, and a variety of spiritual products like stones, bracelets, and candles.",
    url: "https://www.cosmostarothealing.com",
    siteName: "CosmoTarot & Healing",
    images: [
      {
        url: "https://www.cosmostarothealing.com/Logo.png",
        width: 800,
        height: 800,
        alt: "CosmoTarot & Healing Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CosmoTarotHealing",
    title: "CosmoTarot & Healing",
    description: "CosmoTarot & Healing offers Tarot readings, Reiki healing, and a variety of spiritual products like stones, bracelets, and candles.",
    image: "https://www.cosmostarothealing.com/Logo.png",
  },
  keywords: ["Tarot readings", "Reiki healing", "spiritual products", "bracelets", "stones", "candles"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={`fo bg-[#f6f5f4]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

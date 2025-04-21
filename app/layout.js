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
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CosmoTarot & Healing" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={`fo bg-[#f6f5f4]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Home1 from "./nopage/home/home1";
import Home2 from "./nopage/home/home2";
import Home3 from "./nopage/home/home3";
import Home4 from "./nopage/home/home4";
import Home5 from "./nopage/home/home5";

export const metadata = {
  title: "CosmoTarot & Healing",
  description: "Welcome to CosmoTarot & Healing, offering Tarot readings, Reiki healing, and spiritual products like stones, bracelets, and candles.",
  openGraph: {
    title: "CosmoTarot & Healing",
    description: "Welcome to CosmoTarot & Healing, offering Tarot readings, Reiki healing, and spiritual products like stones, bracelets, and candles.",
    url: "https://www.cosmostarothealing.com/",
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
    description: "Welcome to CosmoTarot & Healing, offering Tarot readings, Reiki healing, and spiritual products like stones, bracelets, and candles.",
    image: "https://www.cosmostarothealing.com/Logo.png",
  },
  keywords: ["Tarot readings", "Reiki healing", "spiritual products", "bracelets", "stones", "candles"],
};

export default function Home() {
  return (
    <>
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
    </>
  );
}

import Session1 from "../nopage/sessions/session1";

export const metadata = {
  title: "Book a Session | CosmoTarot & Healing",
  description: "Choose between Tarot Reading and Reiki Healing sessions to begin your spiritual journey with CosmoTarot & Healing.",
  openGraph: {
    title: "Book a Session | CosmoTarot & Healing",
    description: "Choose between Tarot Reading and Reiki Healing sessions to begin your spiritual journey with CosmoTarot & Healing.",
    url: "https://www.cosmostarothealing.com/sessions",
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
    title: "Book a Session | CosmoTarot & Healing",
    description: "Reserve your personalized Tarot Reading or Reiki Healing session with CosmoTarot & Healing.",
    image: "https://www.cosmostarothealing.com/Logo.png",
  },
  keywords: [
    "book tarot session",
    "book reiki session",
    "spiritual sessions",
    "energy healing",
    "tarot appointment",
    "chakra session",
    "CosmoTarot healing booking"
  ],
};

export default function Page() {
  return (
    <>
      <Session1 />
    </>
  );
}

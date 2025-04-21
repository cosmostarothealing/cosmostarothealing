import Tarot1 from "../nopage/tarot/tarot1"

export const metadata = {
    title: "Tarot Readings | CosmoTarot & Healing",
    description: "Experience insightful Tarot readings at CosmoTarot & Healing. Explore our variety of readings, including general, career, reconciliation, chakra spreads, and more.",
    openGraph: {
      title: "Tarot Readings | CosmoTarot & Healing",
      description: "Experience insightful Tarot readings at CosmoTarot & Healing. Explore our variety of readings, including general, career, reconciliation, chakra spreads, and more.",
      url: "https://www.cosmostarothealing.com/tarot-readings",
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
      title: "Tarot Readings | CosmoTarot & Healing",
      description: "Explore transformative Tarot readings, offering deep insights into love, career, and life path at CosmoTarot & Healing.",
      image: "https://www.cosmostarothealing.com/Logo.png",
    },
    keywords: ["Tarot readings", "spiritual guidance", "personal tarot reading", "Reiki healing", "chakra readings", "horoscope reading", "tarot services"],
  };


export default function Page(){
    return(
        <>
        <Tarot1/>
        </>
    )
}
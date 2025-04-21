import Reiki1 from "../nopage/reiki/reiki1"

export const metadata = {
    title: "Reiki Healing | CosmoTarot & Healing",
    description: "Transform your life with Reiki healing services at CosmoTarot & Healing. Explore our offerings in Love Healing, Aura Cleaning, and Chakra Healing.",
    openGraph: {
      title: "Reiki Healing | CosmoTarot & Healing",
      description: "Transform your life with Reiki healing services at CosmoTarot & Healing. Explore our offerings in Love Healing, Aura Cleaning, and Chakra Healing.",
      url: "https://www.cosmostarothealing.com/reiki-healing",
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
      title: "Reiki Healing | CosmoTarot & Healing",
      description: "Explore transformative Reiki healing services to balance your chakras, clear negative energy, and promote self-love.",
      image: "https://www.cosmostarothealing.com/Logo.png",
    },
    keywords: ["Reiki healing", "love healing", "chakra healing", "aura cleaning", "spiritual healing", "energy work", "Reiki energy services"],
  };

export default function Page(){
    return(
        <>
        <Reiki1/>
        </>
    )
};
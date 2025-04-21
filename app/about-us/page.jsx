import About1 from "../nopage/about/about1"
export const metadata = {
    title: "About Chitrangdaa Shany | CosmoTarot & Healing",
    description:
      "Meet Chitrangdaa Shany, an intuitive guide and energy healer offering tarot readings, Reiki, and spiritual mentoring. Start your sacred journey today.",
    keywords: [
      "Chitrangdaa Shany",
      "About CosmoTarot",
      "Tarot Reader",
      "Energy Healer",
      "Spiritual Mentor",
      "Reiki Healing",
      "Chakra Balancing",
      "Tarot Wisdom",
      "Spiritual Guidance",
    ],
    openGraph: {
      title: "About Chitrangdaa Shany | CosmoTarot & Healing",
      description:
        "Discover the story of Chitrangdaa Shany, your intuitive spiritual guide offering powerful healing sessions and tarot insights.",
      url: "https://www.cosmostarothealing.com/about-us",
      type: "website",
      images: [
        {
          url: "https://www.cosmostarothealing.com/owner.jpeg",
          width: 800,
          height: 600,
          alt: "Chitrangdaa Shany - CosmoTarot & Healing",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About Chitrangdaa Shany | CosmoTarot & Healing",
      description:
        "Explore the journey of Chitrangdaa Shany, your intuitive healer and spiritual guide.",
      images: ["https://www.cosmostarothealing.com/owner.jpeg"],
    },
  };
  

export default function Page(){
    return(
        <>
        <About1/>
        </>
    )
}
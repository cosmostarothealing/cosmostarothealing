export const metadata = {
    title: "Shop Crystals & Healing Products - CosmoTarot & Healing",
    description: "Explore our collection of Tumble Stones, Reiki Stones, Spell Candles, and more. Perfect for your spiritual journey.",
    openGraph: {
        title: "Shop Crystals & Healing Products - CosmoTarot & Healing",
        description: "Browse healing crystals, spell candles, and bracelets for your spiritual wellness. Handpicked and energetically charged.",
        url: "https://www.cosmostarothealing.com/shop",
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
        title: "Shop Healing Crystals & Spiritual Items",
        description: "Tumble Stones, Spell Candles, Reiki Crystals, and more available now at CosmoTarot & Healing.",
        image: "https://www.cosmostarothealing.com/Logo.png",
    },
    keywords: [
       "Tumble stone", "Raw stone", "Reiki stone", "Worry Stone", "Spell candles", "Bracelets"
    ],
};

export default function ShopLayout({ children }) {
    return <>{children}</>;
}

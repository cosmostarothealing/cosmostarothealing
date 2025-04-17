"use client";
import { motion } from "framer-motion";

export default function Home() {
    const offerings = [
        "Tarot Reading",
        "Reiki Healing",
        "Chakra Balancing",
        "Crystal Therapy",
        "Astrology",
        "Energy Cleansing",
        "Aura Reading",
        "Manifestation Rituals",
    ];

    return (
        <section className="py-4 bg-black overflow-hidden mt-4">
            <div className=" px-4">
               
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-marquee space-x-8 text-[#ca9d75] text-xl font-light tracking-wide uppercase">
                        {[...offerings, ...offerings].map((item, index) => (
                            <div key={index} className="flex  items-center whitespace-nowrap">
                                {item}
                                <div className="ml-8 text-[#ca9d75] text-2xl">✦</div> {/* You can swap ✦ with ☽ ☉ ♄ ⚛ etc */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }

                @media (max-width: 768px) {
                    .animate-marquee {
                        animation-duration: 20s;
                    }
                }
            `}</style>
        </section>
    );
}

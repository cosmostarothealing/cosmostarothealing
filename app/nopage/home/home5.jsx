"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const zodiacSigns = [
  {
    name: "Aries",
    date: "Mar 21 - Apr 19",
    img: "/aries.png",
    reading: "Aries are bold, ambitious, and love to be number one.",
  },
  {
    name: "Taurus",
    date: "Apr 20 - May 20",
    img: "/taurus.png",
    reading: "Taurus are grounded, loyal, and love the finer things in life.",
  },
  {
    name: "Gemini",
    date: "May 21 - June 20",
    img: "/gemini.png",
    reading: "Geminis are curious, witty, and great communicators.",
  },
  {
    name: "Cancer",
    date: "June 21 - July 22",
    img: "/cancer.png",
    reading: "Cancers are deeply intuitive, sensitive, and nurturing.",
  },
  {
    name: "Leo",
    date: "July 23 - Aug 22",
    img: "/leo.png",
    reading: "Leos are charismatic, confident, and love to lead.",
  },
  {
    name: "Virgo",
    date: "Aug 23 - Sep 22",
    img: "/virgo.png",
    reading: "Virgos are practical, analytical, and perfectionists.",
  },
  {
    name: "Libra",
    date: "Sep 23 - Oct 22",
    img: "/libra.png",
    reading: "Libras value harmony, beauty, and balance in all things.",
  },
  {
    name: "Scorpio",
    date: "Oct 23 - Nov 22",
    img: "/scorpio.png",
    reading: "Scorpios are intense, passionate, and deeply emotional.",
  },
  {
    name: "Sagittarius",
    date: "Nov 22 - Dec 21",
    img: "/sagittarius.png",
    reading: "Sagittarians are adventurous, free-spirited, and optimistic.",
  },
  {
    name: "Capricorn",
    date: "Dec 22 - Jan 19",
    img: "/capricorn.png",
    reading: "Capricorns are disciplined, ambitious, and hard-working.",
  },
  {
    name: "Aquarius",
    date: "Jan 20 - Feb 18",
    img: "/aquarius.png",
    reading: "Aquarians are independent, innovative, and forward-thinking.",
  },
  {
    name: "Pisces",
    date: "Feb 19 - Mar 20",
    img: "/pisces.png",
    reading: "Pisces are empathetic, artistic, and deeply emotional.",
  },
];

export default function ZodiacGrid() {
  const [selectedSign, setSelectedSign] = useState(null);

  return (
    <div className="bg-[#fff9f5] py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#5d4028]">Discover Your Zodiac Vibes</h2>
        <p className="text-[#9e7b5c] mt-2 text-lg">Tap into the stars – find out what your sign says about you.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 container mx-auto">
        {zodiacSigns.map((sign, index) => (
          <div
            key={index}
            className="text-center cursor-pointer"
            onClick={() => setSelectedSign(sign)}
          >
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.5 }}
              className="w-36 h-36 mx-auto origin-center"
            >
              <Image
                src={sign.img}
                alt={sign.name}
                width={150}
                height={150}
                className="mx-auto"
              />
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold text-[#5d4028]">
              {sign.name}
            </h3>
            <p className="text-sm text-[#9e7b5c]">{sign.date}</p>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSign && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-md w-full text-center relative shadow-lg"
            >
              <button
                className="absolute top-2 right-3 text-2xl text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedSign(null)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-2 text-[#5d4028]">
                {selectedSign.name}
              </h2>
              <p className="mb-1 text-[#9e7b5c]">{selectedSign.date}</p>
              <p className="text-[#3e3e3e]">{selectedSign.reading}</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

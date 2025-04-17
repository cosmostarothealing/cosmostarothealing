"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import EyeIcon from "../../../public/eye.svg";
import LeftArrow from "../../../public/left.svg";
import RightArrow from "../../../public/right.svg";

const testimonials = [
  {
    name: "Angie Miller",
    role: "Writer",
    quote:
      "Cosmostarothealing transformed my life. I felt a deep spiritual reset after my first session. Highly recommend to anyone seeking clarity.",
  },
  {
    name: "Daniel Brooks",
    role: "Yoga Instructor",
    quote:
      "The healing energy at Cosmostarothealing is unmatched. I felt a warmth and peace that lasted days after my Reiki treatment.",
  },
  {
    name: "Priya Sharma",
    role: "Entrepreneur",
    quote:
      "Crystals from Cosmostarothealing changed my daily energy. The guidance I received was personal and powerful.",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    position: "absolute",
  }),
};

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#f8f4ef] py-16 px-4 text-center relative overflow-hidden h-[60vh] flex flex-col justify-around container mx-auto">
      <div className="absolute left-1/2 -translate-x-1/2 top-10">
        <Image src={EyeIcon} alt="Eye icon" width={100} height={100} />
      </div>

      <div className="flex justify-center items-center gap-6 mt-20 px-4">
        <button onClick={handlePrev}>
          <Image
            src={LeftArrow}
            alt="Previous"
            className="w-12 h-12 md:w-[50px] md:h-[50px]"
          />
        </button>

        <div className="relative w-full max-w-4xl min-h-[200px] mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <p className="text-md md:text-4xl font-light text-[#826540] leading-snug">
                "{testimonials[index].quote}"
              </p>
              <p className="mt-8 text-[#3e3e3e] font-medium">
                {testimonials[index].name}, {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={handleNext}>
          <Image
            src={RightArrow}
            alt="Next"
            className="w-12 h-12 md:w-[50px] md:h-[50px]"
          />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;

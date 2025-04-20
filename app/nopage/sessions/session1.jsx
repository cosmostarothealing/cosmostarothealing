'use client';
import { motion } from 'framer-motion';
import { MoonIcon, FireIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function SessionsPage() {
  return (
    <div className="min-h-screen bg-[#fcf7f7]">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-center pt-10 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#800505] to-[#d97373] bg-clip-text text-transparent">
              Choose Your Path
            </h1>
            <p className="text-xl text-[#555] mb-8 max-w-2xl mx-auto">
              Whether you seek guidance through ancient wisdom or energetic healing, your transformation begins with a single step.
            </p>
          </motion.div>
        </div>

        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#800505]/10 w-3 h-3 rounded-full"
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [-20, 100],
                opacity: [0, 0.4, 0],
                x: Math.random() * 100 - 50
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Split Layout */}
      <div className="flex flex-col md:flex-row min-h-[60vh] gap-8 px-6 pb-20">
        {/* Tarot Reading Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 group overflow-hidden rounded-[3rem] bg-[#0a0a1a] hover:flex-[1.2] transition-all duration-500"
        >
          <Link href="/sessions/tarot" className="block h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-[#800505]/30 to-transparent" />
            <div className="relative h-full p-12 flex flex-col justify-between text-white">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-[#800505] rounded-2xl flex items-center justify-center">
                  <MoonIcon className="w-10 h-10 text-white animate-pulse" />
                </div>
                <h2 className="text-4xl font-bold">Tarot Reading</h2>
                <p className="text-lg opacity-90 max-w-md">
                  Unveil hidden truths and gain clarity through ancient symbolic wisdom
                </p>
              </div>
              
              {/* Animated stars */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white/20 w-1 h-1 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50
                    }}
                    transition={{
                      duration: 3 + Math.random() * 4,
                      repeat: Infinity
                    }}
                  />
                ))}
              </div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-xl font-semibold mt-8"
              >
                Explore Mysteries
                <span className="text-[#800505]">→</span>
              </motion.div>
            </div>
          </Link>
        </motion.div>

        {/* Reiki Healing Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 group overflow-hidden rounded-[3rem] bg-[#fff5f5] hover:flex-[1.2] transition-all duration-500"
        >
          <Link href="/sessions/reiki" className="block h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[#800505]/10 to-transparent" />
            <div className="relative h-full p-12 flex flex-col justify-between text-[#2a2a2a]">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-[#800505] rounded-2xl flex items-center justify-center">
                  <FireIcon className="w-10 h-10 text-white animate-pulse" />
                </div>
                <h2 className="text-4xl font-bold text-[#800505]">Reiki Healing</h2>
                <p className="text-lg opacity-90 max-w-md">
                  Restore balance and harmony through universal life energy channeling
                </p>
              </div>

              {/* Animated energy particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-[#800505]/30 w-2 h-2 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50
                    }}
                    transition={{
                      duration: 3 + Math.random() * 4,
                      repeat: Infinity
                    }}
                  />
                ))}
              </div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-xl font-semibold mt-8 text-[#800505]"
              >
                Begin Healing
                <span className="text-[#800505]">→</span>
              </motion.div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-2 bg-gradient-to-r from-[#800505] via-[#d97373] to-[#800505] mx-6 rounded-full" />
    </div>
  );
}
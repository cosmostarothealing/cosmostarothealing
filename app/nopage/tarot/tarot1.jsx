'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import TarotBg from '../../../public/tarot.png';
import TarotCards from '../../../public/tarot.png';
import { Star } from 'lucide-react';

export default function TarotPage() {
  return (
    <div className="bg-[#1a0f1f] text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src={TarotBg}
          alt="Tarot background"
          fill
          className="object-cover opacity-20"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-4 font-mystery">Unlock the Secrets Within</h1>
          <p className="text-lg md:text-xl text-white/80 mb-6 max-w-xl mx-auto">Explore your inner universe through personalized tarot readings guided by intuition and ancient wisdom.</p>
          <Link href="#book" className="bg-[#ca9d75] hover:bg-[#926d41] text-white px-6 py-3 rounded-full font-semibold transition">Book a Reading</Link>
        </motion.div>
      </section>

      {/* What is Tarot */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <motion.h2 initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-4xl mb-6 font-bold">What is Tarot?</motion.h2>
        <p className="text-white/80 text-lg leading-relaxed">Tarot is a mirror of your soul—an ancient tool that helps illuminate your path by tapping into intuition and universal archetypes. Whether you're seeking clarity, healing, or direction, tarot offers symbolic insight to guide your journey.</p>
      </section>

      {/* Reading Types */}
      <section className="py-20 px-6 bg-[#241426]">
        <h2 className="text-center text-3xl font-bold mb-12">Choose Your Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{
            title: 'One-Card Pull',
            desc: 'Quick daily guidance to center your energy.',
            icon: '🃏'
          }, {
            title: 'Three-Card Spread',
            desc: 'Explore past, present, and future.',
            icon: '🔮'
          }, {
            title: 'Celtic Cross',
            desc: 'Dive deep into complex situations and soul work.',
            icon: '🌕'
          }].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 px-6 relative">
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <Image src={TarotCards} alt="Tarot cards" fill className="object-contain" />
        </div>
        <div className="relative max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Session</h2>
          <p className="mb-6 text-white/70">Connect with your higher self. Select a tarot reading and reserve your time with our intuitive guide.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md bg-white/10 border border-white/20 focus:outline-none" />
            <select className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white/70">
              <option>Select Reading Type</option>
              <option>One-Card Pull</option>
              <option>Three-Card Spread</option>
              <option>Celtic Cross</option>
            </select>
            <motion.button whileHover={{ scale: 1.03 }} className="w-full bg-[#ca9d75] text-[#1a0f1f] py-3 rounded-md font-bold">Confirm Booking</motion.button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[#1e1320]">
        <h2 className="text-3xl font-bold text-center mb-12">What Seekers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["This tarot session opened my eyes.", "I felt seen and empowered.", "Incredibly accurate and healing."].map((quote, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white/5 p-6 rounded-xl border border-white/10 text-white/80 shadow-lg">
              <Star className="text-yellow-400 mb-2" />
              <p className="italic">"{quote}"</p>
              <p className="text-sm mt-2 text-white/60">- Anonymous</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 px-6 text-center text-sm text-white/50">
        <p>Tarot readings are for spiritual guidance only. They are not a replacement for professional medical, legal, or financial advice.</p>
      </section>
    </div>
  );
}

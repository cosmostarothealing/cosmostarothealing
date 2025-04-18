'use client';

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const TarotPage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const faqs = [
        {
            question: "What can tarot tell me?",
            answer: "Tarot provides insight into your current path and helps you reflect on emotions, relationships, and choices — not a fixed future."
        },
        {
            question: "Is tarot connected to religion or superstition?",
            answer: "Tarot is a symbolic system that anyone can use, regardless of belief. It's more psychological and intuitive than religious."
        },
        {
            question: "Do I need to prepare for a tarot session?",
            answer: "Just come with an open mind and an honest intention. No special preparation is needed."
        },
        {
            question: "How accurate are tarot readings?",
            answer: "Accuracy depends on interpretation and energy. Tarot works best as a reflective tool, not a crystal ball."
        }
    ]

    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index)
    }


    const cardHover = {
        hover: {
            y: -10,
            boxShadow: '0 25px 50px -12px rgba(128, 5, 5, 0.25)'
        }
    };

    return (
        <div className="bg-[#faf9f8]">
            {/* 1. Hero Section */}
            <section
                className="relative h-[60vh] flex items-center justify-center text-white bg-cover bg-cente bg-black/40"
                style={{ backgroundImage: "url('/tarot-b1.png')" }} // make sure this is in your public folder
            >
                <div className="max-w-7xl px-4 text-center   py-20 rounded-xl">
                    <motion.h1
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="bg-white bg-clip-text text-transparent">
                            Discover Your Path
                        </span>
                        <br />
                        Through Tarot
                    </motion.h1>

                    <motion.p className="text-xl mb-8 max-w-2xl mx-auto" {...fadeIn}>
                        Gain clarity, insight, and spiritual guidance from the ancient art of tarot
                    </motion.p>

                    <motion.div whileHover={{ scale: 1.05 }}>
                        <button className="bg-[#800505] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#680404] transition-all">
                            Book a Tarot Session
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* 2. What is Tarot? */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="space-y-6 text-justify"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900">
                            The Mirror of the Soul
                        </h2>
                        <p className="text-lg text-gray-600">
                            Tarot is a 500-year-old symbolic language that acts as a mirror to your subconscious.
                            Through archetypal imagery and intuitive interpretation, we uncover hidden patterns
                            and potential paths forward.
                        </p>
                        <div className="flex gap-4">
                            {['🃏', '👑', '🌙'].map((icon, i) => (
                                <motion.div
                                    key={i}
                                    className="text-4xl p-4 bg-[#f6f5f4] rounded-lg"
                                    whileHover={{ rotate: 15 }}
                                >
                                    {icon}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            "/t1.png",
                            "/t2.png",
                            "/t3.png",
                            "/t4.png"
                        ].map((src, i) => (
                            <motion.div
                                key={i}
                                className="aspect-[3/4] bg-[#f6f5f4] rounded-xl p-4 border-2 border-[#800505]/10"
                                whileHover={{ rotate: i % 2 ? -5 : 5 }}
                            >
                                <img
                                    src={src}
                                    alt={`Tarot Card ${i + 1}`}
                                    className="w-full h-full object-fit rounded-lg"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* 3. Reading Styles */}
            <section className="py-20 bg-[#f6f5f4] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-black uppercase">Reading Styles</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '🃏', title: 'Quick Guidance', duration: '15min', price: '49' },
                            { icon: '🔮', title: 'Past/Present/Future', duration: '30min', price: '89' },
                            { icon: '🌕', title: 'Celtic Cross', duration: '60min', price: '149' },
                            { icon: '💖', title: 'Love Focus', duration: '45min', price: '119' }
                        ].map((reading, i) => (
                            <motion.div
                                key={reading.title}
                                variants={cardHover}
                                whileHover="hover"
                                className="p-8 bg-[#1a1630] rounded-2xl border border-[#800505]/20"
                            >
                                <div className="text-5xl mb-6">{reading.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{reading.title}</h3>
                                <div className="space-y-2 text-gray-400">
                                    <p>{reading.duration} session</p>
                                    <p className="text-xl text-[#ff6868]">${reading.price}</p>
                                </div>
                                <div className="mt-6 h-px bg-[#800505]/30" />
                                <button className="mt-6 w-full py-3 rounded-lg bg-[#800505] hover:bg-[#680404] transition-colors">
                                    Choose
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us */}
            <section className="py-20 bg-[#f6f5f4]">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                    <div className="relative h-96 rounded-3xl overflow-hidden">
                        <img
                            src="/tarot-b.png" // ✅ replace with actual path
                            alt="Tarot Reading Session"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    <motion.div
                        className="space-y-8"
                        initial={{ x: 50 }}
                        whileInView={{ x: 0 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900">Sacred Space for Insight</h2>

                        {[
                            { title: '20+ Years Experience', desc: 'Certified readers with proven track record' },
                            { title: '100% Private', desc: 'Confidential and judgment-free zone' },
                            { title: 'Virtual or In-Person', desc: 'Secure video sessions available worldwide' }
                        ].map((item, i) => (
                            <div key={item.title} className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#800505] text-white flex items-center justify-center">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </section>


            {/* 7. Ethics & FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-10 text-[#800505]">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="border-b border-gray-200 pb-4 cursor-pointer"
                                onClick={() => toggle(i)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDownIcon className="w-5 h-5 text-[#800505]" />
                                    </motion.div>
                                </div>

                                <AnimatePresence initial={false}>
                                    {openIndex === i && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TarotPage;
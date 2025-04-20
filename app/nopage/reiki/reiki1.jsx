'use client';

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

const ReikiPage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const faqs = [
        {
            question: "What is Reiki healing?",
            answer: "Reiki is a Japanese energy healing technique that promotes relaxation, reduces stress, and supports the body's natural healing processes."
        },
        {
            question: "Do I need to believe in Reiki for it to work?",
            answer: "No belief is required. Reiki works with your body's energy whether you're spiritual, skeptical, or simply curious."
        },
        {
            question: "What does a Reiki session feel like?",
            answer: "Most people feel warmth, tingling, or deep relaxation during a session. Some may feel emotional release or mental clarity afterward."
        },
        {
            question: "Is Reiki a replacement for medical treatment?",
            answer: "Reiki is a complementary therapy. It supports overall well-being but should not replace professional medical care."
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
            <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
                {/* Mobile Background */}
                <div
                    className="absolute inset-0 bg-cover bg-bottom bg-black/40 lg:hidden"
                    style={{ backgroundImage: "url('/reiki-b1.png')" }}
                ></div>

                {/* Desktop Background */}
                <div
                    className="absolute inset-0 bg-cover bg-bottom bg-black/40 hidden lg:block"
                    style={{ backgroundImage: "url('/reiki-b.png')" }}
                ></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl px-4 text-center text-white py-20 rounded-xl">
                    <motion.h1
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="bg-white bg-clip-text text-transparent">
                            Experience Deep Healing
                        </span>
                        <br />
                        with Reiki Energy
                    </motion.h1>

                    <motion.p className="text-xl mb-8 max-w-2xl mx-auto" {...fadeIn}>
                        Rebalance your energy, relieve stress, and awaken inner peace through the gentle touch of Reiki
                    </motion.p>

                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link href="/sessions/reiki" className="bg-[#800505] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#680404] transition-all">
                            Book a Reiki Session
                        </Link>
                    </motion.div>
                </div>
            </section>



            {/* 2. What is Tarot? */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <motion.div
                        className="space-y-6 text-justify"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900">Reiki: Energy for Inner Balance</h2>
                        <p className="text-lg text-gray-600">
                            Reiki is a gentle Japanese energy healing technique that promotes relaxation, reduces stress,
                            and supports the body’s natural healing. By channeling universal life force energy through the hands,
                            Reiki helps balance your energy fields and restore harmony within.
                        </p>
                        <div className="flex gap-4">
                            {['✨', '👐', '💖'].map((icon, i) => (
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

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            "/r1.png", // hands near heart chakra
                            "/r2.png", // soft light over body
                            "/r3.png", // reiki symbols (Cho Ku Rei etc.)
                            "/r4.png", // peaceful person meditating with glow
                        ].map((src, i) => (
                            <motion.div
                                key={i}
                                className="aspect-[3/4] bg-[#f6f5f4] rounded-xl p-4 border-2 border-[#800505]/10"
                                whileHover={{ rotate: i % 2 ? -5 : 5 }}
                            >
                                <img
                                    src={src}
                                    alt={`Reiki Image ${i + 1}`}
                                    className="w-full h-full object-cover rounded-lg bg-red-800"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 3. Reading Styles */}
            {/* <section className="py-20 bg-[#F3E8FF] text-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 uppercase text-[#5E35B1]">Reiki Healing Options</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '👐', title: 'Chakra Balance', duration: '30min', price: '69' },
                            { icon: '💫', title: 'Emotional Release', duration: '45min', price: '99' },
                            { icon: '🌿', title: 'Stress Relief', duration: '60min', price: '129' },
                            { icon: '🌸', title: 'Deep Healing', duration: '90min', price: '159' }
                        ].map((session, i) => (
                            <motion.div
                                key={session.title}
                                variants={cardHover}
                                whileHover="hover"
                                className="p-8 bg-white rounded-2xl border border-purple-200 shadow-md transition-shadow hover:shadow-xl"
                            >
                                <div className="text-5xl mb-6">{session.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-[#4A148C]">{session.title}</h3>
                                <div className="space-y-2 text-gray-600">
                                    <p>{session.duration} session</p>
                                    <p className="text-xl text-[#FF80AB] font-semibold">${session.price}</p>
                                </div>
                                <div className="mt-6 h-px bg-purple-100" />
                                <button className="mt-6 w-full py-3 rounded-lg bg-[#7E57C2] text-white hover:bg-[#5E35B1] transition-colors">
                                    Book Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}



            {/* 4. Why Choose Us */}
            <section className="py-20 bg-[#f6f5f4] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden items-center justify-center flex">
                        <img
                            src="/reiki-e.png" // use your reiki background image here
                            alt="Reiki Healing Session"
                            className=" h-full object-fit rounded-3xl"
                        />
                    </div>

                    <motion.div
                        className="space-y-8"
                        initial={{ x: 50 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Energetic Alignment & Healing
                        </h2>

                        {[
                            { title: 'Certified Reiki Masters', desc: 'Trained in Usui and intuitive energy healing practices' },
                            { title: 'Calm & Confidential', desc: 'A peaceful, private space for deep healing' },
                            { title: 'Distance or In-Person', desc: 'Receive healing from anywhere in the world' }
                        ].map((item, i) => (
                            <div key={item.title} className="flex gap-4 items-start">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#800505] text-white flex items-center justify-center text-sm sm:text-base">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
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

export default ReikiPage;
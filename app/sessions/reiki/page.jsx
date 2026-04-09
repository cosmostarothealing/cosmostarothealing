'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SparklesIcon, HeartIcon, SunIcon } from '@heroicons/react/24/solid';




export default function ReikiPage() {
    const services = [
        {
            name: 'Love Healing',
            description: 'Harmonize your heart chakra and emotional body. This session focuses on releasing past emotional wounds, enhancing self-love, and attracting healthy relationships through targeted energy work.',
            price: 'Rs.1200/day',
            op: 'Rs.1200'
        },
        {
            name: 'Career Healing',
            description: 'Enhance clarity, confidence, and growth in your professional life. Helps remove career blockages, attract new opportunities, and align your energy with success and stability.',
            price: 'Rs.333/day',
            op: 'Rs.333'
        },
        {
            name: 'Protection',
            description: 'Strengthen your aura with powerful energetic protection. Shields you from negativity, unwanted influences, and emotional drain while creating a safe and balanced energy field.',
            price: 'Rs.444/day',
            op: 'Rs.444'
        }
    ];

    return (
        <div className="min-h-screen ">
            {/* Hero Section */}
            <section className="relative overflow-hidden text-center pt-10 pb-10 px-6 bg-gradient-to-br from-[#fff0f0] to-[#ffe5e5]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="mb-8 inline-block bg-[#800505]/10 p-4 rounded-2xl">
                        <SparklesIcon className="w-12 h-12 text-[#800505] animate-pulse" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#800505] to-[#d97373] bg-clip-text text-transparent">
                        Reiki Healing
                    </h1>
                    <p className="text-xl text-[#555] mb-8 max-w-2xl mx-auto">
                        Experience profound energy restoration through ancient healing techniques. Balance your life force and awaken your natural healing potential.
                    </p>
                </motion.div>

                {/* Floating elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(15)].map((_, i) => (
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

            {/* Services Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-[#800505]/10 rounded-xl">
                            <HeartIcon className="w-8 h-8 text-[#800505]" />
                        </div>
                        <h2 className="text-3xl font-bold text-[#800505]">Healing Services</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-[#800505]/10"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{service.name}</h3>
                                    <div className="p-2 bg-[#800505]/10 rounded-full">
                                        <SunIcon className="w-6 h-6 text-[#800505]" />
                                    </div>
                                </div>
                                <p className="text-[#555] mb-4">{service.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-[#800505]">{service.price}</span>
                                    <Link
                                        href={`/sessions/reiki/${service.name.toLowerCase().replace(/ /g, '-')}-${service.op.replace('₹', '')}`}
                                        className="bg-[#800505] text-white px-4 py-2 rounded-lg hover:bg-[#6a0404] transition"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <section className="bg-[#800505] text-white py-16 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Ready for Transformation?</h2>
                    <p className="mb-8 text-lg opacity-90">
                        Need personalized energy work? Let's create a custom healing plan for your unique needs.
                    </p>
                    <Link href="/contact-us" className="bg-white text-[#800505] px-8 py-3 rounded-xl font-bold hover:bg-[#f8dcdc] transition">
                        Contact for Custom Healing
                    </Link>
                </div>
            </section>
        </div>
    );
}
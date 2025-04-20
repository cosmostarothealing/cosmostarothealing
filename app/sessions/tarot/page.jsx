'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SparklesIcon, MoonIcon, BookOpenIcon } from '@heroicons/react/24/solid';



export default function TarotPage() {
    const services = {
        generalReadings: [
            {
                name: 'Reconciliation',
                description: 'In-depth look into a past relationship or friendship, checking for chances of reconciliation.',
                price: 'Rs.150',
                duration: '20-30 min'
            },
            {
                name: 'Career',
                description: 'Near future outlook (6 months) of your job/career, includes one personalized question.',
                price: 'Rs.150',
                duration: '20-30 min'
            },
            {
                name: '3 Month Outlook',
                description: 'Overview of next 3 months regarding love life, work life, home environment, and finances.',
                price: 'Rs.175',
                duration: '20-30 min'
            }
        ],
        advancedSpreads: [
            {
                name: '6 Card Spread',
                description: 'Broad view across key life areas: mental health, relationships, career, health, travel, finances.',
                price: 'Rs.300',
                duration: '30-40 min'
            },
            {
                name: '12 Month Spread',
                description: 'Calendar-style projection of the next 12 months from reading month.',
                price: 'Rs.300',
                duration: '30-40 min'
            },
            {
                name: '7 Chakra Spread',
                description: 'Overview of all chakras, identifying blocks and healing needs.',
                price: 'Rs.500',
                duration: '1-2 hrs'
            },
            {
                name: 'Horoscope Spread',
                description: 'In-depth analysis of your birth chart.',
                price: 'Rs.500',
                duration: '1-2 hrs'
            },
            {
                name: 'Question and Answers',
                description: 'General reading where any area of life can be questioned. Rs.100 extra if re-shuffle needed.',
                price: 'Rs.500',
                duration: '1-2 hrs'
            }
        ]
    };

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
                        Tarot Reading
                    </h1>
                    <p className="text-xl text-[#555] mb-8 max-w-2xl mx-auto">
                        Unveil life's mysteries through ancient card wisdom. Find clarity, direction, and insight tailored to your unique journey.
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
                {/* General Readings */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-[#800505]/10 rounded-xl">
                            <BookOpenIcon className="w-8 h-8 text-[#800505]" />
                        </div>
                        <h2 className="text-3xl font-bold text-[#800505]">General Readings</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.generalReadings.map((service, i) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{service.name}</h3>
                                    <span className="bg-[#800505]/10 text-[#800505] px-3 py-1 rounded-full text-sm">
                                        {service.duration}
                                    </span>
                                </div>
                                <p className="text-[#555] mb-4">{service.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-[#800505]">{service.price}</span>
                 
                                    <Link
                                        href={`/sessions/tarot/${service.name.toLowerCase().replace(/ /g, '-')}-${service.price.replace('₹', '')}`}
                                        className="bg-[#800505] text-white px-4 py-2 rounded-lg hover:bg-[#6a0404] transition"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Advanced Spreads */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-[#800505]/10 rounded-xl">
                            <MoonIcon className="w-8 h-8 text-[#800505]" />
                        </div>
                        <h2 className="text-3xl font-bold text-[#800505]">Advanced Spreads</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.advancedSpreads.map((service, i) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-[#800505]/10"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{service.name}</h3>
                                    <span className="bg-[#800505]/10 text-[#800505] px-3 py-1 rounded-full text-sm">
                                        {service.duration}
                                    </span>
                                </div>
                                <p className="text-[#555] mb-4">{service.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-[#800505]">{service.price}</span>
                                    <Link
                                        href={`/sessions/tarot/${service.name.toLowerCase().replace(/ /g, '-')}-${service.price.replace('₹', '')}`}
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
                    <h2 className="text-3xl font-bold mb-6">Ready for Enlightenment?</h2>
                    <p className="mb-8 text-lg opacity-90">
                        Can't find what you're looking for? Let's create a custom reading just for you.
                    </p>
                    <Link href="/contact-us" className="bg-white text-[#800505] px-8 py-3 rounded-xl font-bold hover:bg-[#f8dcdc] transition">
                        Contact for Custom Reading
                    </Link>
                </div>
            </section>
        </div>
    );
}
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CrystalBracelet from "../../../public/Logo.png"; // Add your image

const Hero = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const floatingAnim = {
        floating: {
            y: [-10, 10],
            transition: {
                y: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: "easeInOut",
                },
            },
        },
    };

    return (
        <section className="relative bg-[#f6f5f4] min-h-screen pt-4 overflow-hidden">
            {/* Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 overflow-hidden"
            >
                {/* Floating Spiritual Symbols */}
                {/* <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute left-20 top-1/4 opacity-10"
                >
                    <Image
                        src="/Logo.png" // Add spiritual symbol
                        width={200}
                        height={200}
                        alt="spiritual symbol"
                    />
                </motion.div> */}
            </motion.div>

            <div className=" px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="relative z-10">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } },
                            }}
                        >
                            <motion.p
                                variants={fadeInUp}
                                className="text-[#800505] font-semibold mb-4"
                            >
                                Unlock the Energy of the Universe
                            </motion.p>

                            <motion.h1
                                variants={fadeInUp}
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                            >
                                Journey Beyond the Seen—
                                <span className="text-[#800505] block">Awaken Your Divine Path</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="text-xl text-gray-600 mb-8 max-w-xl"
                            >
                                Let ancient rituals, healing light, and intuitive guidance illuminate your path.
                                Embrace soulful alignment, release old patterns, and step into your highest self.
                            </motion.p>


                            <motion.div
                                variants={fadeInUp}
                                className="flex flex-col lg:flex-row gap-4"
                            >
                                <Link
                                    href="/sessions"
                                    className="bg-[#800505] text-white px-8 py-4 rounded-full text-lg font-semibold  transition-all shadow-lg hover:shadow-xl text-center"
                                >
                                    Book a Session
                                </Link>
                                <Link
                                    href="/shop"
                                    className="border-2 border-[#800505] text-[#800505] px-8 py-4 rounded-full text-lg font-semibold  transition-all text-center"
                                >
                                    Explore Crystals
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:mt-0 mt-12"
                    >
                        {/* Main Product Image */}
                        <motion.div
                            variants={floatingAnim}
                            animate="floating"
                            className="relative z-10"
                        >
                            <Image
                                src={CrystalBracelet}
                                alt="Healing Crystal Bracelet"
                                className="rounded-2xl "
                                priority
                            />
                        </motion.div>

                        {/* Glowing Effect */}
                        {/* <div className="absolute inset-0 -z-10" /> */}

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className=" absolute -bottom-8 right-0 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
                        >
                            <div className="hidden lg:block h-3 w-3 bg-[#800505] rounded-full animate-pulse" />
                            <span className=" hidden lg:block font-semibold text-gray-800">Healer's Choice</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scrolling Indicator */}
            <motion.div
                animate={{ y: [0, 20] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    repeatType: 'reverse',
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <div className="hidden lg:block">

                    <div className=" h-8 w-5 rounded-full border-2 border-[#800505] flex justify-center">
                        <motion.div
                            className=" w-1 h-2 bg-[#800505] rounded-full mt-1"
                            animate={{ y: [0, 6] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                repeatType: 'reverse',
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
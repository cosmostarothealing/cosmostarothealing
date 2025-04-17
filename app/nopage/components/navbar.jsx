"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Updated import
import Image from 'next/image';
import Logo from "../../../public/Logo.png"



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Tarot Reading', href: '/tarot-reading' },
        { name: 'Reiki Healing', href: '/reiki-healing' },
        { name: 'About Us', href: '/about' },
        // { name: 'Blog', href: '/blog' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className=" sticky top-0 z-50 bg-[#f6f5f4] border-[#ca9d75] border-b"
        >
            <div className="px-4 bg-[#f6f5f4]">
                <div className="flex justify-between items-center h-20 lg:px-0">
                    {/* Logo with hover effect */}
                    <Link href="/">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-[70px] lg:w-[70px] cursor-pointer" // adjust width to match text logo size
                        >
                            <Image
                                src={Logo} // replace with your logo path
                                alt="Company Logo"
                                
                                className="w-full h-full"
                                priority
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center ">
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex space-x-10"
                        >
                            {navItems.map((item) => (
                                <motion.li key={item.name} variants={itemVariants}>
                                    <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                                        <Link
                                            href={item.href}
                                            className="text-black text-md transition-colors hover:text-[#800505]"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                </motion.li>
                            ))}

                        </motion.ul>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ x: 20 }}
                            animate={{ x: 0 }}
                            className="ml-8 flex items-center"
                        >
                            <Link
                                href="/free-consultation"
                                className="bg-[#800505] text-white hover:bg-white hover:text-[#800505] border border-[#800505] px-4 font-medium py-3 rounded-full hover:scale-105 transition-all text-md  shadow-lg"
                            >
                                Shop now →
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none p-2"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-8 w-8 z-60" aria-hidden="true" /> // Changed to XMarkIcon
                            ) : (
                                <Bars3Icon className="h-8 w-8" aria-hidden="true" /> // Changed to Bars3Icon
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg"
                    >
                        <div className="pt-2 pb-4 space-y-4 px-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="border-b block text-black hover:text-blue-600 px-4 py-3 font-2xl hover:bg-gray-50  transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/free-consultation"
                                className="bg-[#800505] text-white hover:bg-white hover:text-[#800505] border border-[#800505] block text-center px-6 py-3 rounded-lg  transition-colors font-semibold shadow-md"
                            >
                                Shop now →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
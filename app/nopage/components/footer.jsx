'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className="bg-[#800505] text-white relative overflow-hidden ">
      {/* Decorative Top Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1  bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold font-mystery">Cosmostarot & Healing</h3>
            <p className="text-gray-200">
              Unlock your spiritual potential through ancient practices and modern guidance.
            </p>
            <div className="flex gap-5 text-amber-200">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Explore</h4>
            {['Tarot Reading', 'Reiki Healing', 'Crystal Shop'].map((link) => (
              <motion.div
                key={link}
                whileHover={{ x: 5 }}
                className="text-gray-200 hover:text-amber-200 transition-colors"
              >
                <Link href={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-amber-200" />
                <span>schitrangdaa@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-amber-200" />
                <span>+91 87360 85038</span>
              </div>
              <div className="flex items-center space-x-2">
                <GlobeAltIcon className="h-5 w-5 text-amber-200" />
                <span>New Moon Studio, Cosmic Valley</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="my-12 h-px bg-white/20"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-300 text-sm"
        >
          © {new Date().getFullYear()} Cosmostarot & Healing. All rights reserved.<br />
          <div className="mt-2">
            <Link href="/privacy" className="hover:text-amber-200">Sacred Privacy</Link> • 
            <Link href="/terms" className="hover:text-amber-200 mx-2">Universal Terms</Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Element */}
      <motion.div
        className="absolute bottom-10 left-20 opacity-10"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <path
            d="M50 15L60 40H40L50 15ZM50 85L60 60H40L50 85ZM15 50L40 60V40L15 50ZM85 50L60 40V60L85 50Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </footer>
  );
};

export default Footer;

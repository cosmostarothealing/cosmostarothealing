'use client';
import { motion } from 'framer-motion';
import { SparklesIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/solid';

export default function AboutPage() {
  return (
    <div className="bg-[#fefcfb] text-[#2a2a2a]">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-tr from-[#fff] via-[#fdf3f3] to-[#ffeaea]">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:flex items-center justify-between relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Meet <span className="text-[#800505]">Chitrangdaa Shany,</span>
            </h1>
            <p className="text-lg text-[#555]">
              I&apos;m an intuitive guide and energy healer, helping souls rediscover their path through connection, light, and ancient wisdom. 🌿
            </p>
          </motion.div>

          {/* Photo with Responsive Frame */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 lg:mt-0 lg:w-1/3 relative"
          >
            <img
              src="/owner.jpeg"
              alt="Chitrangdaa Shany"
              className="w-full border-4 border-[#800505]/20 shadow-xl 
                         rounded-xl lg:rounded-full transition-all duration-500"
            />
          </motion.div>
        </div>

        {/* Animated Floating Sparkles in Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-10 right-10 animate-pulse text-[#800505]">
            <SparklesIcon className="w-10 h-10" />
          </div>
          <div className="absolute bottom-20 left-20 animate-bounce text-[#800505]">
            <SparklesIcon className="w-6 h-6" />
          </div>
          <div className="absolute bottom-10 right-1/3 animate-spin-slow text-[#800505]">
            <SparklesIcon className="w-8 h-8" />
          </div>
        </motion.div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold mb-4"
          >
            What I Offer
          </motion.h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            Every session is tailored to nourish your soul&apos;s journey. Here&apos;s how I can support your transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              title: 'Tarot Wisdom',
              desc: 'Soul-guided readings that reveal your path with clarity and light.',
              icon: <SparklesIcon className="w-8 h-8 text-[#800505]" />,
            },
            {
              title: 'Reiki Healing',
              desc: 'Restore your energetic flow with Reiki and chakra balancing.',
              icon: <HeartIcon className="w-8 h-8 text-[#800505]" />,
            },
            {
              title: 'Spiritual Mentoring',
              desc: 'Deep 1:1 sessions to awaken your intuition and purpose.',
              icon: <GlobeAltIcon className="w-8 h-8 text-[#800505]" />,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-2xl shadow-md bg-[#fafafa] border border-[#800505]/10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#555]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#800505] text-white py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="text-3xl font-semibold mb-4">Ready to Awaken?</h2>
          <p className="mb-6 text-[#fff]/80">
            Book your first session or send a message to start your sacred journey with Chitrangdaa.
          </p>
          <a
            href="mailto:guidance@sacredspace.com"
            className="inline-block bg-white text-[#800505] px-6 py-3 rounded-full font-medium hover:bg-[#f8dcdc] transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

    </div>
  );
}

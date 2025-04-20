'use client';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error - please try again later');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5f5] via-[#fffaf0] to-[#ffe4e4] flex items-center justify-center px-4 py-10">
      <div className="relative max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Panel (unchanged) */}


<motion.div
initial={{ opacity: 0, x: -40 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
className="bg-[#800505] text-white p-10 flex flex-col justify-center relative z-10"
>
<h2 className="text-4xl font-bold mb-6 leading-snug">Let’s Connect</h2>
<p className="mb-8 text-white/80">
  I'd love to hear from you. Whether you have a question, want to book a session, or just say hi — I’m here. ✨
</p>

<div className="space-y-6 text-white/90">
  <div className="flex items-center gap-4">
    <EnvelopeIcon className="w-6 h-6" />
    <a href="mailto:schitrangdaa@gmail.com">schitrangdaa@gmail.com</a>
  </div>
  <div className="flex items-center gap-4">
    <PhoneIcon className="w-6 h-6" />
    <a href="https://wa.me/918736085038" target="_blank">+91 87360 85038</a>
  </div>
  <div className="flex items-center gap-4">
    <MapPinIcon className="w-6 h-6" />
    <span>Online – Available Globally 🌍</span>
  </div>
</div>

{/* Floating Spiritual Shapes */}
<div className="absolute top-0 right-0 opacity-20">
  <img src="/tarot-symbol.png" alt="symbol" className="w-40 rotate-12" />
</div>
</motion.div>


        {/* Right Panel - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative p-10 bg-[#fff] flex flex-col justify-center"
        >
          {success ? (
            <div className="text-center p-6 bg-green-100 text-green-700 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Message Sent! ✨</h3>
              <p>Thank you for reaching out. I'll respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-1 text-sm font-medium text-[#333]">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#800505]/30"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-[#333]">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#800505]/30"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-[#333]">Message *</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#800505]/30"
                />
              </div>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#800505] text-white py-3 rounded-xl font-semibold hover:bg-[#a02020] transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}






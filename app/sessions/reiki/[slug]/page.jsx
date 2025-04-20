'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const ReikiBookingPage = () => {
    const { slug } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Parse service details from slug
    const getServiceDetails = () => {
        const [namePart, pricePart] = slug.split('-').slice(0, -1).join('-').split(/(?=\d)/);
        const serviceName = namePart.replace(/-/g, ' ');
        const servicePrice = `${slug.split('-').pop()}`;
        return { serviceName, servicePrice };
    };

    const { serviceName, servicePrice } = getServiceDetails();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/book-reiki', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    serviceName,
                    servicePrice
                }),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '', mobile: '', message: '' });
            }
        } catch (error) {
            console.error('Booking error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 min-h-screen">
            <div className="bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-[#800505] mb-6">
                    Book {serviceName} Healing
                </h1>

                <div className="mb-8 p-4 bg-[#800505]/10 rounded-lg">
                    <p className="text-lg font-semibold">
                        Service: {serviceName} ({servicePrice})
                    </p>
                </div>

                {success ? (
                    <div className="p-6 bg-green-100 text-green-700 rounded-lg text-center text-xl font-semibold">
                        🌟 Healing Session Request Received!<br />
                        We'll connect within 24 hours to schedule your energy work.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Full Name *</label>
                            <input
                                type="text"
                                required
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#800505]"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2">Mobile *</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#800505]"
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Email *</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#800505]"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Healing Intentions (Optional)</label>
                            <textarea
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#800505]"
                                rows="4"
                                placeholder="Share any specific areas you want to focus on..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#800505] text-white p-3 rounded-lg hover:bg-[#6a0404] transition disabled:opacity-50 font-semibold text-lg"
                        >
                            {loading ? 'Sending Healing Request...' : 'Request Healing Session'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ReikiBookingPage;
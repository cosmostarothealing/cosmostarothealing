"use client";
import { useEffect, useState } from "react";
import Navbar from "../../nopage/components/shopnav";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const storedName = localStorage.getItem("userName") || "";
        const storedEmail = localStorage.getItem("userEmail") || "";
        setFormData(prev => ({
            ...prev,
            name: storedName,
            email: storedEmail
        }));

        // Load cart items from localStorage
        const loadCart = () => {
            const items = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith("cart_")) {
                    const slug = key.split("_")[1];
                    const quantity = parseInt(localStorage.getItem(key));
                    if (quantity > 0) items.push({ slug, quantity });
                }
            }
            setCartItems(items);
        };

        loadCart();
    }, []);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    cartItems // Include cart items in the request
                }),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    city: "",
                    state: "",
                    pincode: ""
                });
                // Clear cart
                cartItems.forEach(item => {
                    localStorage.removeItem(`cart_${item.slug}`);
                });
                window.dispatchEvent(new Event("cartUpdated"));
            }
        } catch (error) {
            console.error('Checkout error:', error);
        } finally {
            setLoading(false);
        }
    };

    // ... rest of the component remains the same ...


    return (
        <>
            <Navbar/>
            <div className="min-h-screen text-black px-6 py-10">
                <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-md border border-gray-200">
                    <h1 className="text-2xl font-bold text-red-800 mb-6 text-center">
                        Checkout
                    </h1>
                    
                    {success ? (
                        <div className="p-6 bg-green-100 text-green-700 rounded-lg text-center">
                        <p className="text-xl font-semibold mb-4">🎉 Your Order Has Been Placed!</p>
                        <p>Thank you for your purchase. A confirmation email has been sent to you.</p>
                        <p>Our team will contact you shortly to confirm the details and provide payment instructions.</p>
                        <p>Once payment is received, we’ll proceed with processing and shipping your order.</p>
                    </div>
                    
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* ... (keep existing form fields unchanged) ... */}
                            <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                            required
                        />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                            <label className="block text-sm font-medium mb-1">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-800"
                                required
                            />
                        </div>
                    </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-red-800 text-white font-semibold rounded hover:bg-red-700 transition disabled:opacity-70"
                            >
                                {loading ? 'Placing Order...' : 'Place Order'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}






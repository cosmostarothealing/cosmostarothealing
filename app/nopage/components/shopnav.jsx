"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const getCartCount = () => {
            let total = 0;
            for (let key in localStorage) {
                if (key.startsWith("cart_")) {
                    const quantity = parseInt(localStorage.getItem(key));
                    if (!isNaN(quantity)) total += quantity;
                }
            }
            setCartCount(total);
        };
    
        getCartCount();
    
        // Listen to both storage and custom update events
        window.addEventListener("storage", getCartCount);
        window.addEventListener("cartUpdated", getCartCount); // 👈 listen for custom events
    
        return () => {
            window.removeEventListener("storage", getCartCount);
            window.removeEventListener("cartUpdated", getCartCount); // 👈 cleanup
        };
    }, []);
    

    return (
        <nav className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between">
            {/* Left Side: Google Sign-in */}
            <div className="flex items-center gap-4">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-black font-medium px-3 py-1.5 rounded-lg transition"
                >
                    <FcGoogle className="text-xl" />
                    Sign in with Google
                </motion.button>
            </div>

            {/* Right Side: Cart Link with Badge */}
            <div className="relative">
                <Link
                    href="/shop/cart"
                    className="group flex items-center gap-2 text-red-800 font-semibold text-lg hover:underline underline-offset-4 transition"
                >
                    <FiShoppingCart className="text-2xl group-hover:scale-110 transition-transform" />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 left-3 bg-red-700 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                            {cartCount}
                        </span>
                    )}
                    Cart →
                </Link>

                {/* Cart Count Badge */}
            </div>
        </nav>
    );
}

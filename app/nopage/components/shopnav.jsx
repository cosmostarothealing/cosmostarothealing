"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../lib/firebase";
import Image from "next/image";

export default function Navbar() {
    const [cartCount, setCartCount] = useState(0);
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef();

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

        window.addEventListener("storage", getCartCount);
        window.addEventListener("cartUpdated", getCartCount);

        // Load user from localStorage
        const storedEmail = localStorage.getItem("userEmail");
        const storedName = localStorage.getItem("userName");
        const storedPhoto = localStorage.getItem("userPhoto");

        if (storedEmail && storedName && storedPhoto) {
            setUser({
                email: storedEmail,
                displayName: storedName,
                photoURL: storedPhoto,
            });
        }

        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("storage", getCartCount);
            window.removeEventListener("cartUpdated", getCartCount);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const loggedInUser = result.user;
            setUser(loggedInUser);

            // Save to localStorage
            localStorage.setItem("userEmail", loggedInUser.email);
            localStorage.setItem("userName", loggedInUser.displayName);
            localStorage.setItem("userPhoto", loggedInUser.photoURL);
        } catch (error) {
            console.error("Google Sign-in error:", error);
        }
    };

    const handleLogout = () => {
        signOut(auth);
        setUser(null);
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userName");
        localStorage.removeItem("userPhoto");
        setShowDropdown(false);
    };

    return (
        <nav className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between">
            {/* Left Side: Sign In or User Info */}
            <div className="flex items-center gap-4 relative" ref={dropdownRef}>
                {!user ? (
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-black font-medium px-3 py-1.5 rounded-lg transition"
                        onClick={handleGoogleSignIn}
                    >
                        <FcGoogle className="text-xl" />
                        Sign in with Google
                    </motion.button>
                ) : (
                    <div
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Image
                            src={user.photoURL}
                            alt="profile"
                            width={36}
                            height={36}
                            className="rounded-full border border-gray-300"
                        />
                        <span className="text-sm font-medium text-gray-700">
                            Hi 👋, {user.displayName?.split(" ")[0]}
                        </span>
                    </div>
                )}

                {/* Dropdown */}
                {showDropdown && (
                    <div className="absolute top-14 left-0 bg-white border rounded shadow-md w-40 z-10">
                        <Link
                            href="/my-orders"
                            className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                            onClick={() => setShowDropdown(false)}
                        >
                            My Orders
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>

            {/* Right Side: Cart */}
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
            </div>
        </nav>
    );
}

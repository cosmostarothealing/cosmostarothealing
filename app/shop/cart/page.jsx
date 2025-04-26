"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Navbar from "../../nopage/components/shopnav";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../lib/firebase";


const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-gray-200 rounded-lg relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
    </div>
);

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);


    const router = useRouter();

    const handleCheckout = async () => {
        const userEmail = localStorage.getItem("userEmail");
        const userName = localStorage.getItem("userName");
        const userPhoto = localStorage.getItem("userPhoto");

        if (!userEmail || !userName || !userPhoto) {
            // User not signed in — trigger sign in
            try {
                const result = await signInWithPopup(auth, provider);
                const user = result.user;

                localStorage.setItem("userEmail", user.email);
                localStorage.setItem("userName", user.displayName);
                localStorage.setItem("userPhoto", user.photoURL);

                router.push("/shop/checkout");
            } catch (error) {
                alert("Sign in failed. Please try again.");
            }
        } else {
            // User already signed in
            router.push("/shop/checkout");
        }
    };


    // Load cart items from localStorage
    useEffect(() => {
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
        window.addEventListener("cartUpdated", loadCart);
        return () => window.removeEventListener("cartUpdated", loadCart);
    }, []);

    // Fetch product details
    useEffect(() => {
        const fetchProducts = async () => {
            const productData = {};
            for (const item of cartItems) {
                try {
                    const res = await fetch(`/api/products/${item.slug}`);
                    const data = await res.json();
                    productData[item.slug] = data;
                } catch (error) {
                    console.error("Error fetching product:", error);
                }
            }
            setProducts(productData);
            setLoading(false);
        };

        if (cartItems.length > 0) fetchProducts();
        else setLoading(false);
    }, [cartItems]);

    // Update quantity in localStorage
    const updateQuantity = (slug, quantity) => {
        if (quantity <= 0) {
            localStorage.removeItem(`cart_${slug}`);
        } else {
            localStorage.setItem(`cart_${slug}`, quantity);
        }
        window.dispatchEvent(new Event("cartUpdated"));
    };

    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => {
        const price = products[item.slug]?.price || 0;
        return sum + (price * item.quantity);
    }, 0);

   
    const total = subtotal;

    if (!loading && cartItems.length === 0) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center"
                    >
                        <h1 className="text-3xl font-bold text-black mb-4">Your Cart is Empty</h1>
                        <Link
                            href="/shop"
                            className="inline-block bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-900 transition-all font-medium"
                        >
                            Continue Shopping
                        </Link>
                    </motion.div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <div className="container mx-auto px-1 lg:px-10 py-8">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-3xl font-bold text-black mb-8"
                    >
                        Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                    </motion.h1>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {cartItems.map((item) => {
                                const product = products[item.slug] || {};
                                const images = [product.img1, product.img2].filter(Boolean);

                                return (
                                    <div key={item.slug} className="bg-white rounded-xl shadow-lg p-4 lg:p-6 border border-gray-200">
                                        <div className="flex gap-6">
                                            {/* Product Image */}
                                            <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                                                {images[0] ? (
                                                    <Image
                                                        src={images[0]}
                                                        alt={product.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <Skeleton className="w-full h-full" />
                                                )}
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-black">
                                                            {product.name || <Skeleton className="h-6 w-48" />}
                                                        </h3>
                                                        <div className="text-red-800 font-bold text-lg mt-2">
                                                            Rs. {product.price ? (product.price * item.quantity).toFixed(2) : <Skeleton className="h-6 w-20 mt-2" />}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => updateQuantity(item.slug, 0)}
                                                        className="text-gray-500 hover:text-red-800"
                                                    >
                                                        <XMarkIcon className="h-6 w-6" />
                                                    </button>
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="mt-4 flex items-center gap-4">
                                                    <div className="flex items-center gap-2 border-2 border-red-800 rounded-lg px-3">
                                                        <button
                                                            onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                                                            className="text-red-800 p-2"
                                                        >
                                                            <MinusIcon className="h-5 w-5" />
                                                        </button>
                                                        <span className="text-lg font-medium w-8 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                                                            className="text-red-800 p-2"
                                                        >
                                                            <PlusIcon className="h-5 w-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 lg:sticky lg:top-8">
                            <h2 className="text-2xl font-bold text-black mb-6">Order Summary</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">Rs. {subtotal.toFixed(2)}</span>
                                </div>




                                <div className="border-t pt-4">
                                    <div className="flex justify-between text-xl font-bold text-black">
                                        <span>Total</span>
                                        <span>Rs. {total.toFixed(2)}</span>

                                    </div>
                                    <div className="flex justify-end">
                                        <span className="text-gray-600">+ shipping charges</span>
                                    </div>
                                </div>
                            </div>


                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-red-800 text-white py-3 rounded-lg font-bold mt-6 hover:bg-red-900 transition-colors"
                                onClick={handleCheckout}
                            >

                                Proceed to Checkout
                            </motion.button>


                            <Link
                                href="/shop"
                                className="inline-block w-full text-center text-red-800 hover:text-red-900 font-medium mt-4"
                            >
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
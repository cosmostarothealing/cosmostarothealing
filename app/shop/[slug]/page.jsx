"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "../../nopage/components/shopnav"

const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-gray-200 rounded-lg relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
    </div>
);

export default function ProductPage() {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(0);

    // Sync with localStorage
    useEffect(() => {
        const storedQty = localStorage.getItem(`cart_${slug}`);
        if (storedQty) setQuantity(parseInt(storedQty));
    }, [slug]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${slug}`);
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                console.error("Error fetching product:", err);
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchProduct();
    }, [slug]);

    // Sync localStorage
    useEffect(() => {
        if (!slug) return;
        if (quantity > 0) {
            localStorage.setItem(`cart_${slug}`, quantity);
        } else {
            localStorage.removeItem(`cart_${slug}`);
        }
    
        // Fire custom event so Navbar can listen
        window.dispatchEvent(new Event("cartUpdated")); // 👈 dispatch after change
    }, [quantity, slug]);
    

    const images = product ? [product.img1, product.img2].filter(Boolean) : [];

    return (
        <>
        <Navbar/>
        <div className=" min-h-screen py-10">
            <div className="container mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Image Section */}
                <div className="space-y-4">
                    {loading ? (
                        <Skeleton className="w-full h-96" />
                    ) : (
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="relative h-96 rounded-lg overflow-hidden shadow-md"
                        >
                            <Image
                                src={images[selectedImage]}
                                alt={product?.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    )}

                    {/* Thumbnails */}
                    {loading ? (
                        <div className="flex justify-between gap-2">
                            {[...Array(2)].map((_, i) => (
                                <Skeleton key={i} className="w-[calc(50%-0.5rem)] h-24" />
                            ))}
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            {images.map((img, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative  h-24 w-1/2 mx-2 rounded-lg overflow-hidden shadow-md transition-transform
                    ${selectedImage === index ? "ring-4 ring-red-800 scale-105" : "hover:scale-105"}`}
                                >
                                    <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                                </motion.button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Details */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {loading ? (
                        <>
                            <Skeleton className="h-10 w-3/4 mb-4" />
                            <Skeleton className="h-6 w-1/4 mb-6" />
                            <Skeleton className="h-32 w-full mb-6" />
                            <div className="flex gap-4">
                                <Skeleton className="h-12 flex-1" />
                                <Skeleton className="h-12 flex-1" />
                            </div>
                        </>
                    ) : (
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl font-bold text-black">{product.name}</h1>
                            <p className="text-2xl font-semibold text-red-800 mt-2">Rs. {product.price}</p>

                            <div className="mt-6 h-full">
                                <h2 className="text-xl font-semibold text-black mb-3 border-b-2 border-red-800 inline-block pb-1">
                                    Product Description
                                </h2>
                                <div className="bg-gray-100 border border-gray-300 p-5 rounded-xl shadow-sm">
                                    <p className="text-gray-700 text-base leading-relaxed tracking-wide">
                                        {product.description || "This product has everything you need. Premium quality, reliable performance, and crafted with care."}
                                    </p>
                                </div>
                            </div>


                            {/* Quantity & Actions */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                {/* Add to Cart / Quantity */}
                                <div className=" w-full">
                                    {quantity > 0 ? (
                                        <div className="flex items-center justify-between bg-gray-200 rounded-lg px-4 py-3">
                                            <motion.button
                                                onClick={() => setQuantity(q => Math.max(q - 1, 0))}
                                                className="text-xl font-bold text-black hover:text-red-800"
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                −
                                            </motion.button>
                                            <p className="font-medium text-black">{quantity}</p>
                                            <motion.button
                                                onClick={() => setQuantity(q => q + 1)}
                                                className="text-xl font-bold text-black hover:text-red-800"
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                +
                                            </motion.button>
                                        </div>
                                    ) : (
                                        <motion.button
                                            onClick={() => setQuantity(1)}
                                            className="w-full bg-red-800 text-white py-3 rounded-lg font-medium shadow-md hover:bg-red-700 transition-all"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            Add to Cart
                                        </motion.button>
                                    )}
                                </div>

                                {/* Buy Now */}
                                {/* <div className="sm:w-1/2 w-full">
                                    <motion.button
                                        className="w-full bg-black text-white py-3 rounded-lg font-medium shadow-md hover:bg-gray-800 transition-all"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        Buy Now
                                    </motion.button>
                                </div> */}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const SkeletonCard = () => (
  <div className="rounded-xl overflow-hidden bg-white shadow-lg animate-pulse">
    <div className="relative aspect-[5/4] bg-red-100/20" />
    <div className="p-4 space-y-2">
      <div className="h-5 bg-red-100/30 w-3/4 rounded-full" />
      <div className="h-4 bg-red-100/20 w-1/2 rounded-full" />
      <div className="h-8 bg-red-100/30 w-2/3 rounded-lg mt-2" />
    </div>
  </div>
);

export default function CategorySection({ category, loadedCategories, setLoadedCategories }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView && !loadedCategories.has(category)) {
      setLoading(true);
      const fetchProducts = async () => {
        try {
          const res = await fetch(`/api/products?type=${encodeURIComponent(category)}`);
          const data = await res.json();
          const filtered = data.filter((product) => product.type === category);
          setProducts(filtered);
          setLoadedCategories(prev => new Set(prev).add(category));
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProducts();
    }
  }, [inView, category, loadedCategories, setLoadedCategories]);
  
  // ⬇️ Skip rendering if no products
  if (!loading && loadedCategories.has(category) && products.length === 0) {
    return null;
  }
  

  return (
    <section ref={ref} className="px-1 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6 text-black relative pb-4">
        {category}
        <span className="absolute bottom-0 left-0 w-16 h-1 bg-red-800 rounded-full"></span>
      </h2>

      <motion.div
        className="flex snap-x snap-mandatory overflow-x-auto pb-8 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {loading || !loadedCategories.has(category) ? (
          [...Array(4)].map((_, i) => (
            <div key={i} className="min-w-[85%] mr-4 flex-shrink-0 lg:min-w-0 lg:mr-0">
              <SkeletonCard />
            </div>
          ))
        ) : (
          products.map((product) => (
            <motion.div
              key={product._id}
              className="snap-start min-w-[85%] mr-4 flex-shrink-0 lg:min-w-0 lg:mr-0 relative group"
              whileTap={{ scale: 0.98 }}
            >
              <Link href={`/shop/${product._id}`} className="block">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <motion.img
                      src={product.img1}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 0 }}
                    />
                    <motion.img
                      src={product.img2}
                      alt={`${product.name} hover`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-bold text-black truncate">
                      {product.name}
                    </h3>
                    <p className="text-red-800 font-semibold text-lg">
                      Rs. {product.price}
                    </p>
                    <button className="w-full py-2 text-sm font-medium text-white bg-red-800 rounded-lg hover:bg-red-900 transition-colors duration-200">
                      View Product
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        )}
      </motion.div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkeletonCard = () => (
  <div className="rounded-xl overflow-hidden bg-white shadow animate-pulse">
    <div className="relative aspect-[5/4] bg-gray-200" />
    <div className="p-4 space-y-2">
      <div className="h-4 bg-gray-300 w-3/4 rounded" />
      <div className="h-4 bg-gray-200 w-1/2 rounded" />
      <div className="h-8 bg-gray-300 w-2/3 rounded mt-2" />
    </div>
  </div>
);

export default function CategorySection({ title, products }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  if (!products.length) return null;

  return (
    <section ref={ref}>
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
        {title}
      </h2>

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {inView
          ? products.map((product) => (
              <motion.div
                key={product._id}
                className="group relative rounded-xl overflow-hidden shadow transition duration-300"
                
                whileTap={{ scale: 0.98 }}
              >
                <Link href={`/shop/${product._id}`}>
                  <div>
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
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Rs. {product.price}
                      </p>
                      
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          : [...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
      </motion.div>
    </section>
  );
}

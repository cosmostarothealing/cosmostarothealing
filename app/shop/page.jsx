"use client";

import { useEffect, useState } from "react";
import CategorySection from "../nopage/components/CategorySection";
import Navbar from "../nopage/components/shopnav"

const CATEGORIES = [
  "Tumble stone",
  "Raw stone",
  "Reiki stone",
  "Worry bracelets",
  "Spell candles",
];

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="px-1 py-4  min-h-screen">
      {CATEGORIES.map((cat) => (
        <CategorySection
          key={cat}
          title={cat}
          products={products.filter((p) => p.type === cat)}
        />
      ))}
    </div>
    </>
  );
}

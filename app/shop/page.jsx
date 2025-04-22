"use client";

import { useState } from "react";
import CategorySection from "../nopage/components/CategorySection";
import Navbar from "../nopage/components/shopnav"

const CATEGORIES = [
  "Tumble stone",
  "Raw stone",
  "Reiki stone",
  "Worry stone",
  "Spell candles",
  "Bracelets",
];

export default function ShopPage() {
  const [loadedCategories, setLoadedCategories] = useState(new Set());

  return (
    <>
      <Navbar />
      <div className="px-1 py-4 min-h-screen">
        {CATEGORIES.map((cat) => (
          <CategorySection
            key={cat}
            category={cat}
            loadedCategories={loadedCategories}
            setLoadedCategories={setLoadedCategories}
          />
        ))}
      </div>
    </>
  );
}
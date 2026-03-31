"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { products, CATEGORIES, getProductsByCategory, type Category } from "@/lib/products"
import ProductCard from "@/components/ProductCard"
import ScrollReveal from "@/components/ScrollReveal"

function ShopContent() {
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState<Category>("All")
  const [filterOpen, setFilterOpen] = useState(false)

  useEffect(() => {
    const catParam = searchParams.get("cat") as Category
    if (catParam && CATEGORIES.includes(catParam)) {
      setActiveFilter(catParam)
    }
  }, [searchParams])

  const filteredProducts = getProductsByCategory(activeFilter)

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Header */}
      <div className="pt-28 px-6 md:px-10 pb-6 flex items-end justify-between">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl tracking-[-0.04em] mb-2">SHOP ALL</h1>
          <p className="text-[#888] text-xs font-body tracking-[0.15em] uppercase">{filteredProducts.length} PRODUCTS</p>
        </div>
        <button
          onClick={() => setFilterOpen(true)}
          className="font-heading text-[11px] tracking-[0.2em] px-7 py-3 border border-[#444] hover:bg-white hover:text-[#050505] transition-colors duration-200"
        >
          FILTER
        </button>
      </div>

      {/* Filter Drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out"
            onClick={() => setFilterOpen(false)}
          />
          <div
            className="absolute left-0 top-0 h-full w-80 bg-[#050505] border-r border-[#222] pt-28 px-8 transition-all duration-300 ease-out"
            style={{
              transform: filterOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-heading text-base tracking-[0.2em]">FILTER</span>
              <button
                onClick={() => setFilterOpen(false)}
                className="text-[#888] hover:text-[#ff2020] text-xl transition-colors duration-200"
              >
                &times;
              </button>
            </div>
            <div className="font-body text-[10px] text-[#888] tracking-[0.2em] uppercase mb-4">CATEGORY</div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setFilterOpen(false); }}
                className="block w-full text-left py-3 border-b border-[#1a1a1a] font-body text-sm transition-colors duration-200"
                style={{ color: activeFilter === cat ? "#fff" : "#888", fontWeight: activeFilter === cat ? 700 : 400 }}
              >
                {cat === "All" ? "SHOP ALL" : cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product, i) => (
          <ScrollReveal key={product.id} delay={i * 40}>
            <ProductCard product={product} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ShopContent />
    </Suspense>
  )
}

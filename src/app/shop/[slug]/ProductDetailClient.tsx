"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { type Product } from "@/lib/products"
import { useCart } from "@/store/cart"

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    if (!selectedSize) return

    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
    })

    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="flex flex-wrap border-b border-[#222]">
      {/* Left Section - Product Info */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center p-8 md:p-12 border-r border-[#222]">
        <div>
          <p className="text-[#888] text-[10px] tracking-widest font-body uppercase mb-6">
            BACKROOM
          </p>
          <h1 className="font-heading text-4xl md:text-5xl tracking-brutal mb-4">
            {product.name}
          </h1>
          <p className="font-body text-2xl text-white mb-3">
            ${product.price}
          </p>
          <p className="font-body text-sm text-[#888] mb-6">
            {product.tagline}
          </p>
          <p className="font-body text-xs text-[#666] leading-relaxed mb-8 max-w-sm">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="mb-8">
            <p className="font-body text-xs text-[#888] mb-4 tracking-wide">SIZE</p>
            <div className="flex gap-3 flex-wrap">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center font-heading text-xs tracking-wide transition-all ${
                    selectedSize === size
                      ? "bg-white text-[#050505]"
                      : "bg-transparent border border-[#444] text-white hover:border-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag Button */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`w-full py-4 font-heading text-sm tracking-wide transition-all ${
              !selectedSize
                ? "bg-[#1a1a1a] text-[#666] cursor-not-allowed"
                : added
                  ? "bg-white text-[#050505]"
                  : "bg-white text-[#050505] hover:bg-[#888]"
            }`}
          >
            {added ? "ADDED" : "ADD TO BAG"}
          </button>
        </div>
      </div>

      {/* Right Section - Images */}
      <div className="w-full lg:w-1/2 p-8 md:p-12 space-y-8">
        {/* Main Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Detail Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a] scale-105 origin-top">
          <Image
            src={product.image}
            alt={`${product.name} detail`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

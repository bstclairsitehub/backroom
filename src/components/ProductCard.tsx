"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/store/cart";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleSizeClick = (size: string, e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
      image: product.image,
    });
  };

  return (
    <Link href={`/shop/${product.slug}`}>
      <div
        className="border border-[#222] overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-white/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Image Container */}
        <div className="aspect-[3/4] relative overflow-hidden bg-[#050505]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 500ms ease-out",
            }}
          />

          {/* Quick Add Bar */}
          {isHovered && (
            <div
              className="absolute bottom-0 left-0 right-0 bg-[#050505] border-t border-[#222] p-3 flex flex-col gap-2"
              style={{
                animation: "slideUp 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            >
              <style>{`
                @keyframes slideUp {
                  from {
                    transform: translateY(100%);
                    opacity: 0;
                  }
                  to {
                    transform: translateY(0);
                    opacity: 1;
                  }
                }
              `}</style>
              <div className="font-heading text-[12px] text-white tracking-wide">
                QUICK ADD
              </div>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={(e) => handleSizeClick(size, e)}
                    className="flex-1 text-[11px] py-2 border border-[#222] text-white hover:bg-white hover:text-[#050505] transition-colors duration-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-3 flex justify-between items-end gap-2">
          <h3 className="font-heading text-[12px] text-white tracking-wide">
            {product.name}
          </h3>
          <span className="font-body text-[12px] text-[#888]">
            ${product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}

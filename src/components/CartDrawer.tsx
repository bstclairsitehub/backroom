"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { products } from "@/lib/products";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    close,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = totalPrice();
  const shippingThreshold = 100;
  const shippingProgress = Math.min((subtotal / shippingThreshold) * 100, 100);
  const shippingRemaining = Math.max(shippingThreshold - subtotal, 0);
  const freeShippingUnlocked = subtotal >= shippingThreshold;

  // Get cross-sell products (products not in cart, max 2)
  const cartItemIds = new Set(items.map((item) => item.id));
  const crossSellProducts = products
    .filter((product) => !cartItemIds.has(product.id))
    .slice(0, 2);

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ease-out ${
            isOpen ? "opacity-100 backdrop-blur-sm" : "opacity-0"
          }`}
          style={{
            backgroundColor: isOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)",
          }}
          onClick={close}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[420px] max-w-[90vw] bg-[#050505] border-l border-[#222] z-50 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#222]">
          <h2 className="font-heading text-white text-lg font-bold">
            YOUR BAG ({totalItems()})
          </h2>
          <button
            onClick={close}
            className="text-white hover:text-[#ff2020] text-2xl leading-none transition-colors duration-200"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Shipping progress */}
          <div className="p-6 border-b border-[#222]">
            <div className="mb-2 h-1 bg-[#222] rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
            <p className="font-body text-sm text-[#888]">
              {freeShippingUnlocked
                ? "FREE SHIPPING UNLOCKED"
                : `You are $${shippingRemaining.toFixed(0)} away from free shipping`}
            </p>
          </div>

          {/* Cart items */}
          {items.length === 0 ? (
            <div className="flex items-center justify-center h-48 p-6">
              <p className="font-body text-[#888] text-center">
                Your bag is empty
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#222]">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="p-6">
                  <div className="flex gap-4">
                    {/* Product image */}
                    <div className="w-20 h-20 bg-[#222] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-white text-sm font-bold mb-1">
                        {item.name}
                      </h3>
                      <p className="font-body text-xs text-[#888] mb-3">
                        Size: {item.size}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mb-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, -1)
                          }
                          className="w-6 h-6 flex items-center justify-center border border-[#222] text-white hover:bg-white hover:text-[#050505] transition-colors duration-200"
                        >
                          −
                        </button>
                        <span className="font-body text-sm text-white w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, 1)
                          }
                          className="w-6 h-6 flex items-center justify-center border border-[#222] text-white hover:bg-white hover:text-[#050505] transition-colors duration-200"
                        >
                          +
                        </button>
                      </div>

                      {/* Price and remove */}
                      <div className="flex items-center justify-between">
                        <p className="font-heading text-white text-sm font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="font-body text-xs text-[#888] hover:text-white transition-colors"
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cross-sell section */}
          {items.length > 0 && crossSellProducts.length > 0 && (
            <div className="p-6 border-t border-[#222]">
              <h3 className="font-heading text-white text-sm font-bold mb-4">
                COMPLETE THE LOOK
              </h3>
              <div className="space-y-3">
                {crossSellProducts.map((product) => (
                  <div key={product.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-[#222] flex-shrink-0 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-white text-xs font-bold mb-1">
                        {product.name}
                      </p>
                      <p className="font-heading text-white text-xs font-bold mb-2">
                        ${product.price.toFixed(2)}
                      </p>
                      <button className="font-body text-xs text-white border border-[#222] px-3 py-1 hover:bg-white hover:text-[#050505] transition-colors duration-200">
                        ADD
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#222] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-body text-sm text-[#888]">Subtotal</p>
              <p className="font-heading text-white font-bold">
                ${subtotal.toFixed(2)}
              </p>
            </div>
            <Link
              href="/checkout"
              className="block w-full bg-white text-[#050505] py-3 text-center font-heading font-bold hover:bg-[#050505] hover:text-white transition-colors duration-200"
            >
              CHECKOUT
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

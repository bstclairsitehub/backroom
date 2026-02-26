"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/store/cart";

export default function SuccessPage() {
  const clearCart = useCart((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505]">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-4xl tracking-[0.3em] text-white mb-6">
          ORDER CONFIRMED
        </h1>
        
        <p className="font-body text-sm text-[#888] mb-4 leading-relaxed">
          Thank you for your order. You'll receive a confirmation email shortly.
        </p>
        
        <p className="font-body text-xs text-[#666] mb-8 tracking-[0.1em]">
          Your order is being prepared and will ship via Printful fulfillment.
        </p>

        <Link
          href="/shop"
          className="inline-block px-8 py-3 border border-white text-white font-heading text-sm tracking-[0.2em] hover:bg-white hover:text-[#050505] transition-colors duration-300"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
}

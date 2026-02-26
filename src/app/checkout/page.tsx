"use client";
import { useEffect } from "react";
import { useCart } from "@/store/cart";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function CheckoutPage() {
  const items = useCart((s) => s.items) as CartItem[];
  const router = useRouter();

  useEffect(() => {
    if (items.length === 0) {
      router.push("/shop");
      return;
    }

    async function initCheckout() {
      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items }),
        });
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          console.error("No checkout URL returned");
          router.push("/shop");
        }
      } catch (err) {
        console.error("Checkout failed:", err);
        router.push("/shop");
      }
    }

    initCheckout();
  }, [items, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505]">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-6" />
        <div className="font-heading text-lg tracking-[0.3em] text-white">PROCESSING</div>
        <p className="font-body text-xs text-[#888] mt-2 tracking-[0.15em]">REDIRECTING TO SECURE CHECKOUT</p>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useCart } from "@/store/cart";

export function Header() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(0);
  const totalItems = useCart((s) => s.totalItems());
  const openCart = useCart((s) => s.open);

  useEffect(() => {
    const handler = () => {
      const st = window.scrollY;
      setVisible(st < lastScroll.current || st < 80);
      setScrolled(st > 80);
      lastScroll.current = st;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[9999] px-6 md:px-10 py-5 flex items-center justify-between transition-transform duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        backgroundColor: scrolled ? "#050505" : "transparent",
        borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
      }}
    >
      <nav className="flex gap-6 md:gap-8">
        {[
          { href: "/shop", label: "SHOP" },
          { href: "/campaign", label: "CAMPAIGN" },
          { href: "/about", label: "ABOUT" },
        ].map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="font-body text-[11px] font-medium text-white uppercase tracking-[0.2em] hover:opacity-60"
          >
            {n.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 font-heading text-2xl md:text-[28px] text-white tracking-[-0.04em]"
      >
        BACKROOM
      </Link>

      <div className="flex items-center gap-5">
        <button onClick={openCart} className="relative" aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-[#ff2020] rounded-full flex items-center justify-center text-[9px] font-bold text-white">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

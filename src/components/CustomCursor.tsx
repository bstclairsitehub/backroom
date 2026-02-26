"use client";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const check = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [data-clickable], input, select, textarea, [role='button']");
      setHovering(!!isInteractive);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", check);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", check);
    };
  }, []);

  const size = hovering ? 36 : 12;

  return (
    <div
      className="pointer-events-none fixed z-[99999] rounded-full"
      style={{
        width: size,
        height: size,
        left: pos.x - size / 2,
        top: pos.y - size / 2,
        backgroundColor: "white",
        mixBlendMode: hovering ? "difference" : "normal",
        transition: "width 0.15s, height 0.15s",
      }}
    />
  );
}

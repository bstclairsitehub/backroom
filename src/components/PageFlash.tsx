"use client";
import { useEffect, useState } from "react";

export function PageFlash() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 800);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return <div className="page-flash" />;
}

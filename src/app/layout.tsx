import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CustomCursor } from "@/components/CustomCursor";
import { PageFlash } from "@/components/PageFlash";

export const metadata: Metadata = {
  title: "BACKROOM — Wear Your Labels",
  description: "Unapologetic queer streetwear. No subtext. Just sub.",
  openGraph: {
    title: "BACKROOM — Wear Your Labels",
    description: "Unapologetic queer streetwear. No subtext. Just sub.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <PageFlash />
        <CustomCursor />
        <Header />
        <CartDrawer />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

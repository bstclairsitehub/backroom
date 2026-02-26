import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";
import { products } from "@/lib/products";

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <main className="bg-[#050505]">
      {/* Section 1: Hero */}
      <section
        className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #1a1a2e, #0d0d0d 50%, #050505)",
        }}
      >
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-text {
            animation: fadeInUp 1s ease-out 0.2s forwards;
            opacity: 0;
          }

          .hero-subtitle {
            animation: fadeInUp 1s ease-out 0.4s forwards;
            opacity: 0;
          }

          .hero-cta {
            animation: fadeInUp 1s ease-out 0.6s forwards;
            opacity: 0;
          }
        `}</style>

        <div className="text-center z-10 px-4">
          <h1 className="hero-text font-heading text-white clamp(36px, 7vw, 80px) leading-none tracking-[0.02em]">
            NO SUBTEXT.
            <br />
            JUST SUB.
          </h1>
          <p className="hero-subtitle font-body text-[13px] text-[#888] tracking-[0.1em] mt-6">
            Wear your labels.
          </p>
          <Link href="/shop">
            <button className="hero-cta btn-primary mt-8">
              SHOP THE COLLECTION
            </button>
          </Link>
        </div>

        {/* Bottom gradient overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(transparent 40%, #050505)",
          }}
        />
      </section>

      {/* Section 2: Marquee */}
      <Marquee />

      {/* Section 3: The Roster */}
      <ScrollReveal>
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-white text-4xl md:text-5xl tracking-wide mb-3">
                THE ROSTER
              </h2>
              <p className="font-body text-[13px] text-[#888] tracking-wide">
                Featured Pieces
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center">
              <Link href="/shop">
                <button className="btn-outline">VIEW ALL</button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Section 4: Editorial */}
      <ScrollReveal>
        <section className="border-t border-b border-[#222]">
          <div className="flex flex-wrap">
            {/* Left Side */}
            <div
              className="w-full md:w-1/2 min-h-[500px] flex items-center justify-center p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a2e, #0d0d0d)",
              }}
            >
              <div
                className="text-center absolute inset-0 flex items-center justify-center px-6"
                style={{
                  opacity: 0.12,
                }}
              >
                <p className="font-heading text-white text-4xl md:text-5xl leading-tight tracking-wide">
                  BLESSED WITH A FAT ASS & NO GAG REFLEX
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 min-h-[500px] bg-[#050505] flex flex-col items-center justify-center p-8">
              <div className="max-w-md">
                <h3 className="font-heading text-white text-3xl md:text-4xl tracking-wide mb-6">
                  NO APOLOGIES.
                  <br />
                  NO ASTERISKS.
                </h3>
                <p className="font-body text-[13px] text-[#888] leading-relaxed mb-8 tracking-wide">
                  BACKROOM is where queer expression meets uncompromising design.
                  We celebrate bodies, desires, and the unapologetic pride that
                  comes with living authentically. Every piece is a statement—not
                  a question.
                </p>
                <Link href="/about">
                  <button className="btn-primary">READ OUR STORY</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}

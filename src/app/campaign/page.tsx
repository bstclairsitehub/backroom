import Image from "next/image"
import { products } from "@/lib/products"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata = {
  title: "Campaign — BACKROOM",
  description: "BACKROOM SS26 Campaign — Wear Your Labels",
}

export default function CampaignPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center border-b border-[#222]"
        style={{
          backgroundImage: "linear-gradient(180deg, #1a1a2e, #050505)",
        }}
      >
        <div>
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl tracking-brutal mb-6">
            WEAR YOUR LABELS
          </h1>
          <p className="text-[#888] font-body text-sm md:text-base tracking-wide">
            CAMPAIGN 001 — SS26
          </p>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section className="p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-l border-[#222]">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 30}>
              <div className="border-r border-b border-[#222] group cursor-pointer overflow-hidden">
                <div className="relative aspect-[3/4] bg-[#1a1a1a] group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}

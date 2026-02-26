import { notFound } from "next/navigation"
import Image from "next/image"
import { getProductBySlug, products, type Product } from "@/lib/products"
import ProductCard from "@/components/ProductCard"
import ProductDetailClient from "./ProductDetailClient"

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return {
    title: `${product.name} - BACKROOM`,
    description: product.tagline,
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Product Detail Section */}
      <ProductDetailClient product={product} />

      {/* You May Also Like Section */}
      <div className="border-t border-[#222] bg-[#050505]">
        <div className="p-8 md:p-12">
          <h2 className="font-heading text-2xl tracking-brutal mb-8">
            YOU MAY ALSO LIKE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-l border-[#222]">
            {relatedProducts.map((product) => (
              <div key={product.id} className="border-r border-b border-[#222]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

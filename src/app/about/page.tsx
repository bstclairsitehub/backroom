import ScrollReveal from "@/components/ScrollReveal"

export const metadata = {
  title: "About — BACKROOM",
  description: "The story behind BACKROOM streetwear",
}

const paragraphs = [
  "BACKROOM exists in the margins. Born from the intersection of brutalist architecture and digital minimalism, we create garments that reject excess. Every piece is intentional. Every detail serves a purpose.",
  "Our aesthetic draws from the void spaces in cities—the back alleys, the raw concrete, the stripped-down interiors that whisper rather than shout. BACKROOM clothing is armor for the thoughtful, the deliberate, the unapologetically niche.",
  "We believe in the power of constraint. By limiting our palette to near-black tones and our design language to geometric precision, we amplify what matters: fit, material, execution. Luxury exists in the refinement of the mundane.",
  "Each collection explores a single idea with obsessive detail. We collaborate with select designers, manufacturers, and artists who share our philosophy: quality over quantity, silence over noise.",
  "BACKROOM is for those who understand that the most powerful statement is one that barely speaks at all.",
]

const ethosText = [
  "We operate on the principle of radical honesty. No greenwashing, no empty marketing. Just clothes designed and made to last.",
  "Transparency in production. We document our supply chain and stand behind every piece we release.",
  "Inclusivity through design. Sizes spanning the full spectrum. Accessibility is not an afterthought—it is foundational.",
  "Community over competition. BACKROOM exists within a larger ecosystem of independent designers and makers. We celebrate and support them.",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="max-w-[680px] mx-auto px-6 py-32">
        {/* Main Heading */}
        <ScrollReveal delay={0}>
          <h1 className="font-heading text-[clamp(36px,6vw,64px)] tracking-brutal mb-12 leading-tight">
            THE BACKROOM
          </h1>
        </ScrollReveal>

        {/* Brand Story Paragraphs */}
        <div className="space-y-8 mb-16">
          {paragraphs.map((paragraph, index) => (
            <ScrollReveal key={index} delay={(index + 1) * 100}>
              <p className="font-body text-[15px] text-[#888] leading-relaxed">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Divider */}
        <ScrollReveal delay={600}>
          <div className="h-px bg-[#222] my-16" />
        </ScrollReveal>

        {/* Our Ethos Section */}
        <ScrollReveal delay={650}>
          <h2 className="font-heading text-lg tracking-brutal mb-8">
            OUR ETHOS
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {ethosText.map((text, index) => (
            <ScrollReveal key={index} delay={(index + 7) * 100}>
              <p className="font-body text-[15px] text-[#888] leading-relaxed">
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}

import Link from "next/link";

const cols = [
  { title: "SHOP", links: [{ label: "All Products", href: "/shop" }, { label: "Hoodies", href: "/shop?cat=Hoodies" }, { label: "Tees", href: "/shop?cat=Tees" }, { label: "Bottoms", href: "/shop?cat=Bottoms" }, { label: "Accessories", href: "/shop?cat=Accessories" }] },
  { title: "INFO", links: [{ label: "About", href: "/about" }, { label: "Campaign", href: "/campaign" }, { label: "FAQ", href: "#" }, { label: "Contact", href: "#" }] },
  { title: "LEGAL", links: [{ label: "Terms", href: "#" }, { label: "Privacy", href: "#" }, { label: "Returns", href: "#" }] },
];

export function Footer() {
  return (
    <footer className="border-t border-[#222] pt-16 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">
        <div>
          <div className="font-heading text-2xl text-white tracking-[-0.04em] mb-3">BACKROOM</div>
          <p className="font-body text-xs text-[#555] tracking-[0.15em] uppercase">Wear your labels.</p>
        </div>
        <div className="flex gap-12 md:gap-16 flex-wrap">
          {cols.map((col) => (
            <div key={col.title}>
              <div className="font-heading text-[10px] text-[#888] tracking-[0.2em] mb-5">{col.title}</div>
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} className="block font-body text-xs text-[#555] mb-3 hover:text-white transition-colors">{l.label}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#1a1a1a] flex justify-between flex-wrap gap-4">
        <span className="font-body text-[10px] text-[#333] tracking-[0.15em] uppercase">&copy; 2026 BACKROOM. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-6">
          {["INSTAGRAM", "TIKTOK", "TWITTER"].map((s) => (
            <a key={s} href="#" className="font-body text-[10px] text-[#444] tracking-[0.15em] uppercase hover:text-white">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

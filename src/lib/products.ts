export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: string;
  tagline: string;
  description: string;
  sizes: string[];
  image: string;
  printfulId?: string;
}

export const CATEGORIES = [
  "All",
  "Hoodies",
  "Tanks",
  "Tees",
  "Bottoms",
  "Underwear",
  "Accessories",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const products: Product[] = [
  {
    id: 1,
    slug: "twink-hoodie",
    name: "TWINK HOODIE",
    price: 65,
    category: "Hoodies",
    tagline: "Heavyweight cotton. Lightweight morals.",
    description:
      "Premium 400gsm heavyweight French terry. Oversized fit. Ribbed cuffs and hem. Kangaroo pocket. Screen-printed front graphic. Made for the ones who own it.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/twink-hoodie.jpg",
  },
  {
    id: 2,
    slug: "bear-hoodie",
    name: "BEAR HOODIE",
    price: 68,
    category: "Hoodies",
    tagline: "Thick. Warm. Cuddly optional.",
    description:
      "Premium 400gsm heavyweight French terry. Oversized boxy cut. Reinforced seams built for the big boys. Varsity-style front print. Drawcord hood.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/bear-hoodie.jpg",
  },
  {
    id: 3,
    slug: "daddy-hoodie",
    name: "DADDY HOODIE",
    price: 68,
    category: "Hoodies",
    tagline: "Gold standard. Earned, not given.",
    description:
      "Premium 400gsm heavyweight French terry. Gold foil chest print on black. Relaxed fit. This isn't a title you ask for—it's one you earn.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/daddy-hoodie.jpg",
  },
  {
    id: 4,
    slug: "anonymous-tank",
    name: "ANONYMOUS TANK",
    price: 38,
    category: "Tanks",
    tagline: "No names. No numbers. No regrets.",
    description:
      "180gsm combed cotton. Dropped armholes for maximum airflow. Straight hem. What happens in the backroom stays in the backroom.",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/anonymous-tank.jpg",
  },
  {
    id: 5,
    slug: "power-bottom-tank",
    name: "POWER BOTTOM TANK",
    price: 40,
    category: "Tanks",
    tagline: "Does all the work. Gets all the credit.",
    description:
      "180gsm combed cotton. Relaxed fit with deep-cut armholes. Bold front graphic. For those who run the show from the bottom up.",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/power-bottom-tank.jpg",
  },
  {
    id: 6,
    slug: "built-to-breed-tank",
    name: "BUILT TO BREED TANK",
    price: 42,
    category: "Tanks",
    tagline: "Function over form. Always.",
    description:
      "180gsm combed cotton. Athletic cut. Made for the gym, the function, or wherever you need to make a statement without saying a word.",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/built-to-breed-tank.jpg",
  },
  {
    id: 7,
    slug: "throat-goat-crop",
    name: "THROAT GOAT CROP",
    price: 45,
    category: "Tees",
    tagline: "Deep cut. Deeper talent.",
    description:
      "200gsm cropped tee. Raw-edge hem. Boxy fit sitting at the natural waist. Front and back print. Talent speaks for itself.",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/throat-goat-crop.jpg",
  },
  {
    id: 8,
    slug: "top-priority-tee",
    name: "TOP PRIORITY TEE",
    price: 40,
    category: "Tees",
    tagline: "Some roles aren't negotiable.",
    description:
      "220gsm heavyweight cotton tee. Relaxed drop-shoulder fit. Reinforced neck seam. Screen-printed chest graphic. Know your role.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/top-priority-tee.jpg",
  },
  {
    id: 9,
    slug: "bussy-splitter-tee",
    name: "BUSSY SPLITTER TEE",
    price: 42,
    category: "Tees",
    tagline: "Bold statement. Bigger energy.",
    description:
      "220gsm heavyweight cotton. Oversized fit. This one's not subtle and neither are you. Screen-printed front and back.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/bussy-splitter-tee.jpg",
  },
  {
    id: 10,
    slug: "poppers-tee",
    name: "POPPERS TEE",
    price: 40,
    category: "Tees",
    tagline: "Running on fumes and main character energy.",
    description:
      "220gsm heavyweight cotton tee. Relaxed fit. Bold front graphic. IYKYK. For those who need a little loosening up.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/poppers-tee.jpg",
  },
  {
    id: 11,
    slug: "service-top-shirt",
    name: "SERVICE TOP SHIRT",
    price: 55,
    category: "Tees",
    tagline: "Clocked in. Always on duty.",
    description:
      "Premium cotton poplin button-up. Relaxed fit. Embroidered chest detail. Wear it open, wear it closed—you're still on the clock.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/service-top-shirt.jpg",
  },
  {
    id: 12,
    slug: "dump-truck-shorts",
    name: "DUMP TRUCK SHORTS",
    price: 48,
    category: "Bottoms",
    tagline: "Built to carry. Built to stare at.",
    description:
      "280gsm French terry. 5-inch inseam. Elastic waistband with internal drawcord. Rear print for maximum visibility. If you've got it, frame it.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/dump-truck-shorts.jpg",
  },
  {
    id: 13,
    slug: "breeder-joggers",
    name: "BREEDER JOGGERS",
    price: 58,
    category: "Bottoms",
    tagline: "Premium fleece. Premium genetics.",
    description:
      "320gsm heavyweight fleece joggers. Tapered leg. Ribbed ankle cuffs. Side pockets with hidden zip. Bold rear print.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/breeder-joggers.jpg",
  },
  {
    id: 14,
    slug: "breed-me-joggers",
    name: "BREED ME JOGGERS",
    price: 58,
    category: "Bottoms",
    tagline: "Say less. Wear more.",
    description:
      "320gsm heavyweight fleece. Relaxed tapered fit. The rear print says everything you need to say. Elastic waistband. Side pockets.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/breed-me-joggers.jpg",
  },
  {
    id: 15,
    slug: "blessed-sweats",
    name: "BLESSED SWEATS",
    price: 58,
    category: "Bottoms",
    tagline: "Blessed with a fat ass and no gag reflex.",
    description:
      "320gsm heavyweight fleece sweatpants. Straight leg. Full-length rear print. Elastic waistband with drawcord. Gratitude is a lifestyle.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/blessed-sweats.jpg",
  },
  {
    id: 16,
    slug: "free-use-jock",
    name: "FREE USE JOCK",
    price: 32,
    category: "Underwear",
    tagline: "Open access. No questions asked.",
    description:
      "Premium stretch cotton blend. Wide waistband with woven branding. Supportive pouch. Minimal coverage, maximum statement.",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/free-use-jock.jpg",
  },
  {
    id: 17,
    slug: "vers-cap",
    name: "VERS CAP",
    price: 35,
    category: "Accessories",
    tagline: "Why choose? We don't.",
    description:
      "Structured six-panel cap. Embroidered front graphic. Adjustable snapback closure. Pre-curved brim. For the versatile crowd.",
    sizes: ["ONE SIZE"],
    image: "/images/vers-cap.jpg",
  },
  {
    id: 18,
    slug: "cum-dump-beanie",
    name: "CUM DUMP BEANIE",
    price: 30,
    category: "Accessories",
    tagline: "Cold outside. Hot inside.",
    description:
      "100% acrylic knit beanie. Fold-over cuff with embroidered branding. One size fits all. Keep your head warm and your reputation intact.",
    sizes: ["ONE SIZE"],
    image: "/images/cum-dump-beanie.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

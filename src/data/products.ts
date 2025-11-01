export interface Product {
  id: number;
  name: string;
  grade: string;
  type: string;
  thickness: string;
  length: string;
  image: string;
  description: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hot Rolled Steel Plate",
    grade: "ASTM A36",
    type: "Hot Rolled",
    thickness: "6-50mm",
    length: "6-12m",
    image:
      "https://images.unsplash.com/photo-1664412549324-cc0163006ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHBsYXRlcyUyMG1ldGFsfGVufDF8fHx8MTc2MjAxNjA1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "High-quality hot rolled steel plates for structural applications",
    featured: true,
  },
  {
    id: 2,
    name: "Stainless Steel Sheet",
    grade: "AISI 304",
    type: "Stainless Steel",
    thickness: "0.5-6mm",
    length: "2-6m",
    image:
      "https://images.unsplash.com/photo-1656274404439-b8b463c73194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMHRleHR1cmV8ZW58MXx8fHwxNzYyMDEzMjg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Corrosion-resistant stainless steel for industrial use",
    featured: true,
  },
  {
    id: 3,
    name: "Steel Pipe - Seamless",
    grade: "ASTM A106",
    type: "Seamless Pipe",
    thickness: "5-40mm",
    length: "5-12m",
    image:
      "https://images.unsplash.com/photo-1683884020624-f12f0f113cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHBpcGVzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjE5NDIxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Seamless carbon steel pipes for high-pressure applications",
    featured: true,
  },
  {
    id: 4,
    name: "I-Beam Steel",
    grade: "ASTM A992",
    type: "Structural Steel",
    thickness: "8-30mm",
    length: "6-12m",
    image:
      "https://images.unsplash.com/photo-1655936072893-921e69ae9038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJlYW1zJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTkzNjYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Heavy-duty structural steel beams for construction",
    featured: true,
  },
  {
    id: 5,
    name: "Cold Rolled Steel Coil",
    grade: "AISI 1018",
    type: "Cold Rolled",
    thickness: "0.3-3mm",
    length: "Coil",
    image:
      "https://images.unsplash.com/photo-1656466444029-472b105b1c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMG1hbnVmYWN0dXJpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2MjAxNjA1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Precision cold rolled steel with superior surface finish",
    featured: true,
  },
  {
    id: 6,
    name: "Alloy Steel Bar",
    grade: "AISI 4140",
    type: "Alloy Steel",
    thickness: "10-200mm",
    length: "3-6m",
    image:
      "https://images.unsplash.com/photo-1691228802680-22def86b9b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHN0ZWVsfGVufDF8fHx8MTc2MjAxNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "High-strength alloy steel bars for demanding applications",
    featured: true,
  },
  {
    id: 7,
    name: "Galvanized Steel Sheet",
    grade: "ASTM A653",
    type: "Galvanized",
    thickness: "0.4-4mm",
    length: "2-6m",
    image:
      "https://images.unsplash.com/photo-1664412549324-cc0163006ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHBsYXRlcyUyMG1ldGFsfGVufDF8fHx8MTc2MjAxNjA1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Zinc-coated steel for excellent corrosion protection",
  },
  {
    id: 8,
    name: "Carbon Steel Plate",
    grade: "ASTM A516",
    type: "Hot Rolled",
    thickness: "8-100mm",
    length: "6-12m",
    image:
      "https://images.unsplash.com/photo-1656466444029-472b105b1c4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMG1hbnVmYWN0dXJpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2MjAxNjA1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Pressure vessel quality carbon steel plates",
  },
  {
    id: 9,
    name: "Stainless Steel Pipe",
    grade: "AISI 316L",
    type: "Stainless Steel",
    thickness: "3-20mm",
    length: "6-12m",
    image:
      "https://images.unsplash.com/photo-1683884020624-f12f0f113cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMHBpcGVzJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjE5NDIxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Marine-grade stainless steel pipes with superior corrosion resistance",
  },
  {
    id: 10,
    name: "H-Beam Steel",
    grade: "ASTM A572",
    type: "Structural Steel",
    thickness: "10-40mm",
    length: "6-12m",
    image:
      "https://images.unsplash.com/photo-1655936072893-921e69ae9038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJlYW1zJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTkzNjYzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "High-strength low-alloy structural beams",
  },
  {
    id: 11,
    name: "Tool Steel Bar",
    grade: "AISI D2",
    type: "Alloy Steel",
    thickness: "15-150mm",
    length: "3-6m",
    image:
      "https://images.unsplash.com/photo-1691228802680-22def86b9b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHN0ZWVsfGVufDF8fHx8MTc2MjAxNjA1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "High-carbon, high-chromium tool steel for tooling applications",
  },
  {
    id: 12,
    name: "Cold Rolled Sheet",
    grade: "ASTM A1008",
    type: "Cold Rolled",
    thickness: "0.5-4mm",
    length: "2-6m",
    image:
      "https://images.unsplash.com/photo-1656274404439-b8b463c73194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMHRleHR1cmV8ZW58MXx8fHwxNzYyMDEzMjg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium cold rolled steel sheets with tight tolerances",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    company: "Anderson Construction Ltd.",
    text: "SteelPro has been our trusted supplier for over 5 years. Their quality and delivery times are unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Garcia",
    company: "Tech Industries Inc.",
    text: "Excellent technical support and certified materials. They understand our specific requirements perfectly.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    company: "Premier Manufacturing",
    text: "Competitive pricing without compromising on quality. Highly recommended for industrial steel needs.",
    rating: 5,
  },
];

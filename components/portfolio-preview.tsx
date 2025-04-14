import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const portfolioItems = [
  {
    id: 1,
    title: "Collection Héritage",
    category: "Haute Couture",
    image: "/family1.webp",
    slug: "collection-heritage",
  },
  {
    id: 2,
    title: "Artisanat Textile",
    category: "Processus Créatif",
    image: "/abstract1.webp",
    slug: "artisanat-textile",
  },
  {
    id: 3,
    title: "Défilé Dakar Fashion Week",
    category: "Événement",
    image: "/model3.webp",
    slug: "defile-dakar-fashion-week",
  },
  {
    id: 4,
    title: "Collaboration Artistique",
    category: "Projet Spécial",
    image: "/outfit1.png",
    slug: "collaboration-artistique",
  },
]

export default function PortfolioPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {portfolioItems.map((item, index) => (
        <Link
          key={item.id}
          href={`/portfolio/${item.slug}`}
          className={cn(
            "group relative overflow-hidden block",
            index === 0 && "md:col-span-2 aspect-[21/9]",
            index !== 0 && "aspect-square",
          )}
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-gold text-sm uppercase tracking-wider mb-2">{item.category}</div>
              <h3 className="text-2xl font-serif font-medium mb-2">{item.title}</h3>
              <div className="w-12 h-0.5 bg-gold mx-auto"></div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

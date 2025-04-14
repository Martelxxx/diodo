"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["Tous", "Robes", "Accessoires", "Textiles", "Bijoux"]

const products = [
  {
    id: 1,
    name: "Robe Élégance Dorée",
    category: "Robes",
    image: "/model1.webp",
    slug: "robe-elegance-doree",
  },
  {
    id: 2,
    name: "Ensemble Tradition",
    category: "Accessoires",
    image: "/couple1.webp",
    slug: "ensemble-tradition",
  },
  {
    id: 3,
    name: "Textile Héritage",
    category: "Textiles",
    image: "/abstract1.webp",
    slug: "textile-heritage",
  },
  {
    id: 4,
    name: "Tenue Élégance",
    category: "Robes",
    image: "/model4.webp",
    slug: "tenue-elegance",
  },
  {
    id: 5,
    name: "Boubou Soirée",
    category: "Robes",
    image: "/model5.webp",
    slug: "boubou-soiree",
  },
  {
    id: 6,
    name: "Pochette Élégance",
    category: "Accessoires",
    image: "/purse1.webp",
    slug: "pochette-elegance",
  },
  {
    id: 7,
    name: "Ensemble Famille Violet",
    category: "Textiles",
    image: "/family1.webp",
    slug: "ensemble-famille-violet",
  },
  {
    id: 8,
    name: "Tenue Artisanale Bleue",
    category: "Robes",
    image: "/model2.webp",
    slug: "tenue-artisanale-bleue",
  },
  {
    id: 9,
    name: "Tunique Moderne Grise",
    category: "Robes",
    image: "/shirt1.png",
    slug: "tunique-moderne-grise",
  },
  {
    id: 10,
    name: "Ensemble Marron Élégant",
    category: "Robes",
    image: "/outfit1.png",
    slug: "ensemble-marron-elegant",
  },
]

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const filteredProducts =
    activeCategory === "Tous"
      ? products.slice(0, 6) // Show only first 6 products on "Tous" category
      : products.filter((product) => product.category === activeCategory)

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 transition-colors",
              activeCategory === category ? "bg-gold text-white" : "bg-transparent text-foreground hover:bg-muted",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="relative overflow-hidden mb-4 bg-muted aspect-[3/4]">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className={cn(
                  "object-cover transition-transform duration-700",
                  hoveredProduct === product.id ? "scale-110" : "scale-100",
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300",
                  hoveredProduct === product.id && "opacity-100",
                )}
              >
                <div className="flex gap-2">
                  <Link href={`/produit/${product.slug}`}>
                    <Button className="btn-gold">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Acheter
                    </Button>
                  </Link>
                  <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Ajouter aux favoris</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg font-medium">
                <Link href={`/produit/${product.slug}`} className="hover:text-gold transition-colors">
                  {product.name}
                </Link>
              </h3>
              <p className="text-muted-foreground">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

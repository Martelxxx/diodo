import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const relatedProducts = [
  {
    id: 2,
    name: "Ensemble Tradition",
    category: "Accessoires",
    image: "/couple1.webp",
    slug: "ensemble-tradition",
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
]

export default function RelatedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {relatedProducts.map((product) => (
        <div key={product.id} className="group">
          <div className="relative overflow-hidden mb-4 bg-muted aspect-[3/4]">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
  )
}

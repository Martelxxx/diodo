import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

// Collection of all images
const collectionItems = [
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
    category: "Ensembles",
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
    category: "Ensembles",
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
    category: "Tuniques",
    image: "/shirt1.png",
    slug: "tunique-moderne-grise",
  },
  {
    id: 10,
    name: "Ensemble Marron Élégant",
    category: "Ensembles",
    image: "/outfit1.png",
    slug: "ensemble-marron-elegant",
  },
  {
    id: 11,
    name: "Tenue Traditionnelle",
    category: "Robes",
    image: "/model3.webp",
    slug: "tenue-traditionnelle",
  },
  {
    id: 12,
    name: "Ensemble Familial",
    category: "Ensembles",
    image: "/family2.webp",
    slug: "ensemble-familial",
  },
  {
    id: 13,
    name: "Groupe Cérémonial",
    category: "Ensembles",
    image: "/group1.webp",
    slug: "groupe-ceremonial",
  },
  {
    id: 14,
    name: "Tenue Couple Traditionnelle",
    category: "Ensembles",
    image: "/model6.webp",
    slug: "tenue-couple-traditionnelle",
  },
  {
    id: 15,
    name: "Robe Cérémonie",
    category: "Robes",
    image: "/model7.webp",
    slug: "robe-ceremonie",
  },
]

// Get unique categories
const categories = ["Tous", ...Array.from(new Set(collectionItems.map((item) => item.category)))]

export default function CollectionPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-4">Notre Collection</h1>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Découvrez notre collection exclusive de créations, où tradition et modernité se rencontrent pour célébrer
            l'élégance et l'authenticité africaine.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {collectionItems.map((item) => (
            <div key={item.id} className="group">
              <Link href={`/produit/${item.slug}`}>
                <div className="relative overflow-hidden aspect-[3/4] mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="btn-gold">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Découvrir
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg font-medium group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground">{item.category}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Lookbook CTA */}
        <div className="mt-20 text-center">
          <h2 className="section-title mb-6">Lookbook 2023</h2>
          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            Explorez notre lookbook pour découvrir comment nos créations peuvent être stylisées pour différentes
            occasions.
          </p>
          <Button className="btn-gold text-lg px-8 py-6">Télécharger le Lookbook</Button>
        </div>
      </div>
    </div>
  )
}

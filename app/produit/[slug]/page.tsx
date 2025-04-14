import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingBag, Heart, Share2, Star } from "lucide-react"
import RelatedProducts from "@/components/related-products"

// This would normally come from a database
const product = {
  id: 1,
  name: "Robe Élégance Dorée",
  category: "Robes",
  price: 189000,
  description:
    "Une robe d'exception qui incarne l'élégance et le raffinement. Confectionnée à la main par nos artisans qualifiés, cette création unique allie tradition et modernité dans un design intemporel.",
  details:
    "Tissu: 100% soie\nBroderie: Fil d'or\nFabrication: Artisanale, Sénégal\nEntretien: Nettoyage à sec uniquement",
  story:
    "Cette robe s'inspire des motifs traditionnels sénégalais, réinterprétées dans une esthétique contemporaine. Chaque broderie est réalisée à la main, perpétuant un savoir-faire ancestral transmis de génération en génération.",
  images: [
    {
      id: 1,
      src: "/model1.webp",
      alt: "Robe Élégance Dorée - Vue de face",
    },
    {
      id: 2,
      src: "/model4.webp",
      alt: "Robe Élégance Dorée - Vue de côté",
    },
    {
      id: 3,
      src: "/model3.webp",
      alt: "Robe Élégance Dorée - Vue de dos",
    },
    {
      id: 4,
      src: "/purse1.webp",
      alt: "Accessoire assorti - Pochette",
    },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  reviews: {
    average: 4.8,
    count: 24,
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden bg-muted">
              <Image
                src={product.images[0].src || "/placeholder.svg"}
                alt={product.images[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image) => (
                <div key={image.id} className="aspect-square relative overflow-hidden bg-muted cursor-pointer">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={
                        i < Math.floor(product.reviews.average) ? "text-gold fill-gold h-4 w-4" : "text-muted h-4 w-4"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.reviews.average} ({product.reviews.count} avis)
                </span>
              </div>
              <p className="text-2xl font-medium">Prix sur demande</p>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="font-medium mb-3">Taille</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="w-12 h-12 border border-input flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-gold flex-1 py-6">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Acheter
              </Button>
              <Button variant="outline" className="flex-1 py-6">
                <Heart className="mr-2 h-5 w-5" />
                Ajouter aux favoris
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Partager</span>
              </Button>
            </div>

            {/* Product Tabs */}
            <Tabs defaultValue="details" className="mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Détails</TabsTrigger>
                <TabsTrigger value="story">Histoire</TabsTrigger>
                <TabsTrigger value="shipping">Livraison</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4 space-y-4">
                <div className="whitespace-pre-line text-muted-foreground">{product.details}</div>
              </TabsContent>
              <TabsContent value="story" className="mt-4 space-y-4">
                <p className="text-muted-foreground">{product.story}</p>
              </TabsContent>
              <TabsContent value="shipping" className="mt-4 space-y-4">
                <p className="text-muted-foreground">
                  Livraison disponible partout au Sénégal et à l'international. Les délais de livraison varient selon la
                  destination:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Dakar: 1-2 jours ouvrables</li>
                  <li>Reste du Sénégal: 3-5 jours ouvrables</li>
                  <li>International: 7-14 jours ouvrables</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="section-title text-center mb-4">Vous aimerez aussi</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-12"></div>
          <RelatedProducts />
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = ["Tous", "Haute Couture", "Processus Créatif", "Événements", "Projets Spéciaux"]

const portfolioItems = [
  {
    id: 1,
    title: "Collection Héritage",
    category: "Haute Couture",
    description:
      "Notre collection phare qui célèbre l'héritage culturel sénégalais à travers des créations contemporaines.",
    image: "/portfolio-1.jpg",
    imageQuery: "fashion runway with models wearing black and gold haute couture dresses",
    slug: "collection-heritage",
  },
  {
    id: 2,
    title: "Artisanat Textile",
    category: "Processus Créatif",
    description:
      "Un aperçu de notre processus de création, où tradition et innovation se rencontrent pour créer des textiles uniques.",
    image: "/portfolio-2.jpg",
    imageQuery: "artisans working on traditional textile with gold thread embroidery",
    slug: "artisanat-textile",
  },
  {
    id: 3,
    title: "Défilé Dakar Fashion Week",
    category: "Événements",
    description:
      "Notre participation à la Dakar Fashion Week, présentant nos créations les plus audacieuses sur le podium.",
    image: "/portfolio-3.jpg",
    imageQuery: "fashion show in Dakar with models on runway wearing elegant black and gold designs",
    slug: "defile-dakar-fashion-week",
  },
  {
    id: 4,
    title: "Collaboration Artistique",
    category: "Projets Spéciaux",
    description:
      "Une collaboration unique avec des artistes locaux, fusionnant mode et art visuel dans une collection exclusive.",
    image: "/portfolio-4.jpg",
    imageQuery: "artistic collaboration between fashion designer and painter, black and gold theme",
    slug: "collaboration-artistique",
  },
  {
    id: 5,
    title: "Atelier de Création",
    category: "Processus Créatif",
    description: "Une immersion dans notre atelier, où chaque pièce est conçue et réalisée avec passion et précision.",
    image: "/portfolio-5.jpg",
    imageQuery: "fashion design studio with artisans working on black and gold garments",
    slug: "atelier-de-creation",
  },
  {
    id: 6,
    title: "Collection Modernité",
    category: "Haute Couture",
    description:
      "Une collection qui repousse les limites du design traditionnel pour créer des pièces résolument modernes.",
    image: "/portfolio-6.jpg",
    imageQuery: "modern fashion collection with black and gold theme, contemporary designs",
    slug: "collection-modernite",
  },
  {
    id: 7,
    title: "Exposition Textile",
    category: "Événements",
    description:
      "Notre exposition dédiée à l'art textile, présentant l'évolution de nos techniques et designs au fil des années.",
    image: "/portfolio-7.jpg",
    imageQuery: "textile art exhibition with black and gold fabrics displayed in gallery",
    slug: "exposition-textile",
  },
  {
    id: 8,
    title: "Projet Communautaire",
    category: "Projets Spéciaux",
    description:
      "Une initiative visant à transmettre les techniques traditionnelles aux jeunes générations d'artisans.",
    image: "/portfolio-8.jpg",
    imageQuery: "community workshop teaching traditional textile techniques to young artisans",
    slug: "projet-communautaire",
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-4">Notre Portfolio</h1>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Découvrez notre collection de projets et créations, témoignant de notre engagement envers l'excellence et
            l'innovation dans l'artisanat textile.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group overflow-hidden">
              <Link href={`/portfolio/${item.slug}`} className="block">
                <div className="relative overflow-hidden aspect-square mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    query={item.imageQuery}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-gold text-sm uppercase tracking-wider mb-2">{item.category}</div>
                      <h3 className="text-2xl font-serif font-medium mb-2">{item.title}</h3>
                      <div className="w-12 h-0.5 bg-gold mx-auto"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center text-gold font-medium group-hover:underline">
                      Voir le projet
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

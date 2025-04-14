import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import HeroCarousel from "@/components/hero-carousel"
import FeaturedProducts from "@/components/featured-products"
import PortfolioPreview from "@/components/portfolio-preview"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-20">
        <HeroCarousel />
      </section>

      {/* Featured Collection */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="section-title mb-4">Collection Exclusive</h2>
            <div className="w-20 h-1 bg-gold mb-6"></div>
            <p className="max-w-2xl text-muted-foreground">
              Découvrez notre dernière collection, où l'artisanat traditionnel rencontre le design contemporain pour
              créer des pièces uniques et intemporelles.
            </p>
          </div>
          <FeaturedProducts />
          <div className="flex justify-center mt-12">
            <Link href="/collection">
              <Button className="btn-outline-gold group">
                Voir toute la collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 border-2 border-gold z-0"></div>
              <Image
                src="/family1.webp"
                alt="Famille en tenue traditionnelle"
                width={600}
                height={800}
                className="relative z-10 object-cover w-full h-[500px]"
              />
            </div>
            <div className="space-y-6">
              <h2 className="section-title">Notre Histoire</h2>
              <div className="w-20 h-1 bg-gold"></div>
              <p className="text-muted-foreground">
                Chez Diodo Couture, chaque création incarne une histoire de passion et de transmission. Inspiré par la
                grandeur d'une grand-mère malienne, symbole d'élégance et de tradition, le nom Diodo rend hommage à cet
                héritage artisanal qui façonne chaque pièce unique.
              </p>
              <p className="text-muted-foreground">
                Né d'un rêve audacieux et d'une humble machine à coudre, Diodo Couture marie modernité et authenticité
                pour magnifier les étoffes africaines. Aujourd'hui, notre atelier transforme chaque vêtement en une
                œuvre d'art, reflétant l'identité et la fierté de ceux qui les portent.
              </p>
              <Link href="/about">
                <Button className="btn-gold group">
                  Découvrir notre histoire
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="section-title mb-4">Notre Portfolio</h2>
            <div className="w-20 h-1 bg-gold mb-6"></div>
            <p className="max-w-2xl text-muted-foreground">
              Explorez une sélection de nos créations les plus emblématiques, témoignant de notre engagement envers
              l'excellence et l'innovation dans l'artisanat textile.
            </p>
          </div>
          <PortfolioPreview />
          <div className="flex justify-center mt-12">
            <Link href="/portfolio">
              <Button className="btn-outline-gold group">
                Explorer le portfolio complet
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="section-title mb-4 text-white">Témoignages</h2>
            <div className="w-20 h-1 bg-gold mb-6"></div>
            <p className="max-w-2xl text-gray-400">
              Découvrez ce que nos clients disent de leur expérience avec Diodo Couture et de la qualité de nos
              créations.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* AdSense Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="border-2 border-dashed border-gray-300 p-8 text-center">
            {/* This section is reserved for Google AdSense */}
            <p className="text-muted-foreground">Espace réservé pour Google AdSense</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="section-title mb-6 text-white">Prêt à découvrir l'excellence?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Explorez notre collection exclusive et trouvez la pièce qui vous correspond, alliant tradition artisanale et
            design contemporain.
          </p>
          <Link href="/collection">
            <Button className="btn-gold text-lg px-8 py-6">Acheter Maintenant</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-4">Notre Histoire</h1>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Découvrez l'histoire de Diodo Couture, une marque qui incarne l'élégance, la tradition et l'authenticité
            dans chacune de ses créations.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="section-title">Notre Passion</h2>
            <div className="w-20 h-1 bg-gold"></div>
            <p className="text-muted-foreground">
              Diodo Couture est bien plus qu'un atelier de couture, c'est une histoire de transmission et de passion. Le
              nom "Diodo" est un hommage à ma grand-mère maternelle, une femme forte et inspirante originaire du Mali.
              Elle incarnait l'élégance, la tradition et le savoir-faire artisanal, des valeurs qui sont aujourd'hui au
              cœur de mon entreprise.
            </p>
            <p className="text-muted-foreground">
              Tout a commencé avec une seule machine à coudre et un rêve : faire rayonner la mode africaine à travers
              des créations uniques, mêlant authenticité et modernité. Chaque tenue que nous confectionnons est le
              reflet d'un riche héritage culturel, cousue avec soin pour honorer les racines et sublimer chaque personne
              qui la porte.
            </p>
            <p className="text-muted-foreground">
              Au fil du temps, grâce à la confiance et à l'amour de nos clients, Diodo Couture a grandi et est devenu un
              véritable atelier de couture, où chaque pièce est conçue avec passion et précision. Notre mission ?
              Redonner la vie aux étoffes africaines, valoriser l'élégance de chacun et faire du vêtement un symbole
              d'identité et de fierté.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-64 h-64 border-2 border-gold z-0"></div>
            <Image
              src="/model2.webp"
              alt="Notre histoire"
              width={600}
              height={800}
              className="relative z-10 object-cover w-full h-[500px]"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 border border-muted hover:border-gold transition-colors">
            <div className="w-16 h-16 bg-gold mx-auto mb-6 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium mb-4">Passion</h3>
            <p className="text-muted-foreground">
              Chaque création est le fruit d'une passion profonde pour l'artisanat textile et d'un dévouement sans
              faille à l'excellence.
            </p>
          </div>
          <div className="text-center p-8 border border-muted hover:border-gold transition-colors">
            <div className="w-16 h-16 bg-gold mx-auto mb-6 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M2 12h20"></path>
                <path d="M12 2v20"></path>
                <path d="m4.93 4.93 14.14 14.14"></path>
                <path d="m19.07 4.93-14.14 14.14"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium mb-4">Authenticité</h3>
            <p className="text-muted-foreground">
              Nous restons fidèles à nos racines, préservant les techniques traditionnelles tout en les réinterprétant
              dans un langage contemporain.
            </p>
          </div>
          <div className="text-center p-8 border border-muted hover:border-gold transition-colors">
            <div className="w-16 h-16 bg-gold mx-auto mb-6 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium mb-4">Excellence</h3>
            <p className="text-muted-foreground">
              Nous nous engageons à offrir des créations d'une qualité exceptionnelle, où chaque détail est
              soigneusement pensé et exécuté.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Notre Équipe</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Rencontrez les artisans passionnés qui donnent vie à nos créations, alliant expertise technique et vision
              artistique.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full">
                <Image src="/model1.webp" alt="Fondatrice" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif font-medium">Oumou Wane</h3>
              <p className="text-gold mb-4">Fondatrice & Directrice Créative</p>
              <p className="text-muted-foreground">
                Visionnaire passionnée, Oumou a fondé Diodo Couture avec la mission de célébrer l'artisanat textile
                sénégalais sur la scène internationale.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full">
                <Image src="/model2.webp" alt="Chef Artisan" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif font-medium">Moussa Sène</h3>
              <p className="text-gold mb-4">Chef Artisan</p>
              <p className="text-muted-foreground">
                Avec plus de 20 ans d'expérience, Moussa supervise la production, assurant que chaque pièce respecte nos
                standards d'excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full">
                <Image src="/model3.webp" alt="Directrice Marketing" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-serif font-medium">Fatou Ndiaye</h3>
              <p className="text-gold mb-4">Directrice Marketing</p>
              <p className="text-muted-foreground">
                Fatou apporte sa vision stratégique pour faire rayonner la marque Diodo Couture à travers le monde.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-black text-white p-12">
          <h2 className="section-title mb-6 text-white">Rejoignez l'Aventure Diodo Couture</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Découvrez nos créations exclusives et devenez partie intégrante de notre histoire, où tradition et modernité
            se rencontrent pour créer l'exceptionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collection">
              <Button className="btn-gold text-lg px-8 py-6">Explorer la Collection</Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6"
              >
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AIHeader from "@/components/ai-header"
import Footer from "@/components/footer"
import GradientText from "@/components/gradient-text"
import { useLanguage } from "@/contexts/language-context"

// Portfolio item interface
interface PortfolioItem {
  id: string
  title: string
  titleFr: string
  description: string
  descriptionFr: string
  image: string
  url: string
  tags: string[]
  tagsFr: string[]
}

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  {
    id: "website-1",
    title: "E-Commerce Platform",
    titleFr: "Plateforme E-Commerce",
    description: "A modern e-commerce platform with AI-powered product recommendations and search functionality.",
    descriptionFr:
      "Une plateforme e-commerce moderne avec des recommandations de produits et une fonctionnalité de recherche alimentées par l'IA.",
    image: "/placeholder.svg?key=nu2bb",
    url: "https://example.com/ecommerce",
    tags: ["E-Commerce", "AI Recommendations", "Responsive Design"],
    tagsFr: ["E-Commerce", "Recommandations IA", "Design Responsive"],
  },
  {
    id: "website-2",
    title: "Financial Services Dashboard",
    titleFr: "Tableau de Bord Services Financiers",
    description:
      "An intuitive dashboard for financial services with real-time data visualization and predictive analytics.",
    descriptionFr:
      "Un tableau de bord intuitif pour les services financiers avec visualisation de données en temps réel et analyses prédictives.",
    image: "/placeholder.svg?key=olj6b",
    url: "https://example.com/finance",
    tags: ["Finance", "Data Visualization", "Predictive Analytics"],
    tagsFr: ["Finance", "Visualisation de Données", "Analyses Prédictives"],
  },
  {
    id: "website-3",
    title: "Healthcare Patient Portal",
    titleFr: "Portail Patient Santé",
    description:
      "A secure patient portal for healthcare providers, featuring appointment scheduling and medical record access.",
    descriptionFr:
      "Un portail patient sécurisé pour les prestataires de soins de santé, avec planification de rendez-vous et accès aux dossiers médicaux.",
    image: "/placeholder.svg?key=kn6ns",
    url: "https://example.com/healthcare",
    tags: ["Healthcare", "Security", "User Experience"],
    tagsFr: ["Santé", "Sécurité", "Expérience Utilisateur"],
  },
  {
    id: "website-4",
    title: "Educational Learning Platform",
    titleFr: "Plateforme d'Apprentissage Éducative",
    description:
      "An interactive learning platform with personalized course recommendations and progress tracking for students.",
    descriptionFr:
      "Une plateforme d'apprentissage interactive avec des recommandations de cours personnalisées et un suivi des progrès pour les étudiants.",
    image: "/placeholder.svg?key=sa9m1",
    url: "https://example.com/education",
    tags: ["Education", "Interactive Learning", "Progress Tracking"],
    tagsFr: ["Éducation", "Apprentissage Interactif", "Suivi des Progrès"],
  },
  {
    id: "website-5",
    title: "Real Estate Listing Portal",
    titleFr: "Portail d'Annonces Immobilières",
    description:
      "A comprehensive real estate portal with virtual tours, AI-powered property matching, and market analytics.",
    descriptionFr:
      "Un portail immobilier complet avec visites virtuelles, correspondance de propriétés alimentée par l'IA et analyses de marché.",
    image: "/placeholder.svg?key=7jhun",
    url: "https://maisonova-io.vercel.app/",
    tags: ["Real Estate", "Virtual Tours", "Property Matching"],
    tagsFr: ["Immobilier", "Visites Virtuelles", "Correspondance de Propriétés"],
  },
  {
    id: "website-6",
    title: "Travel Booking Platform",
    titleFr: "Plateforme de Réservation de Voyages",
    description:
      "A travel booking platform with personalized recommendations, virtual destination previews, and trip planning tools.",
    descriptionFr:
      "Une plateforme de réservation de voyages avec des recommandations personnalisées, des aperçus virtuels de destinations et des outils de planification de voyage.",
    image: "/travel-planning-interface.png",
    url: "https://example.com/travel",
    tags: ["Travel", "Booking System", "Trip Planning"],
    tagsFr: ["Voyage", "Système de Réservation", "Planification de Voyage"],
  },
]

export default function PortfolioPage() {
  const { language, t } = useLanguage()
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openPreview = (item: PortfolioItem) => {
    setSelectedItem(item)
    setCurrentIndex(portfolioItems.findIndex((i) => i.id === item.id))
  }

  const closePreview = () => {
    setSelectedItem(null)
  }

  const navigatePreview = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
    }
    setSelectedItem(portfolioItems[currentIndex])
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <AIHeader />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light mb-4">
              <GradientText from="from-africa-orange" to="to-africa-green">
                {language === "en" ? "Our Portfolio" : "Notre Portfolio"}
              </GradientText>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              {language === "en"
                ? "Explore our collection of successful projects and digital solutions we've created for our clients."
                : "Explorez notre collection de projets réussis et de solutions numériques que nous avons créées pour nos clients."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 shadow-lg group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={language === "en" ? item.title : item.titleFr}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-medium text-white">{language === "en" ? item.title : item.titleFr}</h3>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(language === "en" ? item.tags : item.tagsFr).map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full font-light">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm font-light mb-4 line-clamp-2">
                    {language === "en" ? item.description : item.descriptionFr}
                  </p>
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-africa-orange border-africa-orange hover:bg-africa-orange/10"
                      onClick={() => openPreview(item)}
                    >
                      {language === "en" ? "Preview" : "Aperçu"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-300"
                      onClick={() => window.open(item.url, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {language === "en" ? "Visit" : "Visiter"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Website Preview Modal */}
          {selectedItem && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <motion.div
                className="bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                  <h3 className="text-xl font-medium">
                    {language === "en" ? selectedItem.title : selectedItem.titleFr}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white"
                      onClick={() => window.open(selectedItem.url, "_blank")}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white"
                      onClick={closePreview}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex-1 overflow-hidden relative">
                  <div className="absolute inset-0 overflow-auto">
                    <iframe
                      src={selectedItem.url}
                      title={language === "en" ? selectedItem.title : selectedItem.titleFr}
                      className="w-full h-full border-0"
                      sandbox="allow-same-origin allow-scripts"
                    />
                  </div>
                  <div className="absolute inset-0 pointer-events-none border border-gray-700 rounded-b-xl" />
                </div>

                <div className="p-4 border-t border-gray-800 flex justify-between items-center">
                  <Button variant="outline" size="sm" className="text-gray-300" onClick={() => navigatePreview("prev")}>
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    {language === "en" ? "Previous" : "Précédent"}
                  </Button>
                  <p className="text-sm text-gray-400">
                    {currentIndex + 1} / {portfolioItems.length}
                  </p>
                  <Button variant="outline" size="sm" className="text-gray-300" onClick={() => navigatePreview("next")}>
                    {language === "en" ? "Next" : "Suivant"}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

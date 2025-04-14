"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import AIHeader from "@/components/ai-header"
import Footer from "@/components/footer"
import GradientText from "@/components/gradient-text"
import { useLanguage } from "@/contexts/language-context"

// Case study interface
interface CaseStudy {
  id: string
  title: string
  titleFr: string
  client: string
  clientFr: string
  industry: string
  industryFr: string
  image: string
  challenge: string
  challengeFr: string
  solution: string
  solutionFr: string
  results: string[]
  resultsFr: string[]
  testimonial?: {
    quote: string
    quoteFr: string
    author: string
    authorFr: string
    position: string
    positionFr: string
  }
}

// Sample case studies data
const caseStudies: CaseStudy[] = [
  {
    id: "ai-ecommerce",
    title: "AI-Powered Product Recommendations",
    titleFr: "Recommandations de Produits Alimentées par l'IA",
    client: "AfriMarket",
    clientFr: "AfriMarket",
    industry: "E-Commerce",
    industryFr: "E-Commerce",
    image: "/personalized-shopping-experience.png",
    challenge:
      "AfriMarket was struggling with low conversion rates and high cart abandonment. Their existing recommendation system was based on simple rules and didn't effectively capture customer preferences or shopping patterns.",
    challengeFr:
      "AfriMarket était confronté à de faibles taux de conversion et à un abandon élevé des paniers. Leur système de recommandation existant était basé sur des règles simples et ne capturait pas efficacement les préférences des clients ou les habitudes d'achat.",
    solution:
      "We implemented an AI-powered recommendation engine that analyzes customer browsing history, purchase patterns, and product relationships. The system uses machine learning to continuously improve recommendations based on user interactions and feedback.",
    solutionFr:
      "Nous avons implémenté un moteur de recommandation alimenté par l'IA qui analyse l'historique de navigation des clients, les modèles d'achat et les relations entre produits. Le système utilise l'apprentissage automatique pour améliorer continuellement les recommandations en fonction des interactions et des commentaires des utilisateurs.",
    results: [
      "37% increase in conversion rate",
      "42% increase in average order value",
      "28% reduction in cart abandonment",
      "53% of customers reported discovering products they wouldn't have found otherwise",
    ],
    resultsFr: [
      "Augmentation de 37% du taux de conversion",
      "Augmentation de 42% de la valeur moyenne des commandes",
      "Réduction de 28% de l'abandon de panier",
      "53% des clients ont déclaré avoir découvert des produits qu'ils n'auraient pas trouvés autrement",
    ],
    testimonial: {
      quote:
        "The AI recommendation system has transformed our business. Our customers are finding products they love more easily, and our sales have increased significantly as a result.",
      quoteFr:
        "Le système de recommandation IA a transformé notre entreprise. Nos clients trouvent plus facilement des produits qu'ils aiment, et nos ventes ont augmenté de manière significative en conséquence.",
      author: "Aminata Diop",
      authorFr: "Aminata Diop",
      position: "CEO, AfriMarket",
      positionFr: "PDG, AfriMarket",
    },
  },
  {
    id: "healthcare-analytics",
    title: "Predictive Healthcare Analytics Platform",
    titleFr: "Plateforme d'Analyse Prédictive pour la Santé",
    client: "SenHealth",
    clientFr: "SenHealth",
    industry: "Healthcare",
    industryFr: "Santé",
    image: "/healthcare-analytics-overview.png",
    challenge:
      "SenHealth needed a way to predict patient admissions and resource requirements to optimize staffing and inventory management. Their manual forecasting methods were time-consuming and often inaccurate.",
    challengeFr:
      "SenHealth avait besoin d'un moyen de prédire les admissions de patients et les besoins en ressources pour optimiser la gestion du personnel et des stocks. Leurs méthodes de prévision manuelles étaient chronophages et souvent inexactes.",
    solution:
      "We developed a predictive analytics platform that uses historical patient data, seasonal trends, and external factors like local events and weather patterns to forecast patient volumes. The system provides real-time dashboards and alerts for hospital administrators.",
    solutionFr:
      "Nous avons développé une plateforme d'analyse prédictive qui utilise les données historiques des patients, les tendances saisonnières et des facteurs externes comme les événements locaux et les conditions météorologiques pour prévoir le volume de patients. Le système fournit des tableaux de bord en temps réel et des alertes pour les administrateurs hospitaliers.",
    results: [
      "22% improvement in staffing efficiency",
      "18% reduction in overtime costs",
      "31% decrease in supply shortages",
      "15% increase in patient satisfaction due to reduced wait times",
    ],
    resultsFr: [
      "Amélioration de 22% de l'efficacité du personnel",
      "Réduction de 18% des coûts d'heures supplémentaires",
      "Diminution de 31% des pénuries de fournitures",
      "Augmentation de 15% de la satisfaction des patients grâce à la réduction des temps d'attente",
    ],
  },
  {
    id: "financial-chatbot",
    title: "AI Financial Assistant Chatbot",
    titleFr: "Chatbot Assistant Financier IA",
    client: "WestBank",
    clientFr: "WestBank",
    industry: "Banking & Finance",
    industryFr: "Banque & Finance",
    image: "/banking-chatbot-interaction.png",
    challenge:
      "WestBank was experiencing high call volumes to their customer service center for routine inquiries, resulting in long wait times and customer frustration. They needed a solution to handle common questions while maintaining a personalized experience.",
    challengeFr:
      "WestBank connaissait un volume élevé d'appels à son centre de service client pour des demandes de routine, entraînant de longs temps d'attente et la frustration des clients. Ils avaient besoin d'une solution pour gérer les questions courantes tout en maintenant une expérience personnalisée.",
    solution:
      "We created an AI-powered chatbot that understands natural language and can answer questions about account balances, transaction history, loan applications, and more. The chatbot integrates with their banking systems to provide personalized responses and can seamlessly transfer to a human agent when needed.",
    solutionFr:
      "Nous avons créé un chatbot alimenté par l'IA qui comprend le langage naturel et peut répondre aux questions sur les soldes de compte, l'historique des transactions, les demandes de prêt, et plus encore. Le chatbot s'intègre à leurs systèmes bancaires pour fournir des réponses personnalisées et peut transférer en douceur à un agent humain si nécessaire.",
    results: [
      "65% reduction in routine customer service calls",
      "Average response time decreased from 15 minutes to 10 seconds",
      "89% customer satisfaction rate with chatbot interactions",
      "Annual savings of approximately $450,000 in customer service costs",
    ],
    resultsFr: [
      "Réduction de 65% des appels de service client de routine",
      "Temps de réponse moyen réduit de 15 minutes à 10 secondes",
      "Taux de satisfaction client de 89% avec les interactions du chatbot",
      "Économies annuelles d'environ 450 000 $ en coûts de service client",
    ],
    testimonial: {
      quote:
        "The AI chatbot has revolutionized our customer service approach. Our customers get immediate answers to their questions, and our service representatives can focus on more complex issues that truly require human assistance.",
      quoteFr:
        "Le chatbot IA a révolutionné notre approche du service client. Nos clients obtiennent des réponses immédiates à leurs questions, et nos représentants du service peuvent se concentrer sur des problèmes plus complexes qui nécessitent vraiment une assistance humaine.",
      author: "Ibrahim Sall",
      authorFr: "Ibrahim Sall",
      position: "Head of Digital Banking, WestBank",
      positionFr: "Responsable de la Banque Digitale, WestBank",
    },
  },
]

export default function CaseStudiesPage() {
  const { language, t } = useLanguage()
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <AIHeader />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light mb-4">
              <GradientText from="from-africa-purple" to="to-africa-teal">
                {language === "en" ? t("caseStudies.title") : t("caseStudies.titleFr")}
              </GradientText>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              {language === "en" ? t("caseStudies.description") : t("caseStudies.descriptionFr")}
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={language === "en" ? study.title : study.titleFr}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs bg-africa-purple/30 text-africa-purple px-3 py-1 rounded-full font-light">
                        {language === "en" ? study.industry : study.industryFr}
                      </span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full font-light">
                        {language === "en" ? study.client : study.clientFr}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium text-white">
                      {language === "en" ? study.title : study.titleFr}
                    </h2>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-xl font-medium mb-3 text-africa-orange">
                        {language === "en" ? "Challenge" : "Défi"}
                      </h3>
                      <p className="text-gray-300 font-light">
                        {language === "en" ? study.challenge : study.challengeFr}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3 text-africa-green">
                        {language === "en" ? "Solution" : "Solution"}
                      </h3>
                      <p className="text-gray-300 font-light">
                        {language === "en" ? study.solution : study.solutionFr}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3 text-africa-yellow">
                      {language === "en" ? "Results" : "Résultats"}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {(language === "en" ? study.results : study.resultsFr).map((result, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-africa-yellow mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 font-light">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {study.testimonial && (
                    <div
                      className={`mt-6 overflow-hidden transition-all duration-300 ${
                        expandedId === study.id ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 mt-2">
                        <blockquote className="text-gray-300 italic font-light mb-4">
                          "{language === "en" ? study.testimonial.quote : study.testimonial.quoteFr}"
                        </blockquote>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-africa-purple/20 flex items-center justify-center text-africa-purple mr-3">
                            {(language === "en" ? study.testimonial.author : study.testimonial.authorFr)
                              .charAt(0)
                              .toUpperCase()}
                          </div>
                          <div>
                            <p className="text-white font-medium">
                              {language === "en" ? study.testimonial.author : study.testimonial.authorFr}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {language === "en" ? study.testimonial.position : study.testimonial.positionFr}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {study.testimonial && (
                    <div className="mt-4 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white"
                        onClick={() => toggleExpand(study.id)}
                      >
                        {expandedId === study.id ? (
                          <>
                            <ChevronUp className="h-4 w-4 mr-1" />
                            {language === "en" ? "Hide Testimonial" : "Masquer le Témoignage"}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4 mr-1" />
                            {language === "en" ? "View Testimonial" : "Voir le Témoignage"}
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

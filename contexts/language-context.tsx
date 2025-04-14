"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define the available languages
type Language = "en" | "fr"

// Define the context shape
interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, fallback?: string) => string
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string, fallback = "") => fallback,
})

// Define the translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.caseStudies": "Case Studies",
    "nav.team": "Team",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.tryAiDemo": "Try AI Demo",
    "nav.contactUs": "Contact Us",

    // Language Switcher
    "lang.english": "English",
    "lang.french": "Français",

    // Hero Section
    "hero.digitalSolutions": "Digital Solutions",
    "hero.for": "for",
    "hero.phrase1": "The Future",
    "hero.phrase2": "AI Innovation",
    "hero.phrase3": "Your Business",
    "hero.phrase4": "Growth",
    "hero.phrase5": "Digital Transformation",
    "hero.phrase6": "Smart Solutions",
    "hero.description":
      "Affordable, innovative AI-powered digital services that transform your business for the digital age",
    "hero.exploreServices": "Explore Services",
    "hero.contactUs": "Contact Us",

    // Demos Section
    "demos.title": "Interactive AI Experiences",
    "demos.description":
      "Explore these AI-powered demos to see how our technology can transform your digital presence.",
    "demos.tryInteractive": "Try Our Interactive AI Demos",
    "demos.interactiveDescription":
      "Experience our AI capabilities firsthand with interactive demos. Test our sentiment analysis, voice generation, and more.",
    "demos.tryDemo": "Try AI Demo",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.caseStudies": "Études de Cas",
    "nav.team": "Équipe",
    "nav.pricing": "Tarification",
    "nav.contact": "Contact",
    "nav.tryAiDemo": "Essayer la Démo IA",
    "nav.contactUs": "Contactez-nous",

    // Language Switcher
    "lang.english": "English",
    "lang.french": "Français",

    // Hero Section
    "hero.digitalSolutions": "Solutions Numériques",
    "hero.for": "pour",
    "hero.phrase1": "Le Futur",
    "hero.phrase2": "L'Innovation IA",
    "hero.phrase3": "Votre Entreprise",
    "hero.phrase4": "La Croissance",
    "hero.phrase5": "La Transformation Numérique",
    "hero.phrase6": "Des Solutions Intelligentes",
    "hero.description":
      "Des services numériques abordables et innovants, alimentés par l'IA, qui transforment votre entreprise pour l'ère numérique",
    "hero.exploreServices": "Explorer les Services",
    "hero.contactUs": "Contactez-nous",

    // Demos Section
    "demos.title": "Expériences IA Interactives",
    "demos.description":
      "Explorez ces démos alimentées par l'IA pour voir comment notre technologie peut transformer votre présence numérique.",
    "demos.tryInteractive": "Essayez Nos Démos IA Interactives",
    "demos.interactiveDescription":
      "Découvrez nos capacités d'IA de première main avec des démos interactives. Testez notre analyse de sentiment, génération vocale, et plus encore.",
    "demos.tryDemo": "Essayer la Démo IA",
  },
}

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Function to translate a key
  const t = (key: string, fallback = ""): string => {
    return translations[language][key] || fallback
  }

  // Provide the language context to children
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  return useContext(LanguageContext)
}

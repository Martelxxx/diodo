"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  Brain,
  Sparkles,
  MessageSquare,
  BarChart,
  Globe,
  Zap,
  Search,
  Layout,
  ShoppingCart,
  FileText,
  BarChart2,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AIHeader from "@/components/ai-header"
import Footer from "@/components/footer"
import GradientText from "@/components/gradient-text"
import { useLanguage } from "@/contexts/language-context"

// Service interface
interface Service {
  id: string
  icon: React.ReactNode
  title: string
  titleFr: string
  shortDescription: string
  shortDescriptionFr: string
  longDescription: string
  longDescriptionFr: string
  benefits: string[]
  benefitsFr: string[]
  process: {
    title: string
    titleFr: string
    description: string
    descriptionFr: string
  }[]
  image: string
}

// Sample services data
const services: Service[] = [
  {
    id: "ai-strategy",
    icon: <Brain className="h-6 w-6" />,
    title: "AI Strategy & Consulting",
    titleFr: "Stratégie & Conseil en IA",
    shortDescription: "Custom AI solutions tailored to your business needs and goals.",
    shortDescriptionFr: "Solutions d'IA personnalisées adaptées aux besoins et aux objectifs de votre entreprise.",
    longDescription:
      "Our AI Strategy & Consulting service helps businesses identify opportunities for AI implementation, develop a roadmap for adoption, and ensure alignment with business objectives. We work closely with your team to understand your unique challenges and design AI solutions that deliver measurable results.",
    longDescriptionFr:
      "Notre service de Stratégie et Conseil en IA aide les entreprises à identifier les opportunités d'implémentation de l'IA, à développer une feuille de route pour l'adoption et à assurer l'alignement avec les objectifs commerciaux. Nous travaillons en étroite collaboration avec votre équipe pour comprendre vos défis uniques et concevoir des solutions d'IA qui offrent des résultats mesurables.",
    benefits: [
      "Identify high-impact AI opportunities",
      "Develop a clear implementation roadmap",
      "Align AI initiatives with business goals",
      "Minimize risks and maximize ROI",
      "Build internal AI capabilities",
    ],
    benefitsFr: [
      "Identifier les opportunités d'IA à fort impact",
      "Développer une feuille de route d'implémentation claire",
      "Aligner les initiatives d'IA avec les objectifs commerciaux",
      "Minimiser les risques et maximiser le ROI",
      "Développer les capacités internes en IA",
    ],
    process: [
      {
        title: "Discovery & Assessment",
        titleFr: "Découverte & Évaluation",
        description:
          "We analyze your business processes, data assets, and strategic objectives to identify AI opportunities.",
        descriptionFr:
          "Nous analysons vos processus d'affaires, vos actifs de données et vos objectifs stratégiques pour identifier les opportunités d'IA.",
      },
      {
        title: "Strategy Development",
        titleFr: "Développement de la Stratégie",
        description:
          "We create a comprehensive AI strategy and roadmap tailored to your specific business needs and goals.",
        descriptionFr:
          "Nous créons une stratégie d'IA complète et une feuille de route adaptées à vos besoins et objectifs commerciaux spécifiques.",
      },
      {
        title: "Implementation Planning",
        titleFr: "Planification de l'Implémentation",
        description:
          "We define the technical requirements, resource needs, and timeline for successful AI implementation.",
        descriptionFr:
          "Nous définissons les exigences techniques, les besoins en ressources et le calendrier pour une implémentation réussie de l'IA.",
      },
      {
        title: "Ongoing Support & Optimization",
        titleFr: "Support Continu & Optimisation",
        description:
          "We provide continuous guidance, monitor performance, and refine your AI solutions for maximum impact.",
        descriptionFr:
          "Nous fournissons des conseils continus, surveillons les performances et affinons vos solutions d'IA pour un impact maximal.",
      },
    ],
    image: "/collaborative-ai-planning.png",
  },
  {
    id: "machine-learning",
    icon: <Sparkles className="h-6 w-6" />,
    title: "Machine Learning Solutions",
    titleFr: "Solutions d'Apprentissage Automatique",
    shortDescription: "Advanced ML models that learn and adapt to your data patterns.",
    shortDescriptionFr:
      "Modèles d'apprentissage automatique avancés qui apprennent et s'adaptent à vos modèles de données.",
    longDescription:
      "Our Machine Learning Solutions leverage cutting-edge algorithms to extract insights from your data and automate complex decision-making processes. We develop custom ML models that continuously learn and improve, helping you make more accurate predictions, detect patterns, and optimize operations.",
    longDescriptionFr:
      "Nos Solutions d'Apprentissage Automatique exploitent des algorithmes de pointe pour extraire des informations de vos données et automatiser des processus de prise de décision complexes. Nous développons des modèles d'apprentissage automatique personnalisés qui apprennent et s'améliorent continuellement, vous aidant à faire des prédictions plus précises, à détecter des modèles et à optimiser les opérations.",
    benefits: [
      "Automate complex decision-making processes",
      "Uncover hidden patterns and insights in your data",
      "Improve prediction accuracy over time",
      "Reduce operational costs through automation",
      "Gain competitive advantage through data-driven decisions",
    ],
    benefitsFr: [
      "Automatiser les processus de prise de décision complexes",
      "Découvrir des modèles et des informations cachés dans vos données",
      "Améliorer la précision des prédictions au fil du temps",
      "Réduire les coûts opérationnels grâce à l'automatisation",
      "Obtenir un avantage concurrentiel grâce aux décisions basées sur les données",
    ],
    process: [
      {
        title: "Data Collection & Preparation",
        titleFr: "Collecte & Préparation des Données",
        description:
          "We gather, clean, and organize your data to ensure it's suitable for machine learning applications.",
        descriptionFr:
          "Nous recueillons, nettoyons et organisons vos données pour garantir qu'elles conviennent aux applications d'apprentissage automatique.",
      },
      {
        title: "Model Development",
        titleFr: "Développement du Modèle",
        description: "We design and train custom machine learning models tailored to your specific business problems.",
        descriptionFr:
          "Nous concevons et formons des modèles d'apprentissage automatique personnalisés adaptés à vos problèmes commerciaux spécifiques.",
      },
      {
        title: "Testing & Validation",
        titleFr: "Test & Validation",
        description: "We rigorously test and validate models to ensure accuracy, reliability, and performance.",
        descriptionFr:
          "Nous testons et validons rigoureusement les modèles pour garantir la précision, la fiabilité et la performance.",
      },
      {
        title: "Deployment & Integration",
        titleFr: "Déploiement & Intégration",
        description: "We deploy models into your existing systems and workflows, ensuring seamless integration.",
        descriptionFr:
          "Nous déployons des modèles dans vos systèmes et flux de travail existants, assurant une intégration transparente.",
      },
      {
        title: "Monitoring & Improvement",
        titleFr: "Surveillance & Amélioration",
        description: "We continuously monitor model performance and refine it based on new data and feedback.",
        descriptionFr:
          "Nous surveillons continuellement les performances du modèle et l'affinons en fonction des nouvelles données et des commentaires.",
      },
    ],
    image: "/interconnected-learning.png",
  },
  {
    id: "conversational-ai",
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Conversational AI",
    titleFr: "IA Conversationnelle",
    shortDescription: "Natural language processing for human-like interactions.",
    shortDescriptionFr: "Traitement du langage naturel pour des interactions semblables à celles des humains.",
    longDescription:
      "Our Conversational AI solutions enable natural, human-like interactions between your customers and your digital platforms. We develop intelligent chatbots, virtual assistants, and voice interfaces that understand natural language, learn from interactions, and provide personalized responses, enhancing customer experience while reducing support costs.",
    longDescriptionFr:
      "Nos solutions d'IA Conversationnelle permettent des interactions naturelles et humaines entre vos clients et vos plateformes numériques. Nous développons des chatbots intelligents, des assistants virtuels et des interfaces vocales qui comprennent le langage naturel, apprennent des interactions et fournissent des réponses personnalisées, améliorant l'expérience client tout en réduisant les coûts de support.",
    benefits: [
      "24/7 customer support without human intervention",
      "Consistent and accurate responses to customer inquiries",
      "Reduced customer service costs",
      "Improved customer satisfaction and engagement",
      "Valuable insights from customer conversations",
      "Multilingual support capabilities",
    ],
    benefitsFr: [
      "Support client 24/7 sans intervention humaine",
      "Réponses cohérentes et précises aux demandes des clients",
      "Réduction des coûts de service client",
      "Amélioration de la satisfaction et de l'engagement des clients",
      "Informations précieuses issues des conversations avec les clients",
      "Capacités de support multilingue",
    ],
    process: [
      {
        title: "Requirements Analysis",
        titleFr: "Analyse des Besoins",
        description: "We identify your specific needs, use cases, and the types of conversations your AI will handle.",
        descriptionFr:
          "Nous identifions vos besoins spécifiques, les cas d'utilisation et les types de conversations que votre IA gérera.",
      },
      {
        title: "Conversation Design",
        titleFr: "Conception de la Conversation",
        description: "We design conversation flows, personality, and responses that align with your brand voice.",
        descriptionFr:
          "Nous concevons des flux de conversation, la personnalité et les réponses qui s'alignent sur la voix de votre marque.",
      },
      {
        title: "NLP Model Development",
        titleFr: "Développement du Modèle NLP",
        description: "We build and train natural language processing models to understand and respond to user inputs.",
        descriptionFr:
          "Nous construisons et formons des modèles de traitement du langage naturel pour comprendre et répondre aux entrées des utilisateurs.",
      },
      {
        title: "Integration & Testing",
        titleFr: "Intégration & Test",
        description:
          "We integrate the conversational AI with your existing systems and thoroughly test its performance.",
        descriptionFr:
          "Nous intégrons l'IA conversationnelle à vos systèmes existants et testons minutieusement ses performances.",
      },
      {
        title: "Continuous Learning",
        titleFr: "Apprentissage Continu",
        description: "We implement feedback loops and continuous learning mechanisms to improve the AI over time.",
        descriptionFr:
          "Nous mettons en œuvre des boucles de rétroaction et des mécanismes d'apprentissage continu pour améliorer l'IA au fil du temps.",
      },
    ],
    image: "/friendly-chatbot-interface.png",
  },
  {
    id: "data-analytics",
    icon: <BarChart className="h-6 w-6" />,
    title: "AI-Powered Data Analytics",
    titleFr: "Analyse de Données Alimentée par l'IA",
    shortDescription: "Turn your data into actionable insights and predictions.",
    shortDescriptionFr: "Transformez vos données en informations exploitables et en prédictions.",
    longDescription:
      "Our AI-Powered Data Analytics solutions transform raw data into valuable business insights. We combine advanced analytics techniques with artificial intelligence to help you understand past performance, identify current trends, and predict future outcomes. Our interactive dashboards and visualization tools make complex data accessible and actionable for decision-makers at all levels.",
    longDescriptionFr:
      "Nos solutions d'Analyse de Données Alimentée par l'IA transforment les données brutes en informations commerciales précieuses. Nous combinons des techniques d'analyse avancées avec l'intelligence artificielle pour vous aider à comprendre les performances passées, identifier les tendances actuelles et prédire les résultats futurs. Nos tableaux de bord interactifs et nos outils de visualisation rendent les données complexes accessibles et exploitables pour les décideurs à tous les niveaux.",
    benefits: [
      "Discover hidden patterns and correlations in your data",
      "Make data-driven decisions with confidence",
      "Forecast trends and anticipate market changes",
      "Identify opportunities for optimization and growth",
      "Visualize complex data in intuitive, accessible formats",
      "Democratize data access across your organization",
    ],
    benefitsFr: [
      "Découvrir des modèles et des corrélations cachés dans vos données",
      "Prendre des décisions basées sur les données en toute confiance",
      "Prévoir les tendances et anticiper les changements du marché",
      "Identifier les opportunités d'optimisation et de croissance",
      "Visualiser des données complexes dans des formats intuitifs et accessibles",
      "Démocratiser l'accès aux données dans toute votre organisation",
    ],
    process: [
      {
        title: "Data Assessment",
        titleFr: "Évaluation des Données",
        description:
          "We evaluate your existing data sources, quality, and infrastructure to identify opportunities and gaps.",
        descriptionFr:
          "Nous évaluons vos sources de données existantes, leur qualité et leur infrastructure pour identifier les opportunités et les lacunes.",
      },
      {
        title: "Analytics Strategy",
        titleFr: "Stratégie d'Analyse",
        description:
          "We define key performance indicators and analytics approaches aligned with your business objectives.",
        descriptionFr:
          "Nous définissons des indicateurs de performance clés et des approches d'analyse alignés sur vos objectifs commerciaux.",
      },
      {
        title: "Data Integration",
        titleFr: "Intégration des Données",
        description: "We connect and consolidate data from multiple sources to create a unified view of your business.",
        descriptionFr:
          "Nous connectons et consolidons les données de plusieurs sources pour créer une vue unifiée de votre entreprise.",
      },
      {
        title: "Model Development",
        titleFr: "Développement du Modèle",
        description:
          "We build predictive models and analytical algorithms tailored to your specific business questions.",
        descriptionFr:
          "Nous construisons des modèles prédictifs et des algorithmes analytiques adaptés à vos questions commerciales spécifiques.",
      },
      {
        title: "Visualization & Reporting",
        titleFr: "Visualisation & Rapports",
        description: "We create intuitive dashboards and reports that make insights accessible to all stakeholders.",
        descriptionFr:
          "Nous créons des tableaux de bord intuitifs et des rapports qui rendent les informations accessibles à toutes les parties prenantes.",
      },
    ],
    image: "/data-dashboard-overview.png",
  },
  {
    id: "web-design",
    icon: <Globe className="h-6 w-6" />,
    title: "Web Design & Development",
    titleFr: "Conception & Développement Web",
    shortDescription: "Create stunning, functional websites that drive results for your business.",
    shortDescriptionFr:
      "Créez des sites web magnifiques et fonctionnels qui génèrent des résultats pour votre entreprise.",
    longDescription:
      "Our Web Design & Development services combine aesthetic excellence with technical expertise to create websites that not only look stunning but also perform exceptionally well. We focus on creating user-friendly, responsive designs that provide an optimal viewing experience across all devices. Our development process emphasizes clean code, fast loading times, and search engine optimization to ensure your website attracts and engages your target audience.",
    longDescriptionFr:
      "Nos services de Conception et Développement Web combinent l'excellence esthétique et l'expertise technique pour créer des sites web qui sont non seulement magnifiques mais aussi exceptionnellement performants. Nous nous concentrons sur la création de designs conviviaux et responsifs qui offrent une expérience de visualisation optimale sur tous les appareils. Notre processus de développement met l'accent sur un code propre, des temps de chargement rapides et l'optimisation pour les moteurs de recherche afin de garantir que votre site web attire et engage votre public cible.",
    benefits: [
      "Increased online visibility and brand recognition",
      "Improved user experience leading to higher conversion rates",
      "Mobile-responsive designs that work on all devices",
      "SEO-friendly structure for better search engine rankings",
      "Fast loading speeds for reduced bounce rates",
      "Secure, reliable hosting and regular maintenance",
    ],
    benefitsFr: [
      "Visibilité en ligne accrue et reconnaissance de la marque",
      "Expérience utilisateur améliorée conduisant à des taux de conversion plus élevés",
      "Designs adaptés aux mobiles qui fonctionnent sur tous les appareils",
      "Structure optimisée pour les moteurs de recherche pour un meilleur classement",
      "Vitesses de chargement rapides pour réduire les taux de rebond",
      "Hébergement sécurisé et fiable avec maintenance régulière",
    ],
    process: [
      {
        title: "Discovery & Planning",
        titleFr: "Découverte & Planification",
        description:
          "We analyze your business goals, target audience, and competitors to create a strategic plan for your website.",
        descriptionFr:
          "Nous analysons vos objectifs commerciaux, votre public cible et vos concurrents pour créer un plan stratégique pour votre site web.",
      },
      {
        title: "Design & Prototyping",
        titleFr: "Design & Prototypage",
        description:
          "We create wireframes and visual designs that align with your brand identity and user experience goals.",
        descriptionFr:
          "Nous créons des wireframes et des designs visuels qui s'alignent avec l'identité de votre marque et vos objectifs d'expérience utilisateur.",
      },
      {
        title: "Development",
        titleFr: "Développement",
        description: "Our developers build your website using clean, efficient code and the latest web technologies.",
        descriptionFr:
          "Nos développeurs construisent votre site web en utilisant un code propre et efficace et les dernières technologies web.",
      },
      {
        title: "Testing & Quality Assurance",
        titleFr: "Tests & Assurance Qualité",
        description: "We thoroughly test your website across devices and browsers to ensure flawless performance.",
        descriptionFr:
          "Nous testons minutieusement votre site web sur différents appareils et navigateurs pour assurer une performance impeccable.",
      },
      {
        title: "Launch & Optimization",
        titleFr: "Lancement & Optimisation",
        description:
          "We deploy your website and implement analytics to track performance and make data-driven improvements.",
        descriptionFr:
          "Nous déployons votre site web et mettons en place des analyses pour suivre les performances et apporter des améliorations basées sur les données.",
      },
    ],
    image: "/ai-website-blueprint.png",
  },
  {
    id: "computer-vision",
    icon: <Search className="h-6 w-6" />,
    title: "Computer Vision Solutions",
    titleFr: "Solutions de Vision par Ordinateur",
    shortDescription: "Image and video analysis for object detection, recognition, and classification.",
    shortDescriptionFr:
      "Analyse d'images et de vidéos pour la détection, la reconnaissance et la classification d'objets.",
    longDescription:
      "Our Computer Vision Solutions enable machines to interpret and understand visual information from the world. We develop custom computer vision systems that can analyze images and videos to detect objects, recognize patterns, track movement, and extract meaningful insights. These solutions can automate visual inspection, enhance security systems, improve customer experiences, and more.",
    longDescriptionFr:
      "Nos Solutions de Vision par Ordinateur permettent aux machines d'interpréter et de comprendre les informations visuelles du monde. Nous développons des systèmes de vision par ordinateur personnalisés qui peuvent analyser des images et des vidéos pour détecter des objets, reconnaître des modèles, suivre des mouvements et extraire des informations significatives. Ces solutions peuvent automatiser l'inspection visuelle, améliorer les systèmes de sécurité, améliorer les expériences client, et plus encore.",
    benefits: [
      "Automate visual inspection and quality control processes",
      "Enhance security through facial recognition and object detection",
      "Improve customer experiences with visual search and AR features",
      "Extract valuable data from images and videos",
      "Reduce errors and increase efficiency in visual analysis tasks",
      "Enable new capabilities like gesture recognition and emotion detection",
    ],
    benefitsFr: [
      "Automatiser les processus d'inspection visuelle et de contrôle qualité",
      "Améliorer la sécurité grâce à la reconnaissance faciale et à la détection d'objets",
      "Améliorer les expériences client avec la recherche visuelle et les fonctionnalités de RA",
      "Extraire des données précieuses des images et des vidéos",
      "Réduire les erreurs et augmenter l'efficacité dans les tâches d'analyse visuelle",
      "Permettre de nouvelles capacités comme la reconnaissance des gestes et la détection des émotions",
    ],
    process: [
      {
        title: "Requirements Analysis",
        titleFr: "Analyse des Besoins",
        description: "We identify your specific computer vision needs and define the scope of the solution.",
        descriptionFr:
          "Nous identifions vos besoins spécifiques en vision par ordinateur et définissons la portée de la solution.",
      },
      {
        title: "Data Collection & Preparation",
        titleFr: "Collecte & Préparation des Données",
        description: "We gather and prepare the image or video data needed to train the computer vision models.",
        descriptionFr:
          "Nous recueillons et préparons les données d'image ou de vidéo nécessaires pour former les modèles de vision par ordinateur.",
      },
      {
        title: "Model Development",
        titleFr: "Développement du Modèle",
        description: "We design and train custom computer vision models using deep learning techniques.",
        descriptionFr:
          "Nous concevons et formons des modèles de vision par ordinateur personnalisés en utilisant des techniques d'apprentissage profond.",
      },
      {
        title: "Integration & Deployment",
        titleFr: "Intégration & Déploiement",
        description: "We integrate the computer vision system with your existing infrastructure and deploy it.",
        descriptionFr:
          "Nous intégrons le système de vision par ordinateur à votre infrastructure existante et le déployons.",
      },
      {
        title: "Optimization & Scaling",
        titleFr: "Optimisation & Mise à l'Échelle",
        description: "We optimize the system for performance and scale it to handle your specific volume requirements.",
        descriptionFr:
          "Nous optimisons le système pour les performances et le mettons à l'échelle pour gérer vos exigences de volume spécifiques.",
      },
    ],
    image: "/annotated-street-scene.png",
  },
]

// Web Design Services
const webDesignServices = [
  {
    id: "responsive-web-design",
    icon: <Layout className="h-6 w-6" />,
    title: "Responsive Web Design",
    titleFr: "Conception Web Responsive",
    description: "Mobile-friendly websites that look great on all devices and screen sizes.",
    descriptionFr:
      "Sites web adaptés aux mobiles qui s'affichent parfaitement sur tous les appareils et tailles d'écran.",
  },
  {
    id: "ecommerce-solutions",
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "E-commerce Solutions",
    titleFr: "Solutions E-commerce",
    description: "Custom online stores with secure payment processing and inventory management.",
    descriptionFr: "Boutiques en ligne personnalisées avec traitement sécurisé des paiements et gestion des stocks.",
  },
  {
    id: "cms-development",
    icon: <FileText className="h-6 w-6" />,
    title: "Content Management Systems",
    titleFr: "Systèmes de Gestion de Contenu",
    description: "Easy-to-update websites with powerful content management capabilities.",
    descriptionFr: "Sites web faciles à mettre à jour avec de puissantes capacités de gestion de contenu.",
  },
  {
    id: "seo-optimization",
    icon: <BarChart2 className="h-6 w-6" />,
    title: "SEO Optimization",
    titleFr: "Optimisation SEO",
    description: "Search engine optimized websites that rank higher and attract more visitors.",
    descriptionFr:
      "Sites web optimisés pour les moteurs de recherche qui se classent plus haut et attirent plus de visiteurs.",
  },
  {
    id: "website-maintenance",
    icon: <Settings className="h-6 w-6" />,
    title: "Website Maintenance",
    titleFr: "Maintenance de Site Web",
    description: "Ongoing support, updates, and security monitoring for your website.",
    descriptionFr: "Support continu, mises à jour et surveillance de la sécurité pour votre site web.",
  },
]

export default function ServicesPage() {
  const { language, t } = useLanguage()
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const serviceDetailRef = useRef<HTMLDivElement>(null)

  // Update the toggleService function to show more details and scroll to the section
  const toggleService = (id: string) => {
    setSelectedService(selectedService === id ? null : id)

    // If selecting a service (not deselecting), scroll to the details section
    if (id !== selectedService && serviceDetailRef.current) {
      setTimeout(() => {
        serviceDetailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100) // Small delay to ensure the component is rendered
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <AIHeader />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light mb-4">
              <GradientText from="from-africa-red" to="to-africa-green">
                {t("services.title")}
              </GradientText>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">{t("services.description")}</p>
          </div>

          {/* AI Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border ${
                  selectedService === service.id ? "border-africa-orange" : "border-gray-800"
                } shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-africa-orange/10`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => toggleService(service.id)}
              >
                <div className="p-6">
                  <div className="bg-africa-orange/20 w-12 h-12 rounded-lg flex items-center justify-center text-africa-orange mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-medium mb-2">{language === "en" ? service.title : service.titleFr}</h2>
                  <p className="text-gray-300 font-light text-sm">
                    {language === "en" ? service.shortDescription : service.shortDescriptionFr}
                  </p>
                  <div className="mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-africa-orange hover:text-africa-orange hover:bg-africa-orange/10"
                    >
                      {t("services.learnMore")} →
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Web Design Services Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-center">
              <GradientText from="from-africa-purple" to="to-africa-teal">
                {t("webDesign.title")}
              </GradientText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light text-center mb-8">
              {t("webDesign.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {webDesignServices.map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-africa-purple/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="bg-africa-purple/20 w-12 h-12 rounded-lg flex items-center justify-center text-africa-purple mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{language === "en" ? service.title : service.titleFr}</h3>
                    <p className="text-gray-300 font-light text-sm">
                      {language === "en" ? service.description : service.descriptionFr}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Web Design Details */}
            <motion.div
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4 text-africa-purple">
                    {language === "en" ? "Our Web Design Approach" : "Notre Approche de Conception Web"}
                  </h3>
                  <p className="text-gray-300 font-light mb-6">
                    {language === "en"
                      ? services.find((s) => s.id === "web-design")?.longDescription
                      : services.find((s) => s.id === "web-design")?.longDescriptionFr}
                  </p>

                  <h4 className="text-lg font-medium mb-3 text-africa-yellow">
                    {language === "en" ? "Key Benefits" : "Avantages Clés"}
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {(language === "en"
                      ? services.find((s) => s.id === "web-design")?.benefits
                      : services.find((s) => s.id === "web-design")?.benefitsFr
                    )?.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Zap className="h-5 w-5 text-africa-yellow mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="bg-gradient-to-r from-africa-purple to-africa-teal hover:opacity-90 text-white"
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send?phone=%2B221775304895&context=AffmJ_ArYxO6fw7Qp_zVTnu3gRG3SgrnGYyWkks4PiRa1tGl977IDId3s4V0GkdnZ5Lkpft81a6mJkxVqToASfpQO2tvw9OhfpaE4LLxzRsSYpn9diI_HMK4AjBcqePeFivH1RP3ue8SYKGsIidWhuWDBQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawJg63ZleHRuA2FlbQIxMAABHqOjoi3mjbbrPg7H-lARyfvFv1Bu8RzEZ3s8FMTxi6kBwaW7WrfB3ZyUJ_Ud_aem_7akuc5OTBjIRMWRFcHWNGw",
                        "_blank",
                      )
                    }
                  >
                    {t("services.contactUsNow")}
                  </Button>
                </div>

                <div>
                  <div className="rounded-lg overflow-hidden mb-6">
                    <img
                      src="/ai-website-blueprint.png"
                      alt={language === "en" ? "Web Design Process" : "Processus de Conception Web"}
                      className="w-full h-auto"
                    />
                  </div>

                  <h4 className="text-lg font-medium mb-3 text-africa-green">
                    {language === "en" ? "Our Process" : "Notre Processus"}
                  </h4>
                  <div className="space-y-4">
                    {services
                      .find((s) => s.id === "web-design")
                      ?.process.map((step, index) => (
                        <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <div className="w-6 h-6 rounded-full bg-africa-green/20 flex items-center justify-center text-africa-green mr-2 text-sm font-medium">
                              {index + 1}
                            </div>
                            <h5 className="font-medium">{language === "en" ? step.title : step.titleFr}</h5>
                          </div>
                          <p className="text-gray-300 text-sm font-light">
                            {language === "en" ? step.description : step.descriptionFr}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Detail Section */}
          {selectedService && (
            <motion.div
              ref={serviceDetailRef}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 shadow-lg mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {services
                .filter((service) => service.id === selectedService)
                .map((service) => (
                  <div key={service.id} className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="bg-africa-orange/20 w-12 h-12 rounded-lg flex items-center justify-center text-africa-orange mr-4">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-medium">{language === "en" ? service.title : service.titleFr}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-300 font-light mb-6">
                          {language === "en" ? service.longDescription : service.longDescriptionFr}
                        </p>

                        <h3 className="text-xl font-medium mb-3 text-africa-yellow">
                          {language === "en" ? "Key Benefits" : "Avantages Clés"}
                        </h3>
                        <ul className="space-y-2 mb-6">
                          {(language === "en" ? service.benefits : service.benefitsFr).map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Zap className="h-5 w-5 text-africa-yellow mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 font-light">{benefit}</span>
                            </li>
                          ))}
                        </ul>

                        <Button
                          className="bg-gradient-to-r from-africa-orange to-africa-yellow hover:opacity-90 text-white"
                          onClick={() =>
                            window.open(
                              "https://api.whatsapp.com/send?phone=%2B221775304895&context=AffmJ_ArYxO6fw7Qp_zVTnu3gRG3SgrnGYyWkks4PiRa1tGl977IDId3s4V0GkdnZ5Lkpft81a6mJkxVqToASfpQO2tvw9OhfpaE4LLxzRsSYpn9diI_HMK4AjBcqePeFivH1RP3ue8SYKGsIidWhuWDBQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawJg63ZleHRuA2FlbQIxMAABHqOjoi3mjbbrPg7H-lARyfvFv1Bu8RzEZ3s8FMTxi6kBwaW7WrfB3ZyUJ_Ud_aem_7akuc5OTBjIRMWRFcHWNGw",
                              "_blank",
                            )
                          }
                        >
                          {language === "en"
                            ? "Contact Us About This Service"
                            : "Contactez-Nous À Propos De Ce Service"}
                        </Button>
                      </div>

                      <div>
                        <div className="rounded-lg overflow-hidden mb-6">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={language === "en" ? service.title : service.titleFr}
                            className="w-full h-auto"
                          />
                        </div>

                        <h3 className="text-xl font-medium mb-3 text-africa-green">
                          {language === "en" ? "Our Process" : "Notre Processus"}
                        </h3>
                        <div className="space-y-4">
                          {service.process.map((step, index) => (
                            <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                              <div className="flex items-center mb-2">
                                <div className="w-6 h-6 rounded-full bg-africa-green/20 flex items-center justify-center text-africa-green mr-2 text-sm font-medium">
                                  {index + 1}
                                </div>
                                <h4 className="font-medium">{language === "en" ? step.title : step.titleFr}</h4>
                              </div>
                              <p className="text-gray-300 text-sm font-light">
                                {language === "en" ? step.description : step.descriptionFr}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Contact Us Now button at the end of the service details */}
                    <div className="mt-6 text-center">
                      <Button
                        className="bg-gradient-to-r from-africa-orange to-africa-yellow hover:opacity-90 text-white px-6 py-2 rounded-full"
                        onClick={() =>
                          window.open(
                            "https://api.whatsapp.com/send?phone=%2B221775304895&context=AffmJ_ArYxO6fw7Qp_zVTnu3gRG3SgrnGYyWkks4PiRa1tGl977IDId3s4V0GkdnZ5Lkpft81a6mJkxVqToASfpQO2tvw9OhfpaE4LLxzRsSYpn9diI_HMK4AjBcqePeFivH1RP3ue8SYKGsIidWhuWDBQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawJg63ZleHRuA2FlbQIxMAABHqOjoi3mjbbrPg7H-lARyfvFv1Bu8RzEZ3s8FMTxi6kBwaW7WrfB3ZyUJ_Ud_aem_7akuc5OTBjIRMWRFcHWNGw",
                            "_blank",
                          )
                        }
                      >
                        {t("services.contactUsNow")}
                      </Button>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

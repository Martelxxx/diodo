"use client"

import { useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Brain, ChevronDown, Sparkles, BarChart, MessageSquare, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import AIHeader from "@/components/ai-header"
import NeuralNetworkBackground from "@/components/neural-network-background"
import FloatingParticles from "@/components/floating-particles"
import AITypingEffect from "@/components/ai-typing-effect"
import GradientText from "@/components/gradient-text"
import AIFeaturesSection from "@/components/ai-features-section"
import AIChatbot from "@/components/ai-chatbot"
import TeamSection from "@/components/team-section"
import PricingSection from "@/components/pricing-section"
import Footer from "@/components/footer"
import PulsingGlow from "@/components/pulsing-glow"
import { useLanguage } from "@/contexts/language-context"
import WebDesignSection from "@/components/web-design-section"

export default function Home() {
  const { t } = useLanguage()
  const featuresRef = useRef(null)
  const isInView = useInView(featuresRef, { once: false })
  const controls = useAnimation()

  if (isInView) {
    controls.start("visible")
  }

  const features = [
    {
      icon: <Brain className="h-7 w-7 text-africa-orange" />,
      title: "AI Strategy",
      description: "Custom AI solutions tailored to your business needs and goals.",
      color: "bg-gradient-to-r from-africa-red/20 to-africa-orange/10",
    },
    {
      icon: <Sparkles className="h-7 w-7 text-africa-yellow" />,
      title: "Machine Learning",
      description: "Advanced ML models that learn and adapt to your data patterns.",
      color: "bg-gradient-to-r from-africa-yellow/20 to-africa-yellow/10",
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-africa-green" />,
      title: "Conversational AI",
      description: "Natural language processing for human-like interactions.",
      color: "bg-gradient-to-r from-africa-green/20 to-africa-green/10",
    },
    {
      icon: <BarChart className="h-7 w-7 text-africa-teal" />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights and predictions.",
      color: "bg-gradient-to-r from-africa-teal/20 to-africa-teal/10",
    },
  ]

  return (
    <main className="relative overflow-hidden min-h-screen text-white bg-black">
      <AIHeader />

      {/* Background layers */}
      <div className="fixed inset-0 z-0">
        <NeuralNetworkBackground />
      </div>

      <div className="fixed inset-0 z-10 pointer-events-none">
        <FloatingParticles />
      </div>

      <div className="fixed inset-0 z-5 pointer-events-none">
        <PulsingGlow />
      </div>

      {/* Hero section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 z-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-center">
              <GradientText
                from="from-africa-orange"
                to="to-africa-red"
                className="text-4xl md:text-5xl lg:text-6xl font-light"
              >
                {t("hero.digitalSolutions", "Digital Solutions")}
              </GradientText>
              <div className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-light mt-2">
                {t("hero.for", "for")}{" "}
                <AITypingEffect
                  phrases={[
                    t("hero.phrase1", "Modern Businesses"),
                    t("hero.phrase2", "E-commerce"),
                    t("hero.phrase3", "Startups"),
                    t("hero.phrase4", "Enterprise"),
                    t("hero.phrase5", "Healthcare"),
                    t("hero.phrase6", "Education"),
                  ]}
                  className="font-light"
                />
              </div>
            </h1>

            <motion.p
              className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {t(
                "hero.description",
                "We leverage cutting-edge AI technology to create innovative digital solutions that transform businesses and drive growth in the digital age.",
              )}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                className="bg-gradient-to-r from-africa-red to-africa-orange hover:opacity-90 text-white py-5 px-7 rounded-full text-base font-light"
                onClick={() => (window.location.href = "/services")}
              >
                {t("hero.exploreServices", "Explore Services")}
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-200 hover:bg-gray-800/50 py-5 px-7 rounded-full text-base font-light"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=%2B221775304895&context=AffmJ_ArYxO6fw7Qp_zVTnu3gRG3SgrnGYyWkks4PiRa1tGl977IDId3s4V0GkdnZ5Lkpft81a6mJkxVqToASfpQO2tvw9OhfpaE4LLxzRsSYpn9diI_HMK4AjBcqePeFivH1RP3ue8SYKGsIidWhuWDBQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawJg63ZleHRuA2FlbQIxMAABHqOjoi3mjbbrPg7H-lARyfvFv1Bu8RzEZ3s8FMTxi6kBwaW7WrfB3ZyUJ_Ud_aem_7akuc5OTBjIRMWRFcHWNGw",
                    "_blank",
                  )
                }
              >
                {t("hero.contactUs", "Contact Us")}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </section>

      {/* AI Features Section */}
      <AIFeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* AI Demo Section - Simplified */}
      <section className="relative py-16 z-20" id="ai-demos">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <GradientText from="from-africa-green" to="to-africa-teal">
                {t("demos.title", "Interactive AI Demos")}
              </GradientText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              {t("demos.description", "Experience our AI capabilities firsthand with our interactive demos.")}
            </p>
          </motion.div>

          {/* Demo Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-800 max-w-2xl mx-auto">
              <h3 className="text-2xl font-light mb-6 text-white">
                {t("demos.tryInteractive", "Try Our Interactive AI Demos")}
              </h3>

              <p className="text-gray-300 mb-8 font-light">
                {t(
                  "demos.interactiveDescription",
                  "Experience our AI capabilities firsthand with interactive demos. Test our sentiment analysis, voice generation, and more.",
                )}
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-africa-purple to-africa-teal hover:opacity-90 text-white py-6 px-8 rounded-full text-lg font-light"
                onClick={() => (window.location.href = "/ai-demo")}
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                {t("demos.tryDemo", "Try AI Demo")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Features section */}
      <section ref={featuresRef} className="relative py-16 z-20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              <GradientText from="from-africa-yellow" to="to-africa-orange">
                AI-Powered Solutions
              </GradientText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              Our team leverages cutting-edge artificial intelligence to solve complex business challenges and drive
              innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`${feature.color} p-6 rounded-xl shadow-lg border border-gray-800 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 font-light text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Design Section */}
      <WebDesignSection />

      {/* Team Section - moved to be the last section before footer */}
      <TeamSection />

      {/* Add AI Chatbot */}
      <AIChatbot />

      {/* Footer */}
      <Footer />
    </main>
  )
}

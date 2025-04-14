"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Brain, Activity, Zap, Bot, Sparkles, Database } from "lucide-react"
import GradientText from "./gradient-text"
import { useLanguage } from "@/contexts/language-context"

const features = [
  {
    icon: Brain,
    title: "Neural Networks",
    description: "Our AI systems use advanced neural networks to learn patterns and make intelligent decisions.",
    color: "text-africa-orange",
    bgColor: "bg-africa-orange/10",
    borderColor: "border-africa-orange/20",
    gradient: "from-africa-red to-africa-orange",
  },
  {
    icon: Activity,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with our predictive AI models.",
    color: "text-africa-yellow",
    bgColor: "bg-africa-yellow/10",
    borderColor: "border-africa-yellow/20",
    gradient: "from-africa-orange to-africa-yellow",
  },
  {
    icon: Bot,
    title: "Conversational AI",
    description: "Create natural, human-like interactions with customers using our conversational AI.",
    color: "text-africa-green",
    bgColor: "bg-africa-green/10",
    borderColor: "border-africa-green/20",
    gradient: "from-africa-yellow to-africa-green",
  },
  {
    icon: Sparkles,
    title: "Creative Generation",
    description: "Generate content, designs, and creative assets powered by state-of-the-art AI.",
    color: "text-africa-teal",
    bgColor: "bg-africa-teal/10",
    borderColor: "border-africa-teal/20",
    gradient: "from-africa-green to-africa-teal",
  },
  {
    icon: Database,
    title: "Intelligent Data Processing",
    description: "Transform raw data into actionable insights with our AI data processing tools.",
    color: "text-africa-purple",
    bgColor: "bg-africa-purple/10",
    borderColor: "border-africa-purple/20",
    gradient: "from-africa-teal to-africa-purple",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description: "Streamline workflows and increase efficiency with AI-powered automation.",
    color: "text-africa-red",
    bgColor: "bg-africa-red/10",
    borderColor: "border-africa-red/20",
    gradient: "from-africa-purple to-africa-red",
  },
]

export default function AIFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section className="py-16 relative overflow-hidden" id="ai-features">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <GradientText from="from-africa-red" to="to-africa-yellow">
              {t("features.title", "AI-Powered Capabilities")}
            </GradientText>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            {t(
              "features.description",
              "Discover how our suite of AI technologies can transform your business operations and customer experiences.",
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const translationKey = feature.title.toLowerCase().replace(/\s+/g, "")

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-800 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-africa-orange/10" />

                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-70`}
                />

                <div className="relative p-6">
                  <motion.div
                    className={`mb-4 ${feature.color} p-3 rounded-lg inline-block ${feature.bgColor}`}
                    animate={
                      activeFeature === index
                        ? {
                            y: [0, -10, 0],
                            rotate: [0, -5, 5, 0],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: activeFeature === index ? Number.POSITIVE_INFINITY : 0 }}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>

                  <h3 className="text-lg font-medium mb-2 text-white">
                    {t(`features.${translationKey}`, feature.title)}
                  </h3>
                  <p className="text-gray-300 font-light text-sm">
                    {t(`features.${translationKey}Desc`, feature.description)}
                  </p>

                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={activeFeature === index ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute rounded-full ${feature.bgColor}`}
                          style={{
                            width: `${Math.random() * 40 + 10}px`,
                            height: `${Math.random() * 40 + 10}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -50],
                            opacity: [0, 0.7, 0],
                          }}
                          transition={{
                            duration: Math.random() * 2 + 1,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

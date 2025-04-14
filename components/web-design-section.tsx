"use client"

import { motion } from "framer-motion"
import { Palette, Code, Search, BarChart, Mail, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import GradientText from "./gradient-text"
import { useLanguage } from "@/contexts/language-context"

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Custom, responsive websites that reflect your brand identity and engage your audience.",
    color: "text-africa-orange",
    bgColor: "bg-africa-orange/10",
    gradient: "from-africa-red to-africa-orange",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Robust, scalable web applications built with the latest technologies and best practices.",
    color: "text-africa-yellow",
    bgColor: "bg-africa-yellow/10",
    gradient: "from-africa-orange to-africa-yellow",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive more organic traffic to your website.",
    color: "text-africa-green",
    bgColor: "bg-africa-green/10",
    gradient: "from-africa-yellow to-africa-green",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Gain valuable insights into your website performance and user behavior.",
    color: "text-africa-teal",
    bgColor: "bg-africa-teal/10",
    gradient: "from-africa-green to-africa-teal",
  },
  {
    icon: Mail,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to increase your online visibility and reach.",
    color: "text-africa-purple",
    bgColor: "bg-africa-purple/10",
    gradient: "from-africa-teal to-africa-purple",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Ensure your website performs flawlessly across all devices and screen sizes.",
    color: "text-africa-red",
    bgColor: "bg-africa-red/10",
    gradient: "from-africa-purple to-africa-red",
  },
]

export default function WebDesignSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 relative overflow-hidden" id="web-design">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <GradientText from="from-africa-purple" to="to-africa-teal">
              {t("webdesign.title", "Web Design & Marketing")}
            </GradientText>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            {t(
              "webdesign.description",
              "Create a powerful online presence with our professional web design and marketing services.",
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const translationKey = `webdesign.service${index + 1}`

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-800 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-africa-purple/10" />

                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-70`}
                />

                <div className="relative p-6">
                  <motion.div
                    className={`mb-4 ${service.color} p-3 rounded-lg inline-block ${service.bgColor}`}
                    whileHover={{
                      y: [0, -10, 0],
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>

                  <h3 className="text-lg font-medium mb-2 text-white">{t(`${translationKey}.title`, service.title)}</h3>
                  <p className="text-gray-300 font-light text-sm">
                    {t(`${translationKey}.description`, service.description)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            className="bg-gradient-to-r from-africa-purple to-africa-teal hover:opacity-90 text-white py-5 px-7 rounded-full text-base font-light"
            onClick={() => (window.location.href = "/portfolio")}
          >
            {t("webdesign.portfolio", "Portfolio")}
          </Button>
        </div>
      </div>
    </section>
  )
}

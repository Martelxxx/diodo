"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import GradientText from "./gradient-text"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"

const pricingData = {
  title: "Affordable Pricing",
  description: "Transparent pricing plans designed to fit businesses of all sizes",
  mostPopular: "MOST POPULAR",
  perMonth: "per month*",
  getStarted: "Get Started",
  contactUs: "Contact Us",
  plans: [
    {
      name: "Concept",
      price: {
        upfront: "50,000 CFA",
        monthly: "10,000 CFA",
      },
      description: "Perfect for individuals with a new concept or idea",
      features: ["5 page Website", "Domain + Hosting", "Mobile responsive design", "One Website revision"],
    },
    {
      name: "Independent",
      price: {
        upfront: "180,000 CFA",
        monthly: "22,000 CFA",
      },
      description: "Ideal for independent professionals and freelancers",
      features: [
        "Up to 10 semi-customized Webpages",
        "Standard SEO optimization",
        "Mobile responsive design",
        "Social Media Assets (10 Free Images)",
        "Four Website revisions",
        "Monthly performance report",
      ],
      popular: true,
    },
    {
      name: "Start Up",
      price: {
        upfront: "400,000 CFA",
        monthly: "40,000 CFA",
      },
      description: "Designed for growing startups with expanding needs",
      features: [
        "Unlimited pages",
        "Advanced SEO optimization",
        "Mobile responsive design",
        "E-commerce functionality",
        "Social media integration",
        "Unlimited Social Media Assets",
        "Weekly performance reports",
      ],
    },
    {
      name: "Enterprise",
      price: {
        upfront: "1,200,000 CFA",
        monthly: "96,000 CFA",
      },
      description: "Comprehensive solution for established businesses",
      features: [
        "Unlimited pages",
        "Premium SEO optimization",
        "Mobile responsive design",
        "E-commerce functionality",
        "Custom integrations",
        "Unlimited Social Media Assets",
        "Unlimited Website revisions",
        "Daily performance reports",
        "Dedicated account manager",
        "Priority support",
      ],
    },
  ],
  aLaCarteTitle: "À la Carte",
  categories: [
    {
      title: "Web Development",
      items: [
        { description: "Custom additional page", price: "5,000 CFA" },
        { description: "Integrated blog", price: "12,500 CFA" },
        { description: "Online booking/payment module", price: "25,000 CFA" },
        { description: "Full e-commerce integration", price: "50,000 CFA" },
        { description: "Advanced site speed optimization", price: "10,000 CFA" },
      ],
    },
    {
      title: "Design & Graphics",
      items: [
        { description: "Professional logo creation", price: "15,000 CFA" },
        { description: "Complete brand guidelines", price: "25,000 CFA" },
        { description: "Specific graphics for social media", price: "10,000 CFA" },
        { description: "Custom infographic", price: "12,500 CFA" },
      ],
    },
    {
      title: "SEO & Analytics",
      items: [
        { description: "In-depth SEO audit", price: "15,000 CFA" },
        { description: "Local SEO (Google My Business)", price: "7,500 CFA" },
        { description: "SEO-optimized content creation (per article)", price: "10,000 CFA" },
        { description: "Complete Google Analytics setup", price: "10,000 CFA" },
      ],
    },
    {
      title: "Social Media",
      items: [
        { description: "Monthly social media management", price: "25,000 CFA/month" },
        { description: "Specific social media content creation", price: "12,500 CFA" },
        { description: "Monthly community management", price: "17,500 CFA/month" },
      ],
    },
    {
      title: "Content Production",
      items: [
        { description: "Article writing (blog/site, per article)", price: "7,500 CFA/article" },
        { description: "Professional photo production (session)", price: "25,000 CFA" },
        { description: "Promotional/advertising video production", price: "37,500 CFA" },
      ],
    },
    {
      title: "AI Integration",
      items: [
        { description: "Chatbot integration and basic automation", price: "55,000 CFA" },
        { description: "Advanced AI integration with custom automations", price: "125,000 CFA" },
      ],
    },
  ],
}

export default function PricingSection() {
  const [billingType, setBillingType] = useState<"upfront" | "monthly">("monthly")
  const { t } = useLanguage()

  return (
    <section className="relative py-20 z-20" id="pricing">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <GradientText from="from-africa-red" to="to-africa-yellow" direction="lr">
              {t("pricing.title", pricingData.title)}
            </GradientText>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            {t("pricing.description", pricingData.description)}
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <Tabs
            defaultValue="monthly"
            className="w-full max-w-md"
            onValueChange={(value) => setBillingType(value as "upfront" | "monthly")}
          >
            <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 backdrop-blur-sm">
              <TabsTrigger value="monthly" className="font-light">
                {t("pricing.monthly", "Monthly")}
              </TabsTrigger>
              <TabsTrigger value="upfront" className="font-light">
                {t("pricing.upfront", "Upfront")}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {pricingData.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center z-10">
                  <span className="bg-africa-orange text-white text-xs font-medium px-3 py-1 rounded-full">
                    {t("pricing.mostPopular", pricingData.mostPopular)}
                  </span>
                </div>
              )}

              <div
                className={`relative bg-gray-900/60 backdrop-blur-sm border ${
                  plan.popular ? "border-africa-orange" : "border-gray-800"
                } rounded-xl overflow-hidden h-full shadow-lg p-6`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-medium text-white">
                    {t(`pricing.${plan.name.toLowerCase()}`, plan.name)}
                  </h3>
                  <div className="mt-2">
                    <span className="text-3xl font-light text-white">
                      {billingType === "monthly" ? plan.price.monthly : plan.price.upfront}
                    </span>
                    {billingType === "monthly" && (
                      <span className="text-sm text-gray-400 ml-1">{t("pricing.perMonth", pricingData.perMonth)}</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mt-2 font-light">
                    {t(`pricing.${plan.name.toLowerCase()}Desc`, plan.description)}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-africa-green mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm font-light">
                        {t(`pricing.features.${feature.toLowerCase().replace(/\s+/g, "")}`, feature)}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-africa-orange to-africa-yellow hover:opacity-90"
                      : "bg-gray-800 hover:bg-gray-700"
                  } text-white font-light`}
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=%2B221775304895&context=AffmJ_ArYxO6fw7Qp_zVTnu3gRG3SgrnGYyWkks4PiRa1tGl977IDId3s4V0GkdnZ5Lkpft81a6mJkxVqToASfpQO2tvw9OhfpaE4LLxzRsSYpn9diI_HMK4AjBcqePeFivH1RP3ue8SYKGsIidWhuWDBQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawJg63ZleHRuA2FlbQIxMAABHqOjoi3mjbbrPg7H-lARyfvFv1Bu8RzEZ3s8FMTxi6kBwaW7WrfB3ZyUJ_Ud_aem_7akuc5OTBjIRMWRFcHWNGw",
                      "_blank",
                    )
                  }
                >
                  {t("pricing.getStarted", pricingData.getStarted)}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-xs text-gray-400 text-center mt-4 mb-16">
          *{" "}
          {t(
            "pricing.monthlyDisclaimer",
            "Monthly payments do not confer ownership. See Terms of Service for buyout details.",
          )}
        </div>

        {/* À la Carte Services */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            <GradientText from="from-africa-green" to="to-africa-teal" direction="lr">
              {t("pricing.aLaCarte", pricingData.aLaCarteTitle)}
            </GradientText>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-light">
            {t("pricing.aLaCarteDesc", "Additional services that can be added to any plan")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="p-5 border-b border-gray-800 bg-gray-800/50">
                <h3 className="text-lg font-medium text-white">
                  {t(`pricing.categories.${category.title.toLowerCase().replace(/\s+/g, "")}`, category.title)}
                </h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-light">
                        {t(`pricing.items.${item.description.toLowerCase().replace(/\s+/g, "")}`, item.description)}
                      </span>
                      <span className="text-africa-yellow font-medium">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            className="bg-gradient-to-r from-africa-red to-africa-orange hover:opacity-90 text-white px-8 py-6 rounded-full text-base font-light"
            size="lg"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=%2B221775304895&context=AffmJ_ArYxO6fw7Qp_zVTnu3gRG3SgrnGYyWkks4PiRa1tGl977IDId3s4V0GkdnZ5Lkpft81a6mJkxVqToASfpQO2tvw9OhfpaE4LLxzRsSYpn9diI_HMK4AjBcqePeFivH1RP3ue8SYKGsIidWhuWDBQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawJg63ZleHRuA2FlbQIxMAABHqOjoi3mjbbrPg7H-lARyfvFv1Bu8RzEZ3s8FMTxi6kBwaW7WrfB3ZyUJ_Ud_aem_7akuc5OTBjIRMWRFcHWNGw",
                "_blank",
              )
            }
          >
            {t("pricing.contactUs", pricingData.contactUs)}
          </Button>
        </div>
      </div>
    </section>
  )
}

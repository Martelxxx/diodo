"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

export default function AIHeader() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Update the navItems array to use translations
  const navItems = [
    { name: t("nav.home", "Home"), href: "/" },
    { name: t("nav.services", "Services"), href: "/services" },
    { name: t("nav.caseStudies", "Case Studies"), href: "/case-studies" },
    { name: t("nav.team", "Team"), href: "#team" },
    { name: t("nav.pricing", "Pricing"), href: "#pricing" },
    { name: t("nav.contact", "Contact"), href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md py-2 shadow-lg shadow-black/20" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-9 w-9">
              <Image
                src="/images/agencyLogo.png"
                alt="Synapse Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-light bg-clip-text text-transparent bg-gradient-to-r from-africa-orange to-africa-green">
              SYNAPSE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative group font-light text-sm"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-africa-orange to-africa-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Update the buttons to use translations and link to WhatsApp */}
            <Button
              variant="outline"
              className="border-africa-orange text-africa-orange hover:bg-africa-orange/10 font-light text-sm"
              onClick={() => (window.location.href = "/ai-demo")}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {t("nav.tryAiDemo", "Try AI Demo")}
            </Button>
            <Button
              className="bg-gradient-to-r from-africa-red to-africa-orange hover:opacity-90 text-white font-light text-sm"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=%2B221775304895&context=AffmJ_ArYxO6fw7Qp_zVTnu3gRG3SgrnGYyWkks4PiRa1tGl977IDId3s4V0GkdnZ5Lkpft81a6mJkxVqToASfpQO2tvw9OhfpaE4LLxzRsSYpn9diI_HMK4AjBcqePeFivH1RP3ue8SYKGsIidWhuWDBQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawJg63ZleHRuA2FlbQIxMAABHqOjoi3mjbbrPg7H-lARyfvFv1Bu8RzEZ3s8FMTxi6kBwaW7WrfB3ZyUJ_Ud_aem_7akuc5OTBjIRMWRFcHWNGw",
                  "_blank",
                )
              }
            >
              {t("nav.contactUs", "Contact Us")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-africa-orange/20 to-africa-green/20 backdrop-blur-sm border border-gray-800"></div>
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <div className="relative">
                <Menu className="h-5 w-5 text-white" />
                <motion.div
                  className="absolute -inset-1 rounded-full border border-africa-orange opacity-60"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
                {/* Animated particles around the burger icon */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-africa-green"
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 20],
                      y: [0, (Math.random() - 0.5) * 20],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md"
          >
            <div className="container mx-auto py-4 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-africa-orange/10"
                    style={{
                      width: `${Math.random() * 40 + 10}px`,
                      height: `${Math.random() * 40 + 10}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      x: [0, Math.random() * 30 - 15],
                      y: [0, Math.random() * 30 - 15],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </div>

              <nav className="flex flex-col gap-3 relative z-10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white py-2 border-b border-gray-800 font-light flex items-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.div
                        className="w-1 h-1 rounded-full bg-africa-green mr-2"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  {/* Also update the mobile menu buttons */}
                  <Button
                    variant="outline"
                    className="border-africa-orange text-africa-orange hover:bg-africa-orange/10 w-full font-light"
                    onClick={() => (window.location.href = "/ai-demo")}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    {t("nav.tryAiDemo", "Try AI Demo")}
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-africa-red to-africa-orange hover:opacity-90 text-white w-full font-light"
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send?phone=%2B221775304895&context=AffmJ_ArYxO6fw7Qp_zVTnu3gRG3SgrnGYyWkks4PiRa1tGl977IDId3s4V0GkdnZ5Lkpft81a6mJkxVqToASfpQO2tvw9OhfpaE4LLxzRsSYpn9diI_HMK4AjBcqePeFivH1RP3ue8SYKGsIidWhuWDBQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawJg63ZleHRuA2FlbQIxMAABHqOjoi3mjbbrPg7H-lARyfvFv1Bu8RzEZ3s8FMTxi6kBwaW7WrfB3ZyUJ_Ud_aem_7akuc5OTBjIRMWRFcHWNGw",
                        "_blank",
                      )
                    }
                  >
                    {t("nav.contactUs", "Contact Us")}
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language Switcher - moved inside the header for better positioning */}
      <div className="fixed top-20 right-6 z-50">
        <LanguageSwitcher />
      </div>
    </header>
  )
}

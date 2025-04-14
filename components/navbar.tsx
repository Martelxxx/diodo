"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("Home"), href: "/" },
    { name: t("Services"), href: "/services" },
    { name: t("Team"), href: "#team" },
    { name: t("Pricing"), href: "#pricing" },
    { name: t("Contact"), href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md py-2 shadow-lg shadow-black/20" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image
                src="/images/agencyLogo.png"
                alt="Synapse Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-extralight text-white">SYNAPSE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-extralight relative group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 origin-left"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-extralight flex items-center gap-1 ml-2 text-gray-300 hover:text-white"
              onClick={toggleLanguage}
            >
              <Globe className="h-4 w-4" />
              <span>{language === "en" ? "EN" : "FR"}</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-gray-900/95 backdrop-blur-md absolute w-full transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-[300px] border-b border-gray-800 shadow-lg shadow-black/20" : "max-h-0",
        )}
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white py-1 text-sm font-extralight"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-extralight flex items-center gap-1 w-fit text-gray-300 hover:text-white"
              onClick={toggleLanguage}
            >
              <Globe className="h-4 w-4" />
              <span>{language === "en" ? "EN" : "FR"}</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

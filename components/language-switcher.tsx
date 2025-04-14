"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = (lang: "en" | "fr") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        className="relative w-10 h-10 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-africa-orange/20 to-africa-green/20 backdrop-blur-sm border border-gray-800"></div>
        <Globe className="h-5 w-5 text-white" />
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

        {/* Language indicator */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-africa-yellow rounded-full flex items-center justify-center text-xs font-bold text-gray-900">
          {language.toUpperCase()}
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 right-0 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg p-2 w-32"
          >
            <div className="flex flex-col gap-1">
              <button
                className={`w-full text-left px-3 py-2 text-sm rounded-md flex items-center justify-between ${
                  language === "en" ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800/50"
                }`}
                onClick={() => toggleLanguage("en")}
              >
                <span className="flex items-center">
                  <span className="w-6 h-6 mr-2 rounded-full overflow-hidden flex items-center justify-center bg-blue-100 text-xs">
                    🇬🇧
                  </span>
                  {t("lang.english", "English")}
                </span>
                {language === "en" && <span className="h-2 w-2 rounded-full bg-africa-orange"></span>}
              </button>

              <button
                className={`w-full text-left px-3 py-2 text-sm rounded-md flex items-center justify-between ${
                  language === "fr" ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800/50"
                }`}
                onClick={() => toggleLanguage("fr")}
              >
                <span className="flex items-center">
                  <span className="w-6 h-6 mr-2 rounded-full overflow-hidden flex items-center justify-center bg-blue-100 text-xs">
                    🇫🇷
                  </span>
                  {t("lang.french", "Français")}
                </span>
                {language === "fr" && <span className="h-2 w-2 rounded-full bg-africa-orange"></span>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

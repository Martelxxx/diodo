"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Smile, Meh, Frown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// Import the useLanguage hook
import { useLanguage } from "@/contexts/language-context"

interface SentimentResult {
  score: number
  label: "positive" | "neutral" | "negative"
  color: string
}

// Add the useLanguage hook in the component
export default function AISentimentAnalyzer() {
  const { language, t } = useLanguage()
  const [text, setText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<SentimentResult | null>(null)

  const analyzeText = () => {
    if (!text.trim()) return

    setIsAnalyzing(true)

    // Simulate AI analysis
    setTimeout(() => {
      // Simple sentiment analysis simulation
      const words = text.toLowerCase().split(/\s+/)
      const positiveWords = ["good", "great", "excellent", "amazing", "love", "happy", "best", "awesome"]
      const negativeWords = ["bad", "terrible", "awful", "hate", "worst", "poor", "horrible", "disappointed"]

      let score = 0.5 // Start neutral

      words.forEach((word) => {
        if (positiveWords.includes(word)) score += 0.1
        if (negativeWords.includes(word)) score -= 0.1
      })

      // Clamp between 0 and 1
      score = Math.max(0, Math.min(1, score))

      let label: "positive" | "neutral" | "negative" = "neutral"
      let color = "rgb(56, 189, 248)" // cyan

      if (score > 0.6) {
        label = "positive"
        color = "rgb(34, 211, 238)" // light cyan
      } else if (score < 0.4) {
        label = "negative"
        color = "rgb(236, 72, 153)" // pink
      }

      setResult({ score, label, color })
      setIsAnalyzing(false)
    }, 1000)
  }

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-gray-800/30" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500/10"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Update the component text to use translations */}
        <h3 className="text-xl font-light mb-4 text-center text-white">{t("demos.sentiment.title")}</h3>

        <div className="mb-4">
          <Input
            placeholder={t("demos.sentiment.placeholder")}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full font-light bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400"
          />
        </div>

        <Button
          onClick={analyzeText}
          disabled={!text.trim() || isAnalyzing}
          className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:opacity-90 mb-6"
        >
          {isAnalyzing ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Search className="h-4 w-4 mr-2" />
            </motion.div>
          ) : (
            <Search className="h-4 w-4 mr-2" />
          )}
          {isAnalyzing ? t("demos.sentiment.analyzing") : t("demos.sentiment.analyze")}
        </Button>

        {result && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="mb-3">
              {result.label === "positive" && <Smile className="inline-block h-8 w-8 text-cyan-400" />}
              {result.label === "neutral" && <Meh className="inline-block h-8 w-8 text-blue-400" />}
              {result.label === "negative" && <Frown className="inline-block h-8 w-8 text-pink-400" />}
            </div>
            <p className="font-light text-gray-200 capitalize">{result.label} Sentiment</p>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: result.color, width: `${result.score * 100}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${result.score * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1 font-light">Score: {Math.round(result.score * 100)}%</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Wand2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AIImageGenerator() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState("")

  // Pre-defined image URLs that represent AI-generated content
  const aiGeneratedImages = [
    "/placeholder.svg?key=2rgoa",
    "/neon-cityscape.png",
    "/cosmic-dust.png",
    "/vibrant-reef-life.png",
    "/kaleidoscopic-geometry.png",
  ]

  const generateImage = () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate AI image generation
    setTimeout(() => {
      // Choose a random "AI-generated" image from our collection
      const randomIndex = Math.floor(Math.random() * aiGeneratedImages.length)
      setGeneratedImage(aiGeneratedImages[randomIndex])
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-light mb-4 text-center">AI Image Generator</h3>

      <div className="mb-4">
        <Input
          placeholder="Describe an image to generate..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full font-light"
        />
      </div>

      <Button
        onClick={generateImage}
        disabled={!prompt.trim() || isGenerating}
        className="w-full bg-gradient-to-r from-synapse-blue to-synapse-pink text-white hover:opacity-90 mb-6"
      >
        {isGenerating ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
          </motion.div>
        ) : (
          <Wand2 className="h-4 w-4 mr-2" />
        )}
        {isGenerating ? "Generating..." : "Generate Image"}
      </Button>

      {generatedImage && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full">
          <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
            <img src={generatedImage || "/placeholder.svg"} alt="AI Generated" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center font-light">AI-generated image based on your prompt</p>
        </motion.div>
      )}
    </div>
  )
}

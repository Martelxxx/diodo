"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, RefreshCw, Wand2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

type StyleOption = {
  id: string
  name: string
  nameEn: string
  nameFr: string
  preview: string
}

const styleOptions: StyleOption[] = [
  {
    id: "vangogh",
    nameEn: "Van Gogh",
    nameFr: "Van Gogh",
    name: "Van Gogh",
    preview: "/starry-night-cityscape.png",
  },
  {
    id: "picasso",
    nameEn: "Picasso",
    nameFr: "Picasso",
    name: "Picasso",
    preview: "/abstract-portrait.png",
  },
  {
    id: "monet",
    nameEn: "Monet",
    nameFr: "Monet",
    name: "Monet",
    preview: "/impressionistic-garden.png",
  },
  {
    id: "african",
    nameEn: "African Art",
    nameFr: "Art Africain",
    name: "African Art",
    preview: "/vibrant-african-mask.png",
  },
  {
    id: "comic",
    nameEn: "Comic",
    nameFr: "Bande Dessinée",
    name: "Comic",
    preview: "/dynamic-cityscape.png",
  },
  {
    id: "pixel",
    nameEn: "Pixel Art",
    nameFr: "Art Pixel",
    name: "Pixel Art",
    preview: "/placeholder.svg?height=60&width=60&query=pixel+art+style",
  },
]

export default function AIImageStyleTransfer() {
  const { language, t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string)
        setProcessedImage(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId)
    setProcessedImage(null)
  }

  const processImage = () => {
    if (!selectedImage || !selectedStyle) return

    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      // For demo purposes, we'll use placeholder images
      const styleImages: Record<string, string> = {
        vangogh: "/placeholder.svg?height=300&width=400&query=photo+in+van+gogh+style",
        picasso: "/placeholder.svg?height=300&width=400&query=photo+in+picasso+style",
        monet: "/placeholder.svg?height=300&width=400&query=photo+in+monet+style",
        african: "/placeholder.svg?height=300&width=400&query=photo+in+african+art+style",
        comic: "/placeholder.svg?height=300&width=400&query=photo+in+comic+style",
        pixel: "/placeholder.svg?height=300&width=400&query=photo+in+pixel+art+style",
      }

      setProcessedImage(styleImages[selectedStyle])
      setIsProcessing(false)
    }, 2000)
  }

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement("a")
      link.href = processedImage
      link.download = `styled-image-${selectedStyle}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-gray-800/30" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-africa-purple/10"
            style={{
              width: `${Math.random() * 60 + 10}px`,
              height: `${Math.random() * 60 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-light mb-6 text-center text-white flex items-center justify-center">
          <Wand2 className="h-5 w-5 mr-2 text-africa-purple" />
          {language === "en" ? "AI Style Transfer" : "Transfert de Style IA"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-300 text-sm mb-4 font-light">
              {language === "en"
                ? "Upload an image and transform it into different artistic styles using AI."
                : "Téléchargez une image et transformez-la en différents styles artistiques grâce à l'IA."}
            </p>

            <div className="mb-6">
              <label className="block text-sm font-light text-gray-300 mb-2">
                {language === "en" ? "Upload Image" : "Télécharger une Image"}
              </label>
              <div className="relative">
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
                <label
                  htmlFor="image-upload"
                  className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer bg-gray-800/50 hover:bg-gray-800/80 transition-colors"
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Uploaded"
                      className="h-full object-contain rounded-lg"
                    />
                  ) : (
                    <div className="text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">
                        {language === "en" ? "Click to upload an image" : "Cliquez pour télécharger une image"}
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-light text-gray-300 mb-2">
                {language === "en" ? "Select Style" : "Sélectionner un Style"}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {styleOptions.map((style) => (
                  <div
                    key={style.id}
                    className={`p-2 rounded-lg cursor-pointer transition-all ${
                      selectedStyle === style.id
                        ? "bg-africa-purple/30 border-2 border-africa-purple"
                        : "bg-gray-800/50 border border-gray-700 hover:bg-gray-800"
                    }`}
                    onClick={() => handleStyleSelect(style.id)}
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={style.preview || "/placeholder.svg"}
                        alt={style.name}
                        className="w-10 h-10 rounded-full mb-1 object-cover"
                      />
                      <span className="text-xs text-center text-gray-300">
                        {language === "en" ? style.nameEn : style.nameFr}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={processImage}
              disabled={!selectedImage || !selectedStyle || isProcessing}
              className="w-full bg-gradient-to-r from-africa-purple to-africa-teal text-white hover:opacity-90"
            >
              {isProcessing ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="mr-2"
                >
                  <RefreshCw className="h-4 w-4" />
                </motion.div>
              ) : (
                <Wand2 className="h-4 w-4 mr-2" />
              )}
              {isProcessing
                ? language === "en"
                  ? "Processing..."
                  : "Traitement..."
                : language === "en"
                  ? "Apply Style"
                  : "Appliquer le Style"}
            </Button>
          </div>

          <div>
            <label className="block text-sm font-light text-gray-300 mb-2">
              {language === "en" ? "Result" : "Résultat"}
            </label>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg h-64 flex items-center justify-center overflow-hidden">
              {processedImage ? (
                <div className="relative w-full h-full">
                  <img
                    src={processedImage || "/placeholder.svg"}
                    alt="Processed"
                    className="w-full h-full object-contain"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute bottom-2 right-2 bg-gray-900/80 border-gray-700 text-white"
                    onClick={handleDownload}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    {language === "en" ? "Download" : "Télécharger"}
                  </Button>
                </div>
              ) : (
                <p className="text-gray-400 text-sm">
                  {language === "en" ? "Processed image will appear here" : "L'image traitée apparaîtra ici"}
                </p>
              )}
            </div>
            {processedImage && (
              <p className="text-xs text-gray-400 mt-2 text-center">
                {language === "en"
                  ? "Note: This is a simulation. In a real application, AI would process your actual image."
                  : "Remarque : Il s'agit d'une simulation. Dans une application réelle, l'IA traiterait votre image."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

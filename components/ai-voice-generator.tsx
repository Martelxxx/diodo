"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mic, Play, Square, Volume2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/contexts/language-context"

type VoiceOption = {
  id: string
  nameEn: string
  nameFr: string
  gender: "male" | "female"
}

const voiceOptions: VoiceOption[] = [
  { id: "en-us-1", nameEn: "American (Male)", nameFr: "Américain (Homme)", gender: "male" },
  { id: "en-us-2", nameEn: "American (Female)", nameFr: "Américaine (Femme)", gender: "female" },
  { id: "en-gb-1", nameEn: "British (Male)", nameFr: "Britannique (Homme)", gender: "male" },
  { id: "en-gb-2", nameEn: "British (Female)", nameFr: "Britannique (Femme)", gender: "female" },
  { id: "fr-fr-1", nameEn: "French (Male)", nameFr: "Français (Homme)", gender: "male" },
  { id: "fr-fr-2", nameEn: "French (Female)", nameFr: "Française (Femme)", gender: "female" },
]

export default function AIVoiceGenerator() {
  const { language, t } = useLanguage()
  const [text, setText] = useState("")
  const [selectedVoice, setSelectedVoice] = useState<string>("en-us-1")
  const [speed, setSpeed] = useState(1)
  const [pitch, setPitch] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)

  const handleGenerate = () => {
    if (!text.trim()) return

    setIsGenerating(true)
    setAudioUrl(null)

    // Simulate AI voice generation
    setTimeout(() => {
      // In a real app, we would call an API to generate the audio
      // For demo purposes, we'll just set a dummy audio URL
      setAudioUrl("/placeholder-audio.mp3")
      setIsGenerating(false)
    }, 2000)
  }

  const handlePlayPause = () => {
    // In a real app, we would play/pause the audio
    setIsPlaying(!isPlaying)

    // Simulate audio playing for 5 seconds
    if (!isPlaying) {
      setTimeout(() => {
        setIsPlaying(false)
      }, 5000)
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
            className="absolute rounded-full bg-africa-green/10"
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
          <Volume2 className="h-5 w-5 mr-2 text-africa-green" />
          {language === "en" ? "AI Voice Generator" : "Générateur de Voix IA"}
        </h3>

        <div className="mb-4">
          <label className="block text-sm font-light text-gray-300 mb-1">
            {language === "en" ? "Enter Text" : "Entrez du Texte"}
          </label>
          <Textarea
            placeholder={
              language === "en"
                ? "Type the text you want to convert to speech..."
                : "Tapez le texte que vous souhaitez convertir en parole..."
            }
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full font-light bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 min-h-[100px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-light text-gray-300 mb-1">
              {language === "en" ? "Voice" : "Voix"}
            </label>
            <Select value={selectedVoice} onValueChange={setSelectedVoice}>
              <SelectTrigger className="w-full bg-gray-800/50 border-gray-700 text-white">
                <SelectValue placeholder={language === "en" ? "Select a voice" : "Sélectionnez une voix"} />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                {voiceOptions.map((voice) => (
                  <SelectItem key={voice.id} value={voice.id}>
                    {language === "en" ? voice.nameEn : voice.nameFr}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-light text-gray-300 mb-1">
              {language === "en" ? "Speed" : "Vitesse"}
            </label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">0.5x</span>
              <Slider
                value={[speed]}
                min={0.5}
                max={2}
                step={0.1}
                onValueChange={(value) => setSpeed(value[0])}
                className="flex-1"
              />
              <span className="text-xs text-gray-400">2.0x</span>
              <span className="text-xs text-white bg-gray-800 px-2 py-1 rounded ml-2 w-12 text-center">
                {speed.toFixed(1)}x
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-light text-gray-300 mb-1">
            {language === "en" ? "Pitch" : "Tonalité"}
          </label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Low</span>
            <Slider
              value={[pitch]}
              min={0.5}
              max={1.5}
              step={0.1}
              onValueChange={(value) => setPitch(value[0])}
              className="flex-1"
            />
            <span className="text-xs text-gray-400">High</span>
            <span className="text-xs text-white bg-gray-800 px-2 py-1 rounded ml-2 w-12 text-center">
              {pitch.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button
            onClick={handleGenerate}
            disabled={!text.trim() || isGenerating}
            className="w-full bg-gradient-to-r from-africa-green to-africa-teal text-white hover:opacity-90"
          >
            {isGenerating ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="mr-2"
              >
                <RefreshCw className="h-4 w-4" />
              </motion.div>
            ) : (
              <Mic className="h-4 w-4 mr-2" />
            )}
            {isGenerating
              ? language === "en"
                ? "Generating..."
                : "Génération..."
              : language === "en"
                ? "Generate Voice"
                : "Générer la Voix"}
          </Button>

          {audioUrl && (
            <div className="bg-gray-800/70 p-3 rounded-lg border border-gray-700">
              <div className="flex items-center justify-between">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-700"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>

                <div className="flex-1 mx-4 h-8 relative">
                  {isPlaying ? (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-around"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-africa-green rounded-full"
                          animate={{
                            height: [Math.random() * 10 + 5, Math.random() * 20 + 10, Math.random() * 10 + 5],
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            delay: i * 0.05,
                          }}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-1 w-full bg-gray-700 rounded-full">
                        <div className="h-full w-0 bg-africa-green rounded-full" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-xs text-gray-400">00:00</div>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                {language === "en"
                  ? "Note: This is a simulation. In a real application, AI would generate actual audio."
                  : "Remarque : Il s'agit d'une simulation. Dans une application réelle, l'IA générerait un audio réel."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

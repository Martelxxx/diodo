"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  MessageSquare,
  Search,
  ImageIcon,
  Volume2,
  RefreshCw,
  Send,
  User,
  Bot,
  Mic,
  MicOff,
  Play,
  Pause,
  Copy,
  Check,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AIHeader from "@/components/ai-header"
import Footer from "@/components/footer"
import GradientText from "@/components/gradient-text"
import { useLanguage } from "@/contexts/language-context"

// Demo interface
interface AIDemo {
  id: string
  icon: React.ReactNode
  title: string
  titleFr: string
  description: string
  descriptionFr: string
  component: React.ReactNode
}

export default function AIDemoPage() {
  const { language, t } = useLanguage()
  const [activeDemo, setActiveDemo] = useState<string>("chatbot")

  // Define the AI demos
  const aiDemos: AIDemo[] = [
    {
      id: "chatbot",
      icon: <MessageSquare className="h-5 w-5" />,
      title: "AI Chatbot",
      titleFr: "Chatbot IA",
      description: "Experience natural conversations with our advanced AI chatbot.",
      descriptionFr: "Expérimentez des conversations naturelles avec notre chatbot IA avancé.",
      component: <ChatbotDemo />,
    },
    {
      id: "image-generation",
      icon: <ImageIcon className="h-5 w-5" />,
      title: "Image Generation",
      titleFr: "Génération d'Images",
      description: "Create unique images from text descriptions using AI.",
      titleFr: "Créez des images uniques à partir de descriptions textuelles en utilisant l'IA.",
      component: <ImageGenerationDemo />,
    },
    {
      id: "voice-assistant",
      icon: <Volume2 className="h-5 w-5" />,
      title: "Voice Assistant",
      titleFr: "Assistant Vocal",
      description: "Interact with our AI using your voice and hear its responses.",
      descriptionFr: "Interagissez avec notre IA en utilisant votre voix et écoutez ses réponses.",
      component: <VoiceAssistantDemo />,
    },
    {
      id: "sentiment-analysis",
      icon: <Search className="h-5 w-5" />,
      title: "Sentiment Analysis",
      titleFr: "Analyse de Sentiment",
      description: "Analyze the emotional tone of text with our AI sentiment analyzer.",
      descriptionFr: "Analysez le ton émotionnel du texte avec notre analyseur de sentiment IA.",
      component: <SentimentAnalysisDemo />,
    },
    {
      id: "content-generator",
      icon: <Sparkles className="h-5 w-5" />,
      title: "Content Generator",
      titleFr: "Générateur de Contenu",
      description: "Generate high-quality content for various purposes using AI.",
      descriptionFr: "Générez du contenu de haute qualité pour diverses fins en utilisant l'IA.",
      component: <ContentGeneratorDemo />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <AIHeader />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-light mb-4">
              <GradientText from="from-africa-purple" to="to-africa-teal">
                {t("aiDemo.title")}
              </GradientText>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">{t("aiDemo.description")}</p>
          </div>

          {/* Simulation Notice */}
          <div className="bg-gray-800/60 border border-africa-purple/50 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-africa-purple flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">{t("aiDemo.simulationNotice")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            {aiDemos.map((demo) => (
              <motion.div
                key={demo.id}
                className={`bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border ${
                  activeDemo === demo.id ? "border-africa-purple" : "border-gray-800"
                } shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-africa-purple/10`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setActiveDemo(demo.id)}
              >
                <div className="p-4 text-center">
                  <div
                    className={`mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                      activeDemo === demo.id ? "bg-africa-purple/20 text-africa-purple" : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {demo.icon}
                  </div>
                  <h2 className="text-lg font-medium mb-2">{language === "en" ? demo.title : demo.titleFr}</h2>
                  <p className="text-gray-300 font-light text-sm">
                    {language === "en" ? demo.description : demo.descriptionFr}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">{aiDemos.find((demo) => demo.id === activeDemo)?.component}</div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Chatbot Demo Component
function ChatbotDemo() {
  const { language } = useLanguage()
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content:
        language === "en"
          ? "Hello! I'm Synapse AI Assistant. How can I help you today?"
          : "Bonjour ! Je suis l'Assistant IA Synapse. Comment puis-je vous aider aujourd'hui ?",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking and responding
    setTimeout(() => {
      // Simple response patterns
      let botResponse =
        language === "en"
          ? "I'm not sure I understand. Can you please clarify?"
          : "Je ne suis pas sûr de comprendre. Pouvez-vous préciser ?"

      const userInput = input.toLowerCase()

      if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("bonjour")) {
        botResponse =
          language === "en"
            ? "Hello there! How can I assist you today?"
            : "Bonjour ! Comment puis-je vous aider aujourd'hui ?"
      } else if (userInput.includes("help") || userInput.includes("aide")) {
        botResponse =
          language === "en"
            ? "I'm here to help! You can ask me about our AI services, technologies, or how we can assist your business."
            : "Je suis là pour vous aider ! Vous pouvez me poser des questions sur nos services d'IA, nos technologies ou comment nous pouvons aider votre entreprise."
      } else if (
        userInput.includes("service") ||
        userInput.includes("offer") ||
        userInput.includes("service") ||
        userInput.includes("offre")
      ) {
        botResponse =
          language === "en"
            ? "We offer a range of AI services including machine learning solutions, natural language processing, computer vision, and custom AI development for businesses."
            : "Nous offrons une gamme de services d'IA comprenant des solutions d'apprentissage automatique, de traitement du langage naturel, de vision par ordinateur et de développement d'IA personnalisé pour les entreprises."
      } else if (
        userInput.includes("contact") ||
        userInput.includes("support") ||
        userInput.includes("contact") ||
        userInput.includes("support")
      ) {
        botResponse =
          language === "en"
            ? "You can reach our support team at hello@synsol.dev or call us at +221 77 530 4895."
            : "Vous pouvez contacter notre équipe de support à hello@synsol.dev ou nous appeler au +221 77 530 4895."
      } else if (
        userInput.includes("price") ||
        userInput.includes("cost") ||
        userInput.includes("prix") ||
        userInput.includes("coût")
      ) {
        botResponse =
          language === "en"
            ? "Our pricing varies based on project requirements. I'd recommend checking our pricing page or contacting us for a custom quote."
            : "Nos prix varient en fonction des exigences du projet. Je vous recommande de consulter notre page de tarification ou de nous contacter pour un devis personnalisé."
      }

      const assistantMessage = { role: "assistant" as const, content: botResponse }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-medium mb-6 text-center">
        <GradientText from="from-africa-purple" to="to-africa-teal">
          {language === "en" ? "AI Chatbot Demo" : "Démo du Chatbot IA"}
        </GradientText>
      </h2>

      <div className="bg-gray-800/50 rounded-lg border border-gray-700 mb-4">
        <div className="h-96 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === "user"
                    ? "bg-africa-purple text-white"
                    : "bg-gray-700 text-gray-100 border border-gray-600"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {message.role === "assistant" ? (
                    <Bot className="h-4 w-4 text-africa-teal" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                  <span className="text-xs opacity-70 font-light">
                    {message.role === "assistant"
                      ? language === "en"
                        ? "AI Assistant"
                        : "Assistant IA"
                      : language === "en"
                        ? "You"
                        : "Vous"}
                  </span>
                </div>
                <p className="text-sm font-light">{message.content}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-700 text-gray-100 rounded-lg px-4 py-2 border border-gray-600 max-w-[80%]">
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="h-4 w-4 text-africa-teal" />
                  <span className="text-xs opacity-70 font-light">
                    {language === "en" ? "AI Assistant" : "Assistant IA"}
                  </span>
                </div>
                <div className="flex gap-1">
                  <motion.div
                    className="w-2 h-2 bg-africa-teal rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-africa-teal rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-africa-teal rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 border-t border-gray-700">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={language === "en" ? "Type a message..." : "Tapez un message..."}
              className="flex-1 font-light bg-gray-700 border-gray-600 text-white"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim() || isTyping}
              className="bg-gradient-to-r from-africa-purple to-africa-teal text-white"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-400 text-center">
        {language === "en"
          ? "Try asking about our services, pricing, or how to contact us!"
          : "Essayez de poser des questions sur nos services, nos prix ou comment nous contacter !"}
      </div>
    </div>
  )
}

// Image Generation Demo Component
function ImageGenerationDemo() {
  const { language } = useLanguage()
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [generationHistory, setGenerationHistory] = useState<Array<{ prompt: string; image: string }>>([])

  const generateImage = () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setGeneratedImage(null)

    // Simulate AI image generation
    setTimeout(() => {
      // For demo purposes, we'll use placeholder images
      const placeholderUrl = `/placeholder.svg?height=512&width=512&query=${encodeURIComponent(prompt)}`
      setGeneratedImage(placeholderUrl)
      setGenerationHistory((prev) => [...prev, { prompt, image: placeholderUrl }])
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-medium mb-6 text-center">
        <GradientText from="from-africa-purple" to="to-africa-teal">
          {language === "en" ? "AI Image Generation" : "Génération d'Images par IA"}
        </GradientText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4 mb-4">
            <h3 className="text-lg font-medium mb-3">
              {language === "en" ? "Enter Your Prompt" : "Entrez Votre Instruction"}
            </h3>
            <Textarea
              placeholder={
                language === "en"
                  ? "Describe the image you want to generate..."
                  : "Décrivez l'image que vous souhaitez générer..."
              }
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full font-light bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px] mb-4"
            />
            <Button
              onClick={generateImage}
              disabled={!prompt.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-africa-purple to-africa-teal text-white hover:opacity-90"
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
                <Sparkles className="h-4 w-4 mr-2" />
              )}
              {isGenerating
                ? language === "en"
                  ? "Generating..."
                  : "Génération en cours..."
                : language === "en"
                  ? "Generate Image"
                  : "Générer l'Image"}
            </Button>
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
            <h3 className="text-lg font-medium mb-3">
              {language === "en" ? "Generation History" : "Historique de Génération"}
            </h3>
            {generationHistory.length === 0 ? (
              <p className="text-gray-400 text-sm font-light text-center py-4">
                {language === "en"
                  ? "Your generation history will appear here."
                  : "Votre historique de génération apparaîtra ici."}
              </p>
            ) : (
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {generationHistory.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 cursor-pointer"
                    onClick={() => {
                      setPrompt(item.prompt)
                      setGeneratedImage(item.image)
                    }}
                  >
                    <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.prompt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-light text-gray-300 truncate">{item.prompt}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
          <h3 className="text-lg font-medium mb-3">{language === "en" ? "Generated Image" : "Image Générée"}</h3>
          <div className="aspect-square bg-gray-700/50 rounded-lg overflow-hidden flex items-center justify-center">
            {isGenerating ? (
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="mx-auto mb-3"
                >
                  <RefreshCw className="h-8 w-8 text-africa-purple" />
                </motion.div>
                <p className="text-gray-400 text-sm font-light">
                  {language === "en" ? "Generating your image..." : "Génération de votre image..."}
                </p>
              </div>
            ) : generatedImage ? (
              <img src={generatedImage || "/placeholder.svg"} alt={prompt} className="w-full h-full object-contain" />
            ) : (
              <div className="text-center p-6">
                <ImageIcon className="h-12 w-12 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400 text-sm font-light">
                  {language === "en"
                    ? "Enter a prompt and click 'Generate Image' to create an AI-generated image."
                    : "Entrez une instruction et cliquez sur 'Générer l'Image' pour créer une image générée par IA."}
                </p>
              </div>
            )}
          </div>
          {generatedImage && !isGenerating && (
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-400 mb-2">
                {language === "en"
                  ? "Note: This is a simulation. In a real application, AI would generate a unique image based on your prompt."
                  : "Remarque : Il s'agit d'une simulation. Dans une application réelle, l'IA générerait une image unique basée sur votre instruction."}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="text-gray-300 border-gray-600"
                onClick={() => window.open(generatedImage, "_blank")}
              >
                {language === "en" ? "View Full Size" : "Voir en Taille Réelle"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Voice Assistant Demo Component
function VoiceAssistantDemo() {
  const { language } = useLanguage()
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [response, setResponse] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [conversationHistory, setConversationHistory] = useState<Array<{ query: string; response: string }>>([])

  const toggleListening = () => {
    if (isListening) {
      // Stop listening
      setIsListening(false)

      // Simulate processing
      if (transcript) {
        setIsProcessing(true)
        setTimeout(() => {
          processVoiceCommand(transcript)
        }, 1500)
      }
    } else {
      // Start listening
      setIsListening(true)
      setTranscript("")

      // Simulate voice recognition
      setTimeout(() => {
        const sampleQueries = [
          language === "en" ? "What services do you offer?" : "Quels services proposez-vous ?",
          language === "en" ? "Tell me about your AI solutions" : "Parlez-moi de vos solutions d'IA",
          language === "en" ? "How can I contact your team?" : "Comment puis-je contacter votre équipe ?",
        ]
        setTranscript(sampleQueries[Math.floor(Math.random() * sampleQueries.length)])
      }, 2000)
    }
  }

  const processVoiceCommand = (command: string) => {
    let aiResponse = ""

    // Simple response logic
    const lowerCommand = command.toLowerCase()

    if (lowerCommand.includes("service") || lowerCommand.includes("offer") || lowerCommand.includes("solution")) {
      aiResponse =
        language === "en"
          ? "We offer a range of AI services including machine learning, natural language processing, computer vision, and custom AI development tailored to your business needs."
          : "Nous proposons une gamme de services d'IA comprenant l'apprentissage automatique, le traitement du langage naturel, la vision par ordinateur et le développement d'IA personnalisé adapté aux besoins de votre entreprise."
    } else if (lowerCommand.includes("contact") || lowerCommand.includes("team") || lowerCommand.includes("reach")) {
      aiResponse =
        language === "en"
          ? "You can contact our team by email at hello@synsol.dev or by phone at +221 77 530 4895. We're always happy to discuss how we can help your business."
          : "Vous pouvez contacter notre équipe par email à hello@synsol.dev ou par téléphone au +221 77 530 4895. Nous sommes toujours heureux de discuter de la façon dont nous pouvons aider votre entreprise."
    } else if (lowerCommand.includes("price") || lowerCommand.includes("cost") || lowerCommand.includes("pricing")) {
      aiResponse =
        language === "en"
          ? "Our pricing varies based on project requirements. We offer flexible plans starting from 50,000 CFA for concept projects up to enterprise solutions. I'd be happy to discuss your specific needs to provide a tailored quote."
          : "Nos prix varient en fonction des exigences du projet. Nous proposons des plans flexibles à partir de 50 000 CFA pour les projets conceptuels jusqu'aux solutions d'entreprise. Je serais heureux de discuter de vos besoins spécifiques pour vous fournir un devis personnalisé."
    } else {
      aiResponse =
        language === "en"
          ? "I'm not sure I understand your question. Could you please rephrase it or ask about our services, pricing, or how to contact us?"
          : "Je ne suis pas sûr de comprendre votre question. Pourriez-vous la reformuler ou nous poser des questions sur nos services, nos prix ou comment nous contacter ?"
    }

    setResponse(aiResponse)
    setIsProcessing(false)
    setConversationHistory((prev) => [...prev, { query: command, response: aiResponse }])

    // Simulate voice playback
    setIsPlaying(true)
    setTimeout(() => {
      setIsPlaying(false)
    }, 5000)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-medium mb-6 text-center">
        <GradientText from="from-africa-purple" to="to-africa-teal">
          {language === "en" ? "AI Voice Assistant" : "Assistant Vocal IA"}
        </GradientText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
          <div className="text-center mb-6">
            <motion.button
              className={`w-24 h-24 rounded-full flex items-center justify-center ${
                isListening ? "bg-africa-red text-white" : "bg-africa-green text-white"
              }`}
              whileTap={{ scale: 0.95 }}
              onClick={toggleListening}
              disabled={isProcessing}
            >
              {isListening ? <Mic className="h-8 w-8 animate-pulse" /> : <MicOff className="h-8 w-8" />}
            </motion.button>
            <p className="mt-3 text-sm font-light">
              {isListening
                ? language === "en"
                  ? "Listening..."
                  : "Écoute en cours..."
                : language === "en"
                  ? "Tap to speak"
                  : "Appuyez pour parler"}
            </p>
          </div>

          <div className="bg-gray-700/50 rounded-lg p-3 min-h-[100px] mb-4">
            <h3 className="text-sm font-medium mb-2 text-gray-300">
              {language === "en" ? "Your Voice Input:" : "Votre Entrée Vocale :"}
            </h3>
            {transcript ? (
              <p className="text-white font-light">"{transcript}"</p>
            ) : (
              <p className="text-gray-400 text-sm font-light italic">
                {language === "en" ? "Your voice input will appear here..." : "Votre entrée vocale apparaîtra ici..."}
              </p>
            )}
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-400 mb-2">
              {language === "en"
                ? "Note: This is a simulation. In a real application, we would use your device's microphone."
                : "Remarque : Il s'agit d'une simulation. Dans une application réelle, nous utiliserions le microphone de votre appareil."}
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
          <div className="bg-gray-700/50 rounded-lg p-3 min-h-[100px] mb-4">
            <h3 className="text-sm font-medium mb-2 text-gray-300">
              {language === "en" ? "AI Response:" : "Réponse de l'IA :"}
            </h3>
            {isProcessing ? (
              <div className="flex items-center gap-2 text-gray-400">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <RefreshCw className="h-4 w-4" />
                </motion.div>
                <span className="text-sm font-light">
                  {language === "en" ? "Processing your request..." : "Traitement de votre demande..."}
                </span>
              </div>
            ) : response ? (
              <div>
                <p className="text-white font-light mb-3">{response}</p>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className={`text-xs ${isPlaying ? "text-africa-green" : "text-gray-400"}`}
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-3 w-3 mr-1" /> : <Play className="h-3 w-3 mr-1" />}
                    {isPlaying
                      ? language === "en"
                        ? "Playing"
                        : "Lecture"
                      : language === "en"
                        ? "Play Response"
                        : "Lire la Réponse"}
                  </Button>
                  {isPlaying && (
                    <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-africa-green"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-sm font-light italic">
                {language === "en" ? "AI response will appear here..." : "La réponse de l'IA apparaîtra ici..."}
              </p>
            )}
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2 text-gray-300">
              {language === "en" ? "Conversation History:" : "Historique de Conversation :"}
            </h3>
            {conversationHistory.length === 0 ? (
              <p className="text-gray-400 text-xs font-light italic text-center py-2">
                {language === "en"
                  ? "Your conversation history will appear here..."
                  : "Votre historique de conversation apparaîtra ici..."}
              </p>
            ) : (
              <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
                {conversationHistory.map((item, index) => (
                  <div key={index} className="text-xs border-l-2 border-gray-600 pl-2">
                    <p className="font-medium text-africa-purple mb-1">
                      {language === "en" ? "You:" : "Vous:"} {item.query}
                    </p>
                    <p className="font-light text-gray-300">
                      {language === "en" ? "AI:" : "IA:"} {item.response.substring(0, 100)}
                      {item.response.length > 100 ? "..." : ""}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Sentiment Analysis Demo Component
function SentimentAnalysisDemo() {
  const { language } = useLanguage()
  const [text, setText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<{
    score: number
    label: "positive" | "neutral" | "negative"
    color: string
    emotions: { name: string; score: number }[]
  } | null>(null)
  const [analysisHistory, setAnalysisHistory] = useState<Array<{ text: string; result: any }>>([])

  const analyzeText = () => {
    if (!text.trim()) return

    setIsAnalyzing(true)

    // Simulate AI analysis
    setTimeout(() => {
      // Simple sentiment analysis simulation
      const words = text.toLowerCase().split(/\s+/)

      // Define sentiment dictionaries
      const positiveWords = [
        "good",
        "great",
        "excellent",
        "amazing",
        "love",
        "happy",
        "best",
        "awesome",
        "wonderful",
        "fantastic",
      ]
      const negativeWords = [
        "bad",
        "terrible",
        "awful",
        "hate",
        "worst",
        "poor",
        "horrible",
        "disappointed",
        "sad",
        "angry",
      ]

      // Count sentiment words
      let positiveCount = 0
      let negativeCount = 0

      words.forEach((word) => {
        if (positiveWords.includes(word)) positiveCount++
        if (negativeWords.includes(word)) negativeCount++
      })

      // Calculate base score (0-1)
      let score = 0.5 // Start neutral
      const totalWords = words.length

      if (totalWords > 0) {
        score += (positiveCount / totalWords) * 0.5
        score -= (negativeCount / totalWords) * 0.5
      }

      // Clamp between 0 and 1
      score = Math.max(0, Math.min(1, score))

      // Determine label
      let label: "positive" | "neutral" | "negative" = "neutral"
      let color = "rgb(56, 189, 248)" // cyan

      if (score > 0.6) {
        label = "positive"
        color = "rgb(34, 211, 238)" // light cyan
      } else if (score < 0.4) {
        label = "negative"
        color = "rgb(236, 72, 153)" // pink
      }

      // Generate emotion analysis
      const emotions = [
        { name: language === "en" ? "Joy" : "Joie", score: Math.min(1, score * 1.5) },
        { name: language === "en" ? "Sadness" : "Tristesse", score: Math.min(1, (1 - score) * 1.2) },
        {
          name: language === "en" ? "Anger" : "Colère",
          score: Math.min(1, (((1 - score) * negativeCount) / Math.max(1, totalWords)) * 2),
        },
        { name: language === "en" ? "Fear" : "Peur", score: Math.min(1, (1 - score) * 0.7) },
        { name: language === "en" ? "Surprise" : "Surprise", score: Math.random() * 0.7 },
      ]

      const analysisResult = { score, label, color, emotions }
      setResult(analysisResult)
      setAnalysisHistory((prev) => [...prev, { text, result: analysisResult }])
      setIsAnalyzing(false)
    }, 1500)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-medium mb-6 text-center">
        <GradientText from="from-africa-purple" to="to-africa-teal">
          {language === "en" ? "AI Sentiment Analysis" : "Analyse de Sentiment IA"}
        </GradientText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4 mb-4">
            <h3 className="text-lg font-medium mb-3">
              {language === "en" ? "Enter Text to Analyze" : "Entrez du Texte à Analyser"}
            </h3>
            <Textarea
              placeholder={
                language === "en"
                  ? "Enter text to analyze sentiment..."
                  : "Entrez du texte pour analyser le sentiment..."
              }
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full font-light bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px] mb-4"
            />
            <Button
              onClick={analyzeText}
              disabled={!text.trim() || isAnalyzing}
              className="w-full bg-gradient-to-r from-africa-purple to-africa-teal text-white hover:opacity-90"
            >
              {isAnalyzing ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="mr-2"
                >
                  <RefreshCw className="h-4 w-4" />
                </motion.div>
              ) : (
                <Search className="h-4 w-4 mr-2" />
              )}
              {isAnalyzing
                ? language === "en"
                  ? "Analyzing..."
                  : "Analyse en cours..."
                : language === "en"
                  ? "Analyze Sentiment"
                  : "Analyser le Sentiment"}
            </Button>
          </div>

          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
            <h3 className="text-lg font-medium mb-3">
              {language === "en" ? "Analysis History" : "Historique d'Analyse"}
            </h3>
            {analysisHistory.length === 0 ? (
              <p className="text-gray-400 text-sm font-light text-center py-4">
                {language === "en"
                  ? "Your analysis history will appear here."
                  : "Votre historique d'analyse apparaîtra ici."}
              </p>
            ) : (
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {analysisHistory.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-700/50 cursor-pointer"
                    onClick={() => {
                      setText(item.text)
                      setResult(item.result)
                    }}
                  >
                    <div
                      className={`w-4 h-4 rounded-full mt-1 flex-shrink-0`}
                      style={{ backgroundColor: item.result.color }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-light text-gray-300 truncate">{item.text}</p>
                      <p className="text-xs text-gray-400 capitalize">
                        {item.result.label} ({Math.round(item.result.score * 100)}%)
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
          <h3 className="text-lg font-medium mb-3">{language === "en" ? "Analysis Results" : "Résultats d'Analyse"}</h3>

          {isAnalyzing ? (
            <div className="flex flex-col items-center justify-center h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="mb-4"
              >
                <RefreshCw className="h-8 w-8 text-africa-purple" />
              </motion.div>
              <p className="text-gray-400 text-sm font-light">
                {language === "en" ? "Analyzing sentiment..." : "Analyse du sentiment..."}
              </p>
            </div>
          ) : result ? (
            <div>
              <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 rounded-full bg-gray-700/50 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl font-bold" style={{ color: result.color }}>
                        {Math.round(result.score * 100)}%
                      </p>
                      <p className="text-lg capitalize" style={{ color: result.color }}>
                        {result.label}
                      </p>
                    </div>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#374151" strokeWidth="10" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={result.color}
                      strokeWidth="10"
                      strokeDasharray="282.7"
                      strokeDashoffset="282.7"
                      initial={{ strokeDashoffset: 282.7 }}
                      animate={{ strokeDashoffset: 282.7 - result.score * 282.7 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
              </div>

              <h4 className="text-md font-medium mb-2">
                {language === "en" ? "Emotion Analysis" : "Analyse des Émotions"}
              </h4>
              <div className="space-y-3 mb-4">
                {result.emotions.map((emotion, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{emotion.name}</span>
                      <span className="text-gray-400">{Math.round(emotion.score * 100)}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{
                          backgroundColor:
                            emotion.name.includes("Joy") || emotion.name.includes("Joie")
                              ? "#10B981" // green
                              : emotion.name.includes("Sadness") || emotion.name.includes("Tristesse")
                                ? "#3B82F6" // blue
                                : emotion.name.includes("Anger") || emotion.name.includes("Colère")
                                  ? "#EF4444" // red
                                  : emotion.name.includes("Fear") || emotion.name.includes("Peur")
                                    ? "#8B5CF6" // purple
                                    : "#F59E0B", // amber (surprise)
                        }}
                        initial={{ width: "0%" }}
                        animate={{ width: `${emotion.score * 100}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-sm text-gray-400 p-3 bg-gray-700/30 rounded-lg">
                <h4 className="font-medium mb-1 text-white">
                  {language === "en" ? "Analysis Summary" : "Résumé de l'Analyse"}
                </h4>
                <p className="font-light">
                  {language === "en"
                    ? `The text expresses a ${result.label} sentiment with a score of ${Math.round(result.score * 100)}%. The dominant emotions detected are ${result.emotions
                        .sort((a, b) => b.score - a.score)
                        .slice(0, 2)
                        .map((e) => e.name.toLowerCase())
                        .join(" and ")}.`
                    : `Le texte exprime un sentiment ${result.label === "positive" ? "positif" : result.label === "negative" ? "négatif" : "neutre"} avec un score de ${Math.round(result.score * 100)}%. Les émotions dominantes détectées sont ${result.emotions
                        .sort((a, b) => b.score - a.score)
                        .slice(0, 2)
                        .map((e) => e.name.toLowerCase())
                        .join(" et ")}.`}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Search className="h-12 w-12 text-gray-500 mb-3" />
              <p className="text-gray-400 text-sm font-light max-w-xs">
                {language === "en"
                  ? "Enter text in the input field and click 'Analyze Sentiment' to see the results here."
                  : "Entrez du texte dans le champ de saisie et cliquez sur 'Analyser le Sentiment' pour voir les résultats ici."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Content Generator Demo Component
function ContentGeneratorDemo() {
  const { language } = useLanguage()
  const [contentType, setContentType] = useState<string>("blog")
  const [topic, setTopic] = useState("")
  const [tone, setTone] = useState<string>("professional")
  const [length, setLength] = useState<number>(300)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<string>("")
  const [copied, setCopied] = useState(false)

  const contentTypes = [
    { value: "blog", label: language === "en" ? "Blog Post" : "Article de Blog" },
    { value: "social", label: language === "en" ? "Social Media Post" : "Publication Réseaux Sociaux" },
    { value: "email", label: language === "en" ? "Email" : "Email" },
    { value: "product", label: language === "en" ? "Product Description" : "Description de Produit" },
    { value: "ad", label: language === "en" ? "Advertisement" : "Publicité" },
  ]

  const tones = [
    { value: "professional", label: language === "en" ? "Professional" : "Professionnel" },
    { value: "casual", label: language === "en" ? "Casual" : "Décontracté" },
    { value: "enthusiastic", label: language === "en" ? "Enthusiastic" : "Enthousiaste" },
    { value: "formal", label: language === "en" ? "Formal" : "Formel" },
    { value: "friendly", label: language === "en" ? "Friendly" : "Amical" },
  ]

  const generateContent = () => {
    if (!topic.trim()) return

    setIsGenerating(true)
    setGeneratedContent("")

    // Simulate AI content generation
    setTimeout(() => {
      // Sample content templates
      const blogTemplate =
        language === "en"
          ? `# ${topic}\n\nIn today's rapidly evolving digital landscape, ${topic} has become increasingly important for businesses looking to stay competitive. This article explores the key aspects of ${topic} and how it can benefit your organization.\n\n## Why ${topic} Matters\n\nAs technology continues to advance, organizations must adapt to new methodologies and approaches. ${topic} represents one of the most significant opportunities for growth and innovation in recent years.\n\n## Implementing ${topic} in Your Business\n\nTo successfully implement ${topic}, consider the following steps:\n\n1. Assess your current capabilities and needs\n2. Develop a comprehensive strategy\n3. Invest in the right tools and technologies\n4. Train your team on best practices\n5. Continuously monitor and optimize performance\n\n## Conclusion\n\n${topic} is not just a trend but a fundamental shift in how businesses operate. By embracing this approach, your organization can achieve greater efficiency, innovation, and competitive advantage in the marketplace.`
          : `# ${topic}\n\nDans le paysage numérique en rapide évolution d'aujourd'hui, ${topic} est devenu de plus en plus important pour les entreprises qui cherchent à rester compétitives. Cet article explore les aspects clés de ${topic} et comment il peut bénéficier à votre organisation.\n\n## Pourquoi ${topic} Est Important\n\nÀ mesure que la technologie continue de progresser, les organisations doivent s'adapter à de nouvelles méthodologies et approches. ${topic} représente l'une des opportunités les plus significatives pour la croissance et l'innovation ces dernières années.\n\n## Mise en Œuvre de ${topic} Dans Votre Entreprise\n\nPour mettre en œuvre avec succès ${topic}, considérez les étapes suivantes :\n\n1. Évaluez vos capacités et besoins actuels\n2. Développez une stratégie complète\n3. Investissez dans les bons outils et technologies\n4. Formez votre équipe aux meilleures pratiques\n5. Surveillez et optimisez continuellement les performances\n\n## Conclusion\n\n${topic} n'est pas seulement une tendance mais un changement fondamental dans la façon dont les entreprises fonctionnent. En adoptant cette approche, votre organisation peut atteindre une plus grande efficacité, innovation et avantage concurrentiel sur le marché.`

      const socialTemplate =
        language === "en"
          ? `📣 Excited to share our latest insights on ${topic}! 🚀\n\nWe've been exploring how ${topic} is transforming businesses and creating new opportunities for growth. Our team has identified key strategies that can help you leverage this trend.\n\nWant to learn more? Check out our full article on our website (link in bio).\n\n#${topic.replace(/\s+/g, "")} #Innovation #BusinessGrowth #DigitalTransformation`
          : `📣 Ravi de partager nos dernières réflexions sur ${topic}! 🚀\n\nNous avons exploré comment ${topic} transforme les entreprises et crée de nouvelles opportunités de croissance. Notre équipe a identifié des stratégies clés qui peuvent vous aider à tirer parti de cette tendance.\n\nVous voulez en savoir plus? Consultez notre article complet sur notre site web (lien dans la bio).\n\n#${topic.replace(/\s+/g, "")} #Innovation #CroissanceEntreprise #TransformationDigitale`

      const emailTemplate =
        language === "en"
          ? `Subject: Discover How ${topic} Can Transform Your Business\n\nDear Valued Client,\n\nI hope this email finds you well. I wanted to personally reach out to share some exciting insights about ${topic} that I believe could be valuable for your business.\n\nIn recent months, our team has been conducting extensive research on ${topic} and its applications across various industries. We've discovered that organizations implementing these strategies have seen significant improvements in efficiency, customer satisfaction, and overall performance.\n\nWe'd love to schedule a brief call to discuss how these insights might apply to your specific situation. Would you have 15 minutes available next week for a conversation?\n\nLooking forward to connecting soon.\n\nBest regards,\n\nThe Synapse Team\nhello@synsol.dev\n+221 77 530 4895`
          : `Objet: Découvrez Comment ${topic} Peut Transformer Votre Entreprise\n\nCher Client,\n\nJ'espère que ce courriel vous trouve bien. Je voulais personnellement vous contacter pour partager quelques informations passionnantes sur ${topic} qui pourraient être précieuses pour votre entreprise.\n\nCes derniers mois, notre équipe a mené des recherches approfondies sur ${topic} et ses applications dans divers secteurs. Nous avons découvert que les organisations qui mettent en œuvre ces stratégies ont constaté des améliorations significatives en termes d'efficacité, de satisfaction client et de performance globale.\n\nNous aimerions planifier un bref appel pour discuter de la façon dont ces informations pourraient s'appliquer à votre situation spécifique. Auriez-vous 15 minutes disponibles la semaine prochaine pour une conversation?\n\nAu plaisir d'échanger bientôt.\n\nCordialement,\n\nL'Équipe Synapse\nhello@synsol.dev\n+221 77 530 4895`

      const productTemplate =
        language === "en"
          ? `# Revolutionary ${topic} Solution\n\n**Transform your business with our cutting-edge ${topic} platform**\n\nOur innovative ${topic} solution combines advanced technology with user-friendly design to deliver exceptional results for businesses of all sizes.\n\n## Key Features\n\n- Intuitive dashboard with real-time analytics\n- Seamless integration with your existing systems\n- Advanced AI-powered insights and recommendations\n- Customizable workflows to match your unique processes\n- Enterprise-grade security and compliance\n\n## Benefits\n\n- Increase operational efficiency by up to 35%\n- Reduce costs while improving service quality\n- Gain valuable insights from comprehensive data analysis\n- Scale easily as your business grows\n- Dedicated support from our expert team\n\nContact us today to schedule a personalized demo and discover how our ${topic} solution can help you achieve your business goals.`
          : `# Solution ${topic} Révolutionnaire\n\n**Transformez votre entreprise avec notre plateforme ${topic} de pointe**\n\nNotre solution ${topic} innovante combine une technologie avancée avec une conception conviviale pour offrir des résultats exceptionnels aux entreprises de toutes tailles.\n\n## Caractéristiques Principales\n\n- Tableau de bord intuitif avec analyses en temps réel\n- Intégration transparente avec vos systèmes existants\n- Insights et recommandations alimentés par l'IA avancée\n- Flux de travail personnalisables pour correspondre à vos processus uniques\n- Sécurité et conformité de niveau entreprise\n\n## Avantages\n\n- Augmentez l'efficacité opérationnelle jusqu'à 35%\n- Réduisez les coûts tout en améliorant la qualité du service\n- Obtenez des informations précieuses grâce à une analyse complète des données\n- Évoluez facilement à mesure que votre entreprise se développe\n- Support dédié de notre équipe d'experts\n\nContactez-nous aujourd'hui pour planifier une démonstration personnalisée et découvrir comment notre solution ${topic} peut vous aider à atteindre vos objectifs commerciaux.`

      const adTemplate =
        language === "en"
          ? `**INTRODUCING OUR REVOLUTIONARY ${topic.toUpperCase()} SOLUTION**\n\n🔥 LIMITED TIME OFFER: Get 30% off your first three months! 🔥\n\nTransform the way you do business with our cutting-edge ${topic} platform. Designed specifically for forward-thinking companies like yours.\n\n✓ Boost productivity\n✓ Reduce operational costs\n✓ Gain competitive advantage\n✓ Seamless implementation\n\nJoin the hundreds of successful businesses already benefiting from our solution.\n\n👉 CONTACT US TODAY: hello@synsol.dev | +221 77 530 4895\n\n*Offer valid until [Date]. Terms and conditions apply.`
          : `**PRÉSENTATION DE NOTRE SOLUTION ${topic.toUpperCase()} RÉVOLUTIONNAIRE**\n\n🔥 OFFRE À DURÉE LIMITÉE: Obtenez 30% de réduction sur vos trois premiers mois! 🔥\n\nTransformez votre façon de faire des affaires avec notre plateforme ${topic} de pointe. Conçue spécifiquement pour les entreprises tournées vers l'avenir comme la vôtre.\n\n✓ Augmentez la productivité\n✓ Réduisez les coûts opérationnels\n✓ Gagnez un avantage concurrentiel\n✓ Mise en œuvre transparente\n\nRejoignez les centaines d'entreprises prospères qui bénéficient déjà de notre solution.\n\n👉 CONTACTEZ-NOUS AUJOURD'HUI: hello@synsol.dev | +221 77 530 4895\n\n*Offre valable jusqu'au [Date]. Des conditions générales s'appliquent.`

      // Select template based on content type
      let template = ""
      switch (contentType) {
        case "blog":
          template = blogTemplate
          break
        case "social":
          template = socialTemplate
          break
        case "email":
          template = emailTemplate
          break
        case "product":
          template = productTemplate
          break
        case "ad":
          template = adTemplate
          break
        default:
          template = blogTemplate
      }

      setGeneratedContent(template)
      setIsGenerating(false)
    }, 3000)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-medium mb-6 text-center">
        <GradientText from="from-africa-purple" to="to-africa-teal">
          {language === "en" ? "AI Content Generator" : "Générateur de Contenu IA"}
        </GradientText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4 mb-4">
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {language === "en" ? "Content Type" : "Type de Contenu"}
                </label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
                    <SelectValue
                      placeholder={language === "en" ? "Select content type" : "Sélectionner le type de contenu"}
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600 text-white">
                    {contentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {language === "en" ? "Topic" : "Sujet"}
                </label>
                <Input
                  placeholder={language === "en" ? "Enter your topic or subject..." : "Entrez votre sujet ou thème..."}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {language === "en" ? "Tone" : "Ton"}
                </label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder={language === "en" ? "Select tone" : "Sélectionner le ton"} />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600 text-white">
                    {tones.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {language === "en" ? "Length (words)" : "Longueur (mots)"}
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min={100}
                    max={1000}
                    step={50}
                    value={length}
                    onChange={(e) => setLength(Number.parseInt(e.target.value) || 300)}
                    className="w-full bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            </div>

            <Button
              onClick={generateContent}
              disabled={!topic.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-africa-purple to-africa-teal text-white hover:opacity-90"
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
                <Sparkles className="h-4 w-4 mr-2" />
              )}
              {isGenerating
                ? language === "en"
                  ? "Generating..."
                  : "Génération en cours..."
                : language === "en"
                  ? "Generate Content"
                  : "Générer du Contenu"}
            </Button>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-medium">{language === "en" ? "Generated Content" : "Contenu Généré"}</h3>
            {generatedContent && (
              <Button size="sm" variant="outline" className="text-gray-300 border-gray-600" onClick={copyToClipboard}>
                {copied ? <Check className="h-4 w-4 mr-1 text-green-500" /> : <Copy className="h-4 w-4 mr-1" />}
                {copied ? (language === "en" ? "Copied!" : "Copié !") : language === "en" ? "Copy" : "Copier"}
              </Button>
            )}
          </div>

          <div className="bg-gray-700/50 rounded-lg p-3 min-h-[400px] overflow-y-auto whitespace-pre-wrap">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center h-full">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="mb-4"
                >
                  <RefreshCw className="h-8 w-8 text-africa-purple" />
                </motion.div>
                <p className="text-gray-400 text-sm font-light">
                  {language === "en" ? "Generating your content..." : "Génération de votre contenu..."}
                </p>
              </div>
            ) : generatedContent ? (
              <div className="text-white font-light text-sm">{generatedContent}</div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Sparkles className="h-12 w-12 text-gray-500 mb-3" />
                <p className="text-gray-400 text-sm font-light max-w-xs">
                  {language === "en"
                    ? "Fill in the form and click 'Generate Content' to create AI-generated content."
                    : "Remplissez le formulaire et cliquez sur 'Générer du Contenu' pour créer du contenu généré par IA."}
                </p>
              </div>
            )}
          </div>

          {generatedContent && (
            <p className="text-xs text-gray-400 mt-2 text-center">
              {language === "en"
                ? "Note: This is a simulation. In a real application, AI would generate unique content based on your specifications."
                : "Remarque : Il s'agit d'une simulation. Dans une application réelle, l'IA générerait un contenu unique basé sur vos spécifications."}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

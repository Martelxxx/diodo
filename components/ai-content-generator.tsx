"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, RefreshCw, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type ContentType = "tagline" | "description" | "social" | "email"

interface ContentTemplate {
  title: string
  placeholder: string
  examplePrompt: string
  outputLength: number
}

const contentTypes: Record<ContentType, ContentTemplate> = {
  tagline: {
    title: "Brand Tagline",
    placeholder: "Describe your business or product...",
    examplePrompt: "A digital agency specializing in AI solutions",
    outputLength: 1,
  },
  description: {
    title: "Product Description",
    placeholder: "Describe your product or service...",
    examplePrompt: "AI-powered chatbot for customer service",
    outputLength: 3,
  },
  social: {
    title: "Social Media Post",
    placeholder: "What would you like to promote?",
    examplePrompt: "Our new AI data visualization service",
    outputLength: 2,
  },
  email: {
    title: "Email Subject Line",
    placeholder: "What is your email about?",
    examplePrompt: "Special offer on our AI consulting services",
    outputLength: 3,
  },
}

// Sample AI-generated responses
const aiResponses: Record<ContentType, string[]> = {
  tagline: [
    "Transforming Tomorrow with AI Today",
    "Intelligence Amplified, Results Magnified",
    "Where AI Meets Human Ingenuity",
    "Powering Possibilities Through Intelligent Solutions",
  ],
  description: [
    "Our cutting-edge AI platform leverages advanced machine learning algorithms to analyze customer data and provide actionable insights. By identifying patterns and trends invisible to the human eye, we help businesses optimize operations and drive growth.",
    "Transform your customer experience with our AI-powered solution that learns and adapts to user behavior. Our technology combines natural language processing with predictive analytics to deliver personalized interactions that feel genuinely human.",
    "Harness the power of artificial intelligence to streamline your workflow and boost productivity. Our intuitive platform integrates seamlessly with your existing systems, providing intelligent automation that saves time and reduces errors.",
  ],
  social: [
    "🚀 Excited to announce our new AI data visualization tool that transforms complex data into clear, actionable insights! See patterns you never knew existed. #AIInnovation #DataVisualization",
    "Drowning in data? Our AI visualization technology turns information overload into strategic advantage. Book a demo today and see your data in a whole new light! ✨ #BusinessIntelligence",
    "The future of data analysis is here! Our AI-powered visualization platform helps you make better decisions faster. Try it free for 14 days. Link in bio. #AITechnology #DataDriven",
  ],
  email: [
    "Transform Your Business with Our AI Solutions - Special Offer Inside",
    "Discover How AI Can Boost Your Productivity by 40%",
    "Limited Time: Expert AI Consultation at 50% Off",
    "See What Our AI Can Do For You: Free Demo Available Now",
  ],
}

export default function AIContentGenerator() {
  const [contentType, setContentType] = useState<ContentType>("tagline")
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<string[]>([])
  const [copied, setCopied] = useState(false)

  const generateContent = () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      // Get random responses for the selected content type
      const responses = [...aiResponses[contentType]]
      // Shuffle array
      for (let i = responses.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[responses[i], responses[j]] = [responses[j], responses[i]]
      }

      // Take the first few based on the content type's output length
      const selectedResponses = responses.slice(0, contentTypes[contentType].outputLength)

      setGeneratedContent(selectedResponses)
      setIsGenerating(false)
    }, 2000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-gray-800/30" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-africa-orange/10"
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
          <Sparkles className="h-5 w-5 mr-2 text-africa-yellow" />
          AI Content Generator
        </h3>

        <div className="mb-4">
          <label className="block text-sm font-light text-gray-300 mb-1">Content Type</label>
          <Select value={contentType} onValueChange={(value) => setContentType(value as ContentType)}>
            <SelectTrigger className="w-full bg-gray-800/50 border-gray-700 text-white">
              <SelectValue placeholder="Select content type" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 text-white">
              <SelectItem value="tagline">Brand Tagline</SelectItem>
              <SelectItem value="description">Product Description</SelectItem>
              <SelectItem value="social">Social Media Post</SelectItem>
              <SelectItem value="email">Email Subject Line</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-light text-gray-300 mb-1">Your Prompt</label>
          <Textarea
            placeholder={contentTypes[contentType].placeholder}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full font-light bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 min-h-[80px]"
          />
          <p className="text-xs text-gray-400 mt-1 italic">Example: "{contentTypes[contentType].examplePrompt}"</p>
        </div>

        <Button
          onClick={generateContent}
          disabled={!prompt.trim() || isGenerating}
          className="w-full bg-gradient-to-r from-africa-orange to-africa-yellow text-white hover:opacity-90 mb-6"
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
          {isGenerating ? "Generating..." : "Generate Content"}
        </Button>

        {generatedContent.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
            <h4 className="text-white font-medium mb-3 text-sm">Generated {contentTypes[contentType].title}:</h4>
            <div className="space-y-3">
              {generatedContent.map((content, index) => (
                <div key={index} className="bg-gray-800/70 p-3 rounded-lg border border-gray-700 relative group">
                  <p className="text-gray-200 font-light text-sm pr-8">{content}</p>
                  <button
                    onClick={() => copyToClipboard(content)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-africa-yellow transition-colors"
                    aria-label="Copy to clipboard"
                  >
                    {copied ? <Check className="h-4 w-4 text-africa-green" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              AI-generated content based on your prompt. Results may vary.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

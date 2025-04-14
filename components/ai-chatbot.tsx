"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking and responding
    setTimeout(() => {
      // Simple response patterns
      let botResponse = "I'm not sure I understand. Can you please clarify?"

      const userInput = input.toLowerCase()

      if (userInput.includes("hello") || userInput.includes("hi")) {
        botResponse = "Hello there! How can I assist you today?"
      } else if (userInput.includes("help")) {
        botResponse =
          "I'm here to help! You can ask me about our AI services, technologies, or how we can assist your business."
      } else if (userInput.includes("service") || userInput.includes("offer")) {
        botResponse =
          "We offer a range of AI services including machine learning solutions, natural language processing, computer vision, and custom AI development for businesses."
      } else if (userInput.includes("contact") || userInput.includes("support")) {
        botResponse = "You can reach our support team at support@synsol.dev or use the contact form on our website."
      } else if (userInput.includes("price") || userInput.includes("cost")) {
        botResponse =
          "Our pricing varies based on project requirements. I'd recommend checking our pricing page or contacting us for a custom quote."
      }

      const botMessage: Message = {
        id: Date.now().toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-gradient-to-r from-africa-orange to-africa-green text-white rounded-full p-4 shadow-lg shadow-africa-green/20 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Chat Assistant"
      >
        <Bot className="h-6 w-6" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-20 right-6 w-80 sm:w-96 bg-gray-900/90 backdrop-blur-md rounded-xl shadow-xl z-50 overflow-hidden border border-gray-800"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-africa-red to-africa-orange px-4 py-3 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <h3 className="font-light">AI Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-900/60">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.sender === "user"
                        ? "bg-africa-green text-white"
                        : "bg-gray-800 text-gray-100 border border-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-1">
                      {message.sender === "bot" ? (
                        <Bot className="h-3 w-3 text-africa-orange" />
                      ) : (
                        <User className="h-3 w-3" />
                      )}
                      <span className="text-xs opacity-70 font-light">
                        {message.sender === "bot" ? "AI Assistant" : "You"}
                      </span>
                    </div>
                    <p className="text-sm font-light">{message.content}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start mb-3">
                  <div className="bg-gray-800 text-gray-100 rounded-lg px-3 py-2 border border-gray-700 max-w-[80%]">
                    <div className="flex items-center gap-1 mb-1">
                      <Bot className="h-3 w-3 text-africa-orange" />
                      <span className="text-xs opacity-70 font-light">AI Assistant</span>
                    </div>
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-africa-orange rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-africa-orange rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-africa-orange rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-800">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 font-light bg-gray-800 border-gray-700 text-white"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                  className="bg-gradient-to-r from-africa-orange to-africa-green text-white"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

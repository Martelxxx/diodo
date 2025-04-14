"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Brain,
  Bot,
  Cpu,
  Sparkles,
  Globe,
} from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-20 pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-africa-red via-africa-yellow to-africa-green opacity-70" />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-africa-orange/5"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8">
                <Image
                  src="/images/agencyLogo.png"
                  alt="Synapse Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-light bg-clip-text text-transparent bg-gradient-to-r from-africa-orange to-africa-green">
                SYNAPSE
              </span>
            </div>
            <p className="text-gray-300 font-light text-sm mb-4">
              Transforming businesses through innovative AI-powered digital solutions that drive growth and efficiency.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-400 hover:text-africa-orange transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-africa-orange transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-africa-orange transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-africa-orange transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-africa-orange transition-colors">
                <Github size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "AI Solutions", href: "/#ai-features" },
                { name: "Team", href: "/#team" },
                { name: "Pricing", href: "/#pricing" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-africa-orange transition-colors font-light text-sm flex items-center group"
                    onClick={(e) => {
                      if (link.href.startsWith("/#")) {
                        e.preventDefault()
                        const id = link.href.substring(2)
                        const element = document.getElementById(id)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }
                    }}
                  >
                    <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: "AI Strategy", icon: <Brain size={14} className="text-africa-orange" /> },
                { name: "Machine Learning", icon: <Cpu size={14} className="text-africa-yellow" /> },
                { name: "Conversational AI", icon: <Bot size={14} className="text-africa-green" /> },
                { name: "Data Analytics", icon: <Sparkles size={14} className="text-africa-teal" /> },
                { name: "Web Development", icon: <Globe size={14} className="text-africa-purple" /> },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-africa-orange transition-colors font-light text-sm flex items-center"
                  >
                    <span className="mr-2">{service.icon}</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Stay Updated</h3>
            <p className="text-gray-300 font-light text-sm mb-4">
              Subscribe to our newsletter for the latest updates on AI innovations and digital trends.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800/50 border-gray-700 text-white pr-12 font-light"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 bg-africa-orange hover:bg-africa-orange/90"
              >
                <Send size={14} />
              </Button>
            </form>
            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-africa-green text-xs mt-2"
              >
                Thank you for subscribing!
              </motion.p>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 border-t border-gray-800">
          <div className="flex items-center text-gray-300 font-light text-sm">
            <Mail size={16} className="mr-2 text-africa-orange" />
            <span>hello@synsol.dev</span>
          </div>
          <div className="flex items-center text-gray-300 font-light text-sm">
            <Phone size={16} className="mr-2 text-africa-yellow" />
            <span>+221 77 530 4895</span>
          </div>
          <div className="flex items-center text-gray-300 font-light text-sm">
            <MapPin size={16} className="mr-2 text-africa-green" />
            <span>Dakar, Senegal</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 font-light text-sm">© {currentYear} Synapse. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-africa-orange transition-colors text-xs font-light"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-africa-orange transition-colors text-xs font-light">
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-africa-orange transition-colors text-xs font-light"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Futuristic bottom border */}
      <div className="relative h-1 w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-africa-green via-africa-yellow to-africa-red"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "linear",
          }}
        />
      </div>
    </footer>
  )
}

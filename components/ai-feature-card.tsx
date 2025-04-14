"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AIFeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index: number
  color: string
}

export default function AIFeatureCard({ icon, title, description, index, color }: AIFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group"
    >
      <div
        className={`absolute inset-0 ${color} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          <div className={`mb-4 ${color} bg-gray-800/50 w-16 h-16 rounded-xl flex items-center justify-center`}>
            {icon}
          </div>

          <h3 className="text-xl font-light mb-3 text-white">{title}</h3>

          <p className="text-gray-300 font-extralight">{description}</p>

          <div
            className={`absolute bottom-0 left-0 right-0 h-1 ${color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
          />
        </div>
      </div>
    </motion.div>
  )
}

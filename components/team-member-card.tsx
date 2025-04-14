"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface TeamMemberCardProps {
  name: string
  title: string
  description: string
  image: string
  index: number
}

export default function TeamMemberCard({ name, title, description, image, index }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // African-inspired gradient colors for each team member
  const gradients = [
    "from-africa-red to-africa-orange",
    "from-africa-orange to-africa-yellow",
    "from-africa-yellow to-africa-green",
    "from-africa-green to-africa-teal",
  ]

  const gradient = gradients[index % gradients.length]

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl blur-xl transition-opacity duration-300 ${
          isHovered ? "opacity-30" : "opacity-0"
        }`}
      />

      <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden h-full shadow-lg">
        <div className="p-5 flex flex-col h-full">
          <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-500 ease-out"
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />

            {/* Animated overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"
              animate={{
                opacity: isHovered ? 0.9 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Animated lines */}
            {isHovered && (
              <>
                <motion.div
                  className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div
                  className={`absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r ${gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </>
            )}
          </div>

          <h3 className="text-xl font-medium text-white mb-1">{name}</h3>
          <div className="mb-3">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient} font-light`}>{title}</span>
          </div>
          <p className="text-gray-300 font-light text-sm flex-grow">{description}</p>

          {/* Animated border on hover */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>
    </motion.div>
  )
}

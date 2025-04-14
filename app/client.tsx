"use client"

import type React from "react"

import "./globals.css"
import { motion } from "framer-motion"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <html lang="en" className="h-full">
        <body className="flex min-h-screen flex-col antialiased">
          <div className="bg-gradient-to-br from-gray-950 to-gray-900 absolute inset-0 z-[-1]" />
          {children}
        </body>
      </html>
    </motion.div>
  )
}

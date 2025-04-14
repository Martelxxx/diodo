"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Brain } from "lucide-react"

export default function AIAnimatedLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 120
    canvas.height = 120

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      hue: number
      hueDelta: number
      opacity: number
      life: number
      maxLife: number
    }> = []

    const createParticles = () => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 3,
          speedY: (Math.random() - 0.5) * 3,
          hue: Math.random() * 360,
          hueDelta: Math.random() * 2 + 0.5,
          opacity: 1,
          life: 0,
          maxLife: Math.random() * 50 + 30,
        })
      }
    }

    // Create initial particles
    createParticles()

    // Create particles at regular intervals
    const particleInterval = setInterval(createParticles, 100)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw glow effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
      )
      gradient.addColorStop(0, "rgba(111, 76, 255, 0.3)")
      gradient.addColorStop(1, "rgba(111, 76, 255, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.hue = (particle.hue + particle.hueDelta) % 360
        particle.life++

        // Fade out as life increases
        particle.opacity = 1 - particle.life / particle.maxLife

        if (particle.life >= particle.maxLife) {
          particles.splice(index, 1)
        } else {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${particle.hue}, 100%, 70%, ${particle.opacity})`
          ctx.shadowColor = `hsla(${particle.hue}, 100%, 70%, 1)`
          ctx.shadowBlur = 10
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      clearInterval(particleInterval)
    }
  }, [])

  return (
    <div className="relative w-16 h-16">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Brain className="h-10 w-10 text-purple-400" />
      </motion.div>
    </div>
  )
}

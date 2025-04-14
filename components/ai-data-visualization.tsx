"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface DataPoint {
  value: number
  label: string
  color: string
}

export default function AIDataVisualization() {
  const [data, setData] = useState<DataPoint[]>([
    { value: 35, label: "Natural Language", color: "rgb(233, 72, 34)" }, // africa-red
    { value: 25, label: "Computer Vision", color: "rgb(242, 153, 74)" }, // africa-orange
    { value: 20, label: "Predictive Analysis", color: "rgb(242, 201, 76)" }, // africa-yellow
    { value: 15, label: "Voice Recognition", color: "rgb(33, 150, 83)" }, // africa-green
    { value: 5, label: "Robotics", color: "rgb(30, 168, 150)" }, // africa-teal
  ])

  const maxValue = Math.max(...data.map((d) => d.value))
  const [isAnimating, setIsAnimating] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setData((prev) =>
          prev.map((item) => ({
            ...item,
            value: Math.max(1, item.value + (Math.random() - 0.5) * 10),
          })),
        )
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isAnimating])

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      color: string
      speed: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        color: data[Math.floor(Math.random() * data.length)].color,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let i = 0; i < 5; i++) {
        const y = (canvas.height / 5) * i
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let i = 0; i < data.length; i++) {
        const x = (canvas.width / (data.length - 1)) * i
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace("rgb", "rgba").replace(")", `, ${particle.opacity})`)
        ctx.fill()

        // Move particles upward
        particle.y -= particle.speed

        // Reset particles that go off screen
        if (particle.y < 0) {
          particle.y = canvas.height
          particle.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [data])

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10">
        <h3 className="text-xl font-light mb-6 text-center text-white">AI Technology Adoption</h3>
        <div className="relative h-64">
          {data.map((item, index) => {
            const heightPercentage = (item.value / maxValue) * 100

            return (
              <motion.div
                key={item.label}
                className="absolute bottom-0 flex flex-col items-center"
                style={{
                  left: `${(index / (data.length - 1)) * 80 + 10}%`,
                  width: "15%",
                }}
                initial={{ y: 0 }}
                animate={{
                  y: isAnimating ? [-5, 5, -3, 3, 0][Math.floor(Math.random() * 5)] : 0,
                }}
                transition={{ duration: 0.5 }}
                onHoverStart={() => setIsAnimating(true)}
                onHoverEnd={() => setIsAnimating(false)}
              >
                <motion.div
                  className="w-full rounded-t-md relative overflow-hidden"
                  style={{
                    backgroundColor: item.color,
                    height: `${heightPercentage}%`,
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${heightPercentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {/* Animated glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-50"
                    animate={{
                      background: [
                        `linear-gradient(0deg, ${item.color}, transparent)`,
                        `linear-gradient(180deg, ${item.color}, transparent)`,
                        `linear-gradient(0deg, ${item.color}, transparent)`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
                <div className="mt-2 text-xs font-light text-gray-300 text-center">{item.label}</div>
                <motion.div
                  className="absolute top-0 transform -translate-y-full bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0"
                  animate={{
                    opacity: isAnimating ? 1 : 0,
                    y: isAnimating ? -5 : 0,
                  }}
                >
                  {Math.round(item.value)}%
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

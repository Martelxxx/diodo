"use client"

import { useEffect, useRef } from "react"

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // African-inspired colors
    const africanColors = [
      "#E94822", // Red
      "#F2994A", // Orange
      "#F2C94C", // Yellow
      "#219653", // Green
      "#1EA896", // Teal
      "#9B51E0", // Purple
      "#A05E2C", // Brown
    ]

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      hue: number
      hueDelta: number
      baseSize: number
      pulseDirection: number
      trail: Array<{ x: number; y: number; size: number; opacity: number }>
      maxTrailLength: number
      colorIndex: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseSize = Math.random() * 3 + 0.8
        this.size = this.baseSize
        this.speedX = (Math.random() - 0.5) * 0.6
        this.speedY = (Math.random() - 0.5) * 0.6
        this.colorIndex = Math.floor(Math.random() * africanColors.length)
        this.color = africanColors[this.colorIndex]
        this.opacity = Math.random() * 0.7 + 0.3
        this.pulseDirection = Math.random() > 0.5 ? 1 : -1
        this.trail = []
        this.maxTrailLength = Math.floor(Math.random() * 5) + 3
        // These are kept for compatibility but not used with the new color scheme
        this.hue = 0
        this.hueDelta = 0
      }

      update() {
        // Add current position to trail
        this.trail.unshift({
          x: this.x,
          y: this.y,
          size: this.size * 0.8,
          opacity: this.opacity * 0.7,
        })

        // Limit trail length
        if (this.trail.length > this.maxTrailLength) {
          this.trail.pop()
        }

        this.x += this.speedX
        this.y += this.speedY

        // Pulse size for more dynamic effect
        this.size += 0.05 * this.pulseDirection
        if (this.size > this.baseSize * 1.8 || this.size < this.baseSize * 0.7) {
          this.pulseDirection *= -1
        }

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        if (!ctx) return

        // Draw trail
        this.trail.forEach((point, index) => {
          const trailOpacity = point.opacity * (1 - index / this.maxTrailLength)
          ctx.beginPath()
          ctx.arc(point.x, point.y, point.size * (1 - index / this.maxTrailLength), 0, Math.PI * 2)

          // Use the same color for the trail but with decreasing opacity
          const trailColor = this.color.replace(")", `, ${trailOpacity})`)
          ctx.fillStyle = trailColor
          ctx.fill()
        })

        // Draw main particle
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)

        // Convert hex to rgba for the main particle
        const r = Number.parseInt(this.color.slice(1, 3), 16)
        const g = Number.parseInt(this.color.slice(3, 5), 16)
        const b = Number.parseInt(this.color.slice(5, 7), 16)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`

        ctx.shadowColor = this.color
        ctx.shadowBlur = 15
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Create particles
    const particleCount = Math.floor((canvas.width * canvas.height) / 12000)
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full opacity-80" />
}

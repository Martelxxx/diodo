"use client"

import { useEffect, useRef } from "react"
import { twMerge } from "tailwind-merge"

interface NeuralNetworkBackgroundProps {
  className?: string
}

export default function NeuralNetworkBackground({ className }: NeuralNetworkBackgroundProps) {
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

    // Node class
    class Node {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      connections: Node[]
      pulseRadius: number
      pulseOpacity: number
      isPulsing: boolean
      pulseSpeed: number
      color: string

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.radius = Math.random() * 1.5 + 0.8
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.connections = []
        this.pulseRadius = 0
        this.pulseOpacity = 0
        this.isPulsing = false
        this.pulseSpeed = Math.random() * 0.5 + 0.3

        // Random color from a futuristic palette
        const colors = [
          "rgba(0, 255, 255, 0.8)", // Cyan
          "rgba(255, 0, 255, 0.8)", // Magenta
          "rgba(0, 191, 255, 0.8)", // Deep Sky Blue
          "rgba(255, 105, 180, 0.8)", // Hot Pink
          "rgba(127, 255, 212, 0.8)", // Aquamarine
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        // Random chance to start pulsing
        if (!this.isPulsing && Math.random() < 0.001) {
          this.isPulsing = true
        }

        // Update pulse
        if (this.isPulsing) {
          this.pulseRadius += this.pulseSpeed
          this.pulseOpacity = Math.max(0, 0.5 - this.pulseRadius / 100)

          if (this.pulseRadius > 100) {
            this.isPulsing = false
            this.pulseRadius = 0
            this.pulseOpacity = 0
          }
        }
      }

      draw() {
        if (!ctx) return

        // Draw pulse
        if (this.isPulsing) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.pulseRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${this.pulseOpacity * 0.1})`
          ctx.fill()
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create nodes
    const nodeCount = Math.floor((canvas.width * canvas.height) / 20000)
    const nodes: Node[] = []

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height))
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw()
      })

      // Draw connections
      ctx.lineWidth = 0.5

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)

            // Gradient line
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
            gradient.addColorStop(0, nodes[i].color.replace("0.8", `${(1 - distance / 150) * 0.5}`))
            gradient.addColorStop(1, nodes[j].color.replace("0.8", `${(1 - distance / 150) * 0.5}`))

            ctx.strokeStyle = gradient
            ctx.stroke()

            // Data packet animation (occasional)
            if (Math.random() < 0.001) {
              const packetSize = 2
              const animatePacket = (progress: number) => {
                const x = nodes[i].x + (nodes[j].x - nodes[i].x) * progress
                const y = nodes[i].y + (nodes[j].y - nodes[i].y) * progress

                ctx.beginPath()
                ctx.arc(x, y, packetSize, 0, Math.PI * 2)
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
                ctx.fill()

                if (progress < 1) {
                  requestAnimationFrame(() => animatePacket(progress + 0.02))
                }
              }

              animatePacket(0)
            }
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className={twMerge("w-full h-full bg-gray-950", className)} />
}

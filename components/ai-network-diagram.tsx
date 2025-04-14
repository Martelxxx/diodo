"use client"

import { useEffect, useRef, useState } from "react"

interface Node {
  id: string
  label: string
  radius: number
  x: number
  y: number
  vx: number
  vy: number
  color: string
  connections: string[]
}

interface Link {
  source: string
  target: string
  strength: number
}

export default function AINetworkDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = 300 // Fixed height
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Define nodes
    const nodes: Node[] = [
      {
        id: "nlp",
        label: "Natural Language Processing",
        radius: 30,
        x: canvas.width * 0.3,
        y: canvas.height * 0.4,
        vx: 0,
        vy: 0,
        color: "#E94822", // africa-red
        connections: ["ml", "cv", "voice"],
      },
      {
        id: "ml",
        label: "Machine Learning",
        radius: 35,
        x: canvas.width * 0.5,
        y: canvas.height * 0.3,
        vx: 0,
        vy: 0,
        color: "#F2994A", // africa-orange
        connections: ["nlp", "cv", "pred", "robot"],
      },
      {
        id: "cv",
        label: "Computer Vision",
        radius: 28,
        x: canvas.width * 0.7,
        y: canvas.height * 0.5,
        vx: 0,
        vy: 0,
        color: "#F2C94C", // africa-yellow
        connections: ["ml", "nlp", "robot"],
      },
      {
        id: "pred",
        label: "Predictive Analysis",
        radius: 25,
        x: canvas.width * 0.4,
        y: canvas.height * 0.6,
        vx: 0,
        vy: 0,
        color: "#219653", // africa-green
        connections: ["ml", "voice"],
      },
      {
        id: "voice",
        label: "Voice Recognition",
        radius: 22,
        x: canvas.width * 0.2,
        y: canvas.height * 0.5,
        vx: 0,
        vy: 0,
        color: "#1EA896", // africa-teal
        connections: ["nlp", "pred"],
      },
      {
        id: "robot",
        label: "Robotics",
        radius: 20,
        x: canvas.width * 0.6,
        y: canvas.height * 0.7,
        vx: 0,
        vy: 0,
        color: "#9B51E0", // africa-purple
        connections: ["ml", "cv"],
      },
    ]

    // Create links from node connections
    const links: Link[] = []
    nodes.forEach((node) => {
      node.connections.forEach((targetId) => {
        // Only add link if it doesn't already exist
        const linkExists = links.some(
          (link) =>
            (link.source === node.id && link.target === targetId) ||
            (link.source === targetId && link.target === node.id),
        )
        if (!linkExists) {
          links.push({
            source: node.id,
            target: targetId,
            strength: 0.5 + Math.random() * 0.5, // Random strength between 0.5 and 1
          })
        }
      })
    })

    // Handle mouse move for node hovering
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })

      // Check if mouse is over any node
      let hovered = null
      for (const node of nodes) {
        const dx = x - node.x
        const dy = y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < node.radius) {
          hovered = node.id
          break
        }
      }
      setHoveredNode(hovered)
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    // Handle mouse click to toggle animation
    const handleClick = () => {
      setIsAnimating((prev) => !prev)
    }

    canvas.addEventListener("click", handleClick)

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Apply forces between nodes (simple force-directed layout)
      if (isAnimating) {
        // Repulsive force between all nodes
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const nodeA = nodes[i]
            const nodeB = nodes[j]
            const dx = nodeB.x - nodeA.x
            const dy = nodeB.y - nodeA.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDistance = nodeA.radius + nodeB.radius + 20

            if (distance < minDistance) {
              const force = ((minDistance - distance) / distance) * 0.05
              const forceX = dx * force
              const forceY = dy * force

              nodeA.vx -= forceX
              nodeA.vy -= forceY
              nodeB.vx += forceX
              nodeB.vy += forceY
            }
          }
        }

        // Attractive force along links
        links.forEach((link) => {
          const sourceNode = nodes.find((n) => n.id === link.source)
          const targetNode = nodes.find((n) => n.id === link.target)
          if (sourceNode && targetNode) {
            const dx = targetNode.x - sourceNode.x
            const dy = targetNode.y - sourceNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const force = (distance - 100) * 0.005 * link.strength

            const forceX = dx * force
            const forceY = dy * force

            sourceNode.vx += forceX
            sourceNode.vy += forceY
            targetNode.vx -= forceX
            targetNode.vy -= forceY
          }
        })

        // Center force to keep nodes in view
        nodes.forEach((node) => {
          const dx = canvas.width / 2 - node.x
          const dy = canvas.height / 2 - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance > canvas.width / 3) {
            node.vx += dx * 0.001
            node.vy += dy * 0.001
          }

          // Boundary forces
          if (node.x < node.radius) node.vx += 0.1
          if (node.x > canvas.width - node.radius) node.vx -= 0.1
          if (node.y < node.radius) node.vy += 0.1
          if (node.y > canvas.height - node.radius) node.vy -= 0.1

          // Apply velocity with damping
          node.x += node.vx
          node.y += node.vy
          node.vx *= 0.95
          node.vy *= 0.95
        })
      }

      // Draw links
      links.forEach((link) => {
        const sourceNode = nodes.find((n) => n.id === link.source)
        const targetNode = nodes.find((n) => n.id === link.target)
        if (sourceNode && targetNode) {
          ctx.beginPath()
          ctx.moveTo(sourceNode.x, sourceNode.y)
          ctx.lineTo(targetNode.x, targetNode.y)

          // Highlight links connected to hovered node
          const isHighlighted = hoveredNode === sourceNode.id || hoveredNode === targetNode.id

          if (isHighlighted) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${link.strength})`
            ctx.lineWidth = 2
          } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${link.strength * 0.5})`
            ctx.lineWidth = 1.5
          }

          ctx.stroke()

          // Draw data packets flowing along links
          if (Math.random() < 0.01) {
            const animatePacket = (progress: number) => {
              const x = sourceNode.x + (targetNode.x - sourceNode.x) * progress
              const y = sourceNode.y + (targetNode.y - sourceNode.y) * progress

              ctx.beginPath()
              ctx.arc(x, y, 3, 0, Math.PI * 2)
              ctx.fillStyle = isHighlighted ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)"
              ctx.fill()

              if (progress < 1 && isAnimating) {
                requestAnimationFrame(() => animatePacket(progress + 0.02))
              }
            }

            animatePacket(0)
          }
        }
      })

      // Draw nodes
      nodes.forEach((node) => {
        const isHovered = hoveredNode === node.id

        // Glow effect
        if (isHovered) {
          ctx.beginPath()
          const gradient = ctx.createRadialGradient(node.x, node.y, node.radius * 0.5, node.x, node.y, node.radius * 2)
          gradient.addColorStop(0, node.color + "80")
          gradient.addColorStop(1, node.color + "00")
          ctx.fillStyle = gradient
          ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2)
          ctx.fill()
        }

        // Node circle
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = isHovered ? node.color : node.color + "80"
        ctx.fill()
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
        ctx.lineWidth = 1
        ctx.stroke()

        // Node label (only show on hover)
        if (isHovered) {
          ctx.font = "12px Arial"
          ctx.fillStyle = "white"
          ctx.textAlign = "center"
          ctx.fillText(node.label, node.x, node.y + node.radius + 15)
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("click", handleClick)
      cancelAnimationFrame(animationFrameId)
    }
  }, [hoveredNode, isAnimating])

  return (
    <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-800 relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl font-light mb-4 text-center text-white">AI Technology Adoption</h3>
        <p className="text-gray-300 text-sm mb-4 text-center font-light">
          Explore the interconnected landscape of AI technologies and their adoption rates
        </p>
        <div className="relative h-[300px] w-full">
          <canvas ref={canvasRef} className="w-full h-full" style={{ cursor: hoveredNode ? "pointer" : "default" }} />
          <div className="absolute bottom-2 right-2 text-xs text-gray-400 font-light">
            Click to {isAnimating ? "pause" : "resume"} animation
          </div>
        </div>
      </div>
    </div>
  )
}

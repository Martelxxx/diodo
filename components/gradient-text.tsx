"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  to?: string
  direction?: "lr" | "rl" | "tb" | "bt"
}

export default function GradientText({
  children,
  className,
  from = "from-africa-orange",
  to = "to-africa-green",
  direction = "lr",
}: GradientTextProps) {
  const directionClass = {
    lr: "bg-gradient-to-r",
    rl: "bg-gradient-to-l",
    tb: "bg-gradient-to-b",
    bt: "bg-gradient-to-t",
  }[direction]

  return <span className={cn("bg-clip-text text-transparent", directionClass, from, to, className)}>{children}</span>
}

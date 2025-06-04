"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedGradientBorderProps {
  children: ReactNode
  className?: string
  borderWidth?: number
  duration?: number
  borderRadius?: string
}

export function AnimatedGradientBorder({
  children,
  className = "",
  borderWidth = 2,
  duration = 8,
  borderRadius = "rounded-2xl",
}: AnimatedGradientBorderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Animated border */}
      <motion.div
        className={`absolute inset-0 ${borderRadius} z-0`}
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, #3b82f6, #8b5cf6, #ec4899, #3b82f6)`,
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Inner content with padding for border */}
      <div className={`relative z-10 ${borderRadius} bg-gray-900`} style={{ margin: `${borderWidth}px` }}>
        {children}
      </div>
    </div>
  )
}

"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"

interface DreamParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  opacity: number
  speed: number
  trail: { x: number; y: number }[]
  trailLength: number
  type: "star" | "circle" | "spark" | "path"
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<DreamParticle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0, active: false })

  // Vibrant colors that represent youth, energy, and ambition
  const colors = [
    "#3B82F6", // Blue - reliability
    "#8B5CF6", // Purple - creativity
    "#EC4899", // Pink - passion
    "#10B981", // Green - growth
    "#F59E0B", // Amber - energy
    "#6366F1", // Indigo - innovation
  ]

  const createParticle = useCallback((canvas: HTMLCanvasElement): DreamParticle => {
    const types: ("star" | "circle" | "spark" | "path")[] = ["star", "circle", "spark", "path"]
    const type = types[Math.floor(Math.random() * types.length)]

    // Create particles mostly from the bottom of the screen moving upward
    // to represent rising up and chasing dreams
    const x = Math.random() * canvas.width
    const y = canvas.height + Math.random() * 20

    // Upward and slightly sideways velocity - representing rising up to chase dreams
    const speed = Math.random() * 1 + 0.5
    const angle = Math.PI * (1.3 + Math.random() * 0.4) // Mostly upward
    const vx = Math.cos(angle) * speed
    const vy = Math.sin(angle) * speed

    return {
      x,
      y,
      vx,
      vy,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.6 + 0.2,
      speed,
      trail: [],
      trailLength: Math.floor(Math.random() * 10) + 5,
      type,
    }
  }, [])

  const updateParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      const mouse = mouseRef.current

      // Add new particles occasionally
      if (Math.random() < 0.1 && particlesRef.current.length < 100) {
        particlesRef.current.push(createParticle(canvas))
      }

      particlesRef.current = particlesRef.current.filter((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Add current position to trail
        particle.trail.push({ x: particle.x, y: particle.y })

        // Limit trail length
        if (particle.trail.length > particle.trailLength) {
          particle.trail.shift()
        }

        // Mouse interaction - particles are attracted to mouse when active
        if (mouse.active) {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const force = ((200 - distance) / 200) * 0.02
            particle.vx += dx * force
            particle.vy += dy * force
          }
        }

        // Add some natural movement - slight waviness to represent the ups and downs of the journey
        particle.vx += Math.sin(particle.y * 0.01) * 0.01

        // Remove particles that go off screen
        return !(
          particle.x < -50 ||
          particle.x > canvas.width + 50 ||
          particle.y < -50 ||
          particle.y > canvas.height + 50
        )
      })
    },
    [createParticle],
  )

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    particlesRef.current.forEach((particle) => {
      ctx.save()

      // Draw trail
      if (particle.trail.length > 1) {
        ctx.beginPath()
        ctx.moveTo(particle.trail[0].x, particle.trail[0].y)

        for (let i = 1; i < particle.trail.length; i++) {
          ctx.lineTo(particle.trail[i].x, particle.trail[i].y)
        }

        ctx.strokeStyle = particle.color
        ctx.globalAlpha = particle.opacity * 0.5
        ctx.lineWidth = particle.size / 2
        ctx.stroke()
      }

      // Draw particle
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color

      switch (particle.type) {
        case "star":
          drawStar(ctx, particle.x, particle.y, 5, particle.size, particle.size / 2)
          break

        case "circle":
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2)
          ctx.fill()
          break

        case "spark":
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size / 3, 0, Math.PI * 2)
          ctx.fill()
          ctx.shadowBlur = 10
          ctx.shadowColor = particle.color
          break

        case "path":
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size / 4, 0, Math.PI * 2)
          ctx.fill()
          break
      }

      ctx.restore()
    })
  }, [])

  // Helper function to draw stars
  const drawStar = (
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number,
  ) => {
    let rot = (Math.PI / 2) * 3
    let x = cx
    let y = cy
    const step = Math.PI / spikes

    ctx.beginPath()
    ctx.moveTo(cx, cy - outerRadius)

    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius
      y = cy + Math.sin(rot) * outerRadius
      ctx.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius
      y = cy + Math.sin(rot) * innerRadius
      ctx.lineTo(x, y)
      rot += step
    }

    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath()
    ctx.fill()
  }

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear with fade effect
    ctx.fillStyle = "rgba(3, 7, 18, 0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    updateParticles(canvas)
    drawParticles(ctx)

    animationRef.current = requestAnimationFrame(animate)
  }, [updateParticles, drawParticles])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Reset particles when canvas resizes
      particlesRef.current = []
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push(createParticle(canvas))
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, createParticle])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  )
}

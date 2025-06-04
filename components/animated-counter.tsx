"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export function AnimatedCounter({
  end,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const countRef = useRef({ value: 0 })
  const frameRef = useRef(0)

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()
    const endTime = startTime + duration * 1000

    const updateCount = (currentTime: number) => {
      if (currentTime >= endTime) {
        setCount(end)
        return
      }

      const progress = (currentTime - startTime) / (duration * 1000)
      const easedProgress = easeOutExpo(progress)
      const nextCount = easedProgress * end

      countRef.current.value = nextCount
      setCount(nextCount)
      frameRef.current = requestAnimationFrame(updateCount)
    }

    frameRef.current = requestAnimationFrame(updateCount)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration, isInView])

  // Easing function for smoother animation
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
  }

  const formatNumber = (num: number) => {
    return num.toFixed(decimals)
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

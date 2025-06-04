"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
  type?: "chars" | "words" | "lines"
}

export function TextReveal({ text, className = "", delay = 0, once = true, type = "words" }: TextRevealProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  // Split text into words, chars, or lines
  const items = type === "chars" ? text.split("") : type === "words" ? text.split(" ") : [text]

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  }

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={child}
          style={{ marginRight: type === "words" ? "0.25em" : type === "chars" ? "0" : undefined }}
        >
          {item}
          {type === "chars" && index !== items.length - 1 && ""}
        </motion.span>
      ))}
    </motion.div>
  )
}

"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Instagram, Youtube, ArrowRight, Rocket, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { useRef } from "react"
import { TextReveal } from "@/components/text-reveal"
import { MagneticElement } from "@/components/magnetic-element"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToProjects = () => {
    try {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
    } catch (error) {
      console.error("Error scrolling to projects:", error)
      document.querySelector("#projects")?.scrollIntoView()
    }
  }

  const scrollToContact = () => {
    try {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
    } catch (error) {
      console.error("Error scrolling to contact:", error)
      document.querySelector("#contact")?.scrollIntoView()
    }
  }

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <motion.div style={{ y, opacity }} className="container-width section-padding relative z-10">
        <div className="text-center">
          {/* Young Creatorpreneur Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect mb-8 group hover:bg-white/10 transition-all duration-300"
            data-cursor-hover
            data-cursor-text="Let's Build Together"
          >
            <Rocket className="w-4 h-4 text-blue-400" />
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Chasing Dreams & Building the Future</span>
            <Sparkles className="w-4 h-4 text-purple-400 opacity-60" />
          </motion.div>

          <motion.div className="mb-6">
            <TextReveal
              text="Raj Kumar"
              className="professional-heading text-5xl md:text-7xl lg:text-8xl mb-4 gradient-text"
              delay={0.2}
              type="chars"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium mb-2"
            >
              18-Year-Old Creatorpreneur & Developer
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl creatorpreneur-accent flex items-center justify-center gap-2"
            >
              <span>@BuildWithRK</span>
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="text-purple-400"
              >
                ⚡
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl professional-text max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            From student to <span className="creatorpreneur-highlight">visionary builder</span> - creating digital
            experiences that educate, inspire, and solve real problems. Join me on this journey from code to empire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <MagneticElement strength={30}>
              <Button
                onClick={scrollToProjects}
                className="professional-button px-8 py-3 group"
                data-cursor-hover
                data-cursor-text="View Projects"
              >
                <span className="flex items-center gap-2">
                  See My Projects
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </Button>
            </MagneticElement>
            <MagneticElement strength={30}>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="px-8 py-3 rounded-xl font-semibold border-2 border-gray-600 hover:border-blue-500 bg-transparent hover:bg-blue-500/10 text-gray-300 hover:text-blue-400 transition-all duration-300"
                data-cursor-hover
                data-cursor-text="Let's Talk"
              >
                Connect With Me
              </Button>
            </MagneticElement>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center space-x-6"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Rajkumar-Porandla",
                label: "GitHub",
                color: "hover:text-gray-300",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/raj-kumar-porandla3025",
                label: "LinkedIn",
                color: "hover:text-blue-400",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/buildwithrk07",
                label: "Instagram",
                color: "hover:text-pink-400",
              },
              {
                icon: Youtube,
                href: "https://www.youtube.com/@BuildWithRK-07",
                label: "YouTube",
                color: "hover:text-red-400",
              },
              { icon: Mail, href: "mailto:buildwithrk07@gmail.com", label: "Email", color: "hover:text-green-400" },
            ].map(({ icon: Icon, href, label, color }) => (
              <MagneticElement key={label} strength={50}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl glass-effect hover:bg-white/10 transition-all duration-300 text-gray-400 ${color}`}
                  aria-label={label}
                  data-cursor-hover
                  data-cursor-text={label}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              </MagneticElement>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Energetic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-500 cursor-pointer group"
          onClick={() => {
            try {
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
            } catch (error) {
              console.error("Error scrolling to about:", error)
              document.querySelector("#about")?.scrollIntoView()
            }
          }}
          data-cursor-hover
          data-cursor-text="Scroll Down"
        >
          <span className="text-sm mb-2 font-medium group-hover:text-blue-400 transition-colors">
            Explore My Journey
          </span>
          <div className="flex flex-col items-center">
            <ChevronDown className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
            <motion.div
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent mt-1"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

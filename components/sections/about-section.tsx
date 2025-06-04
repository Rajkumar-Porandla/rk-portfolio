"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code, Palette, Zap, Users } from "lucide-react"
import { SectionReveal } from "@/components/section-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { TextReveal } from "@/components/text-reveal"

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting beautiful and intuitive user experiences",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and user satisfaction",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams and clients",
  },
]

export function AboutSection() {
  const ref = useRef(null)

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-width section-padding">
        <SectionReveal>
          <div className="text-center mb-16">
            <TextReveal
              text="About Me"
              className="professional-heading text-4xl md:text-5xl lg:text-6xl mb-6"
              type="words"
            />
            <p className="text-lg professional-text max-w-2xl mx-auto">
              From student to creatorpreneur - building digital experiences that matter
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ParallaxSection speed={0.1} direction="up">
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                initial={{ rotate: 6 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl"
              ></motion.div>
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-2"
              >
                <Image
                  src="/images/raj-kumar-photo.jpg"
                  alt="Raj Kumar - BuildWithRK"
                  width={400}
                  height={500}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </ParallaxSection>

          {/* Content */}
          <ParallaxSection speed={0.2} direction="down">
            <div className="space-y-6">
              <div className="space-y-4">
                <TextReveal
                  text="Hi, I'm Raj Kumar"
                  className="professional-heading text-2xl md:text-3xl"
                  type="words"
                  delay={0.2}
                />
                <p className="professional-text text-lg leading-relaxed">
                  Welcome to BuildWithRK! I'm a passionate creatorpreneur who started as a curious student learning
                  HTML, CSS, and JavaScript, and evolved into someone who builds complete digital experiences. My
                  journey spans from creating simple websites to developing AI-powered systems and building a personal
                  brand in the creator space.
                </p>
                <p className="professional-text text-lg leading-relaxed">
                  What sets me apart is my unique blend of technical skills and creative vision. I don't just code - I
                  create experiences that educate, inspire, and solve real problems. From gym websites to AI attendance
                  systems, from educational platforms to content creation, I'm building an empire that combines
                  technology with creativity.
                </p>
                <p className="professional-text text-lg leading-relaxed">
                  My mission is to transition from freelancer to a one-person digital agency, and eventually scale to
                  products and businesses that make a lasting impact. I believe in learning in public, sharing the
                  journey, and inspiring others to become creatorpreneurs.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-4 rounded-xl glass-effect hover:bg-white/20 dark:hover:bg-white/5 transition-all duration-300"
                    data-cursor-hover
                  >
                    <highlight.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{highlight.title}</h4>
                    <p className="text-xs professional-text">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  )
}

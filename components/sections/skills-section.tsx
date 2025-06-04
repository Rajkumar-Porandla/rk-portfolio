"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiOpencv,
} from "react-icons/si"
import { Video, Camera, Lightbulb, Users, Target, Zap, Heart } from "lucide-react"
import { SectionReveal } from "@/components/section-reveal"
import { Card3D } from "@/components/3d-card"
import { AnimatedCounter } from "@/components/animated-counter"

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Git & GitHub", icon: SiGit, color: "#F05032" },
      { name: "SQL", icon: SiPostgresql, color: "#336791" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ],
  },
  {
    title: "Creative & Branding",
    skills: [
      { name: "Content Creation", icon: Camera, color: "#FF6B6B" },
      { name: "Video Editing", icon: Video, color: "#4ECDC4" },
      { name: "UI/UX Design", icon: SiFigma, color: "#F24E1E" },
      { name: "Brand Building", icon: Target, color: "#45B7D1" },
      { name: "Visual Storytelling", icon: Lightbulb, color: "#96CEB4" },
      { name: "Instagram Reels", icon: Camera, color: "#E1306C" },
    ],
  },
  {
    title: "Soft Skills & Mindset",
    skills: [
      { name: "Self-Learning", icon: Lightbulb, color: "#FFA726" },
      { name: "Growth Mindset", icon: Zap, color: "#66BB6A" },
      { name: "Communication", icon: Users, color: "#42A5F5" },
      { name: "Initiative", icon: Target, color: "#AB47BC" },
      { name: "Multitasking", icon: Zap, color: "#EF5350" },
      { name: "Vision & Strategy", icon: Heart, color: "#FF7043" },
    ],
  },
]

const stats = [
  { value: 12, label: "Projects Completed", prefix: "", suffix: "+" },
  { value: 6, label: "Websites Developed", prefix: "", suffix: "+" },
  { value: 2, label: "Years Experience", prefix: "", suffix: "" },
  { value: 100, label: "Satisfaction Rate", prefix: "", suffix: "%" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container-width section-padding">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit spanning technical development, creative content, and entrepreneurial mindset
            </p>
          </div>
        </SectionReveal>

        {/* Stats Section */}
        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card3D key={stat.label} className="bg-gray-800 p-6 text-center" glareIntensity={0.15}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2.5}
                      decimals={0}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </SectionReveal>

        <div className="space-y-16" ref={ref}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="font-sora font-bold text-2xl md:text-3xl text-center mb-8">{category.title}</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="group relative p-6 rounded-2xl glass-effect hover:bg-white/20 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: skillIndex * 0.1,
                        }}
                        className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        <skill.icon className="h-8 w-8 transition-colors duration-300" style={{ color: skill.color }} />
                      </motion.div>
                      <span className="font-semibold text-sm">{skill.name}</span>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {skill.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

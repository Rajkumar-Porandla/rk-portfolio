"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Github, X, AlertCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/section-reveal"
import { Card3D } from "@/components/3d-card"

const projects = [
  {
    id: 1,
    title: "Fit Club Gym Website",
    description:
      "A responsive gym website built with HTML and CSS featuring modern design and user-friendly interface.",
    longDescription:
      "A comprehensive gym website showcasing fitness programs, membership plans, and trainer profiles. Built with clean HTML and CSS, featuring responsive design, smooth animations, and an intuitive user experience that motivates visitors to join the fitness journey. This project demonstrates mastery of fundamental web technologies and responsive design principles.",
    image: "/images/projects/fit-club-screenshot.png",
    tags: ["HTML", "CSS", "Responsive Design", "UI/UX"],
    liveUrl: null,
    githubUrl: "https://github.com/Rajkumar-Porandla/Fit-Club-gym-website",
    featured: true,
    isLive: false,
    comingSoon: false,
  },
  {
    id: 2,
    title: "RK's Flavour",
    description: "A food ordering website showcasing menu items and order functionality with modern design.",
    longDescription:
      "An elegant food ordering platform that brings restaurant menus to life. Features include interactive menu browsing, order customization, and a seamless checkout experience. Built with modern web technologies to provide a delightful food ordering experience that showcases both technical skills and understanding of user experience design.",
    image: "/images/projects/rk-flavour-screenshot.png",
    tags: ["HTML", "CSS", "JavaScript", "Food Tech", "UI/UX"],
    liveUrl: null,
    githubUrl: "https://github.com/Rajkumar-Porandla/rk-s-flavour",
    featured: true,
    isLive: false,
    comingSoon: false,
  },
  {
    id: 3,
    title: "Memoraid",
    description: "A TypeScript-based application for memory aid and task management with intuitive interface.",
    longDescription:
      "A powerful memory aid and task management application built with TypeScript. Features include note-taking, task scheduling, reminder systems, and productivity tracking. Designed to help users organize their thoughts and manage their daily activities efficiently. This project showcases advanced JavaScript/TypeScript skills and modern development practices.",
    image: "/images/projects/memoraid-screenshot.png",
    tags: ["TypeScript", "Task Management", "Productivity", "Web App"],
    liveUrl: null,
    githubUrl: "https://github.com/Rajkumar-Porandla/Memoraid",
    featured: true,
    isLive: false,
    comingSoon: false,
  },
  {
    id: 4,
    title: "Hackathon Project",
    description:
      "An innovative food delivery solution developed during a hackathon event, focusing on speed and user experience.",
    longDescription:
      "A comprehensive food delivery platform called 'Fudo' developed during an intensive hackathon event. Features fast delivery promises, intuitive user interface, and modern design principles. This project showcases rapid prototyping skills, innovative thinking, and the ability to deliver functional solutions under pressure while maintaining high design standards.",
    image: "/images/projects/hackathon-screenshot.png",
    tags: ["Innovation", "Food Delivery", "Rapid Prototyping", "Hackathon"],
    liveUrl: null,
    githubUrl: "https://github.com/Rajkumar-Porandla/hackathon",
    featured: false,
    isLive: false,
    comingSoon: false,
  },
  {
    id: 5,
    title: "Fun Learn by RK",
    description: "An educational platform aimed at making learning fun and interactive for students.",
    longDescription:
      "An innovative educational platform that transforms traditional learning into an engaging, interactive experience. Features gamified learning modules like 'Scramble Words' and 'Stick Escape', progress tracking, and adaptive content delivery. The platform uses vibrant colors and engaging UI to make education more accessible and enjoyable for learners of all ages, representing the core mission of BuildWithRK.",
    image: "/images/projects/fun-learn-screenshot.png",
    tags: ["Education", "Interactive Learning", "Gamification", "EdTech"],
    liveUrl: null,
    githubUrl: "https://github.com/Rajkumar-Porandla/Fun-Learn-by-RK",
    featured: true,
    isLive: false,
    comingSoon: false,
  },
  {
    id: 6,
    title: "Pento Furniture",
    description: "A modern furniture website with clean design and user-friendly interface for furniture shopping.",
    longDescription:
      "A sophisticated furniture e-commerce website featuring a clean, modern design and intuitive user interface. Showcases furniture collections with detailed product views, smooth navigation, and an elegant shopping experience. The minimalist design approach with beautiful product photography reflects the quality of modern furniture being sold, demonstrating expertise in e-commerce design and user experience optimization.",
    image: "/images/projects/pento-furniture-screenshot.png",
    tags: ["E-commerce", "Furniture", "Modern Design", "Shopping"],
    liveUrl: null,
    githubUrl: "https://github.com/Rajkumar-Porandla/pento-furniture",
    featured: false,
    isLive: false,
    comingSoon: false,
  },
]

interface NotLivePopupProps {
  project: (typeof projects)[0] | null
  onClose: () => void
}

function NotLivePopup({ project, onClose }: NotLivePopupProps) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-white dark:bg-gray-800 rounded-3xl max-w-md w-full p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 rounded-full" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>

        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center"
          >
            {project.comingSoon ? (
              <Clock className="h-8 w-8 text-white" />
            ) : (
              <AlertCircle className="h-8 w-8 text-white" />
            )}
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-sora font-bold text-2xl mb-2"
          >
            {project.comingSoon ? "Coming Soon!" : "Not Live Yet"}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
          >
            {project.comingSoon
              ? `${project.title} is currently in development and will be launching soon. Stay tuned for updates!`
              : `${project.title} is not yet deployed live. You can check out the source code on GitHub to see the development progress and implementation details.`}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            <Button
              onClick={() => window.open(project.githubUrl, "_blank")}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Github className="h-5 w-5 mr-2" />
              View Source Code
            </Button>

            <Button variant="outline" onClick={onClose} className="w-full">
              Close
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
          >
            <p className="text-sm text-blue-600 dark:text-blue-400">
              💡 Follow BuildWithRK on social media for updates when projects go live!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [notLiveProject, setNotLiveProject] = useState<(typeof projects)[0] | null>(null)
  const [filter, setFilter] = useState<"all" | "featured">("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = filter === "featured" ? projects.filter((project) => project.featured) : projects

  const handleLiveClick = (project: (typeof projects)[0], e: React.MouseEvent) => {
    e.stopPropagation()

    // Check if project is not live or has no live URL
    if (!project.isLive || !project.liveUrl) {
      setNotLiveProject(project)
    } else {
      window.open(project.liveUrl, "_blank")
    }
  }

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-width section-padding">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              A showcase of my journey from fundamentals to advanced applications - each project tells a story
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className="rounded-full"
              >
                All Projects
              </Button>
              <Button
                variant={filter === "featured" ? "default" : "outline"}
                onClick={() => setFilter("featured")}
                className="rounded-full"
              >
                Featured
              </Button>
            </div>
          </div>
        </SectionReveal>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout ref={ref}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card3D
                  className="bg-white dark:bg-gray-800 h-full cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} - Website Screenshot`}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Status indicators */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {project.isLive ? (
                        <div className="bg-green-500 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span>Live</span>
                        </div>
                      ) : (
                        <div className="bg-orange-500 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{project.comingSoon ? "Soon" : "Dev"}</span>
                        </div>
                      )}
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-sora font-bold text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => handleLiveClick(project, e)}
                        className="flex items-center space-x-2 border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                      >
                        <Clock className="h-4 w-4" />
                        <span>Preview</span>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.githubUrl, "_blank")
                        }}
                        className="flex items-center space-x-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </Button>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 rounded-full"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              <div className="relative">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={`${selectedProject.title} - Full Screenshot`}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="bg-orange-500/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>In Development</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-sora font-bold text-2xl md:text-3xl mb-2">{selectedProject.title}</h3>
                    {selectedProject.featured && (
                      <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                        Featured Project
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    onClick={(e) => handleLiveClick(selectedProject, e)}
                    className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    <Clock className="h-5 w-5" />
                    <span>Preview</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                    className="flex items-center space-x-2"
                  >
                    <Github className="h-5 w-5" />
                    <span>View Code</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Not Live Popup */}
      <AnimatePresence>
        {notLiveProject && <NotLivePopup project={notLiveProject} onClose={() => setNotLiveProject(null)} />}
      </AnimatePresence>
    </section>
  )
}

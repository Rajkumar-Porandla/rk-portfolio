"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Gym Owner",
    company: "Fit Club Gym",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    content:
      "Raj created an amazing website for our gym that perfectly captures our brand. The design is modern, responsive, and has helped us attract more members. His attention to detail and understanding of our needs was exceptional.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Restaurant Manager",
    company: "RK's Flavour Restaurant",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    content:
      "The food ordering website Raj built for us has transformed our business. The interface is intuitive, the design is appetizing, and our customers love how easy it is to browse our menu and place orders online.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Education Coordinator",
    company: "Learning Institute",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
    content:
      "Raj's Fun Learn platform has revolutionized how we approach education. The interactive elements and gamified learning experience have significantly improved student engagement and learning outcomes.",
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Furniture Store Owner",
    company: "Pento Furniture",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    content:
      "The furniture website Raj designed for us is absolutely stunning. It showcases our products beautifully and provides an excellent shopping experience. Our online sales have increased significantly since launch.",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Productivity Coach",
    company: "Memory Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    content:
      "Memoraid has become an essential tool for my clients. Raj's understanding of user needs and ability to create intuitive interfaces makes this app incredibly effective for memory aid and task management.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Tech Entrepreneur",
    company: "Innovation Hub",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
    content:
      "Working with Raj during our hackathon was incredible. His ability to rapidly prototype and deliver a functional food delivery platform under pressure was impressive. The final product exceeded all expectations.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Testimonials from clients and colleagues I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl relative"
          >
            <Quote className="absolute top-6 left-6 h-8 w-8 text-blue-600/20 dark:text-blue-400/20" />

            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic mb-8">
                "{testimonials[currentIndex].content}"
              </p>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="relative">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = "/placeholder.svg?height=80&width=80"
                  }}
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-blue-500/20"></div>
              </div>
              <div className="text-center">
                <h4 className="font-sora font-bold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{testimonials[currentIndex].role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 dark:bg-blue-400"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
            >
              {isAutoPlaying ? "Pause" : "Play"} Auto-scroll
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

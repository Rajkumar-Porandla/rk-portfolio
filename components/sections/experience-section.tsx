"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Building, Brain, Lightbulb, Video, Target } from "lucide-react"

const journeySteps = [
  {
    icon: Brain,
    title: "Year 1: Learning the Fundamentals",
    company: "Self-Taught Journey",
    location: "Remote Learning",
    period: "2023 - Early Stage",
    description:
      "Started my coding journey with the core web technologies, building a solid foundation in frontend development.",
    achievements: [
      "Mastered HTML, CSS, and JavaScript fundamentals",
      "Built complete websites: Gym Website, Fun Learning Games, and Food Delivery App",
      "Uploaded all projects to GitHub for real-world practice and portfolio building",
      "Learned responsive design and modern CSS techniques",
    ],
  },
  {
    icon: Lightbulb,
    title: "Leveling Up: Thinking Beyond Just Code",
    company: "Advanced Projects & AI",
    location: "Expanding Horizons",
    period: "2023 - Growth Phase",
    description:
      "Moved beyond basic web development to create innovative solutions combining education, AI, and real-world applications.",
    achievements: [
      "Launched 'Fun Learn by RK' - combining education with interactivity for students",
      "Created AI-based Attendance System using OpenCV, Face Recognition, and SQL",
      "Started working on YOLO Object Detection and Deep Neural Networks",
      "Developed expertise in real-time vision systems and computer vision",
    ],
  },
  {
    icon: Video,
    title: "Entering the Creator Space",
    company: "Content Creation & Branding",
    location: "Social Media Platforms",
    period: "2024 - Creator Phase",
    description: "Transitioned into content creation, building a personal brand and sharing the journey with others.",
    achievements: [
      "Started posting B-roll-style Instagram Reels focused on creators, learning, and tech",
      "Built consistent content habit to inspire and document the creatorpreneur journey",
      "Learned video editing and visual storytelling for YouTube and Instagram",
      "Established BuildWithRK brand identity and online presence",
    ],
  },
  {
    icon: Target,
    title: "Creator + Developer = Creatorpreneur",
    company: "BuildWithRK Empire",
    location: "Building the Future",
    period: "2024 - Present",
    description:
      "Developing a comprehensive vision to build a digital empire, combining technical skills with entrepreneurial mindset.",
    achievements: [
      "Developed vision to build an empire: Freelancer → Digital Agency → Products & Businesses",
      "Balancing university, gym, content creation, and technical projects",
      "Building Mind Ease and other innovative projects",
      "Creating a sustainable path from student to successful creatorpreneur",
    ],
  },
]

const education = [
  {
    degree: "Self-Directed Learning Journey",
    school: "Online Platforms & Real Projects",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Comprehensive self-taught education combining online courses, hands-on projects, and real-world application.",
    achievements: [
      "Mastered full-stack web development through practical projects",
      "Learned AI/ML concepts through OpenCV and computer vision projects",
      "Developed content creation and personal branding skills",
      "Built 6+ complete web applications with real-world functionality",
    ],
  },
  {
    degree: "University Studies",
    school: "Academic Institution",
    location: "India",
    period: "Ongoing",
    description: "Balancing formal education with self-directed learning and practical project development.",
    achievements: [
      "Maintaining academic performance while building technical skills",
      "Applying theoretical knowledge to real-world projects",
      "Developing time management and multitasking abilities",
      "Building network and collaborative skills",
    ],
  },
]

interface TimelineItemProps {
  item: (typeof journeySteps)[0]
  index: number
  isInView: boolean
  type: "journey" | "education"
}

function TimelineItem({ item, index, isInView, type }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Timeline dot with icon */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center">
        {type === "journey" && <item.icon className="h-6 w-6 text-white" />}
        {type === "education" && <Building className="h-6 w-6 text-white" />}
      </div>

      {/* Content */}
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="font-sora font-bold text-xl mb-1">{item.title}</h3>
              <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                <Building className="h-4 w-4 mr-2" />
                <span className="font-semibold">{item.company}</span>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{item.period}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{item.description}</p>

          <div>
            <h4 className="font-semibold mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From curious beginner to creatorpreneur - the evolution of BuildWithRK
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sora font-bold text-2xl md:text-3xl text-center mb-12"
          >
            Creatorpreneur Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600" />

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <TimelineItem key={index} item={step} index={index} isInView={isInView} type="journey" />
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sora font-bold text-2xl md:text-3xl text-center mb-12"
          >
            Education & Learning
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-600 to-pink-600" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} index={index} isInView={isInView} type="education" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

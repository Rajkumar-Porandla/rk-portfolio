"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#projects" },
      { name: "UI/UX Design", href: "#projects" },
      { name: "Consulting", href: "#contact" },
      { name: "Mentoring", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#contact" },
      { name: "Portfolio", href: "#projects" },
      { name: "Resume", href: "#contact" },
      { name: "Contact", href: "#contact" },
    ],
  },
]

export function Footer() {
  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
      console.error("Error scrolling to top:", error)
      window.scrollTo(0, 0)
    }
  }

  const scrollToSection = (href: string) => {
    try {
      if (href && href.startsWith("#")) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        } else {
          console.warn(`Element with selector "${href}" not found`)
        }
      } else {
        console.warn(`Invalid href: "${href}"`)
      }
    } catch (error) {
      console.error("Error scrolling to section:", error)
      if (href && href.startsWith("#")) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView()
        }
      }
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-width section-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="font-sora font-bold text-2xl gradient-text mb-4">BuildWithRK</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Full Stack Developer passionate about creating exceptional digital experiences, educational platforms,
                  and innovative web solutions that make a difference in people's lives.
                </p>
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Back to Top
                </Button>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-sora font-semibold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-left block w-full"
                        type="button"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {new Date().getFullYear()} BuildWithRK (Raj Kumar). Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and lots of passion for coding.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button
                className="hover:text-white transition-colors duration-200"
                onClick={() => scrollToSection("#contact")}
                type="button"
              >
                Privacy Policy
              </button>
              <button
                className="hover:text-white transition-colors duration-200"
                onClick={() => scrollToSection("#contact")}
                type="button"
              >
                Terms of Service
              </button>
              <button
                className="hover:text-white transition-colors duration-200"
                onClick={() => scrollToSection("#projects")}
                type="button"
              >
                Sitemap
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

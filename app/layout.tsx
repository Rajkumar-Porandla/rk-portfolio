import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollProgress } from "@/components/scroll-progress"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Raj Kumar - Premium Full Stack Developer | BuildWithRK",
  description:
    "Professional portfolio of Raj Kumar (BuildWithRK), a passionate full-stack developer creating exceptional digital experiences and innovative web solutions.",
  keywords:
    "full stack developer, web development, React, Next.js, portfolio, BuildWithRK, Raj Kumar, premium developer",
  authors: [{ name: "Raj Kumar" }],
  openGraph: {
    title: "Raj Kumar - Premium Full Stack Developer | BuildWithRK",
    description:
      "Professional portfolio showcasing innovative web development projects and creative solutions by BuildWithRK.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Kumar - Premium Full Stack Developer | BuildWithRK",
    description:
      "Professional portfolio showcasing innovative web development projects and creative solutions by BuildWithRK.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <body className="font-inter antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <ScrollProgress />
          <Navigation />
          <main className="relative">{children}</main>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}

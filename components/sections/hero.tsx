"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Building seamless experiences from server to screen."
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!isTyping || displayText.length >= fullText.length) {
      setIsTyping(false)
      return
    }

    const timer = setTimeout(() => {
      setDisplayText(fullText.slice(0, displayText.length + 1))
    }, 50)

    return () => clearTimeout(timer)
  }, [displayText, isTyping])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-gradient-to-b from-background via-background to-card">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <div className="mb-6 inline-block">
          <p className="text-sm md:text-base font-medium text-accent uppercase tracking-widest">
            Welcome to my portfolio
          </p>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="text-foreground">Alex Rivera</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Full-Stack Developer
          </span>
        </h1>

        {/* Typing tagline */}
        <div className="h-12 md:h-16 mb-8 flex items-center justify-center">
          <p className="text-lg md:text-2xl text-muted-foreground text-balance font-light">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-4 justify-center mb-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card border border-border hover:border-accent hover:bg-muted transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-card border border-border hover:border-accent hover:bg-muted transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="mailto:alex@example.com"
            className="p-3 rounded-lg bg-card border border-border hover:border-accent hover:bg-muted transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-foreground" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-accent" />
        </div>
      </div>
    </section>
  )
}

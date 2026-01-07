"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, send to backend or email service
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Milion-Mengistu", label: "GitHub", color: "hover:text-foreground" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/milion-mengistu/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Mail, href: "mailto:millionmengistu6@gmail.com", label: "Email", color: "hover:text-accent" },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-6 bg-background relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-accent uppercase tracking-widest">05. Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        {/* Content grid */}
        <div className="max-w-2xl mx-auto">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="space-y-12">
              {/* Email */}
              <div className="text-center">
                <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Email</p>
                <a
                  href="mailto:millionmengistu6@gmail.com"
                  className="text-2xl font-semibold text-foreground hover:text-accent transition-colors"
                >
                  millionmengistu6@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="text-center">
                <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Location</p>
                <p className="text-lg text-foreground">Ethiopia</p>
              </div>

              {/* Availability */}
              <div className="text-center">
                <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Availability</p>
                <p className="text-lg text-foreground flex items-center justify-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  Open to opportunities
                </p>
              </div>

              {/* Social links */}
              <div className="text-center">
                <p className="text-sm font-medium text-accent uppercase tracking-widest mb-6">Connect</p>
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg bg-card border border-border hover:border-accent transition-all duration-200 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div
          className={`text-center pt-16 border-t border-border transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-muted-foreground mb-6">Or if you prefer, reach out directly:</p>
          <a
            href="mailto:millionmengistu6@gmail.com"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-200"
          >
            millionmengistu6@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

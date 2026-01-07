"use client"

import { useEffect, useRef, useState } from "react"
import { aboutData } from "@/data/about"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section id="about" ref={ref} className="py-20 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-accent uppercase tracking-widest">01. About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Passionate about creating digital experiences that matter.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        {/* Content grid */}
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {/* Left column - bio */}
          <div className="space-y-6">
            {aboutData.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {aboutData.stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - visual element */}
          <div
            className={`relative h-full min-h-96 rounded-xl overflow-hidden border border-border bg-card p-8 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>

            <div className="relative z-10 h-full flex flex-col justify-between font-mono text-sm">
              <div>
                <div className="text-accent">const</div>
                <div className="text-foreground">
                  <span className="text-primary">developer</span>
                  <span> = {"{"}</span>
                </div>
              </div>

              <div className="pl-4 space-y-2">
                <div>
                  <span className="text-primary">name:</span>
                  <span className="text-accent"> "{aboutData.name}",</span>
                </div>
                <div>
                  <span className="text-primary">location:</span>
                  <span className="text-accent"> "{aboutData.location}",</span>
                </div>
                <div>
                  <span className="text-primary">role:</span>
                  <span className="text-accent"> "{aboutData.role}",</span>
                </div>
                <div>
                  <span className="text-primary">focus:</span>
                  <span className="text-accent"> {JSON.stringify(aboutData.focus)},</span>
                </div>
                <div>
                  <span className="text-primary">passion:</span>
                  <span className="text-accent"> "{aboutData.passion}"</span>
                </div>
              </div>

              <div>
                <div className="text-foreground">
                  {"}"}
                  <span>;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

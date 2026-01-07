"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Cloud, Wrench, Zap, GitBranch, Server, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    color: "from-accent to-blue-500",
    icon: Code2,
    skills: [
      { name: "React / Next.js", icon: Code2 },
      { name: "TypeScript", icon: Zap },
      { name: "Tailwind CSS", icon: Layers },
      { name: "Framer Motion", icon: Wrench },
    ],
  },
  {
    title: "Backend",
    color: "from-primary to-purple-600",
    icon: Server,
    skills: [
      { name: "Node.js / Express", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "API Design", icon: Zap },
      { name: "Authentication", icon: Wrench },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-green-500 to-teal-600",
    icon: Cloud,
    skills: [
      { name: "Docker", icon: Cloud },
      { name: "Git / GitHub", icon: GitBranch },
      { name: "AWS", icon: Cloud },
      { name: "CI/CD Pipelines", icon: Zap },
    ],
  },
]

function SkillIcon({ icon: Icon, delay }: { icon: React.ComponentType<any>; delay: number }) {
  return (
    <div
      className="relative w-16 h-16"
      style={{
        animation: `float-up-down 3s ease-in-out infinite`,
        animationDelay: `${delay * 0.1}s`,
      }}
    >
      {/* Rotating background circle */}
      <div
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent border-r-accent"
        style={{
          animation: `spin-slow 3s linear infinite`,
        }}
      />
      {/* Icon container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
      </div>
    </div>
  )
}

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-20 px-6 bg-card relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-accent uppercase tracking-widest">02. Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Technical Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category header */}
              <div className="mb-8 pb-4 border-b border-border">
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center text-center transition-all duration-500"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0.8)",
                      transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                    }}
                  >
                    <SkillIcon icon={skill.icon} delay={skillIndex} />
                    <p className="mt-4 text-sm font-medium text-foreground">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional technologies */}
        <div
          className={`mt-16 pt-16 border-t border-border transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">Other Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "MongoDB",
              "GraphQL",
              "Redis",
              "Firebase",
              "Vercel",
              "Webpack",
              "Jest",
              "Playwright",
              "Python",
              "Linux",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted border border-border rounded-full text-sm text-foreground hover:border-accent hover:bg-muted transition-colors cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

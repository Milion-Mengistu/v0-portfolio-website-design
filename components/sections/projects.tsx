"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    category: "full-stack",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "WebSocket-based chat app with user authentication, rooms, and message history.",
    category: "backend",
    image: "/chat-application-interface.png",
    technologies: ["Socket.io", "Express", "MongoDB", "React"],
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "Collaborative task management with drag-and-drop, team collaboration, and analytics.",
    category: "frontend",
    image: "/task-management-dashboard.png",
    technologies: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Analytics Engine",
    description: "Real-time data visualization platform with custom dashboards and report generation.",
    category: "full-stack",
    image: "/analytics-dashboard-charts.png",
    technologies: ["React", "Python", "PostgreSQL", "Redis"],
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Developer Portfolio",
    description: "Modern, responsive portfolio website with smooth animations and dark mode support.",
    category: "frontend",
    image: "/portfolio-website-design.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    id: 6,
    title: "API Management System",
    description: "Centralized API management with authentication, rate limiting, and usage analytics.",
    category: "backend",
    image: "/api-gateway-system.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    live: "https://example.com",
    github: "https://github.com",
  },
]

const categories = ["all", "frontend", "backend", "full-stack"]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)

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

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((p) => p.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <section id="projects" ref={ref} className="py-20 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-accent uppercase tracking-widest">03. Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Recent Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        {/* Filter buttons */}
        <div
          className={`mb-12 flex flex-wrap gap-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card border border-border text-foreground hover:border-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-lg overflow-hidden border border-border bg-card hover:border-accent transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Project image */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-xs text-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-muted border border-border rounded-lg hover:border-accent transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

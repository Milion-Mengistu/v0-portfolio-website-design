"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    id: 1,
    period: "2023 - Present",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    description:
      "Led development of high-performance web applications serving 100k+ users. Architected microservices, mentored junior developers, and improved system performance by 40%.",
    highlights: ["Architecture Design", "Team Leadership", "Performance Optimization"],
  },
  {
    id: 2,
    period: "2021 - 2023",
    title: "Full-Stack Developer",
    company: "Digital Solutions Co.",
    description:
      "Built and maintained multiple full-stack applications using React and Node.js. Implemented CI/CD pipelines and improved development workflow efficiency.",
    highlights: ["Full-Stack Development", "DevOps", "API Design"],
  },
  {
    id: 3,
    period: "2019 - 2021",
    title: "Junior Developer",
    company: "Startup Labs",
    description:
      "Started career building frontend components and fixing bugs. Gradually took on backend responsibilities and learned modern development practices.",
    highlights: ["Frontend Development", "Problem Solving", "Learning"],
  },
]

export default function Experience() {
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
    <section id="experience" ref={ref} className="py-16 md:py-20 px-4 md:px-6 bg-card relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs md:text-sm font-medium text-accent uppercase tracking-widest">04. Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Professional Journey</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>

          {/* Experience items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-2 w-8 md:w-12 h-8 md:h-12 bg-background border-4 border-accent rounded-full transform md:-translate-x-6 flex items-center justify-center transition-all duration-500 ${isVisible ? "scale-100" : "scale-0"}`}
                >
                  <div className="w-2 md:w-4 h-2 md:h-4 bg-accent rounded-full"></div>
                </div>

                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 ${index % 2 === 0 ? "md:mr-1/2 md:pr-12" : "md:ml-1/2 md:pl-12"} transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 " + (index % 2 === 0 ? "-translate-x-8" : "translate-x-8")}`}
                >
                  <div className="bg-background border border-border rounded-lg p-4 md:p-6 hover:border-accent transition-colors">
                    <p className="text-xs md:text-sm font-medium text-accent uppercase tracking-widest mb-2">
                      {exp.period}
                    </p>

                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-sm md:text-md text-primary font-semibold mb-4">{exp.company}</p>

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 md:px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

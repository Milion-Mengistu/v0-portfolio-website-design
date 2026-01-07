import { Code2, Database, Cloud, Wrench, Zap, GitBranch, Server, Layers } from "lucide-react"

export const skillCategories = [
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

export const otherTechnologies = [
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
]

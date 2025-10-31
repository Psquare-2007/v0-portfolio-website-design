"use client"

import { Code2, Database, Zap, Brain } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Code2,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      category: "Backend",
      icon: Database,
      skills: ["Python", "Node.js", "Database Management", "REST APIs"],
    },
    {
      category: "AI & ML",
      icon: Brain,
      skills: ["Machine Learning", "Deep Learning", "NLP", "Image Processing"],
    },
    {
      category: "Tools & Tech",
      icon: Zap,
      skills: ["Git", "Docker", "AWS", "Firebase"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-accent">Core</span> Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-blue-600 rounded"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-lg bg-gradient-to-br from-card to-card/50 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                style={{
                  animation: `slide-up 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="mb-4 p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 w-fit transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-4">{category.category}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm text-foreground/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

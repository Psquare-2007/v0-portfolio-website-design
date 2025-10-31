"use client"

import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    { company: "Google", role: "Software Developer Intern" },
    { company: "IBM", role: "Full Stack Developer Intern" },
    { company: "Microsoft", role: "Software Developer Intern" },
    { company: "Adobe", role: "Developer Intern" },
    { company: "Accenture", role: "Technology Analyst" },
    { company: "Amazon", role: "Software Developer Intern" },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-accent">Professional</span> Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-blue-600 rounded"></div>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg bg-card border border-border hover:border-accent/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              style={{
                animation: `slide-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Briefcase className="text-accent" size={24} />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent font-semibold">
                    Internship
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{exp.company}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exp.role}</p>

                <p className="text-xs text-foreground/50 mb-4">
                  Exposure to real-world projects, collaboration with diverse teams, and hands-on experience with
                  cutting-edge technologies.
                </p>

                <div className="flex items-center text-accent text-sm font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

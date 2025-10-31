"use client"

import { Github, ExternalLink, Zap } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Skin Cancer Detection",
      description: "Deep learning model for medical image analysis using CNN. Achieved 94% accuracy on test dataset.",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Medical Imaging"],
      featured: true,
    },
    {
      title: "Quantum Chat System",
      description: "Quantum-encrypted communication prototype with end-to-end encryption for secure messaging.",
      technologies: ["Python", "Quantum Computing", "Encryption", "React"],
      featured: true,
    },
    {
      title: "AI Chat Application",
      description: "Intelligent chatbot powered by NLP and Machine Learning for natural conversations.",
      technologies: ["NLP", "Python", "Machine Learning", "React"],
      featured: false,
    },
    {
      title: "Quiz Game Platform",
      description: "Interactive quiz application with real-time scoring and leaderboard functionality.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      featured: false,
    },
    {
      title: "Payroll Management System",
      description: "Comprehensive employee payroll system with automated calculations and reporting.",
      technologies: ["Python", "Django", "PostgreSQL", "React"],
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-blue-600 rounded"></div>
        </div>

        {/* Featured Projects - Large */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-border hover:border-accent/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/10"
                style={{
                  animation: `slide-up 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="p-6 sm:p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Zap className="text-accent" size={24} />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent font-semibold">
                      Featured
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30 hover:border-accent/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a href="#" className="flex items-center gap-2 text-accent hover:gap-3 transition-all">
                      <Github size={18} />
                      <span className="text-sm font-semibold">View Code</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-accent hover:gap-3 transition-all">
                      <ExternalLink size={18} />
                      <span className="text-sm font-semibold">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects - Compact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                style={{
                  animation: `slide-up 0.6s ease-out ${(index + 2) * 0.15}s both`,
                }}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 rounded bg-accent/10 text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

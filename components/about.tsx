"use client"

import { BookOpen, Code2, Zap } from "lucide-react"

export default function About() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "VIT Chennai",
      status: "Ongoing",
      icon: BookOpen,
    },
    {
      degree: "Full Stack Development Course",
      school: "Computer Software College",
      status: "Completed",
      icon: Code2,
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-accent">About</span> Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-blue-600 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer and Software Developer with a keen interest in creating innovative
              solutions using modern web technologies and AI/ML. Currently pursuing my B.Tech in Computer Science and
              Engineering at VIT Chennai.
            </p>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              With hands-on experience from internships at leading tech companies, I've developed a deep understanding
              of building scalable, intelligent systems that solve real-world problems. I thrive at the intersection of
              technology, creativity, and problem-solving.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all">
                <div className="text-2xl font-bold text-accent">6+</div>
                <p className="text-sm text-muted-foreground">Internships</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all">
                <div className="text-2xl font-bold text-accent">5+</div>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all">
                <div className="text-2xl font-bold text-accent">8+</div>
                <p className="text-sm text-muted-foreground">Skills</p>
              </div>
            </div>
          </div>

          {/* Right - Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Zap className="text-accent mr-3" size={28} />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => {
                const Icon = edu.icon
                return (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-card/50 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Icon className="text-accent" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.school}</p>
                        <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

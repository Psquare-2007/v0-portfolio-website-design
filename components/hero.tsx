"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const handleScroll = (target: string) => {
    const element = document.querySelector(target)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm animate-slide-up">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-accent">Welcome to my portfolio</span>
        </div>

        {/* Main Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="bg-gradient-to-r from-foreground via-accent to-blue-400 bg-clip-text text-transparent">
            Building Digital
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-foreground bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Full Stack Developer • AI/ML Enthusiast • Problem Solver
        </p>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg text-foreground/70 mb-12 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          "Building intelligent, scalable, and modern digital experiences."
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="group relative px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-accent/50"
          >
            <span className="relative flex items-center justify-center">
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </button>

          <button
            onClick={() => handleScroll("#contact")}
            className="px-8 py-3 border border-accent/50 text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://github.com/prithivirajan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
          >
            <Github size={24} className="text-foreground group-hover:text-accent transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/prithivirajan-p"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
          >
            <Linkedin size={24} className="text-foreground group-hover:text-accent transition-colors" />
          </a>
          <a
            href="mailto:prithivirajan2007@gmail.com"
            className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
          >
            <Mail size={24} className="text-foreground group-hover:text-accent transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <div className="w-1 h-6 border border-accent/50 rounded-full flex justify-center">
              <div className="w-0.5 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

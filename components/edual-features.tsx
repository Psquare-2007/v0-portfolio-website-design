"use client"

import { Code, Zap, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Well-structured, maintainable code following industry best practices",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized solutions with lightning-fast load times and responsiveness",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Beautiful interfaces that prioritize user experience and accessibility",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Systems built to grow with your business needs and future demands",
  },
]

const stats = [
  { number: "8.1K+", label: "Projects Developed" },
  { number: "90K+", label: "Hours of Work" },
]

export default function PlatformFeatures() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Platform Features &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technology stack and modern development practices for exceptional results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>
              <div className="relative z-10">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:text-blue-400 transition" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl p-8 rounded-xl border border-purple-500/30 text-center hover:border-purple-500/60 transition"
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-12 text-center group hover:border-purple-500/60 transition">
            <div className="mb-8 inline-block">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition cursor-pointer">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Watch How I{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Build Excellence
              </span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my development process, tech stack, and approach to creating high-quality digital solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-900/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                Build Smarter{" "}
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Grow Faster
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-xl">
                Full-stack developer specializing in cutting-edge web technologies and innovative solutions for the
                modern digital landscape.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 text-lg rounded-lg font-semibold flex items-center gap-2 group">
                Explore Portfolio
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/50 text-white hover:bg-purple-500/10 px-8 py-6 text-lg rounded-lg font-semibold flex items-center gap-2 bg-transparent"
              >
                <Play size={20} />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-purple-500/20">
              <div>
                <div className="text-4xl font-bold text-white">5+</div>
                <div className="text-gray-400 mt-2">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">50+</div>
                <div className="text-gray-400 mt-2">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Card */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 flex flex-col justify-between overflow-hidden group hover:border-purple-500/60 transition">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative z-10 space-y-4">
                <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-sm text-purple-300">
                  Featured Project
                </div>
                <h3 className="text-2xl font-bold text-white">Skin Cancer Detection</h3>
                <p className="text-gray-300">
                  AI-powered image recognition system using deep learning and modern web stack.
                </p>
              </div>
              <button className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition group/btn">
                <Play size={20} className="text-white ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

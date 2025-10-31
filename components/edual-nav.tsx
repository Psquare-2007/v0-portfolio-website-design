"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User } from "lucide-react"

interface NavigationProps {
  scrolled: boolean
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-purple-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-1 h-6 bg-purple-600 transform -skew-x-12"></div>
            <div className="w-1 h-6 bg-purple-600 transform -skew-x-12"></div>
          </div>
          <span className="text-2xl font-bold text-white">PRITHVI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-300 hover:text-white transition">
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition">
            About
          </a>
          <a href="#services" className="text-gray-300 hover:text-white transition">
            Services
          </a>
          <a href="#blog" className="text-gray-300 hover:text-white transition">
            Blog
          </a>
          <button className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition">
            <User size={20} className="text-white" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-purple-500/20 px-6 py-4 space-y-4">
          <a href="#home" className="block text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#about" className="block text-gray-300 hover:text-white">
            About
          </a>
          <a href="#services" className="block text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#blog" className="block text-gray-300 hover:text-white">
            Blog
          </a>
        </div>
      )}
    </nav>
  )
}

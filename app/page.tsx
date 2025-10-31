"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/edual-nav"
import HeroSection from "@/components/edual-hero"
import PlatformFeatures from "@/components/edual-features"
import SkillsShowcase from "@/components/edual-skills"
import Footer from "@/components/edual-footer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Navigation scrolled={scrolled} />
      <HeroSection />
      <PlatformFeatures />
      <SkillsShowcase />
      <Footer />
    </main>
  )
}

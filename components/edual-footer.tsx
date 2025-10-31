"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-purple-500/20 bg-black/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-1 h-6 bg-purple-600 transform -skew-x-12"></div>
                <div className="w-1 h-6 bg-purple-600 transform -skew-x-12"></div>
              </div>
              <span className="text-xl font-bold text-white">PRITHVI</span>
            </div>
            <p className="text-gray-400 text-sm">Full-stack developer crafting digital excellence</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Blog"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-purple-400 transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "AI/ML Solutions", "UI/UX Design", "Consulting"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Mail, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center hover:bg-purple-500/40 hover:border-purple-500/80 transition"
                >
                  <Icon size={18} className="text-purple-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2025 Prithvivirajan P. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

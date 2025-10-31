"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-br from-accent to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="font-bold text-foreground">Prithvi</span>
            </div>
            <p className="text-sm text-muted-foreground">Full Stack Developer • AI/ML Enthusiast</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://github.com/prithivirajan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/prithivirajan-p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:prithivirajan2007@gmail.com"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-6"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} Prithivirajan P. All rights reserved. | Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

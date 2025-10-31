"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Linkedin, Github, Twitter, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "prithivirajan2007@gmail.com", href: "mailto:prithivirajan2007@gmail.com" },
    { icon: Phone, label: "Phone", value: "9360457389", href: "tel:9360457389" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/prithivirajan-p",
      href: "https://linkedin.com/in/prithivirajan-p",
    },
    { icon: Github, label: "GitHub", value: "github.com/prithivirajan", href: "https://github.com/prithivirajan" },
    { icon: Twitter, label: "Twitter", value: "@prithivirajan", href: "https://twitter.com/prithivirajan" },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Have a question or want to collaborate? Feel free to reach out. I'm always interested in hearing about new
            projects and opportunities.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-blue-600 rounded mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-semibold truncate">{info.value}</p>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/50 text-accent text-sm">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

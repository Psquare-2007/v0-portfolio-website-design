"use client"

const skillsCategories = [
  {
    name: "Data Science",
    color: "from-rose-500 to-pink-600",
    skills: ["Python", "TensorFlow", "ML/AI"],
  },
  {
    name: "UI/UX Design Essentials",
    color: "from-blue-500 to-cyan-600",
    skills: ["Figma", "Design Systems", "User Research"],
  },
  {
    name: "Digital Marketing",
    color: "from-purple-500 to-violet-600",
    skills: ["SEO", "Analytics", "Content Strategy"],
  },
  {
    name: "Advanced Web Dev",
    color: "from-orange-500 to-red-600",
    skills: ["React", "Next.js", "Node.js"],
  },
]

export default function SkillsShowcase() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Learn the Skills That{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Matter</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across multiple domains and modern technology stacks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative h-64 rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition duration-300`}
              ></div>

              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="text-sm text-white/90 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span>Explore</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

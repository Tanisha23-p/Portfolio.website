export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/20"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-md">
        <h1 className="text-2xl font-bold tracking-widest">TANISHA.</h1>
        <div className="flex gap-6 text-sm uppercase tracking-wide">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-20 gap-12">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[6px] text-cyan-400 mb-4 text-sm">Portfolio 2026</p>

          <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            Creative
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Developer</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            B.Tech CSE student passionate about AI, web development,
            blockchain security, and modern digital experiences.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition inline-block"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-3xl blur opacity-60"></div>

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 w-[320px]">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              TR
            </div>

            <h3 className="text-2xl font-bold text-center mb-2">Tanisha</h3>

            <p className="text-center text-gray-400 mb-6">
              AI & Full Stack Developer
              Web Developer
              Data Analyst
            </p>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <h4 className="text-2xl font-bold text-cyan-400">10+</h4>
                <p className="text-xs text-gray-400">Projects</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <h4 className="text-2xl font-bold text-purple-400">2026</h4>
                <p className="text-xs text-gray-400">Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 px-8 lg:px-20 py-16">
        <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-lg">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            I am a Computer Science Engineering student focused on creating
            futuristic digital products. My interests include Artificial
            Intelligence, Blockchain Security, Full Stack Development,
            Python, Data Analysis, and Data Science.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 px-8 lg:px-20 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-gray-400">Selected Work</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            {
              title: 'Blockchain AI Ownership',
              desc: 'Protecting AI models using blockchain-based copyright verification.',
            },
            {
              title: 'Email Spam Classifier',
              desc: 'A machine learning model for identifying and filtering spam emails.',
            },
            {
              title: 'Personal Portfolio Website',
              desc: 'A responsive portfolio website showcasing my projects and skills.',
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-105 transition duration-300 hover:border-cyan-400/40"
            >
              <div className="h-40 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 mb-6 flex items-center justify-center text-5xl">
                ✨
              </div>

              <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 px-8 lg:px-20 py-16">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {[
            'Python',
            'React',
            'Machine Learning',
            'Data Analysis',
            'Blockchain',
            'JavaScript,HTML,CSS',
            'Tailwind CSS',
            'AI/ML',
            'GitHub',
          ].map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 px-8 lg:px-20 py-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-[30px] p-10 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>

          <p className="text-gray-300 mb-8 text-lg">
            Open for internships, job opportunities, collaborations, and exciting tech projects.
          </p>

          <div className="mt-6 text-lg text-gray-300">
            📧 Email: tanisharajoria112@gmail.com
          </div>
          <div className="mt-3 text-lg text-gray-300">
            🔗 LinkedIn: linkedin.com/in/tanisha-rajoria-aa03b7341
          </div>
          <div className="mt-3 text-lg text-gray-300">📞 Contact: +91 7300693658</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-8 text-center text-gray-500 border-t border-white/10">
        © 2026 Tanisha • Portfolio Website
      </footer>
    </div>
  )
}

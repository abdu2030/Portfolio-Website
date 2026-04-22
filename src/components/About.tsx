export default function About() {
  const highlights = [
    {
      icon: '🎓',
      title: 'Education',
      description: 'Software Engineering Student passionate about technology',
    },
    {
      icon: '💼',
      title: 'Experience',
      description: 'Building projects and solving real-world problems',
    },
    {
      icon: '🌟',
      title: 'Goal',
      description: 'Seeking internship to grow and contribute',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Get to Know Me Better
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Illustration */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-100 to-indigo-100 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">💻</div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-white rounded-xl shadow-md">
                    <div className="text-3xl mb-2">📱</div>
                    <div className="text-xs text-slate-600">Mobile</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-md">
                    <div className="text-3xl mb-2">🌐</div>
                    <div className="text-xs text-slate-600">Web</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-md">
                    <div className="text-3xl mb-2">⚙️</div>
                    <div className="text-xs text-slate-600">Backend</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl -z-10"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              A Passionate Developer Ready to Make an Impact
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm a dedicated developer with hands-on experience in mobile and backend development. My journey in tech has equipped me with skills in
              mobile development using Flutter, backend development with Laravel
              and Python, system programming with C++, and database management.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and constantly
              learning new technologies. I'm excited to bring my skills to a
              dynamic team where I can contribute while continuing to grow as a
              developer.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-violet-50 transition-colors"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

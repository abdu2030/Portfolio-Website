import VisualIcon from './VisualIcon';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-violet-700 text-sm font-medium">
                Open to Opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Abdulkerim Adem
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                Mobile and Full Stack Developer
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Passionate developer skilled in Flutter, Laravel, Python, and C++.
              I love building innovative solutions and turning ideas into reality.
              Currently seeking internship and full-time opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-violet-300 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-semibold hover:border-violet-300 hover:bg-violet-50 transition-all flex items-center justify-center gap-2"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://github.com/abdu2030"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-slate-600 hover:text-violet-600"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:abdulkerimadem453@gmail.com"
                aria-label="Email Abdulkerim Adem"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-slate-600 hover:text-violet-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Branded developer visual */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-88 md:h-88">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 p-1 shadow-2xl shadow-violet-200">
                <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center px-8">
                  <span className="text-7xl md:text-8xl font-black bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    AA
                  </span>
                  <span className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-500">
                    Developer
                  </span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-3 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2">
                <VisualIcon name="mobile" className="w-5 h-5 text-violet-600" />
                <div>
                  <span className="block text-xs uppercase tracking-widest text-slate-400">Mobile</span>
                  <span className="font-semibold text-slate-700">Flutter</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-3 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2">
                <VisualIcon name="server" className="w-5 h-5 text-indigo-600" />
                <div>
                  <span className="block text-xs uppercase tracking-widest text-slate-400">Backend</span>
                  <span className="font-semibold text-slate-700">Laravel</span>
                </div>
              </div>
              <div className="absolute top-1/2 -left-8 hidden md:block px-3 py-2 bg-slate-900 text-white rounded-xl shadow-lg text-sm font-mono">
                {'<code />'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}



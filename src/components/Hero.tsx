import VisualIcon from './VisualIcon';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-[#0b0d14]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.07)_1px,transparent_1px)] bg-[size:52px_52px] dark:bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-300/40 dark:bg-cyan-500/15 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-48 -left-40 w-96 h-96 bg-blue-300/35 dark:bg-blue-600/15 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/3 w-80 h-80 bg-violet-300/30 dark:bg-violet-600/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 dark:bg-emerald-400/10 dark:border-emerald-300/20 rounded-full mb-6 shadow-lg shadow-emerald-950/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.75)]"></span>
              <span className="text-emerald-700 text-sm font-medium dark:text-emerald-300">
                Open to Opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 mb-6 dark:text-slate-50 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400 bg-clip-text text-transparent">
                Abdulkerim Adem
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                Mobile and Full Stack Developer
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Passionate developer skilled in Flutter, Laravel, Python, and C++.
              I love building innovative solutions and turning ideas into reality.
              Currently seeking internship and full-time opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg shadow-cyan-950/50 hover:from-cyan-400 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/20 active:translate-y-px transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
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
                className="px-8 py-4 bg-white border border-slate-200 text-slate-800 shadow-sm shadow-slate-200/70 dark:bg-white/[0.04] dark:border-white/15 dark:text-slate-100 dark:shadow-none rounded-full font-semibold hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 active:bg-cyan-100 dark:hover:border-cyan-300/50 dark:hover:bg-cyan-300/[0.06] dark:hover:text-cyan-200 dark:active:bg-white/[0.08] transition-all flex items-center justify-center gap-2"
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
                className="p-3 bg-white/90 border border-slate-200 rounded-full shadow-lg shadow-slate-200/70 hover:border-cyan-300 hover:shadow-cyan-100 hover:-translate-y-1 transition-all text-slate-600 hover:text-cyan-700 dark:bg-[#151a26]/90 dark:border-white/10 dark:shadow-black/25 dark:hover:border-cyan-300/40 dark:hover:shadow-cyan-950/40 dark:text-slate-300 dark:hover:text-cyan-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:abdulkerimadem453@gmail.com"
                aria-label="Email Abdulkerim Adem"
                className="p-3 bg-white/90 border border-slate-200 rounded-full shadow-lg shadow-slate-200/70 hover:border-cyan-300 hover:shadow-cyan-100 hover:-translate-y-1 transition-all text-slate-600 hover:text-cyan-700 dark:bg-[#151a26]/90 dark:border-white/10 dark:shadow-black/25 dark:hover:border-cyan-300/40 dark:hover:shadow-cyan-950/40 dark:text-slate-300 dark:hover:text-cyan-300"
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
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 p-[2px] shadow-2xl shadow-cyan-950/60">
                <div className="w-full h-full rounded-full bg-white border border-slate-200 dark:bg-[#11151f] dark:border-white/10 flex flex-col items-center justify-center text-center px-8 shadow-[inset_0_0_55px_rgba(34,211,238,0.06)]">
                  <span className="text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400 bg-clip-text text-transparent">
                    AA
                  </span>
                  <span className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-500">
                    Developer
                  </span>
                </div>
              </div>
              <div className="absolute -top-4 -right-2 px-4 py-3 bg-white/90 backdrop-blur-md rounded-lg shadow-xl shadow-slate-200/80 border border-slate-200 dark:bg-[#151a26]/90 dark:shadow-black/35 dark:border-white/10 flex items-center gap-2">
                <VisualIcon name="mobile" className="w-5 h-5 text-cyan-600 dark:text-cyan-300" />
                <div>
                  <span className="block text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500">Mobile</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Flutter</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-2 px-4 py-3 bg-white/90 backdrop-blur-md rounded-lg shadow-xl shadow-slate-200/80 border border-slate-200 dark:bg-[#151a26]/90 dark:shadow-black/35 dark:border-white/10 flex items-center gap-2">
                <VisualIcon name="server" className="w-5 h-5 text-violet-600 dark:text-violet-300" />
                <div>
                  <span className="block text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500">Backend</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Laravel</span>
                </div>
              </div>
              <div className="absolute top-1/2 -left-8 hidden md:block px-3 py-2 bg-white/95 border border-cyan-200 text-cyan-700 dark:bg-[#151a26]/95 dark:border-cyan-300/20 dark:text-cyan-200 rounded-lg shadow-xl shadow-cyan-950/40 text-sm font-mono">
                {'<code />'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-slate-400 dark:text-slate-600"
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




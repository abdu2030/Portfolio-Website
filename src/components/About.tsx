import VisualIcon, { type IconName } from './VisualIcon';

export default function About() {
  const highlights = [
    {
      icon: 'education' as IconName,
      title: 'Education',
      description: 'Software Engineering Student passionate about technology',
    },
    {
      icon: 'experience' as IconName,
      title: 'Experience',
      description: 'Building projects and solving real-world problems',
    },
    {
      icon: 'goal' as IconName,
      title: 'Goal',
      description: 'Seeking internship to grow and contribute',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-slate-200/70 dark:bg-[#0f131d] dark:border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-700 font-semibold dark:text-cyan-300 text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-slate-50 mt-2">
            Get to Know Me Better
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-white via-slate-50 to-cyan-50 border border-slate-200 dark:from-[#151a26] dark:via-[#111827] dark:to-[#11151f] dark:border-white/10 p-8 flex items-center justify-center shadow-2xl shadow-slate-200/80 dark:shadow-black/25">
              <div className="text-center w-full">
                <div className="mx-auto w-28 h-28 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 text-white flex items-center justify-center text-4xl font-black shadow-xl shadow-cyan-950/40">
                  AA
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="p-4 bg-white rounded-lg shadow-lg shadow-slate-200/80 border border-slate-200 dark:bg-[#171c28] dark:shadow-black/25 dark:border-white/10">
                    <VisualIcon name="mobile" className="w-8 h-8 text-cyan-600 dark:text-cyan-300 mx-auto mb-2" />
                    <div className="text-xs text-slate-600 dark:text-slate-400">Mobile</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-lg shadow-slate-200/80 border border-slate-200 dark:bg-[#171c28] dark:shadow-black/25 dark:border-white/10">
                    <VisualIcon name="frontend" className="w-8 h-8 text-violet-600 dark:text-violet-300 mx-auto mb-2" />
                    <div className="text-xs text-slate-600 dark:text-slate-400">Web</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-lg shadow-slate-200/80 border border-slate-200 dark:bg-[#171c28] dark:shadow-black/25 dark:border-white/10">
                    <VisualIcon name="server" className="w-8 h-8 text-blue-600 dark:text-blue-300 mx-auto mb-2" />
                    <div className="text-xs text-slate-600 dark:text-slate-400">Backend</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-500/40 via-blue-600/40 to-violet-600/40 rounded-lg -z-10 blur-sm"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50 mb-4">
              A Passionate Developer Ready to Make an Impact
            </h3>
            <p className="text-slate-600 mb-6 dark:text-slate-400 leading-relaxed">
              I'm a dedicated developer with hands-on experience in mobile and full stack development. My journey in tech has equipped me with skills in
              mobile development using Flutter, full stack development with Laravel
              and Python, system programming with C++, and database management.
            </p>
            <p className="text-slate-600 mb-8 dark:text-slate-400 leading-relaxed">
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
                  className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-lg shadow-sm shadow-slate-200/60 hover:border-cyan-300 hover:bg-cyan-50/50 dark:bg-[#151a26]/80 dark:border-white/10 dark:shadow-none dark:hover:border-cyan-300/25 dark:hover:bg-[#18202d] transition-all"
                >
                  <span className="w-12 h-12 rounded-lg bg-cyan-50 border border-cyan-200 dark:bg-cyan-400/[0.08] dark:border-cyan-300/15 flex items-center justify-center text-sm font-bold text-cyan-700 dark:text-cyan-300 shrink-0">
                    <VisualIcon name={item.icon} className="w-6 h-6" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                    <p className="text-slate-600 text-sm dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/ABDULKERIM_ADEM_FlowCV_Resume_2026-05-24.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg shadow-cyan-950/40 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/20 active:translate-y-px transition-all"
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



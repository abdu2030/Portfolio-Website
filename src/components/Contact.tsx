import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draftOpened, setDraftOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  const messageBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
  const mailtoUri = `mailto:abdulkerimadem453@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Contact'
  )}&body=${encodeURIComponent(messageBody)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setDraftOpened(false);

    window.location.href = mailtoUri;

    window.setTimeout(() => {
      setIsSubmitting(false);
      setDraftOpened(true);
    }, 400);
  };

  const handleCopyMessage = async () => {
    await navigator.clipboard.writeText(messageBody);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'abdulkerimadem453@gmail.com',
      link: 'mailto:abdulkerimadem453@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      title: 'GitHub',
      value: 'github.com/abdu2030',
      link: 'https://github.com/abdu2030',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Addis Ababa, Ethiopia',
      link: undefined,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#0b0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-700 font-semibold text-sm uppercase tracking-wider dark:text-cyan-300">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mt-2 dark:text-white">Let's Work Together</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed dark:text-slate-400">
            I'm currently looking for internship and job opportunities. If you have a position that matches my skills, I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-950 mb-6 dark:text-white">Contact Information</h3>
            <p className="text-slate-600 mb-8 dark:text-slate-400">
              Reach out through email or GitHub. The form opens a draft in your email app so you stay in control before sending.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const content = (
                  <>
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-cyan-950/30 group-hover:scale-105 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm dark:text-slate-400">{info.title}</p>
                      <p className="text-slate-900 font-medium dark:text-white">{info.value}</p>
                    </div>
                  </>
                );

                return info.link ? (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg shadow-sm shadow-slate-200/70 hover:bg-cyan-50/50 hover:border-cyan-300 dark:bg-[#151a26]/70 dark:border-white/[0.08] dark:shadow-none dark:hover:bg-[#19202c] dark:hover:border-cyan-300/20 transition-all group"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg shadow-sm shadow-slate-200/70 group dark:bg-[#151a26]/70 dark:border-white/[0.08] dark:shadow-none">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <p className="text-slate-600 mb-4 dark:text-slate-400">Follow my work</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/abdu2030"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 shadow-sm shadow-slate-200/70 hover:text-cyan-700 hover:bg-cyan-50 hover:border-cyan-300 dark:bg-[#151a26] dark:border-white/10 dark:text-slate-300 dark:shadow-none dark:hover:text-cyan-200 dark:hover:bg-cyan-400/10 dark:hover:border-cyan-300/30 transition-all"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="mailto:abdulkerimadem453@gmail.com"
                  aria-label="Email Abdulkerim Adem"
                  className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 shadow-sm shadow-slate-200/70 hover:text-cyan-700 hover:bg-cyan-50 hover:border-cyan-300 dark:bg-[#151a26] dark:border-white/10 dark:text-slate-300 dark:shadow-none dark:hover:text-cyan-200 dark:hover:bg-cyan-400/10 dark:hover:border-cyan-300/30 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 border border-slate-200 shadow-2xl shadow-slate-200/80 dark:bg-[#151a26]/90 dark:border-white/10 dark:shadow-black/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              {draftOpened && (
                <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-300/20 dark:bg-amber-300/[0.08] dark:text-amber-200">
                  Your email draft was opened. Please review it and press send in your email app.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-2 dark:text-slate-200">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 shadow-sm shadow-slate-200/60 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/25 focus:border-cyan-500 dark:bg-[#0f131d] dark:border-white/10 dark:text-slate-100 dark:placeholder:text-slate-600 dark:shadow-none dark:hover:border-white/20 dark:focus:ring-cyan-400/35 dark:focus:border-cyan-300/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2 dark:text-slate-200">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 shadow-sm shadow-slate-200/60 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/25 focus:border-cyan-500 dark:bg-[#0f131d] dark:border-white/10 dark:text-slate-100 dark:placeholder:text-slate-600 dark:shadow-none dark:hover:border-white/20 dark:focus:ring-cyan-400/35 dark:focus:border-cyan-300/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2 dark:text-slate-200">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 shadow-sm shadow-slate-200/60 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/25 focus:border-cyan-500 dark:bg-[#0f131d] dark:border-white/10 dark:text-slate-100 dark:placeholder:text-slate-600 dark:shadow-none dark:hover:border-white/20 dark:focus:ring-cyan-400/35 dark:focus:border-cyan-300/50 transition-all"
                  placeholder="Job Opportunity / Internship"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2 dark:text-slate-200">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 shadow-sm shadow-slate-200/60 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/25 focus:border-cyan-500 dark:bg-[#0f131d] dark:border-white/10 dark:text-slate-100 dark:placeholder:text-slate-600 dark:shadow-none dark:hover:border-white/20 dark:focus:ring-cyan-400/35 dark:focus:border-cyan-300/50 transition-all resize-none"
                  placeholder="Tell me about the opportunity..."
                ></textarea>
              </div>

              <div className="grid sm:grid-cols-[1fr_auto] gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-cyan-950/35 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/20 active:translate-y-px transition-all disabled:opacity-45 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  {isSubmitting ? 'Opening Draft...' : 'Open Email Draft'}
                </button>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="px-5 py-4 bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold shadow-sm shadow-slate-200/70 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-700 active:bg-cyan-100 dark:bg-white/[0.03] dark:border-white/10 dark:text-slate-300 dark:shadow-none dark:hover:bg-white/[0.07] dark:hover:border-cyan-300/25 dark:hover:text-cyan-200 dark:active:bg-white/10 transition-all"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed dark:text-slate-500">
                This form uses your email app, so the message is only sent after you review and send the generated draft.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

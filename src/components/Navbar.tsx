import { useState, useEffect } from 'react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const themeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  const ThemeToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={themeLabel}
      aria-pressed={theme === 'dark'}
      title={themeLabel}
      className={`${mobile ? 'w-full justify-start px-4 py-3 rounded-lg' : 'w-11 h-11 justify-center rounded-full'} inline-flex items-center gap-2 border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm shadow-slate-200/60 transition-all hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 active:translate-y-px dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-black/20 dark:hover:border-cyan-300/40 dark:hover:bg-cyan-300/[0.08] dark:hover:text-cyan-200`}
    >
      {theme === 'dark' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
      {mobile && <span className="font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/88 backdrop-blur-xl border-b border-slate-200/80 shadow-lg shadow-slate-200/60 dark:bg-[#0b0d14]/88 dark:border-white/10 dark:shadow-black/25'
          : 'bg-white/55 backdrop-blur-sm border-b border-transparent dark:bg-[#0b0d14]/45'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-cyan-700 transition-colors font-medium dark:text-slate-300 dark:hover:text-cyan-300"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg shadow-cyan-200/70 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-300/40 active:translate-y-px transition-all hover:-translate-y-0.5 dark:shadow-cyan-950/40 dark:hover:shadow-cyan-500/20"
            >
              Hire Me
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-cyan-700 rounded-lg hover:bg-cyan-50 transition-colors dark:text-slate-200 dark:hover:text-cyan-300 dark:hover:bg-white/5"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4 bg-white/95 rounded-lg px-4 shadow-2xl shadow-slate-200/80 dark:border-white/10 dark:bg-[#11151f]/95 dark:shadow-black/40">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 hover:text-cyan-700 transition-colors font-medium dark:text-slate-300 dark:hover:text-cyan-300"
                >
                  {link.name}
                </a>
              ))}
              <ThemeToggle mobile />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

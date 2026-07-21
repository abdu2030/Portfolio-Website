import { useState } from 'react';
import VisualIcon, { type IconName } from './VisualIcon';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: IconName;
  tags: string[];
  techStack: string[];
  features: string[];
  problem: string;
  role: string;
  category: string;
  github?: string;
  demo?: string;
  screenshot?: string;
  screenshotAlt?: string;
}

interface ProjectAccent {
  background: string;
  color: string;
  soft: string;
  border: string;
  shadow: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 10,
      title: 'Skill Bridge AI Platform',
      description:
        'AI-powered learning and career-growth platform for turning skill gaps into guided development plans.',
      icon: 'ai',
      tags: ['AI Platform', 'Learning', 'Career Growth'],
      techStack: ['React', 'TypeScript', 'AI UX', 'Vercel'],
      features: ['Skill gap analysis', 'Guided learning paths', 'Opportunity-focused dashboard'],
      problem: 'Learners need a clearer way to understand what to improve next and connect learning to practical growth.',
      role: 'Designed and built the product experience, dashboard structure, and deployed web app.',
      category: 'Web',
      demo: 'https://skill-bridge-ai-platform-af28-5kt7iz9s6-abdu2030s-projects.vercel.app/',
    },
    {
      id: 8,
      title: 'Multi-Vendor E-Commerce Platform',
      description:
        'Marketplace storefront for vendor-driven product listings, catalog discovery, and customer shopping flows.',
      icon: 'store',
      tags: ['Marketplace', 'E-Commerce', 'Storefront'],
      techStack: ['React', 'Commerce UI', 'Responsive Design', 'Vercel'],
      features: ['Vendor-ready catalog', 'Product browsing flows', 'Modern shopping interface'],
      problem: 'Multi-seller commerce needs a storefront that can organize products clearly while keeping buying paths simple.',
      role: 'Built the frontend marketplace experience and deployed the live demo.',
      category: 'Web',
      demo: 'https://multi-vendor-e-commerce-platform-we.vercel.app/',
      screenshot: '/project-screenshots/multi-vendor-ecommerce.jpg',
      screenshotAlt: 'Multi-Vendor E-Commerce Platform homepage screenshot',
    },
    {
      id: 9,
      title: 'Life OS',
      description:
        'Personal productivity workspace for organizing goals, tasks, priorities, and daily progress.',
      icon: 'productivity',
      tags: ['Productivity', 'Dashboard', 'Planning'],
      techStack: ['React', 'Dashboard UI', 'Stateful Workflows', 'Vercel'],
      features: ['Goal tracking', 'Priority planning', 'Daily progress overview'],
      problem: 'Personal planning tools often scatter goals, tasks, and routines instead of showing one focused operating view.',
      role: 'Created the dashboard interaction model, visual structure, and live deployment.',
      category: 'Web',
      demo: 'https://life-os-two-red.vercel.app/',
      screenshot: '/project-screenshots/life-os.jpg',
      screenshotAlt: 'Life OS productivity dashboard screenshot',
    },
    {
      id: 1,
      title: 'Meals Recipe Explorer',
      description:
        'Mobile recipe discovery app with country and dietary filters for finding meals that match user preferences.',
      icon: 'recipe',
      tags: ['Flutter', 'Dart', 'Filters'],
      techStack: ['Flutter', 'Dart', 'Mobile UI', 'Filtering Logic'],
      features: ['Country-based browsing', 'Dietary filters', 'Recipe detail views'],
      problem: 'Recipe discovery becomes slow when users cannot narrow meals by location, dietary needs, or preference.',
      role: 'Built the mobile app UI and filtering experience.',
      category: 'Mobile',
      github: 'https://github.com/abdu2030/fifth_flutter_app',
    },
    {
      id: 2,
      title: 'Tutor Connect Platform',
      description:
        'Ed-tech mobile platform where educators publish materials and students access free or premium content.',
      icon: 'education',
      tags: ['Flutter', 'Firebase', 'Chapa API'],
      techStack: ['Flutter', 'Dart', 'Firebase', 'Chapa API'],
      features: ['Teacher course uploads', 'Free and paid content', 'Payment gateway integration'],
      problem: 'Students and tutors need one place to publish, discover, and access learning resources with payment support.',
      role: 'Implemented the mobile learning flow and payment-enabled content access.',
      category: 'Mobile',
      github: 'https://github.com/abdu2030/Flutter_Project_No_4',
    },
    {
      id: 3,
      title: 'Secure Exam Monitor',
      description:
        'Exam-taking application that discourages cheating through tab-switch detection and automatic dismissal rules.',
      icon: 'shield',
      tags: ['Java', 'Security', 'Desktop'],
      techStack: ['Java', 'Desktop App', 'Monitoring Logic'],
      features: ['Tab-switch detection', 'Automatic exam dismissal', 'Integrity-focused workflow'],
      problem: 'Remote and computer-based exams need stronger guardrails to reduce unfair behavior during tests.',
      role: 'Built the exam monitoring behavior and desktop application flow.',
      category: 'Desktop',
      github: 'https://github.com/abdu2030/SecureExamSystem',
    },
    {
      id: 4,
      title: 'Favorite Places',
      description:
        'Mobile location-saving app that uses native device features to capture and revisit memorable places.',
      icon: 'map',
      tags: ['Flutter', 'Camera', 'Native Features'],
      techStack: ['Flutter', 'Dart', 'Camera APIs', 'Local Data'],
      features: ['Place saving', 'Photo capture', 'Map-ready data structure'],
      problem: 'Users need a lightweight way to save meaningful places with visual context from their phone.',
      role: 'Built the native-feature integration and mobile UI flow.',
      category: 'Mobile',
      github: 'https://github.com/abdu2030/Seventh_flutter_app',
    },
    {
      id: 5,
      title: 'EduSphere',
      description:
        'E-learning web platform with structured lessons, assessments, quizzes, and certificate-oriented progress.',
      icon: 'elearning',
      tags: ['Laravel', 'PHP', 'MySQL'],
      techStack: ['Laravel', 'PHP', 'MySQL', 'Blade'],
      features: ['Course structure', 'Quizzes and assessments', 'Certificate flow'],
      problem: 'Online learning platforms need a complete path from course discovery to progress validation.',
      role: 'Contributed to backend and web learning workflows in a team project.',
      category: 'Web',
      github: 'https://github.com/Group1mighty/IP2-PROJECT',
    },
    {
      id: 6,
      title: 'Job Board',
      description:
        'Two-sided job listing platform where job seekers filter openings and employers post advertisements.',
      icon: 'briefcase',
      tags: ['Laravel', 'PHP', 'Filters'],
      techStack: ['Laravel', 'PHP', 'MySQL', 'Search Filters'],
      features: ['Job posting', 'Category/location filters', 'Employer and seeker flows'],
      problem: 'Job seekers need faster ways to narrow opportunities, while employers need a simple posting workflow.',
      role: 'Built the Laravel marketplace-style job posting and filtering features.',
      category: 'Web',
      github: 'https://github.com/abdu2030/Laravel-project',
    },
    {
      id: 7,
      title: 'Nova Crest Multimodal Tourist Kiosk',
      description:
        'Voice-activated smart tourist guide kiosk with tactile controls, speech features, and dynamic audio.',
      icon: 'kiosk',
      tags: ['React 19', 'TypeScript', 'Speech API'],
      techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Web Speech API', 'Web Audio API'],
      features: ['Voice navigation', 'Tactile control flow', 'Dynamic audio feedback'],
      problem: 'Tourist kiosks need accessible, multimodal interactions for visitors who prefer voice and guided navigation.',
      role: 'Built the interactive kiosk prototype and browser-based voice/audio experience.',
      category: 'Web',
      demo: 'https://tourist-guide-2vaxec7n7-abdu2030s-projects.vercel.app/',
    },
  ];

  const projectAccents: Record<number, ProjectAccent> = {
    10: { background: 'linear-gradient(135deg, #dbeafe 0%, #f5d0fe 55%, #fef3c7 100%)', color: '#7c3aed', soft: '#f3e8ff', border: '#d8b4fe', shadow: '0 18px 45px rgba(124, 58, 237, 0.18)' },
    8: { background: 'linear-gradient(135deg, #dcfce7 0%, #cffafe 55%, #ffedd5 100%)', color: '#059669', soft: '#dcfce7', border: '#86efac', shadow: '0 18px 45px rgba(5, 150, 105, 0.18)' },
    9: { background: 'linear-gradient(135deg, #fee2e2 0%, #fef3c7 50%, #e0f2fe 100%)', color: '#ea580c', soft: '#ffedd5', border: '#fdba74', shadow: '0 18px 45px rgba(234, 88, 12, 0.16)' },
    1: { background: 'linear-gradient(135deg, #ffedd5 0%, #fef9c3 55%, #dcfce7 100%)', color: '#d97706', soft: '#fef3c7', border: '#facc15', shadow: '0 18px 45px rgba(217, 119, 6, 0.16)' },
    2: { background: 'linear-gradient(135deg, #e0f2fe 0%, #ede9fe 50%, #fce7f3 100%)', color: '#2563eb', soft: '#dbeafe', border: '#93c5fd', shadow: '0 18px 45px rgba(37, 99, 235, 0.16)' },
    3: { background: 'linear-gradient(135deg, #e2e8f0 0%, #fee2e2 55%, #f8fafc 100%)', color: '#dc2626', soft: '#fee2e2', border: '#fca5a5', shadow: '0 18px 45px rgba(220, 38, 38, 0.16)' },
    4: { background: 'linear-gradient(135deg, #ccfbf1 0%, #dbeafe 55%, #dcfce7 100%)', color: '#0891b2', soft: '#cffafe', border: '#67e8f9', shadow: '0 18px 45px rgba(8, 145, 178, 0.16)' },
    5: { background: 'linear-gradient(135deg, #ede9fe 0%, #dbeafe 55%, #f0fdf4 100%)', color: '#4f46e5', soft: '#e0e7ff', border: '#a5b4fc', shadow: '0 18px 45px rgba(79, 70, 229, 0.16)' },
    6: { background: 'linear-gradient(135deg, #fef3c7 0%, #e0f2fe 55%, #fae8ff 100%)', color: '#ca8a04', soft: '#fef9c3', border: '#fde047', shadow: '0 18px 45px rgba(202, 138, 4, 0.16)' },
    7: { background: 'linear-gradient(135deg, #cffafe 0%, #e0e7ff 50%, #ffe4e6 100%)', color: '#0e7490', soft: '#ccfbf1', border: '#5eead4', shadow: '0 18px 45px rgba(14, 116, 144, 0.16)' },
  };

  const getAccent = (projectId: number) => projectAccents[projectId] ?? projectAccents[10];
  const filters = ['All', 'Mobile', 'Web', 'Desktop'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-white via-sky-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Featured Projects</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Case-study style snapshots of projects I have built, with the problem, role, features, and stack for each one.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeFilter === filter
                ? 'bg-gradient-to-r from-sky-600 via-violet-600 to-rose-500 text-white shadow-lg shadow-violet-300'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const accent = getAccent(project.id);
            const hasScreenshot = Boolean(project.screenshot);

            return (
              <article
                key={project.id}
                className="group bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{ borderColor: accent.border }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="h-52 overflow-hidden flex items-center justify-center" style={{ background: accent.background }}>
                  {hasScreenshot ? (
                    <img
                      src={project.screenshot}
                      alt={project.screenshotAlt ?? `${project.title} screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span
                      className="w-24 h-24 rounded-3xl bg-white/85 shadow-inner border flex items-center justify-center"
                      style={{ borderColor: accent.border, boxShadow: accent.shadow, color: accent.color }}
                    >
                      <VisualIcon name={project.icon} className="w-14 h-14" />
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: accent.soft, color: accent.color }}>
                      {project.category}
                    </span>
                    {hasScreenshot && <span className="text-xs font-medium text-slate-400">Live screenshot</span>}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 transition-colors" style={{ color: hoveredProject === project.id ? accent.color : undefined }}>
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-5">{project.description}</p>

                  <div className="space-y-4 text-sm flex-1">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Problem</p>
                      <p className="text-slate-700 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">My Role</p>
                      <p className="text-slate-700 leading-relaxed">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Features</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span key={feature} className="px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-100 text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: accent.soft, color: accent.color }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6 pt-5 border-t border-slate-100">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors text-sm font-semibold" style={{ color: accent.color }}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


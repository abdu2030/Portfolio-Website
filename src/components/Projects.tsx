import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Meals Recipe Explorer',
      description:
        'A feature-rich mobile app for discovering and browsing meal recipes from around the world. Includes advanced filtering by country, dietary preferences like gluten-free, vegan, and lactose-free, making it effortless to find the perfect dish for any occasion.',
      image: '🍲',
      tags: ['Flutter', 'Dart', 'Filters'],
      category: 'Mobile',
      github: 'https://github.com/abdu2030/fifth_flutter_app',
    },
    {
      id: 2,
      title: 'Tutor Connect Platform',
      description:
        'An ed-tech mobile platform bridging teachers and students. Educators can upload courses and learning materials while students browse and access both free and premium paid content, powered by seamless Chapa payment gateway integration.',
      image: '🎓',
      tags: ['Flutter', 'Dart', 'Chapa API', 'Firebase'],
      category: 'Mobile',
      github: 'https://github.com/abdu2030/Flutter_Project_No_4',
    },
    {
      id: 3,
      title: 'Secure Exam Monitor',
      description:
        'A robust exam-taking application built with Java that enforces academic integrity through real-time tab-switch detection. If a student navigates away or opens another tab during the test, the exam is automatically dismissed — ensuring a fair and secure testing environment.',
      image: '🛡️',
      tags: ['Java', 'Security', 'Desktop'],
      category: 'Mobile',
      github: 'https://github.com/abdu2030/SecureExamSystem',
    },
    {
      id: 4,
      title: 'Favorite Places',
      description:
        'A Flutter-based mobile app that lets users save and revisit their favorite locations. Leverages native device features including the camera to capture photos of memorable spots. Designed with map integration in mind for a future update to visualize saved places on an interactive map.',
      image: '📍',
      tags: ['Flutter', 'Dart', 'Camera', 'Native Features'],
      category: 'Mobile',
      github: 'https://github.com/abdu2030/Seventh_flutter_app',
    },
    {
      id: 5,
      title: 'EduSphere',
      description:
        'A comprehensive e-learning web platform offering structured courses across a wide range of subjects. Students progress through lessons, take assessments and quizzes to validate their knowledge, and earn certificates upon successful course completion — creating a complete end-to-end learning experience.',
      image: '🌐',
      tags: ['Laravel', 'PHP', 'MySQL', 'Blade'],
      category: 'Web',
      github: 'https://github.com/Group1mighty/IP2-PROJECT',
    },
    {
      id: 6,
      title: 'Job Board',
      description:
        'A full-featured job listing platform built with Laravel where job seekers can search and filter openings by category, location, and type. Employers can post their own job advertisements to find qualified candidates — serving as a two-sided marketplace connecting talent with opportunity.',
      image: '💼',
      tags: ['Laravel', 'PHP', 'MySQL', 'Filters'],
      category: 'Web',
      github: 'https://github.com/abdu2030/Laravel-project',
    },
  ];

  const filters = ['All', 'Mobile', 'Web'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Featured Projects
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've built. Each project represents my
            ability to solve problems and create valuable solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeFilter === filter
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-300'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-violet-200 transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center group-hover:from-violet-200 group-hover:to-indigo-200 transition-colors">
                <span className="text-7xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">
                  {project.title}
                </h3>
                <p
                  className={`text-slate-600 text-sm mb-4 transition-[max-height] duration-300 ease-in-out overflow-hidden ${hoveredProject === project.id ? '' : 'line-clamp-3'}`}
                  style={{ maxHeight: hoveredProject === project.id ? '20em' : '4.5em' }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors text-sm font-medium"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors text-sm font-medium"
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

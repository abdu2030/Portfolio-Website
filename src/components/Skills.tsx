import VisualIcon, { type IconName } from './VisualIcon';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: 'mobile' as IconName,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 85 },
        { name: 'Mobile UI/UX', level: 65 },
      ],
    },
    {
      title: 'Backend Development',
      icon: 'server' as IconName,
      color: 'from-blue-500 to-violet-500',
      skills: [
        { name: 'Laravel', level: 75 },
        { name: 'PHP', level: 80 },
        { name: 'REST APIs', level: 60 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: 'frontend' as IconName,
      color: 'from-violet-500 to-fuchsia-500',
      skills: [
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Programming Languages',
      icon: 'code' as IconName,
      color: 'from-sky-500 to-indigo-500',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'C++', level: 60 },
        { name: 'JavaScript', level: 65 },
      ],
    },
    {
      title: 'Database & Tools',
      icon: 'database' as IconName,
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 55 },
        { name: 'Git', level: 85 },
      ],
    },
  ];

  const tools = [
    { name: 'VS Code', icon: 'vscode' as IconName },
    { name: 'Android Studio', icon: 'android' as IconName },
    { name: 'Postman', icon: 'postman' as IconName },
    { name: 'Git', icon: 'git' as IconName },
    { name: 'Docker', icon: 'docker' as IconName },
    { name: 'Figma', icon: 'figma' as IconName },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#0b0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-700 font-semibold dark:text-cyan-300 text-sm uppercase tracking-wider">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-slate-50 mt-2">
            Technologies I Work With
          </h2>
          <p className="text-slate-600 mt-4 dark:text-slate-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies across mobile, web, and
            backend development. Here's an overview of my technical expertise.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-xl shadow-slate-200/80 border border-slate-200 hover:border-cyan-300 hover:shadow-cyan-100 dark:bg-[#151a26]/85 dark:shadow-black/20 dark:border-white/10 dark:hover:border-cyan-300/25 dark:hover:shadow-cyan-950/25 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}
                >
                  <VisualIcon name={category.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-700 font-medium dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 text-sm dark:text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-white/[0.07] rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Tools & Software
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white border border-slate-200 rounded-full shadow-lg shadow-slate-200/80 hover:border-cyan-300 hover:shadow-cyan-100 dark:bg-[#151a26] dark:border-white/10 dark:shadow-black/20 dark:hover:border-cyan-300/25 dark:hover:shadow-cyan-950/25 hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-50 to-violet-50 border border-cyan-100 text-cyan-700 dark:from-cyan-400/10 dark:to-violet-400/10 dark:border-white/10 dark:text-cyan-300 flex items-center justify-center">
                  <VisualIcon name={tool.icon} className="w-5 h-5" />
                </span>
                <span className="font-medium text-slate-700 dark:text-slate-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



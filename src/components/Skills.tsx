export default function Skills() {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 85 },
        { name: 'Mobile UI/UX', level: 65 },
      ],
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      color: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'Laravel', level: 75 },
        { name: 'PHP', level: 80 },
        { name: 'REST APIs', level: 60 },
      ],
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'C++', level: 60 },
        { name: 'JavaScript', level: 65 },
      ],
    },
    {
      title: 'Database & Tools',
      icon: '🗄️',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 55 },
        { name: 'Git', level: 85 },
      ],
    },
  ];

  const tools = [
    { name: 'VS Code', icon: '💎' },
    { name: 'Android Studio', icon: '🤖' },
    { name: 'Postman', icon: '📮' },
    { name: 'Git', icon: '🔀' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Figma', icon: '🎨' },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-violet-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Technologies I Work With
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            I've worked with a variety of technologies across mobile, web, and
            backend development. Here's an overview of my technical expertise.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
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
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Tools & Software
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <span className="text-xl">{tool.icon}</span>
                <span className="font-medium text-slate-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

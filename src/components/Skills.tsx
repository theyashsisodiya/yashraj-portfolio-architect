
const Skills = () => {
  const skills = [
    { name: "Python", level: 90 },
    { name: "Jenkins", level: 85 },
    { name: "Docker", level: 88 },
    { name: "Linux", level: 82 },
    { name: "Git", level: 90 },
    { name: "Ansible", level: 75 },
    { name: "AWS", level: 80 },
    { name: "GCP", level: 70 },
    { name: "Agile Methodology", level: 85 },
    { name: "Prompt Engineering", level: 88 }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern DevOps tools, cloud platforms, and automation technologies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-500">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center max-w-4xl">
            {["DevOps", "Cloud Computing", "CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Automation"].map((tag, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

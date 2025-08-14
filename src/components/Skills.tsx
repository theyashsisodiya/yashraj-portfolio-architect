
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  
  const skills = [
    { 
      name: "Python", 
      level: 90,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "from-blue-400 to-yellow-400"
    },
    { 
      name: "N8n", 
      level: 88,
      logo: "https://docs.n8n.io/assets/images/n8n-logo.png",
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Jenkins", 
      level: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      color: "from-red-500 to-orange-500"
    },
    { 
      name: "Docker", 
      level: 88,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "from-blue-500 to-cyan-400"
    },
    { 
      name: "REST API", 
      level: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      color: "from-green-500 to-teal-500"
    },
    { 
      name: "Linux", 
      level: 82,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      color: "from-gray-800 to-gray-600"
    },
    { 
      name: "Git", 
      level: 90,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "AWS", 
      level: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      color: "from-orange-400 to-yellow-500"
    },
    { 
      name: "GCP", 
      level: 70,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      color: "from-blue-500 to-green-400"
    },
    { 
      name: "JSON", 
      level: 92,
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      name: "Webhooks", 
      level: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webhook/webhook-original.svg",
      color: "from-indigo-500 to-purple-500"
    },
    { 
      name: "React", 
      level: 88,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-cyan-400 to-blue-500"
    }
  ];

  return (
    <section 
      id="skills" 
      ref={skillsRef}
      className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${
        skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern DevOps tools, cloud platforms, and automation technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 hover:rotate-2 cursor-pointer overflow-hidden border border-gray-100/50"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Skill logo */}
              <div className="relative z-10 mb-4 transform group-hover:scale-125 transition-transform duration-500">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain filter group-hover:drop-shadow-lg transition-all duration-500"
                  onError={(e) => {
                    // Fallback to a simple colored circle if image fails
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} hidden items-center justify-center text-white font-bold text-lg`}>
                  {skill.name.charAt(0)}
                </div>
              </div>
              
              {/* Skill name */}
              <h3 className="relative z-10 text-lg font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 text-center">
                {skill.name}
              </h3>
              
              {/* Proficiency level */}
              <div className="relative z-10 mt-2 text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                {skill.level}% Proficiency
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500"></div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 transform scale-110`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center max-w-4xl">
            {["DevOps", "Cloud Computing", "CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Automation", "API Integration", "Workflow Automation"].map((tag, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 font-medium cursor-pointer"
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

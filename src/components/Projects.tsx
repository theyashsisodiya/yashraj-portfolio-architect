import { Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  
  const projects = [
    {
      title: "N8n AI News & Job Automation",
      description: "Automated system that sends structured 24hr latest AI news and job updates via email. Uses cron trigger → Perplexity API → Gmail integration for scheduled daily updates.",
      githubUrl: "https://github.com/theyashsisodiya/latest-Al-new-and-job-update",
      technologies: ["N8n", "Perplexity API", "Gmail", "Cron", "Automation", "Webhooks"]
    },
    {
      title: "To-Do List CI/CD",
      description: "A Node.js To-Do List app deployed using Jenkins, Docker, GitHub & AWS. Implemented automated deployment pipeline.",
      githubUrl: "https://github.com/theyashsisodiya/node-todo-cicd",
      technologies: ["Node.js", "Jenkins", "Docker", "AWS", "GitHub"]
    },
    {
      title: "2048 Game CI/CD",
      description: "A CI/CD pipeline project for 2048 Game using Jenkins & Docker. Automated building and deployment to AWS EC2.",
      githubUrl: "https://github.com/theyashsisodiya/2048-Game",
      technologies: ["Jenkins", "Docker", "AWS EC2", "CI/CD"]
    }
  ];

  return (
    <section 
      id="projects" 
      ref={projectsRef}
      className={`py-20 bg-white transition-all duration-1000 ${
        projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my CI/CD and DevOps projects showcasing automation, deployment pipelines, and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 transform group-hover:scale-105"
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github size={18} />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation();

  const experiences = [
    {
      title: "DevOps Intern",
      company: "TechCorp Solutions",
      location: "Remote",
      duration: "Jan 2024 - Present",
      type: "Internship",
      description: "Implementing CI/CD pipelines, automating deployment processes, and managing cloud infrastructure on AWS. Working with Docker containers and Kubernetes orchestration.",
      technologies: ["Jenkins", "Docker", "AWS", "Kubernetes", "Python", "Git"]
    },
    {
      title: "Cloud Engineering Trainee",
      company: "CloudTech Academy",
      location: "Indore, India",
      duration: "Sep 2023 - Dec 2023",
      type: "Training",
      description: "Intensive training program focused on cloud technologies, infrastructure as code, and automation. Built and deployed multiple cloud-native applications.",
      technologies: ["AWS", "GCP", "Terraform", "Ansible", "Linux", "Python"]
    },
    {
      title: "Technical Lead",
      company: "College Tech Club",
      location: "Indore, India",
      duration: "Aug 2022 - May 2023",
      type: "Leadership",
      description: "Led a team of 15+ students in organizing technical workshops and hackathons. Managed infrastructure for club's web applications and automated event registration systems.",
      technologies: ["Leadership", "Project Management", "Web Development", "Automation"]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={experienceRef}
      className={`py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 text-white transition-all duration-1000 ${
        experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Experience & Leadership
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building expertise through hands-on experience and leadership opportunities
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors" contentEditable suppressContentEditableWarning>
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Briefcase className="h-4 w-4 text-blue-400" />
                      <span className="text-lg font-medium text-blue-300" contentEditable suppressContentEditableWarning>
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <span contentEditable suppressContentEditableWarning>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span contentEditable suppressContentEditableWarning>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 leading-relaxed mb-4" contentEditable suppressContentEditableWarning>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary" 
                      className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-8" contentEditable suppressContentEditableWarning>
            Always eager to take on new challenges and contribute to innovative projects. 
            Currently seeking opportunities to apply my skills in real-world scenarios.
          </p>
          <div className="inline-flex flex-wrap gap-4 justify-center">
            {["DevOps Culture", "Agile Methodology", "Team Leadership", "Problem Solving", "Continuous Learning"].map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 text-blue-300 rounded-full hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 transform hover:scale-105 font-medium cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Lightbulb } from 'lucide-react';

const AboutMe = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className={`py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 transition-all duration-1000 ${
        aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about building scalable infrastructure and automating workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg" contentEditable suppressContentEditableWarning>
                I'm actively seeking internships and entry-level positions in DevOps, Cloud Engineering, 
                Site Reliability Engineering, and AI Automation Engineering. With a strong foundation in 
                modern infrastructure tools and cloud platforms, I'm passionate about building reliable, 
                scalable systems that enable teams to ship software faster and more efficiently.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg" contentEditable suppressContentEditableWarning>
                My journey in technology started with a curiosity about how large-scale systems work, 
                and has evolved into expertise in automation, containerization, and cloud-native technologies. 
                I believe in the power of DevOps culture to bridge the gap between development and operations teams.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">DevOps Enthusiast</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">Cloud Native</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">Automation Expert</span>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <p className="text-gray-600" contentEditable suppressContentEditableWarning>
                      B.Tech in Computer Science Engineering<br />
                      Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore<br />
                      2021–2025
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Career Goals</h3>
                    <p className="text-gray-600" contentEditable suppressContentEditableWarning>
                      Seeking opportunities in DevOps, SRE, Cloud Engineering, and AI Automation 
                      to build resilient, scalable infrastructure solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Lightbulb className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Philosophy</h3>
                    <p className="text-gray-600" contentEditable suppressContentEditableWarning>
                      "Let's build something amazing together!" - Believing in collaboration, 
                      continuous learning, and innovation in technology.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Lightbulb, Brain, Cloud, Zap } from 'lucide-react';
import { AnimatedTechGuy } from '@/components/AnimatedTechGuy';
import { ThreeDComputerPanel } from '@/components/3DComputerPanel';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className={`py-20 bg-gradient-to-br from-background via-card to-background neural-bg relative transition-all duration-1000 ${
        aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 animate-cyber-glitch">
            About Me
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Passionate AI Automation Engineer specializing in intelligent workflows and cloud infrastructure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={aboutVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/90 leading-relaxed text-lg" contentEditable suppressContentEditableWarning>
                Graduated AI Automation Engineer with expertise in designing AI-powered workflows using N8n, 
                integrating LLM APIs (Gemini, OpenAI) with cloud platforms (Google Cloud, AWS). I have a strong 
                foundation in DevOps and automation logic, with hands-on experience from internships at DesiredSoft 
                and leadership roles in tech clubs.
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg" contentEditable suppressContentEditableWarning>
                My journey combines cutting-edge AI automation with robust cloud infrastructure. I'm passionate 
                about building intelligent systems that enhance productivity through automation while maintaining 
                scalability and reliability. I believe in the power of AI to transform how we approach DevOps and 
                process automation.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full font-medium border border-primary/30 animate-pulse-glow">AI Automation</span>
              <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full font-medium border border-secondary/30 animate-float">Cloud Native</span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full font-medium border border-accent/30 animate-pulse-glow">DevOps Expert</span>
            </div>

            {/* 3D Computer Panel - Temporarily disabled for debugging */}
            {/*
            <div className="mt-8">
              <ThreeDComputerPanel 
                title="Current Status"
                value="Graduated 2025"
                subtitle="B.Tech CSE, Ready for Full-time Roles"
              />
            </div>
            */}
          </motion.div>

          {/* Animated Tech Guy - Temporarily disabled for debugging */}
          <motion.div 
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={aboutVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/*
            <div className="w-full max-w-md">
              <AnimatedTechGuy />
            </div>
            */}
            <div className="w-full max-w-md h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-primary/30">
              <p className="text-primary text-lg font-semibold">3D Animation Loading...</p>
            </div>
            <p className="text-center text-foreground/70 italic">
              "Building the future with AI automation and cloud technologies"
            </p>
          </motion.div>

        </div>

        {/* Additional Info Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 animate-float">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors animate-pulse-glow">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Education</h3>
                  <p className="text-foreground/80" contentEditable suppressContentEditableWarning>
                    <strong>B.Tech in Computer Science Engineering</strong><br />
                    Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore<br />
                    2021–June 2025 (Graduated)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 animate-float">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors animate-pulse-glow">
                  <Brain className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">AI Automation Focus</h3>
                  <p className="text-foreground/80" contentEditable suppressContentEditableWarning>
                    Specializing in N8n workflows, LLM API integration, and intelligent 
                    process automation for enhanced productivity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 animate-float">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors animate-pulse-glow">
                  <Cloud className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Cloud & DevOps</h3>
                  <p className="text-foreground/80" contentEditable suppressContentEditableWarning>
                    Expert in AWS, GCP, Docker, Jenkins, and CI/CD pipelines 
                    for scalable cloud infrastructure solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
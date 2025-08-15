
import { Github, Mail, Phone, Download, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Enhanced3DBackground } from '@/components/Enhanced3DBackground';
import { motion } from 'framer-motion';

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <section 
      id="home" 
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center bg-background neural-bg relative overflow-hidden transition-all duration-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Enhanced 3D Animated Background */}
      <Enhanced3DBackground />
      
      {/* Neural network overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image with 3D Effect */}
          <motion.div 
            className="flex justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative group">
              <img
                src="https://avatars.githubusercontent.com/u/97979728?v=4"
                alt="Yashraj Singh Sisodiya"
                className="w-60 h-60 rounded-full border-4 border-primary shadow-2xl hover:scale-110 hover:rotate-3 transition-all duration-500 relative z-10 animate-pulse-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 animate-hologram"></div>
              <div className="absolute inset-0 rounded-full border-4 border-accent opacity-50 animate-spin-3d"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl animate-neural-flow"></div>
            </div>
          </motion.div>

          {/* Name and Title with 3D Effects */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight animate-cyber-glitch" contentEditable suppressContentEditableWarning>
              Yashraj Singh Sisodiya
            </h1>
            <p className="text-xl md:text-3xl text-primary font-medium animate-float" contentEditable suppressContentEditableWarning>
              Graduated AI Automation Engineer | DevOps & Cloud Enthusiast | B.Tech CSE, SVVV Indore
            </p>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed" contentEditable suppressContentEditableWarning>
              "Passionate about designing AI-powered workflows using N8n, integrating LLM APIs (Gemini, OpenAI) with cloud platforms (Google Cloud, AWS), and my strong foundation in DevOps and automation logic. Eager to contribute to AI agent development and process automation."
            </p>
          </motion.div>

          {/* Call to Action Buttons with 3D Effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              variant="outline" 
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 animate-pulse-glow"
            >
              <a href="#projects">View My Projects</a>
            </Button>
            
            <Button 
              asChild
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/80 hover:via-secondary/80 hover:to-accent/80 text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg shadow-primary/30 animate-neural-flow"
            >
              <a 
                href="https://drive.google.com/file/d/1xjt4T0hLR_b3ceeEWhqs5Ws9eCEG4McB/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-secondary/25 transform hover:scale-105 animate-float"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          {/* Quick Contact Links with 3D Hover Effects */}
          <motion.div 
            className="flex justify-center space-x-8 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <a 
              href="https://github.com/theyashsisodiya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-float p-3 rounded-full hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/theyashsisodiya"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-float p-3 rounded-full hover:bg-secondary/10 hover:shadow-lg hover:shadow-secondary/20"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:theyashsisodiya@gmail.com"
              className="text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-float p-3 rounded-full hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20"
            >
              <Mail size={28} />
            </a>
            <a 
              href="tel:+917389022061"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-float p-3 rounded-full hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
            >
              <Phone size={28} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

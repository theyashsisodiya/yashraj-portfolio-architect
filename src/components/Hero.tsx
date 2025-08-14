
import { Github, Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ThreeBackground } from '@/components/ThreeBackground';

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <section 
      id="home" 
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden transition-all duration-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* 3D Animated Background */}
      <ThreeBackground />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-indigo-900/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://avatars.githubusercontent.com/u/97979728?v=4"
                alt="Yashraj Singh Sisodiya"
                className="w-60 h-60 rounded-full border-4 border-white shadow-2xl hover:scale-110 hover:rotate-3 transition-all duration-500 relative z-10"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-400 to-purple-400 opacity-50 animate-ping"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight" contentEditable suppressContentEditableWarning>
              Yashraj Singh Sisodiya
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 font-medium" contentEditable suppressContentEditableWarning>
              DevOps, Cloud, SRE & AI Automation Enthusiast
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto" contentEditable suppressContentEditableWarning>
              "I'm actively seeking internships and entry-level positions in DevOps, Cloud Engineering, Site Reliability Engineering, and AI Automation Engineering. Let's build something amazing together!"
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              asChild
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <a href="#projects">View My Projects</a>
            </Button>
            
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
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
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Quick Contact Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/theyashsisodiya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:theyashsisodiya@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+917389022061"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Github, Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <section 
      id="home" 
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden transition-all duration-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
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
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Yashraj Singh Sisodiya
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              DevOps & Cloud Enthusiast | Building CI/CD Pipelines
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Final Year B.Tech CSE Student at Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              asChild
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              <a href="#projects">View My Projects</a>
            </Button>
            
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
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
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
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
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:theyashsisodiya@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+917389022061"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
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

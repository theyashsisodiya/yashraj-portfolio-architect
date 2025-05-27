
import { Github, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://avatars.githubusercontent.com/u/114719020?v=4"
                alt="Yashraj Singh Sisodiya"
                className="w-40 h-40 rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <a href="#projects">View My Projects</a>
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

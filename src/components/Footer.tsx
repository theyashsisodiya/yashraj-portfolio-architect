import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();

  return (
    <footer 
      ref={footerRef}
      className={`bg-gray-900 text-white py-8 transition-all duration-1000 ${
        footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Yashraj Singh Sisodiya
            </h3>
            <p className="text-gray-400 mt-2">
              DevOps & Cloud Enthusiast | Building CI/CD Pipelines
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Yashraj Singh Sisodiya. Built with React & Tailwind CSS.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Passionate about automation, cloud technologies, and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

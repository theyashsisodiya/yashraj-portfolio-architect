
import { Mail, Phone, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "theyashsisodiya@gmail.com",
      href: "mailto:theyashsisodiya@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-7389022061",
      href: "tel:+917389022061"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "theyashsisodiya",
      href: "https://github.com/theyashsisodiya"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to discuss DevOps, Cloud technologies, or potential collaborations? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4 text-white">
                  <div className="p-3 bg-white/20 rounded-full">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {method.label}
                </h3>
                <p className="text-blue-100 mb-4 break-all">
                  {method.value}
                </p>
                <Button 
                  asChild
                  className="bg-white/20 border border-white/30 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <a 
                    href={method.href}
                    target={method.label === "GitHub" ? "_blank" : undefined}
                    rel={method.label === "GitHub" ? "noopener noreferrer" : undefined}
                  >
                    Contact via {method.label}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Open to Opportunities
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              I'm actively seeking internships and entry-level positions in DevOps, Cloud Engineering, and Site Reliability Engineering. Let's build something amazing together!
            </p>
            <Button 
              asChild
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <a href="mailto:theyashsisodiya@gmail.com?subject=Opportunity Discussion">
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

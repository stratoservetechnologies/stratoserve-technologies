
import ServiceCard from "@/components/ServiceCard";
import { Laptop, Smartphone, Palette, BrainCircuit, Cloud, Briefcase } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Web Development",
      description: "Custom web applications built with the latest technologies to meet your business needs.",
      link: "/services#web-development"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      link: "/services#mobile-development"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and drive engagement.",
      link: "/services#ui-ux-design"
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "AI Integration",
      description: "Leverage the power of artificial intelligence to automate processes and gain insights.",
      link: "/services#ai-integration"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Services",
      description: "Scalable cloud solutions to optimize infrastructure and reduce operational costs.",
      link: "/services#cloud-services"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to help you make informed decisions and stay competitive.",
      link: "/services#consulting"
    }
  ];

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            We offer a comprehensive range of technology services to help your business succeed in the digital world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

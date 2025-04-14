
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      title: "HealthConnect Platform",
      description:
        "A comprehensive telehealth platform connecting patients with healthcare providers through secure video consultations.",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      clientName: "MedLife Solutions",
      clientReview:
        "Stratoserve delivered an exceptional telehealth platform that has revolutionized how we connect with patients. The system is intuitive, reliable, and secure.",
      link: "/projects/health-connect",
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      title: "EcomGenius",
      description:
        "A feature-rich e-commerce platform with AI-powered product recommendations and advanced analytics dashboard.",
      technologies: ["Vue.js", "Python", "Django", "TensorFlow"],
      clientName: "RetailTech Innovations",
      clientReview:
        "The AI-driven recommendation engine developed by Stratoserve has significantly increased our conversion rates. Their attention to detail and technical expertise is impressive.",
      link: "/projects/ecom-genius",
    },
    {
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=800",
      title: "FinTrack Mobile App",
      description:
        "A secure mobile application for personal finance tracking, budgeting, and investment portfolio management.",
      technologies: ["React Native", "Firebase", "Redux", "GraphQL"],
      clientName: "WealthWise Financial",
      clientReview:
        "Stratoserve Technologies delivered a seamless mobile experience that our customers love. The app is intuitive, feature-rich, and incredibly stable.",
      link: "/projects/fintrack",
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="projects" >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Success Stories</h2>
          <p className="text-xl text-gray-600">
            Explore our portfolio of successful projects and discover how we've helped our clients achieve their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 " >
          {projects.map((project, index) => (
            <ProjectCard key={index} 
            imageUrl={project.image} 
            title={project.title} 
            description={project.description} 
            link={project.link}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-brand-900 hover:bg-brand-800 text-white">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

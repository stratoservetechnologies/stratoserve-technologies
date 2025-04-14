import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Shlok Motors & Finance',
      description:
        'Web Application that showcases services, allows appointments, and inquiries. Custom CRM created to send reminders for expiring insurance and send festival greetings. Uses automated backend tools to manage client relationships.',
      imageUrl: '/placeholder.svg', 
      link: '#',
    },
    {
      title: 'Shrey Kothari Portfolio',
      description:
        'Built for an Investment Advisor at VCU Financials. Showcases certifications, professional background, and creates a strong first impression for clients. Designed for clarity, professionalism, and lead conversion.',
      imageUrl: '/placeholder.svg',
      link: '#',
    },
    {
      title: 'Project 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
      imageUrl: '/placeholder.svg',
      link: '#',
    },
        {
      title: 'Project 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
      imageUrl: '/placeholder.svg',
      link: '#',
    },
    
  ];

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-brand-900 mb-8">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
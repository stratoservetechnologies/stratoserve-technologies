import React from 'react';
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import CTASection from '@/components/CTASection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {

  const services = [
    {id: 'web-development', name: 'Web Development'},
    {id: 'app-development', name: 'App Development'},
    {id: 'ui-ux-design', name: 'UI/UX Design'},
    {id: 'devops-automation', name: 'DevOps & Automation'}
  ]
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection services={services} />
          {services.map((service, index) => (
          <Link key={index} to={`/services#${service.id}`}></Link>
        ))}
        <ProjectsSection />
        <CTASection />
        <StatsSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
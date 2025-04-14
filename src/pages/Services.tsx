import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
const Services = () => {
  const servicesData = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with the latest technologies to meet your business needs.',
      techStack: [
        { name: 'React', logo: '/react.svg' ,id:'1'},
        { name: 'Next.js', logo: '/nextjs.svg' , id:'2'},
        { name: 'Tailwind CSS', logo: '/tailwindcss.svg', id:'3' },
        { name: 'Node.js', logo: '/nodejs.svg' , id:'4'},
        { name: 'Express', logo: '/express.svg', id:'5' },
        { name: 'MongoDB', logo: '/mongodb.svg', id:'6' },
                { name: 'PostgreSQL', logo: '/postgresql.svg' },
        ],
            id: 'web-development',
            benefits: [],
    },
    {
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      techStack: [
        { name: 'React Native', logo: '/react.svg', id:'1' },
        { name: 'Flutter', logo: '/flutter.svg', id:'2' },
        { name: 'Swift', logo: '/swift.svg', id:'3' },
        { name: 'Kotlin', logo: '/kotlin.svg', id:'4' },
      ],
            id: 'mobile-app-development',
            benefits: [],
    },
    {
        title: 'UI/UX Design',
        description: 'User-centered design solutions that enhance user experience and drive engagement.',
        techStack: [
          { name: 'Figma', logo: '/figma.svg',id:'1' },
          { name: 'Adobe XD', logo: '/adobexd.svg', id:'2' },
          { name: 'Sketch', logo: '/sketch.svg' , id:'3'},
        ],        
            id: 'ui-ux-design',
            benefits: [],
    },
    {
        title: 'AI Integration',
        description: 'Leverage the power of artificial intelligence to automate processes and gain insights.',
        techStack: [
            { name: 'TensorFlow', logo: '/tensorflow.svg', id:'1' },
            { name: 'PyTorch', logo: '/pytorch.svg', id:'2' },
            { name: 'OpenAI', logo: '/openai.svg', id:'3' },
            { name: 'Azure AI', logo: '/azureai.svg' , id:'4'},
        ],
            id: 'ai-integration',
            benefits: [],
        },
        {
            title: 'Cloud Services',
            description: 'Scalable cloud solutions to optimize infrastructure and reduce operational costs.',
            techStack: [{ name: 'AWS', logo: '/aws.svg', id:'1' }, { name: 'Azure', logo: '/azure.svg' , id:'2'}, { name: 'Google Cloud', logo: '/googlecloud.svg', id:'3' }, { name: 'DigitalOcean', logo: '/digitalocean.svg', id:'4' }],
            id: 'cloud-services',
            benefits: [],
        },
        {
            title: 'IT Consulting',
            description: 'Provide IT support and guidance.',
            techStack: [{ name: 'Various', logo: '' }],
            id: 'it-consulting',
            benefits: [],
        }
    ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} techStack={service.techStack} benefits={service.benefits} id={service.id} />

          

        ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
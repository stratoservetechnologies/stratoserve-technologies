import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const Services = () => {
  const servicesData = [
    {
      title: 'Web Development',
      description:
        'We build responsive, high-performance websites tailored to your business needs. Our web development services are designed to enhance your online presence and drive business growth.',
      techStack: [
        { name: 'React', logo: '/react.svg' },
        { name: 'Next.js', logo: '/nextjs.svg' },
        { name: 'Tailwind CSS', logo: '/tailwindcss.svg' },
        { name: 'Node.js', logo: '/nodejs.svg' },
        { name: 'Express', logo: '/express.svg' },
        { name: 'MongoDB', logo: '/mongodb.svg' },
        { name: 'PostgreSQL', logo: '/postgresql.svg' },
      ],
      id: 'web-development',
      benefits: [
        'Fast and reliable websites',
        'Enhanced user experience',
        'Mobile-friendly design',
        'SEO optimization',
        'Scalable architecture',
      ],
    },
    {
      title: 'App Development',
      description:
        'We create innovative and intuitive mobile applications for iOS and Android platforms. Our app development services help you reach your audience effectively.',
      techStack: [
        { name: 'React Native', logo: '/react.svg' },
        { name: 'Flutter', logo: '/flutter.svg' },
        { name: 'Swift', logo: '/swift.svg' },
        { name: 'Kotlin', logo: '/kotlin.svg' },
      ],
      id: 'app-development',
      benefits: [
        'Cross-platform compatibility',
        'Engaging user interfaces',
        'Native performance',
        'Secure and reliable',
        'Customized solutions',
      ],
    },
    {
        title: 'UI/UX Design',
        description:
          'Crafting intuitive and visually appealing user interfaces that enhance user satisfaction. Our UI/UX Design services ensure your digital products are both beautiful and highly functional.',
        techStack: [
          { name: 'Figma', logo: '/figma.svg' },
          { name: 'Adobe XD', logo: '/adobexd.svg' },
          { name: 'Sketch', logo: '/sketch.svg' },
        ],
        id: 'ui-ux-design',
        benefits: [
          'Enhanced user satisfaction',
          'Improved user engagement',
          'Increased brand credibility',
          'Higher conversion rates',
          'Consistent and cohesive design',
        ],
    },
    {
        title: 'DevOps',
        description:
          'Streamlining your software development and deployment processes. Our DevOps services help you achieve faster, more reliable software releases.',
        techStack: [
          { name: 'AWS', logo: '/aws.svg' },
          { name: 'Docker', logo: '/docker.svg' },
          { name: 'Kubernetes', logo: '/kubernetes.svg' },
          { name: 'Jenkins', logo: '/jenkins.svg' },
        id: 'devops-automation',
        ],
        benefits: [
          'Faster time-to-market',
          'Improved software quality',
          'Increased operational efficiency',
          'Reduced deployment risks',
          'Scalable infrastructure',
        ],
      },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div id={service.id}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.techStack.map((tech, techIndex) => (
                  <div key={techIndex} className="flex flex-col items-center">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="h-8 w-8"
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Benefits
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex}>{benefit}</li>
                ))}
              </ul>
            </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
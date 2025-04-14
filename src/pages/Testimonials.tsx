import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Testimonial {
  clientName: string;
  photoUrl: string;
  designation: string;
  review: string;
  projectName: string;
}

const testimonialsData: Testimonial[] = [
  {
    clientName: 'John Doe',
    photoUrl: '/placeholder.svg', // Replace with actual image URL
    designation: 'CEO, Company A',
    review: 'Stratoserve Technologies delivered an exceptional project. Their team was professional, and the results exceeded our expectations.',
    projectName: 'Project X',
  },
  {
    clientName: 'Jane Smith',
    photoUrl: '/placeholder.svg', // Replace with actual image URL
    designation: 'Marketing Manager, Company B',
    review: 'We were impressed by the creativity and technical expertise of Stratoserve. They truly understood our vision.',
    projectName: 'Project Y',
  },
  {
    clientName: 'Alice Johnson',
    photoUrl: '/placeholder.svg', // Replace with actual image URL
    designation: 'CTO, Company C',
    review: 'Working with Stratoserve Technologies was a great experience. They delivered on time and within budget.',
    projectName: 'Project Z',
  },
  {
    clientName: 'Bob Williams',
    photoUrl: '/placeholder.svg', // Replace with actual image URL
    designation: 'Founder, Company D',
    review: 'I highly recommend Stratoserve for their quality of work and dedication to client satisfaction.',
    projectName: 'Project W',
  },
  {
    clientName: 'Eva Brown',
    photoUrl: '/placeholder.svg', // Replace with actual image URL
    designation: 'Head of Product, Company E',
    review: 'Stratoserve Technologies team is outstanding! They were great communicators, and their work is top-notch.',
    projectName: 'Project V',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Client Testimonials</h1>
        <div className="overflow-x-auto">
          <div className="flex space-x-8">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md min-w-[300px] flex-shrink-0"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.photoUrl}
                    alt={testimonial.clientName}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.clientName}</h3>
                    <p className="text-sm text-gray-600">{testimonial.designation}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.review}</p>
                <p className="text-sm text-gray-500">Project: {testimonial.projectName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
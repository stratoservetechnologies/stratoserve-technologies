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
      <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Client Testimonials
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4"> 
                    <img
                      src={testimonial.photoUrl}
                      alt={testimonial.clientName}
                      className="w-16 h-16 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800"> 
                        {testimonial.clientName}
                      </h3>
                      <p className="text-sm text-gray-600"> 
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic"> 
                    "{testimonial.review}"
                  </p>
                  <p className="text-sm text-gray-500">
                    Project: {testimonial.projectName}
                  </p>
                </div>
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
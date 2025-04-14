import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-brand-900 mb-6">
              About Stratoserve Technologies
            </h1>
            <p className="text-lg text-gray-700 text-center mb-10">
              At Stratoserve Technologies, we're more than just a tech company; we're a collective of innovators, creators, and problem-solvers. We pride ourselves on being a modern, client-centric, and tech-forward company, dedicated to turning your visions into reality.
            </p>
            <p className="text-lg text-gray-700 text-center">
              Our vibe is all about the magic of coding, the efficiency of agile workflows, the precision of optimized delivery pipelines, and the power of custom solutions. We thrive in an environment where innovation meets implementation, and we're passionate about building software that not only meets but exceeds your expectations.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-brand-900 mb-10">
              Why Stratoserve Technologies?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-brand-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-700">
                  We understand the importance of time in the fast-paced tech world. Our agile approach ensures that we deliver your projects swiftly without compromising on quality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-brand-900 mb-3">Clean UI/UX</h3>
                <p className="text-gray-700">
                  We believe that great design is intuitive and beautiful. Our UI/UX experts craft interfaces that are both visually appealing and user-friendly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-brand-900 mb-3">Client-First Mindset</h3>
                <p className="text-gray-700">
                  Your success is our priority. We listen, adapt, and collaborate closely with you to ensure that our solutions align with your goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-brand-900 mb-3">Scalable Architecture</h3>
                <p className="text-gray-700">
                  We build with the future in mind. Our scalable architectures are designed to grow with your business, ensuring your tech evolves seamlessly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-brand-900 mb-3">Future-Ready Solutions</h3>
                <p className="text-gray-700">
                  We stay ahead of the curve, utilizing the latest technologies and trends to ensure your solutions are innovative and future-proof.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
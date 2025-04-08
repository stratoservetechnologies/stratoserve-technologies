
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in technology.",
    },
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality solutions.",
    },
    {
      title: "Client Focus",
      description: "Your success is our success. We work as an extension of your team.",
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200"
              alt="Team collaboration"
              className="rounded-xl shadow-xl object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Stratoserve Technologies</h2>
              <p className="text-xl text-gray-600 mb-6">
                We are a dynamic team of technology experts dedicated to helping businesses thrive in the digital era.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Stratoserve Technologies has grown from a small startup to a leading technology service provider. We specialize in developing custom software solutions that address complex business challenges and drive growth.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to empower businesses with innovative technology solutions that enhance efficiency, improve customer experiences, and accelerate growth.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-brand-100 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-brand-900" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button className="mt-6 bg-brand-900 hover:bg-brand-800 text-white">
              <Link to="/about" className="flex items-center">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

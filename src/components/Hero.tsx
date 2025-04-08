
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white z-0" />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div className="animate-fade-in space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-brand-900">Innovative</span> Technology Solutions for Your Business
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                We deliver cutting-edge technology services to help your business grow, adapt, and thrive in the digital world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-900 hover:bg-brand-800 text-white px-6">
                <Link to="/contact" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-brand-900 text-brand-900 hover:bg-brand-50">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                100% Client Satisfaction
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                Cutting-edge Technologies
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                Expert Team
              </div>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
              alt="Team working on tech solutions"
              className="rounded-xl shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

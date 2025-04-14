
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
    return (
        <section
            className="py-20 bg-gradient-to-br from-brand-900 to-brand-800 text-white animate-fade-in"
        >
            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl mb-8 text-gray-100 animate-fade-in">
                        Let's discuss how our technology solutions can help you achieve your business goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-brand-900 hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg">
                            <Link to="/contact" className="flex items-center">
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>                            
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-900 transition-colors duration-300 hover:shadow-lg">
                            <Link to="/services">Explore Services</Link>
                        </Button>
                    </div>
                </div>          
        </div>
      </div>
    </section>
  );
};

export default CTASection;

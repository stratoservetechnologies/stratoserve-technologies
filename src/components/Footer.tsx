
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-brand-900">Stratoserve</span>
              <span className="text-xl font-medium text-gray-600">Technologies</span>
            </div>
            <p className="text-gray-600 mb-4">
              Delivering innovative technology solutions to help businesses grow and transform in the digital era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-900 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-900 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-900 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-900 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-900 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-brand-900 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-brand-900 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 hover:text-brand-900 transition-colors">Team</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-900 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-brand-900 transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#web-development" className="text-gray-600 hover:text-brand-900 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services#mobile-development" className="text-gray-600 hover:text-brand-900 transition-colors">Mobile App Development</Link>
              </li>
              <li>
                <Link to="/services#ui-ux-design" className="text-gray-600 hover:text-brand-900 transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services#ai-integration" className="text-gray-600 hover:text-brand-900 transition-colors">AI Integration</Link>
              </li>
              <li>
                <Link to="/services#cloud-services" className="text-gray-600 hover:text-brand-900 transition-colors">Cloud Services</Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-gray-600 hover:text-brand-900 transition-colors">IT Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-brand-900 flex-shrink-0 mt-0.5" />
                <a href="mailto:statoservetechnologies@gmail.com" className="text-gray-600 hover:text-brand-900 transition-colors">
                  stratoservetechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-brand-900 flex-shrink-0 mt-0.5" />
                <a href="tel:+919978746900" className="text-gray-600 hover:text-brand-900 transition-colors">
                  +91 9978746900
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand-900 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Tech Park, Ahmedabad, Gujarat, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Stratoserve Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-600 hover:text-brand-900 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-brand-900 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

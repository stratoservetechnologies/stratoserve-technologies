
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 pt-16 pb-8 border-t border-gray-200 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-300">
          {/* Company Info */}
          <div className="transition-all duration-300">
            <div className="flex items-center mb-4 transition-all duration-300">
              <span className="text-2xl font-bold text-brand-900 transition-all duration-300">Stratoserve</span>
              <span className="text-xl font-medium text-gray-600 transition-all duration-300">Technologies</span>
            </div>
            <p className="text-gray-600 mb-4 transition-all duration-300">
              Delivering innovative technology solutions to help businesses grow and transform in the digital era.
            </p>
            <div className="flex space-x-4 transition-all duration-300">
              <a href="#" className="text-gray-500 hover:text-brand-900 transition-colors transition-all duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-900 transition-colors transition-all duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-900 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/stratoserve-technologies-0b632235b" className="text-gray-500 hover:text-brand-900 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div >

          {/* Quick Links */}
          <div className="transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 transition-all duration-300">Quick Links</h3>
            <ul className="space-y-2 transition-all duration-300">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">Projects</a>
              </li>
              <li>
                <a href="#team" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">Team</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">Testimonials</a>
              </li>
            </ul>
          </div >

          {/* Services */}
          <div className="transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 transition-all duration-300">Our Services</h3>
            <ul className="space-y-2 transition-all duration-300">
              <li>
                <a href="#services" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">Web Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">Mobile App Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">UI/UX Design</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">AI Integration</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">Cloud Services</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">IT Consulting</a>
              </li>
            </ul>
          </div >

          {/* Contact Information */}
          <div className="transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 transition-all duration-300">Contact Us</h3>
            <ul className="space-y-3 transition-all duration-300">
              <li className="flex items-start transition-all duration-300">
                <Mail className="mr-2 h-5 w-5 text-brand-900 flex-shrink-0 mt-0.5 transition-all duration-300" />
                <a href="mailto:statoservetechnologies@gmail.com" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">
                  statoservetechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-start transition-all duration-300">
                <Phone className="mr-2 h-5 w-5 text-brand-900 flex-shrink-0 mt-0.5 transition-all duration-300" />
                <a href="tel:+919978746900" className="text-gray-600 hover:text-brand-900 transition-colors transition-all duration-300">
                  +91 9978746900
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand-900 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Tech Park, Ahmedabad, Gujarat, India
                </span>
              </li>
            </ul >
          </div >
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center transition-all duration-300">
          <p className="text-gray-600 text-sm mb-4 md:mb-0 transition-all duration-300">
            &copy; {currentYear} Stratoserve Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 transition-all duration-300">
            <Link to="/privacy-policy" className="text-gray-600 hover:text-brand-900 text-sm transition-colors transition-all duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-brand-900 text-sm transition-colors transition-all duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

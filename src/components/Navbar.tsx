
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Team", id: "team" },
    { name: "About", id: "about" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-brand-900">Stratoserve</span>
            <span className="text-xl font-medium text-gray-600">Technologies</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
              key={index}
              href={`#${item.id}`}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-900 hover:bg-gray-100 transition-colors"
            >
              {item.name}
            </a>
            ))}
            <Button className="ml-4 bg-brand-900 hover:bg-brand-800 text-white">Get a Quote</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden",
            isOpen ? "block animate-fade-in" : "hidden animate-fade-out"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-900 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="w-full mt-3 bg-brand-900 hover:bg-brand-800 text-white"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

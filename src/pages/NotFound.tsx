
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gray-50 py-20 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-8xl font-bold text-brand-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          <Button size="lg" className="bg-brand-900 hover:bg-brand-800 text-white">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

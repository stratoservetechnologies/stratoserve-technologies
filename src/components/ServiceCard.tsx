
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <CardHeader className="pb-4">
        <div className="h-12 w-12 rounded-lg bg-brand-50 flex items-center justify-center text-brand-900 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 hover:bg-transparent text-brand-900 hover:text-brand-800 rounded-none">
          <Link to={link} className="flex items-center">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;

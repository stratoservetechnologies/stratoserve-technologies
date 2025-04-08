
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  clientName: string;
  clientReview: string;
  link: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  clientName,
  clientReview,
  link,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-gray-600">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-4 mt-4">
          <blockquote className="italic text-gray-600 text-sm">
            "{clientReview}"
          </blockquote>
          <p className="text-sm font-medium text-gray-900 mt-2">— {clientName}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 hover:bg-transparent text-brand-900 hover:text-brand-800 rounded-none">
          <Link to={link} className="flex items-center">
            View Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;


import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
  image: string;
  name: string;
  title: string;
  specializations: string[];
  description: string;
}

const TeamMemberCard = ({
  image,
  name,
  title,
  specializations,
  description,
}: TeamMemberCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <CardDescription className="text-brand-900 font-medium">{title}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {specializations.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;

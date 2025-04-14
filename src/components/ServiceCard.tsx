
import { Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  techStack: { name: string; logo: string }[];
  benefits: string[];
}

const ServiceCard = ({
  title,
  description,
  techStack,
  benefits,
}: ServiceCardProps) => {
  return (
    <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden p-4">
      <CardHeader className="p-6 pb-4">
        <CardTitle className="text-2xl font-semibold text-gray-800 mb-2">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {techStack.length > 0 && (
          <div className="mb-4">
            <h4 className="text-lg font-medium text-gray-800 mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <div
                  key={index} className="flex items-center justify-center p-2 rounded-lg"
                >
                  <img src={tech.logo} alt={tech.name} className="h-8 w-8" />
                </div>
              ))}
            </div>
          </div>
        )}
           <div className="mb-4">
           <CardDescription className="text-gray-700">
            {description}
          </CardDescription>
          </div>
        )}
        {benefits.length > 0 && (
          <ul className="list-disc list-inside text-gray-700">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

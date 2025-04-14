
import { Card, CardContent } from "@radix-ui/react-card";
import Image from 'next/image';

interface TestimonialCardProps {
  clientName: string;
  photo: string;
  designation: string;
  review: string;
  projectName: string;
}

const TestimonialCard = ({
  clientName,
  photo,
  designation,
  review,
  projectName,
}: TestimonialCardProps) => {
  return (
    <Card className="bg-gradient-to-r from-brand-50 to-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={photo}
            alt={clientName}
            fill
            className="object-cover"
          /></div>
          <div>
            <p className="font-semibold text-gray-900">{clientName}</p>
            <p className="text-sm text-gray-600">{designation}</p>
          </div>
        </div>
        <p className="text-gray-700 italic mb-4">"{review}"</p>
        <p className="text-sm text-gray-500">
          Project: <span className="font-medium">{projectName}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

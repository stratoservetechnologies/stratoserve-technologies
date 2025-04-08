
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  company,
  image,
}: TestimonialCardProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="mb-4">
          <svg className="h-8 w-8 text-brand-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-gray-700 italic mb-4">{quote}</p>
      </CardContent>
      <CardFooter className="border-t border-gray-100 pt-4 flex items-center">
        {image && (
          <div className="mr-3">
            <img src={image} alt={name} className="h-10 w-10 rounded-full object-cover" />
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">
            {title}, {company}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;

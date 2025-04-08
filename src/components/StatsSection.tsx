
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Briefcase, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Briefcase className="h-10 w-10 text-brand-900" />,
      value: "200+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="h-10 w-10 text-brand-900" />,
      value: "50+",
      label: "Happy Clients",
    },
    {
      icon: <Code className="h-10 w-10 text-brand-900" />,
      value: "8+",
      label: "Years Experience",
    },
    {
      icon: <Award className="h-10 w-10 text-brand-900" />,
      value: "15+",
      label: "Industry Awards",
    },
  ];

  return (
    <section className="py-16 bg-brand-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-transparent border-none shadow-none">
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-100">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

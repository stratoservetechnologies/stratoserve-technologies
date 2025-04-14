
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    <section className="py-16 bg-gradient-to-r from-brand-900 to-brand-800 text-white">
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/20 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105"
            >
              <CardHeader className="p-4 text-center flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-900 flex items-center justify-center mb-4 transition-transform duration-300 hover:-translate-y-1">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 hover:text-brand-500">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-100">{stat.label}</div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

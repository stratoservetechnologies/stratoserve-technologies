
import TeamMemberCard from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const teamMembers = [
    {
      image: "/public/shlokthakkar.jpg",
      name: "Shlok Thakkar",
      title: "CEO & Founder",
      specializations: ["Strategy", "Leadership", "Innovation"],
      description: "With over 15 years of experience in tech, Rajesh leads our company with vision and expertise.",
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      name: "Pratap Kansara",
      title: "Lead Software Architect",
      specializations: ["Java", "AWS", "Microservices"],
      description: "Priya designs scalable, robust architectures for our most complex enterprise solutions.",
    },
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      name: "Anuj Shah",
      title: "Lead Software Developer & Co Founder",
      specializations: ["React", "TypeScript", "UI/UX"],
      description: "Amit creates beautiful, intuitive user interfaces with a focus on exceptional user experience.",
    },
    {
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=800",
      name: "Aman Verma",
      title: "Mobile App Developer",
      specializations: ["React Native", "Flutter", "iOS/Android"],
      description: "Neha specializes in building cross-platform mobile applications that deliver native-like experiences.",
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      name: "Dev Bharadwaj",
      title: "AI Specialist",
      specializations: ["Machine Learning", "Python", "TensorFlow"],
      description: "Vikram implements cutting-edge AI solutions to solve complex business problems.",
    }
  ];

  return (
    <section className="section-padding bg-white" id="team">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">
            Our diverse team of experts is passionate about technology and committed to delivering exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
              specializations={member.specializations}
              description={member.description}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-brand-900 hover:bg-brand-800 text-white">
            <Link to="/team">View Full Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

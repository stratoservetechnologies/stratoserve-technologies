import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specializations: string[];
  profilePicture?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Shlok Thakkar',
    role: 'CEO & Founder',
    experience: '5 years in Full-stack Development',
    specializations: ['React', 'Node.js', 'AWS', 'System Design'],
    profilePicture: '/shlokthakkar.jpg',
    linkedin: 'https://www.linkedin.com/in/shlok-thakkar/'
  },
  {
    name: 'Jane Smith',
    role: 'Lead Designer',
    experience: '8 years in UI/UX Design',
    specializations: ['Figma', 'Adobe XD', 'User Research'],
    profilePicture: '/placeholder.svg',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Alex Johnson',
    role: 'Senior Developer',
    experience: '6 years in Full-stack Development',
    specializations: ['React', 'Node.js', 'Python'],
    profilePicture: '/placeholder.svg',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Emily Wilson',
    role: 'Frontend Developer',
    experience: '3 years in Frontend Development',
    specializations: ['React', 'JavaScript', 'HTML', 'CSS'],
    profilePicture: '/placeholder.svg',
    linkedin: 'https://www.linkedin.com/'
  },
];

const Team: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-brand-900 mb-12">
          Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                {member.profilePicture ? (
                  <img
                    src={member.profilePicture}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-500 mb-2">{member.experience}</p>
                <p className="text-gray-500">
                  Specializations:{' '}
                  {member.specializations.join(', ')}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-900 hover:underline mt-2 block"
                  >
                    LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
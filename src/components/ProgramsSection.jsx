// src/components/ProgramsSection.jsx
import React from 'react';
import ProgramCard from './ProgramCard';
import { Book, Users, ChevronDown, Award } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    { title: "Arts & Sciences", description: "Explore a wide range of disciplines in humanities and sciences", icon: Book },
    { title: "Business", description: "Develop skills for success in the global business landscape", icon: Users },
    { title: "Engineering", description: "Innovate and solve complex problems with cutting-edge technology", icon: ChevronDown },
    { title: "Health Sciences", description: "Prepare for a rewarding career in healthcare and medicine", icon: Award },
  ];

  return (
    <section id="programs" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

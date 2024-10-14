// src/components/NewsSection.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "VESIT University Ranks #1 in Innovation",
      date: "October 1, 2024",
    },
    {
      title: "New Research Center Opens on Campus",
      date: "September 15, 2024",
    },
    {
      title: "Students Win International Robotics Competition",
      date: "August 30, 2024",
    },
  ];

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.date}</p>
              <a
                href="#"
                className="text-blue-700 hover:underline flex items-center"
              >
                Read More <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

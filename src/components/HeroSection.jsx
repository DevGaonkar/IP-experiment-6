// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to VESIT University</h2>
      <p className="text-xl mb-8">
        Empowering minds, shaping futures since 1950
      </p>
      <button className="bg-blue-700 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
        Apply Now
      </button>
    </div>
  </section>
);

export default HeroSection;

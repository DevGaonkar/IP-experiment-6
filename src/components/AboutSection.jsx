// src/components/AboutSection.jsx
import React from "react";
import campusImage from "../assets/campus.jpg"; // Ensure you have this image

const AboutSection = () => (
  <section id="about" className="py-16 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        About VESIT University
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={campusImage}
            alt="VESIT University Campus"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="mb-4">
            VESIT University is a leading institution of higher education,
            dedicated to fostering academic excellence, innovative research, and
            personal growth. Our diverse community of scholars and students is
            committed to making a positive impact on the world.
          </p>
          <p>
            With a rich history spanning over 70 years, we continue to adapt and
            evolve, preparing our students for the challenges and opportunities
            of the 21st century.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

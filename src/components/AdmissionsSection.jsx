// src/components/AdmissionsSection.jsx
import React from "react";

const AdmissionsSection = () => (
  <section id="admissions" className="py-16 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Admissions</h2>
      <div className="max-w-2xl mx-auto">
        <p className="mb-6">
          Join our diverse community of learners and innovators. The admissions
          process at VESIT University is designed to identify motivated students
          who will thrive in our challenging academic environment.
        </p>
        <h3 className="text-xl font-semibold mb-4">Key Dates</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Early Decision: November 1</li>
          <li>Regular Decision: January 15</li>
          <li>Transfer Students: March 1</li>
        </ul>
        <button className="bg-blue-700 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  </section>
);

export default AdmissionsSection;

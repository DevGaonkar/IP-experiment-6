// src/components/CampusLifeSection.jsx
import React from "react";

const CampusLifeSection = () => (
  <section id="campus-life" className="py-16 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Campus Life</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Student Organizations</h3>
          <p className="mb-4">
            With over 200 student-run clubs and organizations, there's something
            for everyone at VESIT University. From academic societies to
            cultural groups, you'll find plenty of opportunities to pursue your
            passions and make lifelong friends.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Athletics</h3>
          <p className="mb-4">
            Our Division I athletics program offers 18 varsity sports for men
            and women. Whether you're a student-athlete or a fan, you'll enjoy
            the excitement of VESIT University sports.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Housing</h3>
          <p className="mb-4">
            Experience comfortable and convenient on-campus living in our modern
            residence halls. Our housing options cater to various preferences
            and budgets, ensuring a home away from home for all students.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Events</h3>
          <p className="mb-4">
            From guest lectures and concerts to art exhibitions and cultural
            celebrations, there's always something happening on campus. Check
            our events calendar to stay up-to-date with the latest activities.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CampusLifeSection;

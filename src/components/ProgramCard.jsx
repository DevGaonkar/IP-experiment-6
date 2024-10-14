// src/components/ProgramCard.jsx
import React from 'react';

const ProgramCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <Icon size={48} className="text-blue-700 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default ProgramCard;

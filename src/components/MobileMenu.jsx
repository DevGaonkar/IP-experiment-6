// src/components/MobileMenu.jsx
import React from 'react';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, toggleMenu }) => (
  <div className={`fixed inset-0 bg-blue-700 z-50 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
    <div className="flex justify-end p-4">
      <button onClick={toggleMenu}>
        <X size={24} className="text-white" />
      </button>
    </div>
    <nav className="flex flex-col items-center space-y-4 text-white">
      <a href="#about" onClick={toggleMenu} className="text-xl">About</a>
      <a href="#programs" onClick={toggleMenu} className="text-xl">Programs</a>
      <a href="#campus-life" onClick={toggleMenu} className="text-xl">Campus Life</a>
      <a href="#admissions" onClick={toggleMenu} className="text-xl">Admissions</a>
      <a href="#news" onClick={toggleMenu} className="text-xl">News</a>
    </nav>
  </div>
);

export default MobileMenu;

// src/components/Header.jsx
import React from "react";
import { Menu } from "lucide-react";

const Header = ({ toggleMenu }) => (
  <header className="bg-blue-700 text-white p-4 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">VESIT University</h1>
      <button onClick={toggleMenu} className="md:hidden">
        <Menu size={24} />
      </button>
      <nav className="hidden md:flex space-x-4">
        <a href="#about" className="hover:text-blue-200">
          About
        </a>
        <a href="#programs" className="hover:text-blue-200">
          Programs
        </a>
        <a href="#campus-life" className="hover:text-blue-200">
          Campus Life
        </a>
        <a href="#admissions" className="hover:text-blue-200">
          Admissions
        </a>
        <a href="#news" className="hover:text-blue-200">
          News
        </a>
      </nav>
    </div>
  </header>
);

export default Header;

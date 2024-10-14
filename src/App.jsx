// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import CampusLifeSection from './components/CampusLifeSection';
import AdmissionsSection from './components/AdmissionsSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <CampusLifeSection />
        <AdmissionsSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Aurora from "./components/Aurora";
import "./App.css";

function App() {
  return (
    <>
      <Aurora
        colorStops={["#1e00ff", "#4a0080", "#0a001a"]} // Customize colors
        amplitude={0.6} // Animation intensity
        blend={0.5} // Smoothness
      />
      <SocialLinks />
      <Navbar />

      <div className="min-h-screen font-sans bg-transparent text-gray-900 dark:text-gray-100 relative pt-20">
        {/* Content */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        {/* Simple Footer */}
        <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-800 mt-20">
          <p className="text-gray-600 dark:text-gray-400">
            Built with React, Tailwind CSS v4 & Framer Motion
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;

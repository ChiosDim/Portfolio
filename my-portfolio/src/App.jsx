import React from "react";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
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
        <Footer />
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import ArticlesSection from './sections/ArticlesSection';
import CodingProfilesSection from './sections/CodingProfilesSection';
import Footer from './components/Footer';
import { SectionProvider } from './context/SectionContext';
import ThreeDBackground from './components/ThreeDBackground'; // Import the ThreeDBackground component

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track cursor position for custom cursor
  useEffect(() => {
    const trackCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (!isMobile) {
      window.addEventListener('mousemove', trackCursor);
    }
    
    return () => {
      window.removeEventListener('mousemove', trackCursor);
    };
  }, [isMobile]);

  // Page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <SectionProvider activeSection={activeSection} setActiveSection={setActiveSection}>
      <div className="relative min-h-screen">
        <ThreeDBackground /> {/* Add the ThreeDBackground component here */}
        {!isMobile && <Cursor position={cursorPosition} />}
        <Navbar />

        <motion.main
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
          className="relative z-10" // Ensure content is above the background
        >
          <AnimatePresence>
            <HeroSection key="hero" />
            <AboutSection key="about" />
            <ExperienceSection key="experience" />
            <ProjectsSection key="projects" />
            <SkillsSection key="skills" />
            <ArticlesSection key="articles" />
            <CodingProfilesSection key="codingProfiles" />
            <ContactSection key="contact" />
          </AnimatePresence>

          <Footer />
        </motion.main>
      </div>
    </SectionProvider>
  );
}

export default App;
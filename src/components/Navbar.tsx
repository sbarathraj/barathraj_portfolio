import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Instagram, Twitter, Youtube, Sun, Moon } from 'lucide-react';
import { useSection } from '../context/SectionContext';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'articles', label: 'Articles' },
  { id: 'coding', label: 'Coding' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/sbarathraj', 
    label: 'GitHub',
    color: 'text-[#333] dark:text-[#fff]'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/sbarathraj/', 
    label: 'LinkedIn',
    color: 'text-[#0077B5] dark:text-[#0077B5]'
  },
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/barathraj_here/', 
    label: 'Instagram',
    color: 'text-[#E4405F] dark:text-[#E4405F]'
  },
  { 
    icon: Twitter, 
    href: 'https://x.com/BarathNft', 
    label: 'Twitter',
    color: 'text-[#1DA1F2] dark:text-[#1DA1F2]'
  },
  { 
    icon: Youtube, 
    href: 'https://www.youtube.com/@barathrajs7498', 
    label: 'YouTube',
    color: 'text-[#FF0000] dark:text-[#FF0000]'
  },
];

const Navbar: React.FC = () => {
  const { activeSection, setActiveSection } = useSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      // System preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      // Update navbar size based on scroll
      setIsScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle theme toggle, persist, and sync
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  // Sync theme across tabs
  useEffect(() => {
    const syncTheme = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setIsDarkMode(e.newValue === 'dark');
      }
    };
    window.addEventListener('storage', syncTheme);
    return () => window.removeEventListener('storage', syncTheme);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 px-2 md:px-6 py-2 md:py-4 transition-all duration-300
          mx-auto max-w-5xl md:max-w-6xl
          bg-white/30 dark:bg-background-dark/50 backdrop-blur-lg
          border border-white/30 dark:border-white/10
          rounded-2xl md:rounded-2xl
          shadow-lg
          flex items-center
          ${isScrolled ? 'py-1 md:py-2 scale-95' : 'py-2 md:py-4'}
        `}
      >
        <div className={`container mx-auto flex items-center justify-between px-0 md:px-2 transition-all duration-300 ${isScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'}`}>
          {/* Left: Logo/Title */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`font-bold gradient-text flex-shrink-0 transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}
            style={{ minWidth: 44, minHeight: 44 }}
          >
            Barathraj S
          </motion.div>

          {/* Center: Nav Links (desktop only) */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-6">
              {navItems.map((item, idx) => (
                <motion.li 
                  key={item.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ minWidth: 44, minHeight: 44 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-primary'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    } ${isScrolled ? 'text-xs' : 'text-sm'}`}
                    style={{ minWidth: 44, minHeight: 44 }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="navIndicator"
                        className="h-1 bg-primary mt-1 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Theme Toggle & Socials (desktop), Hamburger (mobile) */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${isScrolled ? 'p-1.5' : 'p-2'}`}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{ minWidth: 44, minHeight: 44 }}
            >
              {isDarkMode ? <Sun size={isScrolled ? 16 : 18} /> : <Moon size={isScrolled ? 16 : 18} />}
            </motion.button>

            {/* Mobile Menu Button (mobile only) */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: isMobileMenuOpen ? 90 : 0 }}
              className={`md:hidden text-gray-600 dark:text-white ${isScrolled ? 'p-1' : 'p-2'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              style={{ minWidth: 44, minHeight: 44 }}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {isMobileMenuOpen ? <X size={isScrolled ? 20 : 24} /> : <Menu size={isScrolled ? 20 : 24} />}
            </motion.button>
          </div>
        </div>
        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-white/20 dark:bg-background-dark/40 backdrop-blur-lg border-t border-white/20 dark:border-white/10"
            style={{ willChange: 'opacity', borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
          />
        )}
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatedMobileMenu 
        isOpen={isMobileMenuOpen} 
        navItems={navItems} 
        socialLinks={socialLinks}
        activeSection={activeSection}
        onNavItemClick={scrollToSection}
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

interface AnimatedMobileMenuProps {
  isOpen: boolean;
  navItems: typeof navItems;
  socialLinks: typeof socialLinks;
  activeSection: string;
  onNavItemClick: (sectionId: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onClose: () => void;
}

const AnimatedMobileMenu: React.FC<AnimatedMobileMenuProps> = ({
  isOpen,
  navItems,
  socialLinks,
  activeSection,
  onNavItemClick,
  isDarkMode,
  onThemeToggle,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs z-50 flex flex-col p-6 md:hidden bg-white/20 dark:bg-background-dark/40 backdrop-blur-lg border-l border-white/20 dark:border-white/10 rounded-l-2xl shadow-2xl"
      style={{ willChange: 'opacity' }}
    >
      {/* Top bar: Close button and theme toggle */}
      <div className="flex items-center justify-between mb-8">
        <motion.button
          whileTap={{ scale: 0.9, rotate: 90 }}
          className="text-gray-600 dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={28} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onThemeToggle}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
        </motion.button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : 20,
                }}
                transition={{ delay: isOpen ? index * 0.1 : 0 }}
              >
                <button
                  onClick={() => onNavItemClick(item.id)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-8 border-t border-white/20 dark:border-white/10">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">Connect with me</h3>
          <div className="grid grid-cols-3 gap-4">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all ${color}`}
                aria-label={label}
              >
                <Icon size={24} />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
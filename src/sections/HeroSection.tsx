import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Github, Linkedin, Twitter, Youtube, Instagram, ArrowRight } from 'lucide-react';
import { useSection } from '../context/SectionContext';
import ParticleBackground from '../components/ParticleBackground';
// @ts-ignore: No types for react-typed
import { ReactTyped as Typed } from 'react-typed';

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
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/barathraj_here/', 
    label: 'Instagram',
    color: 'text-[#E4405F] dark:text-[#E4405F]'
  },
];

const HeroSection: React.FC = () => {
  const { setActiveSection } = useSection();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });
  const imageCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      setActiveSection('hero');
      controls.start('visible');
    }
  }, [controls, inView, setActiveSection]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="animated-bg" />

      {/* Enhanced Particle background */}
      <ParticleBackground id="hero-particles" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent animate-pulse-slow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-light dark:to-background-dark" />
      
      {/* Floating 3D orbs and cubes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      {/* 3D cube using CSS */}
      <div className="absolute left-10 top-1/2 w-16 h-16 animate-spin-slow" style={{ perspective: '600px' }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, var(--accent) 40%, var(--secondary) 100%)',
          borderRadius: '8px',
          boxShadow: '0 8px 32px 0 rgba(162,89,247,0.2)',
          transform: 'rotateY(30deg) rotateX(20deg)',
        }} />
      </div>

      <div className="container mx-auto px-6 z-10 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        {/* 3D Animated Image Card */}
        <motion.div
          ref={imageCardRef}
          className="card-3d bg-white/80 dark:bg-background-dark/80 shadow-xl rounded-2xl overflow-hidden w-64 h-80 flex-shrink-0 flex items-center justify-center relative group focus:outline-none focus:ring-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.07, rotateY: 10, rotateX: 10 }}
          whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--primary)' }}
          style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}
        >
          <img
            src="/src/assets/Coat Professional.jpg"
            alt="Barathraj S"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            style={{ boxShadow: '0 8px 32px 0 rgba(138,43,226,0.2)' }}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-4 text-white text-center text-lg font-semibold">
            Barathraj S
          </div>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto text-center md:text-left"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            variants={item}
          >
            <span className="gradient-text animate-gradient block mb-2">
              Hi, I'm Barathraj S
            </span>
            <motion.span
              className="block text-xl md:text-2xl font-semibold gradient-text animate-gradient drop-shadow-lg"
              style={{ 
                background: 'linear-gradient(45deg, #14b8a6, #8a2be2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, type: 'spring', stiffness: 60 }}
            >
              Software Engineer | Full Stack Developer | Tech Enthusiast
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
            variants={item}
          >
            Turning ideas into scalable applications with clean code, modern UI, and efficient backends.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
            variants={item}
          >
            <button 
              onClick={scrollToAbout}
              className="relative overflow-hidden px-8 py-3 rounded-xl bg-primary text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group focus:outline-none focus:ring-0"
              style={{ minWidth: 44, minHeight: 44 }}
              type="button"
              tabIndex={0}
              aria-label="Explore My Work"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="flex items-center justify-center gap-2 relative z-10">
                Explore My Work
                <ArrowDown size={18} className="group-hover:animate-bounce" />
              </span>
            </button>

            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative overflow-hidden px-8 py-3 rounded-xl border-2 border-primary text-primary font-medium transition-all duration-300 hover:bg-primary/10 group focus:outline-none focus:ring-0"
              style={{ minWidth: 44, minHeight: 44 }}
              type="button"
              tabIndex={0}
              aria-label="Get In Touch"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="flex items-center justify-center gap-2 relative z-10">
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>

          <motion.div 
            className="flex justify-center md:justify-start space-x-5"
            variants={item}
          >
            {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} transition-colors duration-300 focus:outline-none focus:ring-0`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9, boxShadow: '0 0 0 4px var(--primary)' }}
                style={{ minWidth: 44, minHeight: 44, willChange: 'transform, opacity' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                aria-label={label}
              >
                <Icon size={20} className="hover:animate-bounce-slow" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="relative">
          <ArrowDown size={30} className="text-primary animate-bounce" />
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse-slow" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Github, Linkedin, Twitter, Youtube, Instagram, ArrowRight, Code, Sparkles, Star } from 'lucide-react';
import { useSection } from '../context/SectionContext';
import ParticleBackground from '../components/ParticleBackground';
import ShineButton from '../components/ShineButton';
// @ts-ignore: No types for react-typed
import { ReactTyped as Typed } from 'react-typed';

const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/sbarathraj', 
    label: 'GitHub',
    color: 'text-[#333] dark:text-[#fff]',
    gradient: 'from-gray-700 to-gray-900'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/sbarathraj/', 
    label: 'LinkedIn',
    color: 'text-[#0077B5] dark:text-[#0077B5]',
    gradient: 'from-blue-500 to-blue-700'
  },
  { 
    icon: Twitter, 
    href: 'https://x.com/BarathNft', 
    label: 'Twitter',
    color: 'text-[#1DA1F2] dark:text-[#1DA1F2]',
    gradient: 'from-blue-400 to-blue-600'
  },
  { 
    icon: Youtube, 
    href: 'https://www.youtube.com/@barathrajs7498', 
    label: 'YouTube',
    color: 'text-[#FF0000] dark:text-[#FF0000]',
    gradient: 'from-red-500 to-red-700'
  },
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/barathraj_here/', 
    label: 'Instagram',
    color: 'text-[#E4405F] dark:text-[#E4405F]',
    gradient: 'from-pink-500 to-purple-500'
  },
];

// Animation variants
const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const jumpingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const nameTextAnimation = {
  initial: { 
    opacity: 0,
    scale: 0.5,
    y: 50
  },
  animate: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const glowAnimation = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const rotateAnimation = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const HeroSection: React.FC = () => {
  const { setActiveSection } = useSection();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
    <motion.section
      ref={ref}
      id="hero"
      className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden"
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced Particle Background */}
      <ParticleBackground />

      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-full blur-3xl"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '2s', y }}
      />

      {/* Decorative Elements */}
      <motion.div
        className="absolute right-10 top-1/4 w-16 h-16"
        variants={rotateAnimation}
        initial="initial"
        animate="animate"
      >
        <div className="w-full h-full bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg transform rotate-45" />
      </motion.div>

      <motion.div
        className="absolute left-10 bottom-1/4 w-12 h-12"
        variants={rotateAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        <div className="w-full h-full bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full" />
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        className="absolute left-1/4 top-1/3"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
      >
        <Code size={24} className="text-primary/30" />
      </motion.div>
      <motion.div
        className="absolute right-1/4 bottom-1/3"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '1s' }}
      >
        <Sparkles size={24} className="text-secondary/30" />
      </motion.div>
      <motion.div
        className="absolute left-1/3 bottom-1/4"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '1.5s' }}
      >
        <Star size={24} className="text-accent/30" />
      </motion.div>

      <div className="container mx-auto px-6 relative" style={{ zIndex: 1 }}>
        <motion.div
          className="max-w-3xl mx-auto text-center md:text-left"
          variants={container}
          initial="hidden"
          animate={controls}
          style={{ opacity }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            variants={item}
          >
            <motion.span 
              className="gradient-text animate-gradient block mb-2"
              variants={nameTextAnimation}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              Hi, I'm Barathraj S
            </motion.span>
            <motion.div
              className="text-xl md:text-2xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Typed
                strings={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "Tech Enthusiast",
                  "Problem Solver"
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="gradient-text animate-gradient"
              />
            </motion.div>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
            variants={item}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Turning ideas into scalable applications with clean code, modern UI, and efficient backends.
            </motion.span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
            variants={item}
          >
            <ShineButton
              onClick={scrollToAbout}
              variant="primary"
              ariaLabel="Explore My Work"
            >
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown size={18} />
                </motion.div>
              </motion.span>
            </ShineButton>

            <ShineButton
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="outline"
              ariaLabel="Get In Touch"
            >
              <motion.span 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </motion.span>
            </ShineButton>
          </motion.div>

          <motion.div 
            className="flex justify-center md:justify-start space-x-5"
            variants={item}
          >
            {socialLinks.map(({ icon: Icon, href, label, color, gradient }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-2 rounded-lg ${color} transition-all duration-300`}
                variants={jumpingAnimation}
                initial="initial"
                animate="animate"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                }}
                whileTap={{ scale: 0.9 }}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-lg opacity-0 transition-opacity duration-300`}
                  whileHover={{ opacity: 0.2 }}
                />
                <Icon size={20} className="relative z-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
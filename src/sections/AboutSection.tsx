import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileDown, Award, Code } from 'lucide-react';
import { useSection } from '../context/SectionContext';
import { AnimatedHeading, AnimatedParagraph } from '../components/AnimatedText';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const { setActiveSection } = useSection();
  const [sectionRef, inView] = useInView({ threshold: 0.3 });
  const imageCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      setActiveSection('about');
    }
  }, [inView, setActiveSection]);

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1Ie0ZVMyh7M3-kYIdmyZ-TfL7z5ardd_a/view?usp=drivesdk', '_blank');
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="py-32 md:py-40 relative overflow-hidden flex flex-col justify-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated, colorful background */}
      <div className="animated-bg" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute left-1/2 top-1/3 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      {/* 3D cube using CSS */}
      <div className="absolute right-10 top-1/2 w-16 h-16 animate-spin-slow" style={{ perspective: '600px' }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, var(--accent) 40%, var(--secondary) 100%)',
          borderRadius: '8px',
          boxShadow: '0 8px 32px 0 rgba(162,89,247,0.2)',
          transform: 'rotateY(30deg) rotateX(20deg)',
        }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-16 md:gap-24 justify-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatedHeading
              text="About Me"
              className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text animate-gradient"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left: Info and Resume */}
            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <AnimatedParagraph
                  text="I'm Barathraj S., a passionate and performance-driven Software Engineer from Tamil Nadu, India. I specialize in designing and developing end-to-end solutions that blend intuitive user interfaces with powerful back-end systems."
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  delay={0.1}
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <AnimatedParagraph
                  text="With expertise in Java, Spring Boot, and Angular, I focus on creating scalable applications that deliver exceptional user experiences. I'm currently working as a Software Engineer at Kuwy Technology Service Pvt Ltd."
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  delay={0.2}
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <AnimatedParagraph
                  text="I hold a B.Tech in Information Technology from Sri Manakula Vinayagar Engineering College, Puducherry, where I graduated with a CGPA of 7.77."
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  delay={0.3}
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <motion.button
                  className="professional-button-primary group"
                  onClick={handleResumeDownload}
                  style={{ minWidth: 44, minHeight: 44 }}
                  type="button"
                  tabIndex={0}
                  aria-label="Download Resume"
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="flex items-center gap-2">
                    <FileDown size={20} /> Download Resume
                  </span>
                </motion.button>
              </motion.div>
              {/* DSA/Philosophy highlight */}
              <motion.div variants={fadeInUp} className="glass-effect p-4 rounded-xl mt-4 shadow-lg flex items-center gap-4" whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--primary)' }} style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}>
                <Code size={32} className="text-primary animate-bounce-slow" />
                <div>
                  <div className="font-semibold text-lg text-primary mb-1">DSA Enthusiast</div>
                  <div className="text-gray-700 dark:text-gray-200 text-sm">
                    I consistently practice DSA problems on Leetcode and enjoy optimizing every solution for time and space.
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="glass-effect p-4 rounded-xl mt-2 shadow-lg flex items-center gap-4" whileTap={{ scale: 0.97, boxShadow: '0 0 0 4px var(--secondary)' }} style={{ willChange: 'transform, opacity', minWidth: 44, minHeight: 44 }}>
                <Award size={32} className="text-secondary animate-pulse-slow" />
                <div>
                  <div className="font-semibold text-lg text-secondary mb-1">Philosophy</div>
                  <div className="text-gray-700 dark:text-gray-200 text-sm italic">
                    "Code is not just instructions to a machine; it's a medium to solve human problems."
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Coding/Experience Stats & Relationship Cards */}
            <motion.div className="flex flex-col gap-4 w-full items-center md:items-start" variants={staggerContainer}>
              <motion.div className="glass-effect p-4 rounded-xl flex flex-col items-center shadow-lg" variants={fadeInUp}>
                <div className="text-3xl font-bold gradient-text">100+</div>
                <div className="text-sm text-gray-700 dark:text-gray-200">LeetCode Problems</div>
              </motion.div>
              <motion.div className="glass-effect p-4 rounded-xl flex flex-col items-center shadow-lg" variants={fadeInUp}>
                <div className="text-3xl font-bold text-secondary">1+ Year</div>
                <div className="text-sm text-gray-700 dark:text-gray-200">Professional Experience</div>
              </motion.div>
              {/* Removed relationship/connection cards for a cleaner layout */}

              {/* My Values & Passions Animated Cards */}
              <motion.div
                className="flex flex-wrap gap-5 mt-12 mb-2 justify-center md:justify-start"
                variants={staggerContainer}
              >
                <motion.div
                  className="glass-effect px-6 py-5 rounded-2xl flex flex-col items-center shadow-xl min-w-[160px] max-w-xs hover:shadow-glow transition-all duration-300 cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.09, rotateY: 8, boxShadow: '0 8px 32px 0 rgba(20,184,166,0.18)' }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
                  style={{ background: 'linear-gradient(135deg, #14b8a6 0%, #a259f7 100%)', color: '#fff' }}
                >
                  <motion.span className="mb-2" animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
                    <Code size={28} className="text-white drop-shadow-lg" />
                  </motion.span>
                  <span className="font-bold text-lg mb-1">Creativity</span>
                  <span className="text-sm opacity-90 text-center">I love turning ideas into beautiful, functional products.</span>
                </motion.div>
                <motion.div
                  className="glass-effect px-6 py-5 rounded-2xl flex flex-col items-center shadow-xl min-w-[160px] max-w-xs hover:shadow-glow transition-all duration-300 cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.09, rotateY: -8, boxShadow: '0 8px 32px 0 rgba(139,92,246,0.18)' }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, type: 'spring', bounce: 0.3, delay: 0.1 }}
                  style={{ background: 'linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)', color: '#fff' }}
                >
                  <motion.span className="mb-2" animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}>
                    <Award size={28} className="text-white drop-shadow-lg" />
                  </motion.span>
                  <span className="font-bold text-lg mb-1">Collaboration</span>
                  <span className="text-sm opacity-90 text-center">Great things happen when we build together and share knowledge.</span>
                </motion.div>
                <motion.div
                  className="glass-effect px-6 py-5 rounded-2xl flex flex-col items-center shadow-xl min-w-[160px] max-w-xs hover:shadow-glow transition-all duration-300 cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.09, rotateY: 8, boxShadow: '0 8px 32px 0 rgba(251,191,36,0.18)' }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, type: 'spring', bounce: 0.3, delay: 0.2 }}
                  style={{ background: 'linear-gradient(135deg, #5eead4 0%, #fbbf24 100%)', color: '#1a1a1a' }}
                >
                  <motion.span className="mb-2" animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}>
                    <FileDown size={28} className="text-primary drop-shadow-lg" />
                  </motion.span>
                  <span className="font-bold text-lg mb-1">Continuous Learning</span>
                  <span className="text-sm opacity-90 text-center">I'm always exploring new tech and improving my craft.</span>
                </motion.div>
                <motion.div
                  className="glass-effect px-6 py-5 rounded-2xl flex flex-col items-center shadow-xl min-w-[160px] max-w-xs hover:shadow-glow transition-all duration-300 cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.09, rotateY: -8, boxShadow: '0 8px 32px 0 rgba(20,184,166,0.18)' }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, type: 'spring', bounce: 0.3, delay: 0.3 }}
                  style={{ background: 'linear-gradient(135deg, #a259f7 0%, #14b8a6 100%)', color: '#fff' }}
                >
                  <motion.span className="mb-2" animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}>
                    <Award size={28} className="text-white drop-shadow-lg" />
                  </motion.span>
                  <span className="font-bold text-lg mb-1">Building Impact</span>
                  <span className="text-sm opacity-90 text-center">I strive to create solutions that make a real difference.</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
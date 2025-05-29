import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileDown, Award, Code, Sparkles, Brain, Rocket } from 'lucide-react';
import { useSection } from '../context/SectionContext';
import { AnimatedHeading, AnimatedParagraph } from '../components/AnimatedText';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ShineButton from '../components/ShineButton';

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

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
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

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="py-20 relative overflow-hidden flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-full blur-3xl"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 w-24 h-24 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl"
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: '4s' }}
      />

      {/* Rotating geometric shapes */}
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

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 justify-center">
          {/* Section Header with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-sm uppercase tracking-wider text-primary font-semibold">
                Get to know me
              </div>
            </motion.div>
            <AnimatedHeading
              text="About Me"
              className="text-4xl md:text-6xl font-bold gradient-text animate-gradient"
            />
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Passionate about creating impactful software solutions
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Left Column: Image and Quick Stats */}
            <motion.div className="md:col-span-5 space-y-4">
              {/* Profile Image */}
              <motion.div
                className="w-[320px] h-[400px] relative group mx-auto md:mx-0 mb-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Professional gradient border */}
                <motion.div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-75 group-hover:opacity-100 blur transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Image container */}
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-2xl border border-white/10 shadow-lg bg-gradient-to-b from-gray-900/10 to-black/30"
                >
                  <img
                    src="https://ik.imagekit.io/barthraj/barathrajcoat.jpg?updatedAt=1748329958725"
                    alt="Barathraj S"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    style={{
                      objectPosition: '50% 15%'
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]" 
                  />
                </motion.div>
              </motion.div>

              {/* Quick Stats in Grid */}
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  className="glass-effect p-6 rounded-xl flex flex-col items-center text-center shadow-lg hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    className="text-3xl font-bold gradient-text mb-1"
                    variants={pulseAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    100+
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">LeetCode Problems</div>
                </motion.div>

                <motion.div
                  className="glass-effect p-6 rounded-xl flex flex-col items-center text-center shadow-lg hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.02, rotateY: -5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    className="text-3xl font-bold text-secondary mb-1"
                    variants={pulseAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    1+ Year
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Professional Experience</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Main Content */}
            <motion.div className="md:col-span-7 space-y-4">
              {/* Bio Paragraphs */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <AnimatedParagraph
                    text="I'm Barathraj S, a passionate and performance-driven Software Engineer from Tamil Nadu, India. I specialize in designing and developing end-to-end solutions that blend intuitive user interfaces with powerful back-end systems."
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    delay={0.1}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <AnimatedParagraph
                    text="With expertise in Java, Spring Boot, and Angular, I focus on creating scalable applications that deliver exceptional user experiences. I'm currently working as a Software Engineer at Kuwy Technology Service Pvt Ltd."
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    delay={0.2}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <AnimatedParagraph
                    text="I hold a B.Tech in Information Technology from Sri Manakula Vinayagar Engineering College, Puducherry, where I graduated with a CGPA of 7.77."
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                    delay={0.3}
                  />
                </motion.div>
              </div>

              {/* Download Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-start py-2"
              >
                {/* Using an anchor tag for direct download */}
                <a 
                  href="https://drive.google.com/file/d/1Ie0ZVMyh7M3-kYIdmyZ-TfL7z5ardd_a/view?usp=drivesdk"
                  download="Barathraj_Resume.pdf" // Specify the desired file name
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Recommended for security when using target="_blank"
                >
                  <ShineButton
                    variant="primary"
                    ariaLabel="Download Resume"
                    className="w-auto"
                  >
                    <motion.span 
                      className="flex items-center gap-2"
                      // Removed whileHover and whileTap as ShineButton already handles them
                    >
                      <FileDown size={20} className="" /> 
                      Download Resume
                    </motion.span>
                  </ShineButton>
                </a>
              </motion.div>

              {/* Highlight Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.div
                  variants={pulseAnimation}
                  initial="initial"
                  animate="animate"
                  className="glass-effect p-4 rounded-xl shadow-lg flex items-start gap-4 hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mt-1"
                  >
                    <Code size={28} className="text-primary" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-lg text-primary mb-2">DSA Enthusiast</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      I consistently practice DSA problems on Leetcode and enjoy optimizing every solution for time and space.
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={pulseAnimation}
                  initial="initial"
                  animate="animate"
                  className="glass-effect p-4 rounded-xl shadow-lg flex items-start gap-4 hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.02, rotateX: -5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mt-1"
                  >
                    <Award size={28} className="text-secondary" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-lg text-secondary mb-2">Philosophy</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
                      "Code is not just instructions to a machine; it's a medium to solve human problems."
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

// Animation for heading elements
export const AnimatedHeading: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  once = true,
  delay = 0
}) => {
  const words = text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2 mb-2"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

// Animation for paragraph elements with character-by-character animation
export const AnimatedParagraph: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  once = true,
  delay = 0
}) => {
  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        duration: 0.8,
      },
    },
  };
  
  return (
    <motion.p
      className={className}
      variants={paragraphVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {text}
    </motion.p>
  );
};
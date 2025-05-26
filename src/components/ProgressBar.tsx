import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProgressBarProps {
  percentage: number;
  label: string;
  color?: string;
  delay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  label,
  color = 'primary',
  delay = 0,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Animate counter
      let start = 0;
      const end = percentage;
      const duration = 1500;
      const startTime = Date.now();
      
      const timer = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        setCounter(Math.floor(progress * end));
        
        if (progress === 1) {
          clearInterval(timer);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [controls, inView, percentage]);

  // Color variants
  const colorVariants = {
    primary: 'bg-primary text-primary',
    secondary: 'bg-secondary text-secondary',
    accent: 'bg-accent text-accent',
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: [0.17, 0.67, 0.83, 0.67],
        delay,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay + 0.2,
      },
    },
  };

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <motion.span
          className="text-gray-900 dark:text-gray-100 font-semibold text-sm"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          {label}
        </motion.span>
        <motion.span
          className={`font-bold text-xs ml-2 ${colorVariants[color as keyof typeof colorVariants]?.split(' ')[1] || 'text-primary'}`}
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          {counter}%
        </motion.span>
      </div>
      <div className="h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colorVariants[color as keyof typeof colorVariants]?.split(' ')[0] || 'bg-primary'}`}
          variants={barVariants}
          initial="hidden"
          animate={controls}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
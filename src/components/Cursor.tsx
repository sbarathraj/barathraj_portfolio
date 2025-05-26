import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorProps {
  position: { x: number; y: number };
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = () => {
      const target = event?.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null;
      
      setIsHovering(isClickable);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', () => setIsHovering(false));

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', () => setIsHovering(false));
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div 
        className="fixed w-8 h-8 rounded-full bg-transparent border-2 border-primary z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 150,
          damping: 15,
        }}
      />

      {/* Cursor dot */}
      <motion.div 
        className="fixed w-2 h-2 rounded-full bg-white z-[9999] pointer-events-none"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 200,
          damping: 10,
        }}
      />
    </>
  );
};

export default Cursor;
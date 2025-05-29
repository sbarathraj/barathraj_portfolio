import React from 'react';
import { motion } from 'framer-motion';

interface ShineButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

const ShineButton: React.FC<ShineButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}) => {
  const baseStyles = "relative overflow-hidden px-8 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-0";
  const variants = {
    primary: "bg-primary text-white hover:shadow-lg hover:shadow-primary/30",
    outline: "border-2 border-primary text-primary hover:bg-primary/10"
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      style={{ minWidth: 44, minHeight: 44 }}
      type={type}
      disabled={disabled}
      // Temporarily removed whileHover and whileTap to test vibration
      // whileHover={{ scale: 1.02 }}
      // whileTap={{ scale: 0.98 }}
      aria-label={ariaLabel}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      <span className="flex items-center justify-center gap-2 relative z-10">
        {children}
      </span>
    </motion.button>
  );
};

export default ShineButton;
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
}) => {
  // Base styles
  const baseStyles = 'relative overflow-hidden rounded-lg font-medium transition-all duration-300 flex items-center justify-center';
  
  // Size styles
  const sizeStyles = {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-base px-5 py-2.5',
    large: 'text-lg px-6 py-3',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-light text-white shadow-lg hover:shadow-xl hover:shadow-primary/20',
    secondary: 'bg-secondary hover:bg-secondary-light text-gray-900 shadow-lg hover:shadow-xl hover:shadow-secondary/20',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10',
    text: 'bg-transparent text-primary hover:bg-primary/10',
  };
  
  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Combine styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`;
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      viewport={{ once: true }}
    >
      {/* Animated background effect on hover */}
      <motion.span
        className="absolute inset-0 w-full h-full bg-white/10"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 0.3 }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Button content */}
      <span className="relative flex items-center gap-2">
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </span>
    </motion.button>
  );
};

export default AnimatedButton;
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-light': '#ffffff',
        'background-dark': '#0a0a0a',
        'text-light': '#1a1a1a',
        'text-dark': '#ffffff',
        'primary': '#14b8a6',
        'primary-light': '#5eead4',
        'secondary': '#FF6B6B',
        'secondary-light': '#ff8585',
        'accent': '#a259f7',
        'accent-light': '#d1aaff',
        'gray-light': '#f3f4f6',
        'gray-dark': '#1f2937',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary), 0 0 20px theme(colors.primary/30)',
        'neon-secondary': '0 0 5px theme(colors.secondary), 0 0 20px theme(colors.secondary/30)',
        'neon-accent': '0 0 5px theme(colors.accent), 0 0 20px theme(colors.accent/30)',
        'glow': '0 0 15px theme(colors.primary/50), 0 0 30px theme(colors.primary/30)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        '3d': 'rotate3d(1, 1, 1, 45deg)',
      },
      transitionProperty: {
        'transform-3d': 'transform',
        'opacity-3d': 'opacity',
      },
    },
  },
  plugins: [],
}
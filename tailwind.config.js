/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-light': '#ffffff',
        'text-light': '#1a1a1a',
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
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        gradient: 'gradient 6s ease infinite',
      },
    },
  },
  plugins: [],
}
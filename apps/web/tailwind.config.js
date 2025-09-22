/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EAF5FF',
          100: '#D6ECFF',
          200: '#B3D8FF',
          300: '#80BCFF',
          400: '#4D9CFF',
          500: '#1A7CFF',
          600: '#0064FF',
          700: '#0052D6',
          800: '#0041A8',
          900: '#003380',
        },
        secondary: {
          50: '#F5F9FF',
          100: '#EBF4FF',
          200: '#D6E8FF',
          300: '#B8DAFF',
          400: '#94C5FF',
          500: '#75ADFF',
          600: '#528EFF',
          700: '#3A6FE6',
          800: '#2D59BF',
          900: '#234899',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont',
          '"Segoe UI"', 
          'Roboto', 
          '"Helvetica Neue"', 
          'Arial', 
          '"Noto Sans"', 
          'sans-serif',
        ],
        display: [
          'Montserrat',
          'Inter',
          'ui-sans-serif', 
          'system-ui',
        ],
      },
      boxShadow: {
        'soft-sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'soft-md': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'soft-lg': '0 10px 15px rgba(0, 0, 0, 0.07)',
        'soft-xl': '0 15px 25px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.75s ease-in forwards',
        'fade-up': 'fadeUp 0.75s ease-out forwards',
        'fade-down': 'fadeDown 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

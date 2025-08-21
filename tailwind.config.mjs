/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
        },
        secondary: {
          500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--color-secondary-600) / <alpha-value>)',
        },
        accent: {
          500: 'rgb(var(--color-accent-500) / <alpha-value>)',
          600: 'rgb(var(--color-accent-600) / <alpha-value>)',
        },
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-text': 'var(--gradient-text)',
        'gradient-accent': 'var(--gradient-accent)',
        // Mantener compatibilidad con utilidades de Tailwind
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-scale': 'fadeInScale 0.8s ease-out',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(102, 126, 234, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(102, 126, 234, 0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Plugin personalizado mejorado
    function({ addUtilities, addComponents, theme }) {
      // Utilities para glassmorphism
      addUtilities({
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-strong': {
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
      });

      // Components comunes
      addComponents({
        '.btn-primary': {
          background: 'var(--gradient-hero)',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: theme('borderRadius.xl'),
          fontWeight: '600',
          transition: 'all 0.3s ease',
          border: 'none',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.xl'),
          },
        },
        '.workflow-card': {
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          minHeight: '400px',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            transform: 'translateY(-8px)',
            boxShadow: theme('boxShadow.2xl'),
          },
        },
      });
    },
  ],
  // Safelist para clases dinámicas
  safelist: [
    'from-yellow-400',
    'via-pink-400', 
    'to-blue-400',
    'gradient-hero',
    'gradient-text',
    'bg-clip-text',
    'text-transparent',
    'animate-fade-in',
    'animate-delay-100',
    'animate-delay-200',
    'animate-delay-300',
    'animate-delay-400',
    'animate-delay-500',
    'animate-delay-600',
  ]
};
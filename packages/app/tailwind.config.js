/** @type {import('tailwindcss').Config} */

// Backstage-aligned design tokens
const backstageColors = {
  // Primary teal from logos
  teal: {
    DEFAULT: '#7df3e1',
    light: '#b0fff1',
    dark: '#4ac0ae',
  },
  // Status colors (from Backstage theme)
  status: {
    ok: '#71CF88',
    warning: '#FFB84D',
    error: '#F84C55',
    running: '#3488E3',
    pending: '#FEF071',
    aborted: '#9E9E9E',
  },
  // Navigation colors
  nav: {
    background: '#171717',
    indicator: '#9BF0E1',
    color: '#b5b5b5',
    selected: '#FFFFFF',
    hover: 'rgba(116, 118, 121, 0.6)',
  },
  // Surface colors
  surface: {
    light: '#FFFFFF',
    dark: '#424242',
  },
  // Background colors
  background: {
    light: '#F8F8F8',
    dark: '#333333',
  },
  // Text colors
  text: {
    primary: '#000000',
    secondary: '#6E6E6E',
    disabled: '#DDDDDD',
    inverse: '#FFFFFF',
  },
  // Link colors
  link: {
    DEFAULT: '#0A6EBE',
    hover: '#2196F3',
  },
  // Accent
  gold: '#FFD600',
};

module.exports = {
  // Prefix all Tailwind classes to avoid MUI conflicts
  prefix: 'tw-',

  // Use 'class' strategy for dark mode
  darkMode: 'class',

  // Disable preflight to preserve MUI styles
  corePlugins: {
    preflight: false,
  },

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],

  theme: {
    extend: {
      // Backstage color palette
      colors: {
        backstage: backstageColors,
      },

      // MUI-compatible spacing (8px base unit)
      spacing: {
        'mui-0.5': '4px',
        'mui-1': '8px',
        'mui-1.5': '12px',
        'mui-2': '16px',
        'mui-2.5': '20px',
        'mui-3': '24px',
        'mui-4': '32px',
        'mui-5': '40px',
        'mui-6': '48px',
        'mui-8': '64px',
      },

      // Sidebar dimensions
      width: {
        'sidebar-closed': '72px',
        'sidebar-open': '224px',
      },

      // MUI breakpoints
      screens: {
        'mui-xs': '0px',
        'mui-sm': '600px',
        'mui-md': '960px',
        'mui-lg': '1280px',
        'mui-xl': '1920px',
      },

      // Typography
      fontFamily: {
        'mui': ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'],
      },

      // MUI-compatible border radius
      borderRadius: {
        'mui': '4px',
        'mui-lg': '8px',
        'mui-xl': '12px',
      },

      // MUI shadows
      boxShadow: {
        'mui-1': '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        'mui-2': '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        'mui-3': '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
        'mui-4': '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        'mui-8': '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
        'card-hover': '0 12px 24px -4px rgba(0, 0, 0, 0.12)',
        'card-elevated': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },

      // Animation timing functions
      transitionTimingFunction: {
        'mui': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'mui-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'mui-out': 'cubic-bezier(0.0, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // Animation durations
      transitionDuration: {
        'mui-shortest': '150ms',
        'mui-shorter': '200ms',
        'mui-short': '250ms',
        'mui-standard': '300ms',
        'mui-complex': '375ms',
      },

      // Keyframe animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'shimmer': 'shimmer 1.5s infinite',
        'pulse': 'pulse 2s infinite',
      },
    },
  },

  plugins: [],
};

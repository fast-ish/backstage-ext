/** @type {import('tailwindcss').Config} */

// Design tokens - Graphite Style
// Dark, minimal with violet/purple accents
const themeColors = {
  // Violet accent palette
  violet: {
    50: '#F5F3FF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6',
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',
  },
  // Graphite/dark neutrals
  graphite: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    850: '#18202F',
    900: '#111827',
    950: '#0D1117',
  },
  // Status colors
  status: {
    ok: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#8B5CF6',
    pending: '#6B7280',
  },
  // Navigation
  nav: {
    background: '#0D1117',
    indicator: '#A78BFA',
    color: '#9CA3AF',
    selected: '#FFFFFF',
    hover: 'rgba(139, 92, 246, 0.08)',
  },
  // Surfaces
  surface: {
    DEFAULT: '#111827',
    raised: '#1F2937',
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
  // Background
  background: {
    DEFAULT: '#0D1117',
    subtle: '#111827',
  },
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
      // Theme color palette
      colors: {
        ...themeColors,
        // Semantic aliases
        primary: themeColors.violet,
        accent: themeColors.violet,
        muted: themeColors.graphite,
        border: themeColors.graphite[800],
        input: themeColors.graphite[700],
        ring: themeColors.violet[500],
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

      // Typography - Geist (Vercel)
      fontFamily: {
        'sans': ['"Geist Sans"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'mono': ['"Geist Mono"', '"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },

      // MUI-compatible border radius
      borderRadius: {
        'mui': '4px',
        'mui-lg': '8px',
        'mui-xl': '12px',
      },

      // Dark shadows
      boxShadow: {
        'mui-1': '0px 2px 1px -1px rgba(0,0,0,0.3), 0px 1px 1px 0px rgba(0,0,0,0.24), 0px 1px 3px 0px rgba(0,0,0,0.22)',
        'mui-2': '0px 3px 1px -2px rgba(0,0,0,0.3), 0px 2px 2px 0px rgba(0,0,0,0.24), 0px 1px 5px 0px rgba(0,0,0,0.22)',
        'mui-3': '0px 3px 3px -2px rgba(0,0,0,0.3), 0px 3px 4px 0px rgba(0,0,0,0.24), 0px 1px 8px 0px rgba(0,0,0,0.22)',
        'mui-4': '0px 2px 4px -1px rgba(0,0,0,0.3), 0px 4px 5px 0px rgba(0,0,0,0.24), 0px 1px 10px 0px rgba(0,0,0,0.22)',
        'mui-8': '0px 5px 5px -3px rgba(0,0,0,0.3), 0px 8px 10px 1px rgba(0,0,0,0.24), 0px 3px 14px 2px rgba(0,0,0,0.22)',
        'card-hover': '0 12px 24px -4px rgba(0, 0, 0, 0.4)',
        'card-elevated': '0 4px 12px rgba(0, 0, 0, 0.3)',
        'glow-violet': '0 0 20px rgba(139, 92, 246, 0.15)',
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
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)' },
        },
      },

      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.3s ease-out',
        'fade-in-down': 'fade-in-down 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.2s ease-out',
        'slide-in-right': 'slide-in-right 0.2s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },

  plugins: [],
};

/**
 * Animation keyframes and transition constants
 * For use with MUI makeStyles and theme configuration
 */

// CSS Keyframe definitions for makeStyles
export const keyframes = {
  fadeIn: {
    '@keyframes fadeIn': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  },
  fadeInUp: {
    '@keyframes fadeInUp': {
      '0%': {
        opacity: 0,
        transform: 'translateY(20px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  },
  fadeInScale: {
    '@keyframes fadeInScale': {
      '0%': {
        opacity: 0,
        transform: 'scale(0.95)',
      },
      '100%': {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
  },
  slideInLeft: {
    '@keyframes slideInLeft': {
      '0%': {
        opacity: 0,
        transform: 'translateX(-20px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
  },
  slideInRight: {
    '@keyframes slideInRight': {
      '0%': {
        opacity: 0,
        transform: 'translateX(20px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
  },
  pulse: {
    '@keyframes pulse': {
      '0%, 100%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.05)' },
    },
  },
  shimmer: {
    '@keyframes shimmer': {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' },
    },
  },
  logoGlow: {
    '@keyframes logoGlow': {
      '0%, 100%': {
        filter: 'drop-shadow(0 0 2px rgba(125, 243, 225, 0.4))',
      },
      '50%': {
        filter: 'drop-shadow(0 0 8px rgba(125, 243, 225, 0.8))',
      },
    },
  },
};

// Transition duration constants (in ms)
export const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
};

// Easing functions
export const easing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

// Helper to create transition strings
export const createTransition = (
  properties: string | string[],
  options: { duration?: number; easing?: string; delay?: number } = {},
): string => {
  const {
    duration: dur = duration.standard,
    easing: ease = easing.easeInOut,
    delay = 0,
  } = options;

  const props = Array.isArray(properties) ? properties : [properties];

  return props
    .map(prop => `${prop} ${dur}ms ${ease} ${delay}ms`)
    .join(', ');
};

import { genPageTheme, shapes } from '@backstage/theme';

/**
 * Custom page themes with gradient headers
 * Red, White, and Blue theme
 */

// Custom gradient color combinations
const gradients = {
  blueToNavy: ['#3B82F6', '#1E3A5F'],
  redToBlue: ['#DC2626', '#2563EB'],
  navyToBlue: ['#1E3A5F', '#3B82F6'],
  blueToRed: ['#2563EB', '#DC2626'],
  deepBlue: ['#1D4ED8', '#0F172A'],
  redAccent: ['#EF4444', '#B91C1C'],
};

export const customPageThemes = {
  home: genPageTheme({
    colors: gradients.blueToNavy,
    shape: shapes.wave,
  }),
  documentation: genPageTheme({
    colors: gradients.navyToBlue,
    shape: shapes.wave2,
  }),
  tool: genPageTheme({
    colors: gradients.redToBlue,
    shape: shapes.round,
  }),
  service: genPageTheme({
    colors: gradients.blueToNavy,
    shape: shapes.wave,
  }),
  website: genPageTheme({
    colors: gradients.redAccent,
    shape: shapes.wave,
  }),
  library: genPageTheme({
    colors: gradients.deepBlue,
    shape: shapes.wave2,
  }),
  other: genPageTheme({
    colors: gradients.navyToBlue,
    shape: shapes.wave,
  }),
  app: genPageTheme({
    colors: gradients.blueToRed,
    shape: shapes.wave,
  }),
  apis: genPageTheme({
    colors: gradients.redToBlue,
    shape: shapes.wave2,
  }),
};

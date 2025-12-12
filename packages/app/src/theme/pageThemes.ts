import { genPageTheme, shapes } from '@backstage/theme';

/**
 * Custom page themes - Graphite Style
 * Dark, minimal gradients with subtle violet accents
 */

// Gradient palettes - dark graphite with violet hints
const gradients = {
  // Primary - dark graphite base
  graphiteDark: ['#111827', '#0D1117'],
  // Violet accent gradient
  violetDark: ['#4C1D95', '#111827'],
  // Subtle violet tint
  graphiteViolet: ['#1F2937', '#4C1D95'],
  // Deep dark
  deepGraphite: ['#0D1117', '#111827'],
  // Violet to graphite
  violetFade: ['#5B21B6', '#1F2937'],
  // Muted blend
  mutedViolet: ['#374151', '#4C1D95'],
};

export const customPageThemes = {
  home: genPageTheme({
    colors: gradients.graphiteDark,
    shape: shapes.wave,
  }),
  documentation: genPageTheme({
    colors: gradients.violetDark,
    shape: shapes.wave2,
  }),
  tool: genPageTheme({
    colors: gradients.graphiteViolet,
    shape: shapes.round,
  }),
  service: genPageTheme({
    colors: gradients.deepGraphite,
    shape: shapes.wave,
  }),
  website: genPageTheme({
    colors: gradients.violetFade,
    shape: shapes.wave,
  }),
  library: genPageTheme({
    colors: gradients.mutedViolet,
    shape: shapes.wave2,
  }),
  other: genPageTheme({
    colors: gradients.graphiteDark,
    shape: shapes.wave,
  }),
  app: genPageTheme({
    colors: gradients.graphiteViolet,
    shape: shapes.wave,
  }),
  apis: genPageTheme({
    colors: gradients.violetDark,
    shape: shapes.wave2,
  }),
};

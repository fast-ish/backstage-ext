import { palettes } from '@backstage/theme';

/**
 * Custom color palette - Dark theme only
 * Graphite with violet accents
 */

const colors = {
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
  // Violet/purple accent
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
  white: '#FFFFFF',
};

// Both themes use dark palette
const darkPalette = {
  ...palettes.dark,
  primary: {
    main: colors.violet[400],
    light: colors.violet[300],
    dark: colors.violet[500],
    contrastText: colors.graphite[950],
  },
  secondary: {
    main: colors.graphite[400],
    light: colors.graphite[300],
    dark: colors.graphite[500],
    contrastText: colors.graphite[950],
  },
  background: {
    default: colors.graphite[950],
    paper: colors.graphite[900],
  },
  text: {
    primary: colors.graphite[100],
    secondary: colors.graphite[400],
  },
  navigation: {
    ...palettes.dark.navigation,
    background: colors.graphite[950],
    indicator: colors.violet[400],
    color: colors.graphite[400],
    selectedColor: colors.white,
    navItem: {
      hoverBackground: 'rgba(167, 139, 250, 0.1)',
    },
  },
};

export const customLightPalette = darkPalette;
export const customDarkPalette = darkPalette;

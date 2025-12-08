import { palettes } from '@backstage/theme';

/**
 * Custom color palette - Red, White, and Blue theme
 */

// Color constants
const colors = {
  red: {
    main: '#DC2626',
    light: '#EF4444',
    dark: '#B91C1C',
  },
  blue: {
    main: '#2563EB',
    light: '#3B82F6',
    dark: '#1D4ED8',
    navy: '#1E3A5F',
    deepNavy: '#0F172A',
  },
  white: '#FFFFFF',
  offWhite: '#F8FAFC',
  gray: {
    light: '#E2E8F0',
    medium: '#94A3B8',
    dark: '#475569',
  },
};

export const customLightPalette = {
  ...palettes.light,
  primary: {
    main: colors.blue.main,
    light: colors.blue.light,
    dark: colors.blue.dark,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.red.main,
    light: colors.red.light,
    dark: colors.red.dark,
    contrastText: colors.white,
  },
  background: {
    default: colors.offWhite,
    paper: colors.white,
  },
  navigation: {
    ...palettes.light.navigation,
    background: colors.blue.navy,
    indicator: colors.red.main,
    color: colors.gray.light,
    selectedColor: colors.white,
    navItem: {
      hoverBackground: 'rgba(220, 38, 38, 0.15)',
    },
  },
};

export const customDarkPalette = {
  ...palettes.dark,
  primary: {
    main: colors.blue.light,
    light: '#60A5FA',
    dark: colors.blue.main,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.red.light,
    light: '#F87171',
    dark: colors.red.main,
    contrastText: colors.white,
  },
  background: {
    default: colors.blue.deepNavy,
    paper: colors.blue.navy,
  },
  navigation: {
    ...palettes.dark.navigation,
    background: colors.blue.deepNavy,
    indicator: colors.red.main,
    color: colors.gray.medium,
    selectedColor: colors.white,
    navItem: {
      hoverBackground: 'rgba(220, 38, 38, 0.2)',
    },
  },
};

import { createUnifiedTheme } from '@backstage/theme';
import { customLightPalette, customDarkPalette } from './palette';
import { componentOverrides } from './componentOverrides';
import { customPageThemes } from './pageThemes';

/**
 * Custom Backstage themes with enhanced styling
 *
 * Typography:
 * - Headings: IBM Plex Sans (clean, technical, excellent readability)
 * - Body: Inter (highly legible, great for UI)
 * - Code: JetBrains Mono (purpose-built for developers)
 */

// Font stack with fallbacks
const fontFamily = '"Inter", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const headingFontFamily = '"IBM Plex Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif';
const monoFontFamily = '"JetBrains Mono", "Fira Code", "Source Code Pro", "Consolas", monospace';

export const customLightTheme = createUnifiedTheme({
  palette: customLightPalette,
  defaultPageTheme: 'home',
  pageTheme: customPageThemes,
  fontFamily,
  components: {
    ...componentOverrides,
    MuiTypography: {
      styleOverrides: {
        h1: { fontFamily: headingFontFamily, fontWeight: 600 },
        h2: { fontFamily: headingFontFamily, fontWeight: 600 },
        h3: { fontFamily: headingFontFamily, fontWeight: 600 },
        h4: { fontFamily: headingFontFamily, fontWeight: 500 },
        h5: { fontFamily: headingFontFamily, fontWeight: 500 },
        h6: { fontFamily: headingFontFamily, fontWeight: 500 },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        'code, pre, kbd, samp': {
          fontFamily: monoFontFamily,
        },
        '.MuiTypography-monospace': {
          fontFamily: monoFontFamily,
        },
      },
    },
  },
});

export const customDarkTheme = createUnifiedTheme({
  palette: customDarkPalette,
  defaultPageTheme: 'home',
  pageTheme: customPageThemes,
  fontFamily,
  components: {
    ...componentOverrides,
    MuiTypography: {
      styleOverrides: {
        h1: { fontFamily: headingFontFamily, fontWeight: 600 },
        h2: { fontFamily: headingFontFamily, fontWeight: 600 },
        h3: { fontFamily: headingFontFamily, fontWeight: 600 },
        h4: { fontFamily: headingFontFamily, fontWeight: 500 },
        h5: { fontFamily: headingFontFamily, fontWeight: 500 },
        h6: { fontFamily: headingFontFamily, fontWeight: 500 },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        'code, pre, kbd, samp': {
          fontFamily: monoFontFamily,
        },
        '.MuiTypography-monospace': {
          fontFamily: monoFontFamily,
        },
      },
    },
  },
});

// Re-export utilities
export { keyframes, duration, easing, createTransition } from './animations';
export { customLightPalette, customDarkPalette } from './palette';

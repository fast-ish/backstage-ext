import { createUnifiedTheme } from '@backstage/theme';
import { customLightPalette, customDarkPalette } from './palette';
import { componentOverrides } from './componentOverrides';
import { customPageThemes } from './pageThemes';

/**
 * Custom Backstage themes with enhanced styling
 *
 * Typography - Geist (Vercel's font):
 * - Headings: Geist Sans (clean, modern)
 * - Body: Geist Sans (highly legible)
 * - Code: Geist Mono (clean monospace)
 */

// Font stack with fallbacks - Geist (Vercel)
const fontFamily = '"Geist Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const headingFontFamily = '"Geist Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif';
const monoFontFamily = '"Geist Mono", "JetBrains Mono", "Fira Code", monospace';

// Dark theme only
const darkBg = '#0D1117';  // graphite-950

const themeComponents = {
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
      'html, body': {
        backgroundColor: darkBg,
      },
      '#root': {
        backgroundColor: darkBg,
      },
      'code, pre, kbd, samp': {
        fontFamily: monoFontFamily,
      },
      '.MuiTypography-monospace': {
        fontFamily: monoFontFamily,
      },
    },
  },
};

export const customLightTheme = createUnifiedTheme({
  palette: customLightPalette,
  defaultPageTheme: 'home',
  pageTheme: customPageThemes,
  fontFamily,
  components: themeComponents,
});

export const customDarkTheme = createUnifiedTheme({
  palette: customDarkPalette,
  defaultPageTheme: 'home',
  pageTheme: customPageThemes,
  fontFamily,
  components: themeComponents,
});

// Re-export utilities
export { keyframes, duration, easing, createTransition } from './animations';
export { customLightPalette, customDarkPalette } from './palette';

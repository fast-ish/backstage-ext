/**
 * MUI component style overrides with animations
 */

import { duration, easing } from './animations';

// Component overrides for the unified theme
export const componentOverrides = {
  // Card with entrance animation and hover effects
  MuiCard: {
    styleOverrides: {
      root: {
        transition: `box-shadow ${duration.standard}ms ${easing.easeInOut},
                     transform ${duration.short}ms ${easing.easeOut}`,
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        },
      },
    },
  },

  // Paper with subtle shadow transitions
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        transition: `box-shadow ${duration.standard}ms ${easing.easeInOut}`,
      },
      elevation1: {
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
      },
      elevation2: {
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      elevation3: {
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.06)',
      },
    },
  },

  // Button with micro-interactions
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none' as const,
        fontWeight: 500,
        borderRadius: 8,
        transition: `all ${duration.short}ms ${easing.easeInOut}`,
        '&:hover': {
          transform: 'translateY(-1px)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      },
      contained: {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },

  // List items for navigation
  MuiListItem: {
    styleOverrides: {
      root: {
        transition: `background-color ${duration.shorter}ms ${easing.easeInOut}`,
      },
    },
  },

  // Table rows with hover
  MuiTableRow: {
    styleOverrides: {
      root: {
        transition: `background-color ${duration.shorter}ms ${easing.easeInOut}`,
      },
    },
  },

  // Tabs with animated indicator
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none' as const,
        fontWeight: 500,
        transition: `color ${duration.short}ms ${easing.easeInOut},
                     background-color ${duration.short}ms ${easing.easeInOut}`,
        borderRadius: '4px 4px 0 0',
        '&:hover': {
          backgroundColor: 'rgba(37, 99, 235, 0.08)',
        },
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      indicator: {
        height: 3,
        borderRadius: '3px 3px 0 0',
        transition: `all ${duration.standard}ms ${easing.easeInOut}`,
      },
    },
  },

  // Chips with hover effect
  MuiChip: {
    styleOverrides: {
      root: {
        transition: `all ${duration.shorter}ms ${easing.easeInOut}`,
        '&:hover': {
          transform: 'scale(1.02)',
        },
      },
    },
  },

  // IconButton with hover scale
  MuiIconButton: {
    styleOverrides: {
      root: {
        transition: `all ${duration.shorter}ms ${easing.easeInOut}`,
        '&:hover': {
          transform: 'scale(1.1)',
        },
      },
    },
  },
};

/**
 * MUI component style overrides - Graphite Style
 * Dark, minimal with violet accents
 */

import { duration, easing } from './animations';

// Violet accent colors for form inputs
const inputColors = {
  border: '#374151',        // graphite-700
  borderHover: '#6B7280',   // graphite-500
  borderFocus: '#8B5CF6',   // violet-500
  background: '#111827',    // graphite-900
  backgroundHover: '#1F2937', // graphite-800
};

// Component overrides for the unified theme
export const componentOverrides = {
  // Card - dark with subtle border
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        border: '1px solid #1F2937',  // graphite-800
        boxShadow: 'none',
        transition: `border-color ${duration.short}ms ${easing.easeInOut}, box-shadow ${duration.short}ms ${easing.easeInOut}`,
        '&:hover': {
          borderColor: '#374151',  // graphite-700
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },

  // Paper - flat, no shadows
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
      elevation0: {
        boxShadow: 'none',
      },
      elevation1: {
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
      },
      elevation2: {
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.25)',
      },
      elevation3: {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },

  // Button - flat, subtle hover
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none' as const,
        fontWeight: 500,
        borderRadius: 6,
        boxShadow: 'none',
        transition: `background-color ${duration.shorter}ms ${easing.easeInOut}`,
        '&:hover': {
          boxShadow: 'none',
        },
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
        },
      },
      outlined: {
        borderWidth: 1,
      },
    },
  },

  // Text field
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 6,
        },
      },
    },
  },

  // Input base
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontSize: '0.875rem',
      },
    },
  },

  // Outlined input - dark styling with violet focus
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        backgroundColor: inputColors.background,
        transition: `border-color ${duration.shorter}ms ${easing.easeInOut}, background-color ${duration.shorter}ms ${easing.easeInOut}`,
        '&:hover': {
          backgroundColor: inputColors.backgroundHover,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: inputColors.borderHover,
        },
        '&.Mui-focused': {
          backgroundColor: inputColors.background,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: inputColors.borderFocus,
          borderWidth: 1,
        },
      },
      notchedOutline: {
        borderColor: inputColors.border,
        transition: `border-color ${duration.shorter}ms ${easing.easeInOut}`,
      },
    },
  },

  // Input label - graphite base, violet focus
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: '#6B7280',  // graphite-500
        fontSize: '0.875rem',
        '&.Mui-focused': {
          color: '#A78BFA',  // violet-400
        },
      },
    },
  },

  // Select
  MuiSelect: {
    styleOverrides: {
      select: {
        borderRadius: 6,
      },
    },
  },

  // List items
  MuiListItem: {
    styleOverrides: {
      root: {
        transition: `background-color ${duration.shorter}ms ${easing.easeInOut}`,
      },
    },
  },

  // Table rows
  MuiTableRow: {
    styleOverrides: {
      root: {
        transition: `background-color ${duration.shorter}ms ${easing.easeInOut}`,
      },
    },
  },

  // Tabs - subtle violet hover
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none' as const,
        fontWeight: 500,
        transition: `color ${duration.short}ms ${easing.easeInOut}, background-color ${duration.short}ms ${easing.easeInOut}`,
        '&:hover': {
          backgroundColor: 'rgba(139, 92, 246, 0.08)',
        },
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      indicator: {
        height: 2,
        borderRadius: '2px 2px 0 0',
        backgroundColor: '#8B5CF6',  // violet-500
      },
    },
  },

  // Chips
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        transition: `background-color ${duration.shorter}ms ${easing.easeInOut}`,
      },
    },
  },

  // IconButton
  MuiIconButton: {
    styleOverrides: {
      root: {
        transition: `opacity ${duration.shorter}ms ${easing.easeInOut}`,
        '&:hover': {
          opacity: 0.8,
        },
      },
    },
  },

  // Divider
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
  },

  // Autocomplete
  MuiAutocomplete: {
    styleOverrides: {
      inputRoot: {
        borderRadius: 6,
      },
    },
  },
};

/**
 * Flat, minimal icons for Backstage navigation
 * Using outlined/linear style for a cleaner look
 */

import { SvgIcon, SvgIconProps } from '@material-ui/core';

// Home - simple house outline
export const HomeIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 21V12h6v9"
    />
  </SvgIcon>
);

// Search - simple magnifying glass
export const SearchIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <circle
      cx="11"
      cy="11"
      r="7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M16 16l4.5 4.5"
    />
  </SvgIcon>
);

// Menu - three horizontal lines
export const MenuIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </SvgIcon>
);

// API/Extension - puzzle piece outline
export const ApiIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 3H12a1 1 0 00-1 1v1.5a1 1 0 01-1 1H8.5a1 1 0 00-1 1V9a1 1 0 01-1 1H5a1 1 0 00-1 1v2a1 1 0 001 1h1.5a1 1 0 011 1v1.5a1 1 0 001 1H10a1 1 0 011 1V20a1 1 0 001 1h2a1 1 0 001-1v-1.5a1 1 0 011-1h1.5a1 1 0 001-1V15a1 1 0 011-1H20a1 1 0 001-1v-2a1 1 0 00-1-1h-1.5a1 1 0 01-1-1V7.5a1 1 0 00-1-1H15a1 1 0 01-1-1V4a1 1 0 00-1-1z"
    />
  </SvgIcon>
);

// Docs/Book - open book outline
export const DocsIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 19.5A2.5 2.5 0 016.5 17H20"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M8 7h8M8 11h5"
    />
  </SvgIcon>
);

// Create/Add - plus in circle outline
export const CreateIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M12 8v8M8 12h8"
    />
  </SvgIcon>
);

// Group/People - two person outline
export const GroupIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <circle
      cx="9"
      cy="7"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"
    />
    <circle
      cx="17"
      cy="7"
      r="2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M17 11.5a3 3 0 013 3v.5"
    />
  </SvgIcon>
);

// Settings - gear outline
export const SettingsIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="12"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2h0a2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2h0a2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2h0a2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2h0a2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
    />
  </SvgIcon>
);

// Notification - bell outline
export const NotificationIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.73 21a2 2 0 01-3.46 0"
    />
  </SvgIcon>
);

// Catalog - grid/dashboard outline
export const CatalogIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <rect
      x="3"
      y="3"
      width="7"
      height="7"
      rx="1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="14"
      y="3"
      width="7"
      height="7"
      rx="1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="3"
      y="14"
      width="7"
      height="7"
      rx="1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="14"
      y="14"
      width="7"
      height="7"
      rx="1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </SvgIcon>
);

// Graph - nodes connected
export const GraphIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <circle
      cx="6"
      cy="6"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle
      cx="18"
      cy="6"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle
      cx="12"
      cy="18"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      d="M8.5 7.5l3 7.5M15.5 7.5l-3 7.5M9 6h6"
    />
  </SvgIcon>
);

// Light mode - sun outline
export const LightModeIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="12"
      r="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
    />
  </SvgIcon>
);

// Dark mode - moon outline
export const DarkModeIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
    />
  </SvgIcon>
);

// Warning - triangle outline
export const WarningIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M12 9v4M12 17h.01"
    />
  </SvgIcon>
);

// Star - outline
export const StarIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  </SvgIcon>
);

// Star filled
export const StarFilledIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  </SvgIcon>
);

// User - person outline
export const UserIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="8"
      r="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1"
    />
  </SvgIcon>
);

// External link
export const ExternalLinkIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
    />
  </SvgIcon>
);

// Component - box/cube outline
export const ComponentIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
    />
  </SvgIcon>
);

// Domain - building outline
export const DomainIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"
    />
  </SvgIcon>
);

// System - server outline
export const SystemIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <rect
      x="2"
      y="3"
      width="20"
      height="7"
      rx="1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="2"
      y="14"
      width="20"
      height="7"
      rx="1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M6 6.5h.01M6 17.5h.01"
    />
  </SvgIcon>
);

// Resource - database outline
export const ResourceIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <ellipse
      cx="12"
      cy="5"
      rx="9"
      ry="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
    />
  </SvgIcon>
);

// Location - map pin outline
export const LocationIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
    />
    <circle
      cx="12"
      cy="10"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </SvgIcon>
);

// Chat - message bubble outline
export const ChatIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
    />
  </SvgIcon>
);

// Broken image
export const BrokenImageIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M3 15l4-4 4 4 6-6 4 4"
    />
    <circle
      cx="8.5"
      cy="8.5"
      r="1.5"
      fill="currentColor"
    />
  </SvgIcon>
);

// Scaffolder/Template - file plus outline
export const ScaffolderIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 2v6h6M12 18v-6M9 15h6"
    />
  </SvgIcon>
);

/**
 * Centralized Theme Colors
 *
 * Edit hex color codes here to update them across the entire portfolio:
 * - Tailwind utilities (bg-surface-base, bg-primary-container, hover:bg-primary-hover, etc.)
 * - Global CSS (body background, selection, scrollbars, text gradients)
 * - Canvas animations (DotParticles)
 * - NextTopLoader & HTML meta theme-color
 */

function hexToRgb(hex) {
  const cleanHex = hex.replace('#', '');
  const num = parseInt(cleanHex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `${r}, ${g}, ${b}`;
}

const themeColors = {
  // Background & surface layers
  surfaceBase: '#0f172a', // Slate 900
  surfaceRaised: '#1e293b', // Slate 800 (Cards)
  surfaceOverlay: '#334155', // Slate 700
  surfaceCard: '#1e293b',
  surfaceHigh: '#334155',
  surfaceHighest: '#475569',

  // Primary brand / Amber accent
  primary: '#eab308',
  primaryContainer: '#ca8a04',
  primaryHover: '#a16207',
  primaryForeground: '#0f172a',
  primaryGradientStart: '#fde047',

  // Typography
  textPrimary: '#F8FAFC',
  textSecondary: '#CBD5E1',
  textMuted: '#94A3B8',

  // Status & Highlights
  accentNeon: '#ca8a04',
  successEmerald: '#10B981',

  // Scrollbar
  scrollbarThumb: '#262933'
};

// Computed RGB channels for alpha/glow effects
const themeRgb = {
  primaryContainer: hexToRgb(themeColors.primaryContainer)
};

// Tailwind colors mapping
const tailwindColors = {
  'surface-base': themeColors.surfaceBase,
  'surface-raised': themeColors.surfaceRaised,
  'surface-overlay': themeColors.surfaceOverlay,
  'surface-card': themeColors.surfaceCard,
  'surface-high': themeColors.surfaceHigh,
  'surface-highest': themeColors.surfaceHighest,

  primary: themeColors.primary,
  'primary-container': themeColors.primaryContainer,
  'primary-hover': themeColors.primaryHover,
  'primary-foreground': themeColors.primaryForeground,
  'primary-gradient-start': themeColors.primaryGradientStart,
  'primary-subtle': `rgba(${themeRgb.primaryContainer}, 0.12)`,

  'border-subtle': 'rgba(255, 255, 255, 0.08)',
  'border-glow': `rgba(${themeRgb.primaryContainer}, 0.35)`,

  'text-primary': themeColors.textPrimary,
  'text-secondary': themeColors.textSecondary,
  'text-muted': themeColors.textMuted,

  'accent-neon': themeColors.accentNeon,
  'success-emerald': themeColors.successEmerald,

  'scrollbar-thumb': themeColors.scrollbarThumb
};

module.exports = {
  themeColors,
  themeRgb,
  tailwindColors,
  hexToRgb
};

export interface ThemeColors {
  surfaceBase: string;
  surfaceRaised: string;
  surfaceOverlay: string;
  surfaceCard: string;
  surfaceHigh: string;
  surfaceHighest: string;

  primary: string;
  primaryContainer: string;
  primaryHover: string;
  primaryForeground: string;
  primaryGradientStart: string;

  textPrimary: string;
  textSecondary: string;
  textMuted: string;

  accentNeon: string;
  successEmerald: string;
  scrollbarThumb: string;
}

export interface ThemeRgb {
  primaryContainer: string;
}

export declare const themeColors: ThemeColors;
export declare const themeRgb: ThemeRgb;
export declare const tailwindColors: Record<string, string>;
export declare function hexToRgb(hex: string): string;

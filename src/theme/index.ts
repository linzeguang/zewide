import type { Breakpoints, Colors, MediaQueries, Radii, Shadows, Spacing, ZIndices } from './types';

export interface ZewideTheme {
  siteWidth: number | string;
  duration: number;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
  colors: Colors;
}

export { colors } from './colors';
export { default as theme } from './theme';
export * from './types';

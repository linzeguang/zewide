import type { Breakpoints, MediaQueries, Radii, Shadows, Spacing, ZIndices } from './types';

export interface ZewideTheme {
  siteWidth: number | string;
  duration: string;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { colors } from './colors';
export { default as defaultTheme } from './default';
export * from './types';

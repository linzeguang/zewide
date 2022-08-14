import type { Breakpoints, MediaQueries, Radii, Shadows, Spacing, ZIndices } from './types';

export const siteWidth: number | string = 1200;

export const duration: string = '300ms';

export const breakpointMap: Record<string, number> = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1200,
};

export const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`,
);

export const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

export const shadows: Shadows = {};

export const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

export const radii: Radii = {
  small: '4px',
  default: '16px',
  card: '24px',
  circle: '50%',
};

export const zIndices: ZIndices = {
  dropdown: 10,
  modal: 100,
};

import type { Breakpoints, MediaQueries, Radii, Shadows, Spacing, ZIndices } from './types';

export const siteWidth: number | string = 1200;

export const duration: number = 0.3;

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
  mobile: `@media screen and (max-width: ${breakpointMap.sm}px)`,
  tablet: `@media screen and (min-width: ${breakpointMap.sm + 1}px) and (max-width: ${
    breakpointMap.xl
  }px)`,
  desktop: `@media screen and (min-width: ${breakpointMap.xl + 1}px)`,
};

export const shadows: Shadows = {
  modal: '0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05)',
  dropdown: '0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05)',
};

export const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

export const radii: Radii = {
  modal: '24px',
  dropdown: '12px',
};

export const zIndices: ZIndices = {
  dropdown: 10,
  modal: 100,
  overlay: 90,
};

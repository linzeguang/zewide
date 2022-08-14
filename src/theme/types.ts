export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {};

export type Shadows = {};

export type Gradients = {};

export type BaseColors = {};

export type AdditionalColors = {};

export interface Colors extends BaseColors, AdditionalColors {}

export type ZIndices = {
  dropdown: number;
  modal: number;
};

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

export type Radii = {
  // 圆角
};

export type Shadows = {
  // 阴影
};

export type Gradients = {
  // 渐变色
};

export type BaseColors = {
  // 基础色
  white: string;
  black: string;
  grey: string;
};

export type AdditionalColors = {
  // 额外颜色
};

export interface Colors extends BaseColors, AdditionalColors {}

export type ZIndices = {
  dropdown: number;
  modal: number;
};

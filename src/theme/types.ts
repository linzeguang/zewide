import type { generate } from '@ant-design/colors';

export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  nav: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Spacing = number[];

export type Radii = {
  // 圆角
  modal: string;
  dropdown: string;
};

export type Shadows = {
  // 阴影
  modal: string;
  dropdown: string;
};

export type Gradients = {
  // 渐变色
};

export type BaseColors = {
  // 基础色
  white: string;
  black: string;
  blue: string;
  cyan: string;
  geekblue: string;
  gold: string;
  green: string;
  grey: string;
  lime: string;
  magenta: string;
  orange: string;
  purple: string;
  red: string;
  volcano: string;
  yellow: string;
};

export type AdditionalColors = {
  // 额外颜色
  overlay: string;
  modal: string;
};

export interface Colors extends BaseColors, AdditionalColors {
  generate: typeof generate;
}

export type ZIndices = {
  dropdown: number;
  modal: number;
  overlay: number;
};

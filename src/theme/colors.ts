import type { AdditionalColors, BaseColors, Colors } from './types';

export const baseColors: BaseColors = {};

export const additionalColors: AdditionalColors = {};

export const colors: Colors = {
  ...baseColors,
  ...additionalColors,
};

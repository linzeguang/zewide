import type { AdditionalColors, BaseColors, Colors } from './types';

export const baseColors: BaseColors = {
  white: '#fff',
  black: '#000',
  grey: '#666',
};

export const additionalColors: AdditionalColors = {};

export const colors: Colors = {
  ...baseColors,
  ...additionalColors,
};

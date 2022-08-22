import { generate, presetPrimaryColors } from '@ant-design/colors';

import type { AdditionalColors, BaseColors, Colors } from './types';

export const baseColors = {
  white: '#fff',
  black: '#000',
  ...presetPrimaryColors,
} as BaseColors;

export const additionalColors: AdditionalColors = {
  overlay: 'rgba(0, 0, 0, 0.3)',
  modal: baseColors.white,
};

export const colors: Colors = {
  ...baseColors,
  ...additionalColors,
  generate,
};

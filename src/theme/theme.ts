import type { Theme } from '@emotion/react';

import * as base from './base';
import { colors } from './colors';

const theme: Theme = {
  ...base,
  colors: colors,
};

export default theme;

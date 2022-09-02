import { motion } from 'framer-motion';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import type { Colors } from '../../theme';

export interface DividerProps {
  color?: keyof Omit<Colors, 'generate'>;
  type?: 'horizontal' | 'vertical';
  dashed?: boolean;
  width?: string;
  height?: string;
}

export const Divider = styled(motion.div, {
  shouldForwardProp,
})<DividerProps>(
  ({ theme, color = 'grey', type = 'horizontal', dashed = false, width = '1px', height }) => [
    css`
      border-color: ${theme.colors[color]};
    `,
    dashed
      ? css`
          border-style: dashed;
        `
      : css`
          border-style: solid;
        `,
    type === 'horizontal'
      ? css`
          width: 100%;
          border-top-width: ${width};
        `
      : css`
          height: ${height ?? '100%'};
          border-left-width: ${width};
        `,
  ],
);

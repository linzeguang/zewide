import { motion } from 'framer-motion';
import type {
  BackgroundProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';
import { background, color, layout, position, space } from 'styled-system';

import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

export interface BoxProps
  extends PositionProps,
    LayoutProps,
    SpaceProps,
    BackgroundProps,
    ColorProps {}

export const Box = styled(motion.div, { shouldForwardProp })<BoxProps>`
  ${position}
  ${layout}
  ${space}
  ${background}
  ${color}
`;

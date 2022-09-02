import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type {
  ColorProps,
  LayoutProps,
  SpaceProps,
  TypographyProps as TextProps,
} from 'styled-system';
import { layout, space, typography as text } from 'styled-system';

import styled from '@emotion/styled';

export interface TypographyProps extends LayoutProps, SpaceProps, TextProps, ColorProps {
  ellipsis?: boolean;
  textTransform?: CSSProperties['textTransform'];
}

export const Typography = styled(motion.div)<TypographyProps>`
  font-size: initial;
  line-height: 1;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${space}
  ${text}
  ${layout}
`;

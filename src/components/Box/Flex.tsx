import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { FlexboxProps, GridGapProps } from 'styled-system';
import { flexbox, gridGap } from 'styled-system';

import type { BaseProps } from '../base';
import { baseCss } from '../base';

export interface FlexProps extends BaseProps, FlexboxProps, GridGapProps {
  reverse?: boolean;
}

export const Flex = styled(motion.div)<Omit<FlexProps, 'reverse'>>`
  display: flex;

  ${flexbox}
  ${gridGap}
  ${baseCss}
`;

export const FlexRow = styled(Flex)<FlexProps>`
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

export const FlexColumn = styled(Flex)<FlexProps>`
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
`;

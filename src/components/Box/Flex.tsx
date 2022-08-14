import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { FlexboxProps } from 'styled-system';

import type { BaseProps } from '../types';

export interface FlexProps extends BaseProps, FlexboxProps {
  reverse?: boolean;
}

export const Flex = styled(motion.div)<Omit<FlexProps, 'reverse'>>`
  display: flex;
`;

export const FlexRow = styled(Flex)<FlexProps>`
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

export const FlexColumn = styled(Flex)<FlexProps>`
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
`;

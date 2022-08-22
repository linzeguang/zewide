import type { FlexboxProps, GridGapProps } from 'styled-system';
import { flexbox, gridGap } from 'styled-system';

import styled from '@emotion/styled';

import type { BoxProps } from './Box';
import { Box } from './Box';

export interface FlexProps extends BoxProps, FlexboxProps, GridGapProps {
  reverse?: boolean;
}

export const Flex = styled(Box)<Omit<FlexProps, 'reverse'>>`
  display: flex;

  ${flexbox}
  ${gridGap}
`;

export const FlexRow = styled(Flex)<FlexProps>`
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

export const FlexColumn = styled(Flex)<FlexProps>`
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
`;

import type { GridProps as GridBoxProps } from 'styled-system';
import { grid } from 'styled-system';

import styled from '@emotion/styled';

import type { BoxProps } from './Box';
import { Box } from './Box';

export interface GridProps extends BoxProps, GridBoxProps {}

export const Grid = styled(Box)<GridProps>`
  display: grid;

  ${grid}
`;

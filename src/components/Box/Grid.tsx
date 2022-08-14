import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { GridProps as GridBoxProps } from 'styled-system';

import type { BaseProps } from '../types';

export interface GridProps extends BaseProps, GridBoxProps {}

export const Grid = styled(motion.div)<GridProps>`
  display: grid;
`;

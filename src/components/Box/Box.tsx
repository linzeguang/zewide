import { motion } from 'framer-motion';
import styled from 'styled-components';

import type { BaseProps } from '../types';

export type BoxProps = BaseProps;

export const Box = styled(motion.div)<BoxProps>(({ theme }) => {
  console.log(theme);
  return ``;
});

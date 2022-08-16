import { motion } from 'framer-motion';
import styled from 'styled-components';

import type { BaseProps } from '../base';
import { baseCss } from '../base';

export type BoxProps = BaseProps;

export const Box = styled(motion.div)<BoxProps>`
  ${baseCss}
`;

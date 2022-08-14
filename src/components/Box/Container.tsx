import { motion } from 'framer-motion';
import styled from 'styled-components';

import type { BaseProps } from '../types';

export type ContainerProps = BaseProps;

export const Container = styled(motion.div)<ContainerProps>`
  width: 100%;
  max-width: ${({ theme }) => theme.siteWidth};
  margin: 0 auto;
`;

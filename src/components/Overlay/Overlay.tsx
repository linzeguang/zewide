import { motion } from 'framer-motion';

import styled from '@emotion/styled';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.overlay};
  z-index: ${({ theme }) => theme.zIndices.overlay};
`;

Overlay.defaultProps = {
  transition: { ease: 'easeInOut' },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

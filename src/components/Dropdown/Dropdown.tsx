import React, { useState } from 'react';

import { AnimatePresence, domMax, LazyMotion } from 'framer-motion';

import styled from '@emotion/styled';

import { Box } from '../Box';

import type { DropdownProps, Placement } from './types';

const getPlacement = (placement: Placement) => {
  switch (placement) {
    case 'left':
      return 'left: 0;';
    case 'right':
      return 'right: 0;';
    default:
      return '';
  }
};

const DropdownContent = styled(Box)<{ placement: Placement }>`
  position: absolute;
  display: block;
  ${({ placement }) => getPlacement(placement)}
  max-height: 400px;
  padding-top: 4px;
  overflow-y: auto;
  transform-origin: top center;
`;

DropdownContent.defaultProps = {
  transition: { ease: 'easeInOut' },
  initial: { scaleY: 0, opacity: 0 },
  animate: { scaleY: 1, opacity: 1 },
  exit: { scaleY: 0, opacity: 0 },
};

const Container = styled(Box)`
  position: relative;
  display: inline-block;
`;

export const Dropdown: React.FC<React.PropsWithChildren<DropdownProps>> = ({
  placement = 'left',
  target,
  children,
}) => {
  const [visible, toggle] = useState(false);
  return (
    <Container onMouseEnter={() => toggle(true)} onMouseLeave={() => toggle(false)}>
      {target}
      <LazyMotion features={domMax}>
        <AnimatePresence>
          {visible && <DropdownContent placement={placement}>{children}</DropdownContent>}
        </AnimatePresence>
      </LazyMotion>
    </Container>
  );
};
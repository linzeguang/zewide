import React from 'react';

import { motion } from 'framer-motion';

import styled from '@emotion/styled';

import { ArrowLeft, Box, Button, Close, FlexRow } from '../../components';

import type { ModalProps } from './types';

export const ModalHeader = styled(FlexRow)`
  align-items: center;
  display: flex;
  padding: 24px 56px 12px 24px;
`;

export const ModalTitle = styled(FlexRow)`
  flex: 1;
  align-items: center;
  font-weight: bold;
`;

export const ModalBody = styled(Box)`
  max-height: 90vh;
  overflow-y: auto;
`;

Close.defaultProps = {
  transition: { ease: 'easeInOut' },
  initial: { rotate: -90 },
  animate: { rotate: 0 },
  exit: { rotate: -90 },
};
export const ModalCloseButton: React.FC<{ onDismiss: ModalProps['onDismiss'] }> = ({
  onDismiss,
}) => (
  <Button
    variant="text"
    position="absolute"
    top="24px"
    right="24px"
    onClick={onDismiss}
    aria-label="Close the dialog"
  >
    <Close width="24" height="24" className="modal-close" />
  </Button>
);

export const ModalBackButton: React.FC<{ onBack: ModalProps['onBack'] }> = ({ onBack }) => (
  <Button variant="text" onClick={onBack} area-label="go back">
    <ArrowLeft width="24" height="24" color="primary" />
  </Button>
);

export const ModalContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  margin-top: 20vh;
  background: ${({ theme }) => theme.colors.modal};
  box-shadow: ${({ theme }) => theme.shadows.modal};
  border-radius: ${({ theme }) => theme.radii.modal};
  max-height: 100vh;
  z-index: ${({ theme }) => theme.zIndices.modal};
`;

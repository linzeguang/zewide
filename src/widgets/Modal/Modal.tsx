import React from 'react';

import type { PropsWithChildren } from 'react';

import { Typography } from '../../components';

import {
  ModalBackButton,
  ModalBody,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalTitle,
} from './styles';
import type { ModalProps } from './types';

ModalContainer.defaultProps = {
  transition: { ease: 'easeInOut' },
  initial: { translateY: 40, opacity: 0 },
  animate: { translateY: 0, opacity: 1 },
  exit: { translateY: 40, opacity: 0 },
};

const Modal: React.FC<PropsWithChildren<ModalProps>> = (props) => {
  const {
    title,
    children,
    hideCloseButton = false,
    bodyPadding = '24px',
    width = '500px',
    onDismiss,
    onBack,
  } = props;
  return (
    <ModalContainer style={{ width }}>
      {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
      <ModalHeader>
        <ModalTitle>
          {onBack && <ModalBackButton onBack={onBack} />}
          <Typography fontSize={20} className="modal-title">
            {title}
          </Typography>
        </ModalTitle>
      </ModalHeader>
      <ModalBody p={bodyPadding}>{children}</ModalBody>
    </ModalContainer>
  );
};

export default Modal;

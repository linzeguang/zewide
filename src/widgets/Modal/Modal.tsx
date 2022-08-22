import React from 'react';

import type { HTMLMotionProps } from 'framer-motion';

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

const Modal: React.FC<ModalProps & HTMLMotionProps<'div'>> = (props) => {
  const {
    title,
    children,
    hideCloseButton = false,
    bodyPadding = '24px',
    width = '320px',
    onDismiss,
    onBack,
    ...rest
  } = props;
  return (
    <ModalContainer width={width} {...rest}>
      {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
      <ModalHeader>
        <ModalTitle>
          {onBack && <ModalBackButton onBack={onBack} />}
          <Typography fontSize={20}>{title}</Typography>
        </ModalTitle>
      </ModalHeader>
      <ModalBody p={bodyPadding}>{children}</ModalBody>
    </ModalContainer>
  );
};

export default Modal;

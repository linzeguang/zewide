import React, { createContext, useCallback, useState } from 'react';

import { AnimatePresence, domMax, LazyMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import { BodyLock, FlexColumn, Overlay } from '../../components';

import type { Handler } from './types';

interface ModalsContext {
  isOpen: boolean;
  nodeId: string;
  modalNode: React.ReactNode;
  setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  onPresent: (node: React.ReactNode, newNodeId: string) => void;
  onDismiss: Handler;
  setAfterEvent: React.Dispatch<React.SetStateAction<[Handler, Handler] | undefined>>;
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWrapper = styled(FlexColumn)`
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal - 1};
`;

const initialValue: ModalsContext = {
  isOpen: false,
  nodeId: '',
  modalNode: null,
  setModalNode: () => null,
  onPresent: () => null,
  onDismiss: () => null,
  setAfterEvent: () => undefined,
  setCloseOnOverlayClick: () => true,
};

export const Context = createContext<ModalsContext>(initialValue);

const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>();
  const [nodeId, setNodeId] = useState('');
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);
  const [afterEvent, setAfterEvent] = useState<[Handler, Handler]>();

  const handlePresent = useCallback(
    (node: React.ReactNode, newNodeId: string) => {
      setModalNode(node);
      setIsOpen(true);
      setNodeId(newNodeId);
      if (afterEvent && afterEvent[0]) afterEvent[0]();
    },
    [afterEvent],
  );

  const handleDismiss = useCallback(() => {
    setModalNode(undefined);
    setIsOpen(false);
    setNodeId('');
    if (afterEvent && afterEvent[1]) afterEvent[1]();
  }, [afterEvent]);

  const handleOverlayDismiss = useCallback(() => {
    if (closeOnOverlayClick) {
      handleDismiss();
    }
  }, [closeOnOverlayClick, handleDismiss]);

  return (
    <Context.Provider
      value={{
        isOpen,
        nodeId,
        modalNode,
        setModalNode,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setAfterEvent,
        setCloseOnOverlayClick,
      }}
    >
      <LazyMotion features={domMax}>
        <AnimatePresence>
          {isOpen && (
            <ModalWrapper>
              <BodyLock />
              <Overlay onClick={handleOverlayDismiss} />
              {React.isValidElement(modalNode) &&
                React.cloneElement(modalNode as React.ReactElement, {
                  onDismiss: handleDismiss,
                })}
            </ModalWrapper>
          )}
        </AnimatePresence>
      </LazyMotion>
      {children}
    </Context.Provider>
  );
};

export default ModalProvider;

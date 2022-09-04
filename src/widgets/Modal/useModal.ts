import { useCallback, useContext, useEffect, useState } from 'react';

import get from 'lodash/get';
import type React from 'react';

import { Context } from './ModalContext';
import type { Handler } from './types';

const useModal = (
  modal: React.ReactNode,
  closeOnOverlayClick = true,
  updateOnPropsChange = false,
  modalId = 'defaultNodeId',
): [Handler, Handler, boolean] => {
  const {
    isOpen,
    nodeId,
    modalNode,
    setModalNode,
    onPresent,
    onDismiss,
    setAfterEvent,
    setCloseOnOverlayClick,
  } = useContext(Context);
  const [visible, toggleVisible] = useState(isOpen);

  const onPresentCallback = useCallback(() => {
    onPresent(modal, modalId);
  }, [modal, modalId, onPresent]);

  const onDismissCallback = useCallback(() => {
    onDismiss();
  }, [onDismiss]);

  // Updates the "modal" component if props are changed
  // Use carefully since it might result in unnecessary rerenders
  // Typically if modal is staic there is no need for updates, use when you expect props to change
  useEffect(() => {
    // NodeId is needed in case there are 2 useModal hooks on the same page and one has updateOnPropsChange
    if (updateOnPropsChange && isOpen && nodeId === modalId) {
      const modalProps = get(modal, 'props');
      const oldModalProps = get(modalNode, 'props');
      // Note: I tried to use lodash isEqual to compare props but it is giving false-negatives too easily
      // For example ConfirmSwapModal in exchange has ~500 lines prop object that stringifies to same string
      // and online diff checker says both objects are identical but lodash isEqual thinks they are different
      // Do not try to replace JSON.stringify with isEqual, high risk of infinite rerenders
      // TODO: Find a good way to handle modal updates, this whole flow is just backwards-compatible workaround,
      // would be great to simplify the logic here
      if (
        modalProps &&
        oldModalProps &&
        JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)
      ) {
        setModalNode(modal);
      }
    }
  }, [updateOnPropsChange, nodeId, modalId, isOpen, modal, modalNode, setModalNode]);

  useEffect(() => {
    setAfterEvent([() => toggleVisible(true), () => toggleVisible(false)]);
    setCloseOnOverlayClick(closeOnOverlayClick);
  }, [closeOnOverlayClick, setAfterEvent, setCloseOnOverlayClick]);

  return [onPresentCallback, onDismissCallback, visible];
};

export default useModal;

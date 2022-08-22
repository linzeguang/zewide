import type { BoxProps } from '../../components';

export interface ModalTheme {
  background: string;
}

export type Handler = () => void;

export interface InjectedProps {
  onDismiss?: Handler;
}

export interface ModalProps extends InjectedProps, BoxProps {
  title: string;
  hideCloseButton?: boolean;
  bodyPadding?: string;
  width?: string;
  onBack?: () => void;
}

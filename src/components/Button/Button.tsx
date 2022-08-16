import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import type { TypographyProps } from 'styled-system';

import type { BaseProps } from '../base';
import { baseCss } from '../base';

export interface ButtonProps extends BaseProps, TypographyProps {
  icon?: ReactNode;
  loading?: boolean;
  circle?: boolean;
  variant?: 'default' | 'ghost' | 'dashed' | 'text';
}

const BaseButton = styled(motion.button)<ButtonProps>(({ circle, variant, theme }) => [
  baseCss,
  css`
    border-width: 1px;
    border-color: #000;
    transition-duration: ${theme.duration};
  `,
  circle &&
    css`
      border-radius: 50%;
    `,
  variant === 'ghost' &&
    css`
      border-style: solid;
    `,
  variant === 'dashed' &&
    css`
      border-style: dashed;
    `,
]);

const TextButton = styled(BaseButton)`
  padding: 0;
`;

export const Button: React.FC<HTMLMotionProps<'button'> & ButtonProps> = (props) => {
  const { variant, children, ...rest } = props;

  if (variant === 'text') return <TextButton {...rest}>{children}</TextButton>;

  return <BaseButton {...rest}>{children}</BaseButton>;
};
Button.defaultProps = {
  variant: 'default',
};

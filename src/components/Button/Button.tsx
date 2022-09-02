import { motion } from 'framer-motion';
import type {
  BackgroundProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import { background, compose, layout, position, space, typography } from 'styled-system';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

import type { Colors } from '../../theme';

export interface ButtonProps
  extends PositionProps,
    LayoutProps,
    SpaceProps,
    TypographyProps,
    BackgroundProps {
  circle?: boolean;
  color?: keyof Omit<Colors, 'generate'>;
  textColor?: keyof Omit<Colors, 'generate'>;
  variant?: 'primary' | 'ghost' | 'text';
}

export const Button = styled(motion.button, {
  shouldForwardProp,
})<ButtonProps>(
  ({ circle = false, color = 'blue', textColor, variant = 'primary', theme }) => [
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.5em;
      font-size: 14px;
      cursor: pointer;
      transition-duration: ${theme.duration}s;

      :disabled {
        cursor: not-allowed;
      }
    `,
    circle &&
      css`
        border-radius: 2em;
      `,
    variant === 'primary' &&
      css`
        color: ${theme.colors[textColor || 'white']};
        background-color: ${theme.colors[color]};
        border-width: 1px;
        border-style: solid;
        border-color: ${theme.colors[color]};

        :hover {
          background-color: ${theme.colors.generate(theme.colors[color])[6]};
          border-color: ${theme.colors.generate(theme.colors[color])[6]};
        }

        :disabled {
          background-color: ${theme.colors.generate(theme.colors[color])[3]};
          border-color: ${theme.colors.generate(theme.colors[color])[3]};
        }
      `,
    variant === 'ghost' &&
      css`
        color: ${theme.colors[textColor || color]};
        border-width: 1px;
        border-style: solid;
        border-color: ${theme.colors[color]};

        :hover {
          color: ${theme.colors.generate(theme.colors[textColor || color])[6]};
          border-color: ${theme.colors.generate(theme.colors[color])[6]};
        }

        :disabled {
          color: ${theme.colors.generate(theme.colors[textColor || color])[3]};
          border-color: ${theme.colors.generate(theme.colors[color])[3]};
        }
      `,
    variant === 'text' &&
      css`
        padding: 0;
        color: ${theme.colors[textColor || color]};

        :hover {
          color: ${theme.colors.generate(theme.colors[textColor || color])[6]};
        }

        :disabled {
          color: ${theme.colors.generate(theme.colors[textColor || color])[3]};
        }
      `,
  ],
  compose(position, layout, space, typography, background),
);

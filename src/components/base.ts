import { css } from 'styled-components';
import type { ColorProps, LayoutProps, SpaceProps } from 'styled-system';
import { color, layout, space } from 'styled-system';

export interface BaseProps extends LayoutProps, SpaceProps, ColorProps {}

export const baseCss = css`
  ${layout}
  ${space}
  ${color}
`;

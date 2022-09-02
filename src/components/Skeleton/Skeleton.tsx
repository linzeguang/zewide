import { motion } from 'framer-motion';
import type { BackgroundProps, BorderRadiusProps, LayoutProps, SpaceProps } from 'styled-system';
import { background, borderRadius, compose, layout, space } from 'styled-system';

import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

export interface SkeletonProps extends SpaceProps, LayoutProps, BackgroundProps, BorderRadiusProps {
  // color?: keyof Omit<Colors, 'generate'>;
  circle?: boolean;
}

const skeletonAnimate = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  } 
`;

export const Skeleton = styled(motion.div, {
  shouldForwardProp,
})<SkeletonProps>(
  ({ circle = false }) => [
    css`
      display: inline-flex;
      position: relative;
      width: 100%;
      background-color: #ebebeb;
      opacity: 0.2;
      overflow: hidden;

      :after {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        display: block;
        height: 100%;
        background-image: linear-gradient(90deg, #ebebeb, #f5f5f5, #ebebeb);
        background-repeat: no-repeat;
        animation-name: ${skeletonAnimate};
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: 1.5s;
        content: ' ';
      }
    `,
    circle &&
      css`
        border-radius: 50%;
      `,
  ],
  compose(space, layout, background, borderRadius),
);

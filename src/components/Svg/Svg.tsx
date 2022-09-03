import type { SVGMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

import styled from '@emotion/styled';

export type SvgProps = SVGMotionProps<SVGSVGElement>;

export const Svg = styled(motion.svg)<SvgProps>`
  transform-origin: center !important;
`;

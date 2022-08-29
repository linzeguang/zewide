import type { SVGMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

export type SvgProps = SVGMotionProps<SVGSVGElement>;

export const Svg = styled(motion.svg, { shouldForwardProp })<SvgProps>``;

import React from 'react';

import type { MotionConfigProps } from 'framer-motion';
import { MotionConfig } from 'framer-motion';

import { useTheme } from '@emotion/react';

export const MotionProvider: React.FC<MotionConfigProps> = (props) => {
  const { transition, ...rest } = props;
  const { duration } = useTheme();

  const defaulrTransition = Object.assign({ ...props.transition }, { duration });

  return <MotionConfig transition={defaulrTransition} {...rest} />;
};

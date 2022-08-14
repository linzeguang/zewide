import React from 'react';

import { MotionConfig } from 'framer-motion';
import { useTheme } from 'styled-components';

const MotionProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { duration } = useTheme();

  return <MotionConfig transition={{ duration }} {...props} />;
};

export default MotionProvider;

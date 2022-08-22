import React from 'react';

import type { SvgProps } from './Svg';
import { Svg } from './Svg';

const ArrowLeft: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1024 1024" width="64" height="64" {...props}>
      <path
        d="M735.8 152.8l-45.3-45.3a4 4 0 0 0-5.6 0L331.3 461.1l-39.6 39.6a16.1 16.1 0 0 0 0 22.6l39.6 39.6 353.6 353.6a4 4 0 0 0 5.6 0l45.3-45.3a3.9 3.9 0 0 0 0-5.6L382.2 512l353.6-353.6a3.9 3.9 0 0 0 0-5.6z"
        p-id="18469"
      />
    </Svg>
  );
};

export default ArrowLeft;

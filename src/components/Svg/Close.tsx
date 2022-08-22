import React from 'react';

import type { SvgProps } from './Svg';
import { Svg } from './Svg';

const Close: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1024 1024" width="64" height="64" {...props}>
      <path
        d="M896.7 172.6l-45.3-45.3a4 4 0 0 0-5.6 0L512 461.1 178.2 127.3a4 4 0 0 0-5.6 0l-45.3 45.3a4 4 0 0 0 0 5.6L461.1 512 127.3 845.8a4 4 0 0 0 0 5.6l45.3 45.3a4 4 0 0 0 5.6 0L512 562.9l333.8 333.8a4 4 0 0 0 5.6 0l45.3-45.3a4 4 0 0 0 0-5.6L562.9 512l333.8-333.8a4 4 0 0 0 0-5.6z"
        p-id="18283"
      />
    </Svg>
  );
};

export default Close;

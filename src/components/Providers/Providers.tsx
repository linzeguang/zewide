import React from 'react';

import type { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';

import ResetCSS from '../../ResetCSS';

import MotionProvider from './MotionProvider';
import Web3Provider from './Web3Provider';

interface Props {
  theme: DefaultTheme;
}

const Providers: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { theme, ...rest } = props;

  return (
    <Web3Provider>
      <ThemeProvider theme={theme}>
        <ResetCSS />
        <MotionProvider {...rest} />
      </ThemeProvider>
    </Web3Provider>
  );
};

export default Providers;

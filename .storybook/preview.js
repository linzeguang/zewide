import { ThemeProvider } from '@emotion/react';
import { ModalProvider, MotionProvider, ResetCSS, theme, Web3Provider } from '../src';

const globalDecorator = (StoryFn) => (
  <Web3Provider>
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <MotionProvider>
        <ModalProvider>
          <StoryFn />
        </ModalProvider>
      </MotionProvider>
    </ThemeProvider>
  </Web3Provider>
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [globalDecorator];

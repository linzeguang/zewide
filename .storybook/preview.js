import { ThemeProvider } from '@emotion/react';
import { ModalProvider, MotionProvider, ResetCSS, theme } from '../src';

const globalDecorator = (StoryFn) => (
  <ThemeProvider theme={theme}>
    <ResetCSS />
    <MotionProvider>
      <ModalProvider>
        <StoryFn />
      </ModalProvider>
    </MotionProvider>
  </ThemeProvider>
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [globalDecorator];

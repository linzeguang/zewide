import { ThemeProvider } from '@emotion/react';
import { ModalProvider, ResetCSS, theme } from '../src';

const globalDecorator = (StoryFn) => (
  <ThemeProvider theme={theme}>
    <ResetCSS />
    <ModalProvider>
      <StoryFn />
    </ModalProvider>
  </ThemeProvider>
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [globalDecorator];

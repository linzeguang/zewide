import { ThemeProvider } from 'styled-components';
import { MotionProvider, ResetCSS, theme, Web3Provider } from '../src';

const globalDecorator = (StoryFn) => (
  <Web3Provider>
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <MotionProvider>
        <StoryFn />
      </MotionProvider>
    </ThemeProvider>
  </Web3Provider>
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [globalDecorator];

import React from 'react';
import { defaultTheme, Providers } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const globalDecorator = (StoryFn) => (
  <Providers theme={defaultTheme}>
    <StoryFn />
  </Providers>
);

export const decorators = [globalDecorator];

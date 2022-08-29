import type { ComponentMeta } from '@storybook/react';

import { Skeleton } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const Template = () => {
  return <Skeleton width={400} height={200} borderRadius={16} />;
};

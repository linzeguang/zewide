import * as antColor from '@ant-design/colors';
import type { ComponentMeta } from '@storybook/react';

import { Button, FlexRow } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Primary = () => {
  console.log(antColor);
  return (
    <FlexRow gridGap={20}>
      <Button backgroundColor="red">Primary</Button>
    </FlexRow>
  );
};

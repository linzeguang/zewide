import type { ComponentMeta } from '@storybook/react';

import { Box, Button, Dropdown, FlexRow } from '../components';
import { Divider } from '../components/Divider/Divider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Template = () => {
  return (
    <FlexRow gridGap={20}>
      <Dropdown target={<Button>left</Button>}>
        <Box backgroundColor="red" p="20px">
          Dropdown content
        </Box>
      </Dropdown>
      <Divider type="vertical" height="40px" dashed color="blue" />
      <Dropdown target={<Button>right</Button>} placement="right">
        <Box backgroundColor="red" p="20px">
          Dropdown content
        </Box>
      </Dropdown>
    </FlexRow>
  );
};

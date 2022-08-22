import type { ComponentMeta } from '@storybook/react';

import { Box, Button, Dropdown, FlexRow } from '../components';

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
      <Dropdown target={<Button>right</Button>} placement="right">
        <Box backgroundColor="red" p="20px">
          Dropdown content
        </Box>
      </Dropdown>
    </FlexRow>
  );
};

import type { ComponentMeta } from '@storybook/react';

import { Box, Button } from '../components';
import { Modal, useModal } from '../widgets';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Template = () => {
  const [onPresent] = useModal(<Modal title="这里是modal header">这里是modal contents</Modal>);

  return (
    <Box>
      <Button onClick={onPresent}>onPresent</Button>
    </Box>
  );
};

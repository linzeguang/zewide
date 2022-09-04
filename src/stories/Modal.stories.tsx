import styled from '@emotion/styled';
import type { ComponentMeta } from '@storybook/react';

import { Box, Button } from '../components';
import { Modal, useModal } from '../widgets';

const StyledBox = styled(Box)`
  height: 200px;
  background-color: black;
  ${Button} {
    width: 500px;
  }
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const Template = () => {
  const [onPresent, , visible] = useModal(
    <Modal title="这里是modal header">这里是modal contents </Modal>,
  );

  console.log('visible', visible);

  return (
    <StyledBox>
      <Button onClick={onPresent}>onPresent</Button>
    </StyledBox>
  );
};

import type { ComponentMeta } from '@storybook/react';

import { Button, FlexRow } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Variant = () => (
  <FlexRow gridGap={20}>
    <Button>Primary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="text">Text</Button>
  </FlexRow>
);

export const Color = () => (
  <FlexRow gridGap={20} flexWrap="wrap">
    <Button color="black">Black</Button>
    <Button color="blue">Blue</Button>
    <Button color="cyan">Cyan</Button>
    <Button color="geekblue">Geekblue</Button>
    <Button color="gold">Gold</Button>
    <Button color="green">Green</Button>
    <Button color="grey">Grey</Button>
    <Button color="lime">Lime</Button>
    <Button color="magenta">Magenta</Button>
    <Button color="orange">Orange</Button>
    <Button color="purple">Purple</Button>
    <Button color="red">Red</Button>
    <Button color="volcano">Volcano</Button>
    <Button color="yellow">Yellow</Button>
  </FlexRow>
);

export const TextColor = () => (
  <FlexRow gridGap={20} flexWrap="wrap">
    <Button variant="text" textColor="black">
      Black
    </Button>
    <Button variant="text" textColor="blue">
      Blue
    </Button>
    <Button variant="text" textColor="cyan">
      Cyan
    </Button>
    <Button variant="text" textColor="geekblue">
      Geekblue
    </Button>
    <Button variant="text" textColor="gold">
      Gold
    </Button>
    <Button variant="text" textColor="green">
      Green
    </Button>
    <Button variant="text" textColor="grey">
      Grey
    </Button>
    <Button variant="text" textColor="lime">
      Lime
    </Button>
    <Button variant="text" textColor="magenta">
      Magenta
    </Button>
    <Button variant="text" textColor="orange">
      Orange
    </Button>
    <Button variant="text" textColor="purple">
      Purple
    </Button>
    <Button variant="text" textColor="red">
      Red
    </Button>
    <Button variant="text" textColor="volcano">
      Volcano
    </Button>
    <Button variant="text" textColor="yellow">
      Yellow
    </Button>
  </FlexRow>
);

export const Circle = () => (
  <FlexRow gridGap={20}>
    <Button circle>Primary</Button>
    <Button circle variant="ghost">
      Ghost
    </Button>
  </FlexRow>
);

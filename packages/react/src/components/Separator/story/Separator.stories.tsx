import type { StoryFn } from '@storybook/react';
import { Flex, Separator } from '../../..';

export default {
  title: 'Components/Separator',
  component: Separator,
};

const Template: StoryFn<typeof Separator> = (args) => <Separator {...args} />;

export const Default = Template.bind({});

export const Vertical = Template.bind({});

Vertical.decorators = [
  () => (
    <Flex css={{ size: 50 }}>
      <Separator orientation="vertical" />
    </Flex>
  ),
];

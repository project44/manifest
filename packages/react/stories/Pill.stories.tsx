import type { ComponentStory } from '@storybook/react';
import { Icon } from '../src/components/Icon';
import { Flex } from '../src/components/Layout';
import { Pill } from '../src/components/Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
};

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: <Icon icon="flight" />,
  label: 'In Transit',
};

export const ColorScheme = Template.bind({});

ColorScheme.decorators = [
  () => (
    <Flex align="center" css={{ gap: '$small' }}>
      <Pill colorScheme="indigo" icon={<Icon icon="flight" />} label="In Transit" />
      <Pill colorScheme="red" icon={<Icon icon="front_hand" />} label="On Hold" />
    </Flex>
  ),
];

export const Collapsible = Template.bind({});

Collapsible.decorators = [
  () => (
    <Flex align="center" css={{ gap: '$small' }}>
      <Pill isCollapsible colorScheme="indigo" icon={<Icon icon="flight" />} label="In Transit" />
      <Pill isCollapsible colorScheme="red" icon={<Icon icon="front_hand" />} label="On Hold" />
    </Flex>
  ),
];

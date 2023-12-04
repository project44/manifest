import { AirplaneFilled, Clock } from '@project44-manifest/react-icons';
import type { StoryFn } from '@storybook/react';
import { Flex, Pill } from '../../..';

export default {
  title: 'Components/Pill',
  component: Pill,
};

const Template: StoryFn<typeof Pill> = (args) => <Pill {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: <AirplaneFilled />,
  label: 'In Transit',
};

export const ColorScheme = Template.bind({});

ColorScheme.decorators = [
  () => (
    <Flex align="center" css={{ gap: '$small' }}>
      <Pill colorScheme="indigo" icon={<AirplaneFilled />} label="In Transit" />
      <Pill colorScheme="red" icon={<Clock />} label="On Hold" />
    </Flex>
  ),
];

export const Collapsible = Template.bind({});

Collapsible.decorators = [
  () => (
    <Flex align="center" css={{ gap: '$small' }}>
      <Pill isCollapsible colorScheme="indigo" icon={<AirplaneFilled />} label="In Transit" />
      <Pill isCollapsible colorScheme="red" icon={<Clock />} label="On Hold" />
    </Flex>
  ),
];

export const CustomColor = Template.bind({});

CustomColor.decorators = [
  () => (
    <Flex align="center" css={{ gap: '$small' }}>
      <Pill
        css={{
          backgroundColor: '$colors$palette-green-50',
          '.manifest-pill__text': {
            backgroundColor: 'inherit',
            color: '$palette-green-700',
          },
          '.manifest-pill__icon': {
            backgroundColor: '$palette-green-700',
          },
        }}
        icon={<AirplaneFilled />}
        label="In Transit"
      />
    </Flex>
  ),
];

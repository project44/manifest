import * as React from 'react';
import { Box, Flex } from '../src';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Flex,
  title: 'Components/Flex',
  argTypes: {
    align: {
      control: { type: 'radio' },
      options: ['baseline', 'center', 'end', 'start'],
    },
    direction: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    justify: {
      control: { type: 'radio' },
      options: ['around', 'between', 'center', 'end', 'start'],
    },
    wrap: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = args => <Flex {...args} />;

export const Default = Template.bind({});

Default.args = {
  align: 'center',
  children: (
    <>
      <Box css={{ backgroundColor: '$background-secondary', size: 128 }}>Box</Box>
      <Box css={{ backgroundColor: '$background-tertiary', size: 128 }}>Box</Box>
    </>
  ),
  css: { height: '400px' },
  direction: 'horizontal',
};

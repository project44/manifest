import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from '../src';

export default {
  component: Box,
  title: 'Components/Box',
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = args => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {
  css: { backgroundColor: '$background-secondary', height: 200, width: 200 },
};

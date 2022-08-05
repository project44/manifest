import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Box } from '../Box';
import { Stack } from './Stack';

export default {
  title: 'Components/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = args => <Stack {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Box
        css={{
          backgroundColor: '$background-secondary',
          padding: '$small',
          textAlign: 'center',
          typography: '$body',
        }}
      >
        Item 1
      </Box>
      <Box
        css={{
          backgroundColor: '$background-secondary',
          padding: '$small',
          textAlign: 'center',
          typography: '$body',
        }}
      >
        Item 2
      </Box>
      <Box
        css={{
          backgroundColor: '$background-secondary',
          padding: '$small',
          textAlign: 'center',
          typography: '$body',
        }}
      >
        Item 3
      </Box>
    </>
  ),
};

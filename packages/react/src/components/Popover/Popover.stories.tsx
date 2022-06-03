import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Popover } from './Popover';
import { PopoverContent } from './PopoverContent';
import { PopoverTrigger } from './PopoverTrigger';

export default {
  title: 'Components/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = args => (
  <Popover {...args}>
    <PopoverTrigger>
      <Button>Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <Box css={{ padding: '$medium' }}>I am a popover!</Box>
    </PopoverContent>
  </Popover>
);

export const Default = Template.bind({});

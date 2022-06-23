import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { TextField } from './TextField';
import { Icon } from '../Icon';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  helperText: 'Please provide a shipment',
  label: 'Search shipments',
  placeholder: 'Enter shipment number...',
  startIcon: <Icon icon="search" />,
};

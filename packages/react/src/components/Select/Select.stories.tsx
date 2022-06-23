import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Select, SelectItem } from '.';
import { Icon } from '../Icon';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => (
  <Select {...args}>
    <SelectItem key="california">California</SelectItem>
    <SelectItem key="illinois">Illinois</SelectItem>
    <SelectItem key="new_york">New York</SelectItem>
    <SelectItem key="oregon">Oregon</SelectItem>
    <SelectItem key="texas">Texas</SelectItem>
  </Select>
);

export const Default = Template.bind({});
Default.args = {
  helperText: 'Please select a location.',
  label: 'State',
  placeholder: 'Select state...',
  startIcon: <Icon icon="public" />,
};

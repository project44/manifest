import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Combobox, ComboboxItem } from '.';
import { Icon } from '../Icon';

export default {
  title: 'Components/Combobox',
  component: Combobox,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
  },
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = args => (
  <Combobox {...args}>
    <ComboboxItem key="california">California</ComboboxItem>
    <ComboboxItem key="illinois">Illinois</ComboboxItem>
    <ComboboxItem key="new_york">New York</ComboboxItem>
    <ComboboxItem key="oregon">Oregon</ComboboxItem>
    <ComboboxItem key="texas">Texas</ComboboxItem>
  </Combobox>
);

export const Default = Template.bind({});
Default.args = {
  helperText: 'Please select a location.',
  label: 'State',
  placeholder: 'Select state...',
  startIcon: <Icon icon="public" />,
};

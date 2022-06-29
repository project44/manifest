import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Checkbox',
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: 'Checkbox',
  isDisabled: true,
};

export const Indetermine = Template.bind({});

Indetermine.args = {
  children: 'Checkbox',
  isIndeterminate: true,
  isSelected: true,
};

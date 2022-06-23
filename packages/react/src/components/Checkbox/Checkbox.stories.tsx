import * as React from 'react';
import { Checkbox } from './Checkbox';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Checkbox',
};

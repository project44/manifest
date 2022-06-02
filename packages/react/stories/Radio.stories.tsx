import * as React from 'react';
import { Radio, RadioGroup } from '../src';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof RadioGroup> = args => (
  <RadioGroup {...args}>
    <Radio value="one">Radio</Radio>
    <Radio value="two">Radio</Radio>
    <Radio value="three">Radio</Radio>
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'two',
};

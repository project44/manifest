import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Select } from '../Select';
import { SelectOption } from '../SelectOption';

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <SelectOption value="one">One</SelectOption>
      <SelectOption value="two">Two</SelectOption>
      <SelectOption value="three">Three</SelectOption>
    </>
  ),
};

import * as React from 'react';
import { Toggle } from './Toggle';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = args => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Toggle',
};

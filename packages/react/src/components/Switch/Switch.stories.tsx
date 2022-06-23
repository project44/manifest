import * as React from 'react';
import { Switch } from './Switch';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Switch',
};

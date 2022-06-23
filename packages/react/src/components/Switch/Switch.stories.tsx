import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Switch',
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: 'Switch',
  isDisabled: true,
};

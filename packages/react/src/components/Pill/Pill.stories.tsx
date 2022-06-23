import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Pill } from './Pill';
import { Icon } from '../Icon';

export default {
  title: 'Components/Pill',
  component: Pill,
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = args => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <Icon icon="flight" />,
  label: 'In Transit',
};

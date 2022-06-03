import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Input } from './Input';
import { Icon } from '../Icon';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Input',
};

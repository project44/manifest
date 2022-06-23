import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Input } from '../Input';
import { Icon } from '../../Icon';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  startIcon: <Icon icon="face" />,
  placeholder: 'Input',
};

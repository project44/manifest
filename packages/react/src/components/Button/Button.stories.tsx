import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
};

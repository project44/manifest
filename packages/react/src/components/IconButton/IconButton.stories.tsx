import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconButton } from './IconButton';
import { Icon } from '../Icon';

export default {
  title: 'Components/IconButton',
  component: IconButton,
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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Icon icon="add" />,
};

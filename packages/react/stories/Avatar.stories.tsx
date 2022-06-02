import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '../src';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    fallback: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
};

import type { StoryFn } from '@storybook/react';
import { Avatar, Stack } from '../../..';
import type { AvatarProps } from '../index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [
    (Story: StoryFn) => (
      <Stack css={{ alignItems: 'center' }} gap="medium" orientation="horizontal">
        <Story />
      </Stack>
    ),
  ],
  argTypes: {
    size: {
      control: 'radio',
      options: ['medium', 'small'],
    },
  },
};

export const Size = (args: AvatarProps) => (
  <>
    <Avatar {...args} />
  </>
);

Size.args = {
  size: 'small',
  src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
};

export const Fallback = (args: AvatarProps) => (
  <>
    <Avatar {...args} />
  </>
);

Fallback.args = {
  fallback: 'MD',
  size: 'medium',
};

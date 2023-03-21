import type { StoryFn } from '@storybook/react';
import { Avatar } from '../src/components/Avatar';
import { Stack } from '../src/components/Layout';

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
};

export const Size = () => (
  <>
    <Avatar
      size="small"
      src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
    />
    <Avatar
      size="medium"
      src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
    />
  </>
);

export const Fallback = () => (
  <>
    <Avatar fallback="MD" size="small" />
    <Avatar fallback="MD" size="medium" />
  </>
);

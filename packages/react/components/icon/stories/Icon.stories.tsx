import { Stack } from '@project44-manifest/react-layout';
import { StoryFn } from '@storybook/react';
import { Icon } from '../src';

export default {
  title: 'Components/Icon',
  component: Icon,
  decorators: [
    (Story: StoryFn) => (
      <Stack css={{ alignItems: 'center' }} gap="medium" orientation="horizontal">
        <Story />
      </Stack>
    ),
  ],
};

export const Default = () => (
  <Icon>
    <path d="M12.9 7a.9.9 0 1 0-1.8 0v4.604H6.5a.9.9 0 0 0 0 1.8h4.6V18a.9.9 0 0 0 1.8 0v-4.598h4.6a.9.9 0 1 0 0-1.8h-4.6v-4.6Z" />
  </Icon>
);

export const Size = () => (
  <>
    <Icon size="large">
      <path d="M12.9 7a.9.9 0 1 0-1.8 0v4.604H6.5a.9.9 0 0 0 0 1.8h4.6V18a.9.9 0 0 0 1.8 0v-4.598h4.6a.9.9 0 1 0 0-1.8h-4.6v-4.6Z" />
    </Icon>
    <Icon size="medium">
      <path d="M12.9 7a.9.9 0 1 0-1.8 0v4.604H6.5a.9.9 0 0 0 0 1.8h4.6V18a.9.9 0 0 0 1.8 0v-4.598h4.6a.9.9 0 1 0 0-1.8h-4.6v-4.6Z" />
    </Icon>
    <Icon size="small">
      <path d="M12.9 7a.9.9 0 1 0-1.8 0v4.604H6.5a.9.9 0 0 0 0 1.8h4.6V18a.9.9 0 0 0 1.8 0v-4.598h4.6a.9.9 0 1 0 0-1.8h-4.6v-4.6Z" />
    </Icon>
    <Icon size="x-small">
      <path d="M12.9 7a.9.9 0 1 0-1.8 0v4.604H6.5a.9.9 0 0 0 0 1.8h4.6V18a.9.9 0 0 0 1.8 0v-4.598h4.6a.9.9 0 1 0 0-1.8h-4.6v-4.6Z" />
    </Icon>
  </>
);

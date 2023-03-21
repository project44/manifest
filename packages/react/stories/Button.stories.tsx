import { StoryFn } from '@storybook/react';
import { Button, Stack } from '../src';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story: StoryFn) => (
      <Stack css={{ alignItems: 'center' }} gap="medium" orientation="horizontal">
        <Story />
      </Stack>
    ),
  ],
};

export const Variant = () => (
  <>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="brand">Brand</Button>
  </>
);

export const Size = () => (
  <>
    <Button size="medium">Medium</Button>
    <Button size="small">Small</Button>
  </>
);

export const Disabled = () => (
  <>
    <Button isDisabled variant="primary">
      Primary
    </Button>
    <Button isDisabled variant="secondary">
      Secondary
    </Button>
    <Button isDisabled variant="tertiary">
      Tertiary
    </Button>
    <Button isDisabled variant="danger">
      Danger
    </Button>
    <Button isDisabled variant="brand">
      Brand
    </Button>
  </>
);

export const Icon = () => (
  <>
    <Button startIcon={<i className="material-icons">add</i>}>Start Icon</Button>
    <Button endIcon={<i className="material-icons">add</i>}>End Icon</Button>
  </>
);

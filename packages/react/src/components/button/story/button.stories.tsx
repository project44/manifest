import { ReactNode } from 'react';
import { StoryFn } from '@storybook/react';
import { Button, ButtonProps, Stack } from '../../..';

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
  argTypes: {
    variant: {
      control: 'radio',
      options: ['brand', 'danger', 'primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'radio',
      options: ['medium', 'small'],
    },
  },
};

export const Variant = ({ children, ...args }: { children: ReactNode; args: ButtonProps }) => (
  <Button {...args}>{children}</Button>
);

Variant.args = {
  variant: 'brand',
  children: 'Button text',
};

export const Size = (args: ButtonProps) => <Button {...args}>Button</Button>;

Size.args = {
  size: 'small',
};

export const Disabled = (args: ButtonProps) => <Button {...args}>Button</Button>;

Disabled.args = {
  isDisabled: true,
  variant: 'brand',
};

export const Icon = (args: ButtonProps) => (
  <>
    <Button {...args} startIcon={<i className="material-icons">add</i>}>
      Start Icon
    </Button>
    <Button {...args} endIcon={<i className="material-icons">add</i>}>
      End Icon
    </Button>
    <Button {...args} size="small" startIcon={<i className="material-icons">add</i>}>
      Start icon
    </Button>
    <Button {...args} endIcon={<i className="material-icons">add</i>} size="small">
      End icon
    </Button>
  </>
);

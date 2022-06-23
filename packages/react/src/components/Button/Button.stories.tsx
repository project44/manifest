import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Button, ButtonGroup, IconButton } from './Button';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

export default {
  title: 'Components/Button',
  component: Button,
  subcomponents: { ButtonGroup, IconButton },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Button</Button>;

export const Default = Template.bind({});

export const Variants = Template.bind({});

Variants.decorators = [
  () => (
    <Flex css={{ gap: '$small' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="brand">Brand</Button>
    </Flex>
  ),
];

export const Sizes = Template.bind({});

Sizes.decorators = [
  () => (
    <Flex align="center" css={{ gap: '$small' }}>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
    </Flex>
  ),
];

export const Disabled = Template.bind({});

Disabled.decorators = [
  () => (
    <Flex css={{ gap: '$small' }}>
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
    </Flex>
  ),
];

export const StartIcon = Template.bind({});

StartIcon.decorators = [
  () => (
    <Flex css={{ gap: '$small' }}>
      <Button startIcon={<Icon icon="add" />} variant="primary">
        Primary
      </Button>
      <Button startIcon={<Icon icon="add" />} variant="secondary">
        Secondary
      </Button>
      <Button startIcon={<Icon icon="add" />} variant="tertiary">
        Tertiary
      </Button>
      <Button startIcon={<Icon icon="add" />} variant="danger">
        Danger
      </Button>
      <Button startIcon={<Icon icon="add" />} variant="brand">
        Brand
      </Button>
    </Flex>
  ),
];

export const EndIcon = Template.bind({});

EndIcon.decorators = [
  () => (
    <Flex css={{ gap: '$small' }}>
      <Button endIcon={<Icon icon="expand_more" />} variant="primary">
        Primary
      </Button>
      <Button endIcon={<Icon icon="expand_more" />} variant="secondary">
        Secondary
      </Button>
      <Button endIcon={<Icon icon="expand_more" />} variant="tertiary">
        Tertiary
      </Button>
      <Button endIcon={<Icon icon="expand_more" />} variant="danger">
        Danger
      </Button>
      <Button endIcon={<Icon icon="expand_more" />} variant="brand">
        Brand
      </Button>
    </Flex>
  ),
];

export const IconOnly = Template.bind({});

IconOnly.decorators = [
  () => (
    <Flex css={{ gap: '$small' }}>
      <IconButton variant="primary">
        <Icon icon="add" />
      </IconButton>
      <IconButton variant="secondary">
        <Icon icon="add" />
      </IconButton>
      <IconButton variant="tertiary">
        <Icon icon="add" />
      </IconButton>
      <IconButton variant="danger">
        <Icon icon="add" />
      </IconButton>
      <IconButton variant="brand">
        <Icon icon="add" />
      </IconButton>
    </Flex>
  ),
];

export const Group = Template.bind({});

Group.decorators = [
  () => (
    <ButtonGroup variant="secondary">
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  ),
];

export const AttachedGroup = Template.bind({});

AttachedGroup.decorators = [
  () => (
    <ButtonGroup isAttached>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  ),
];

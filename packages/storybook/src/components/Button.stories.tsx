import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Button, ButtonGroup, Flex, Icon, IconButton } from '@project44-manifest/react';

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

export const WithIcon = Template.bind({});

WithIcon.decorators = [
  () => (
    <Flex css={{ gap: '$small' }}>
      <Button startIcon={<Icon icon="add" />}>Start Icon</Button>
      <Button endIcon={<Icon icon="expand_more" />}>EndIcon</Button>
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

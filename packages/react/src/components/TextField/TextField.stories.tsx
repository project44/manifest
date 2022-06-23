import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { TextField } from './TextField';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

export default {
  title: 'Components/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

export const Default = Template.bind({});

Default.decorators = [() => <TextField placeholder="Enter name..." />];

export const Sizes = Template.bind({});

Sizes.decorators = [
  () => (
    <Flex css={{ gap: '$small' }} orientation="vertical">
      <TextField placeholder="Enter name..." size="medium" />
      <TextField placeholder="Enter name..." size="small" />
    </Flex>
  ),
];

export const EndIcon = Template.bind({});

EndIcon.decorators = [
  () => <TextField placeholder="Enter name..." endIcon={<Icon icon="search" />} />,
];

export const StartIcon = Template.bind({});

StartIcon.decorators = [
  () => <TextField placeholder="Enter name..." startIcon={<Icon icon="search" />} />,
];

export const FormControl = Template.bind({});

FormControl.decorators = [
  () => (
    <TextField
      label="Label"
      helperText="Helper text"
      placeholder="Search..."
      startIcon={<Icon icon="search" />}
    />
  ),
];

export const Invalid = Template.bind({});

Invalid.decorators = [
  () => (
    <TextField
      label="Label"
      helperText="Helper text"
      placeholder="Search..."
      startIcon={<Icon icon="search" />}
      validationState="invalid"
    />
  ),
];

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Select, SelectItem, SelectSection } from './Select';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: { SelectItem, SelectSection },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  () => (
    <Select placeholder="Select time...">
      <SelectItem key="late">Running Late</SelectItem>
      <SelectItem key="early">Running Early</SelectItem>
      <SelectItem key="estimated">Estimated Time</SelectItem>
      <SelectItem key="planned">Planned Time</SelectItem>
      <SelectItem key="actual">Actual Time</SelectItem>
    </Select>
  ),
];

export const Sizes = Template.bind({});

Sizes.decorators = [
  () => (
    <Flex css={{ gap: '$small' }} orientation="vertical">
      <Select size="medium">
        <SelectItem key="ardvark">Ardvark</SelectItem>
        <SelectItem key="kangaroo">Kangaroo</SelectItem>
        <SelectItem key="snake">Snake</SelectItem>
      </Select>
      <Select size="small">
        <SelectItem key="ardvark">Ardvark</SelectItem>
        <SelectItem key="kangaroo">Kangaroo</SelectItem>
        <SelectItem key="snake">Snake</SelectItem>
      </Select>
    </Flex>
  ),
];

export const StartIcon = Template.bind({});

StartIcon.decorators = [
  () => (
    <Select startIcon={<Icon icon="search" />}>
      <SelectItem key="ardvark">Ardvark</SelectItem>
      <SelectItem key="kangaroo">Kangaroo</SelectItem>
      <SelectItem key="snake">Snake</SelectItem>
    </Select>
  ),
];

export const FormControl = Template.bind({});

FormControl.decorators = [
  () => (
    <Select label="Label" helperText="Helper text" startIcon={<Icon icon="search" />}>
      <SelectItem key="ardvark">Ardvark</SelectItem>
      <SelectItem key="kangaroo">Kangaroo</SelectItem>
      <SelectItem key="snake">Snake</SelectItem>
    </Select>
  ),
];

export const Invalid = Template.bind({});

Invalid.decorators = [
  () => (
    <Select
      label="Label"
      helperText="Error text"
      startIcon={<Icon icon="search" />}
      validationState="invalid"
    >
      <SelectItem key="ardvark">Ardvark</SelectItem>
      <SelectItem key="kangaroo">Kangaroo</SelectItem>
      <SelectItem key="snake">Snake</SelectItem>
    </Select>
  ),
];

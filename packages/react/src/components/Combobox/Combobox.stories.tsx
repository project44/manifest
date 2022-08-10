import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Combobox, ComboboxItem, ComboboxSection } from '.';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

export default {
  title: 'Components/Combobox',
  component: Combobox,
  subcomponents: { ComboboxItem, ComboboxSection },
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = args => (
  <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
    <Combobox {...args}>
      <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
      <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
      <ComboboxItem key="snake">Snake</ComboboxItem>
    </Combobox>
  </Flex>
);

export const Default = Template.bind({});

export const Sizes = Template.bind({});

Sizes.decorators = [
  () => (
    <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
      <Combobox size="medium">
        <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
        <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
        <ComboboxItem key="snake">Snake</ComboboxItem>
      </Combobox>
      <Combobox size="small">
        <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
        <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
        <ComboboxItem key="snake">Snake</ComboboxItem>
      </Combobox>
    </Flex>
  ),
];

export const StartIcon = Template.bind({});

StartIcon.args = {
  startIcon: <Icon icon="search" />,
};

export const Label = Template.bind({});

Label.decorators = [
  () => (
    <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
      <Combobox label="Animal">
        <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
        <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
        <ComboboxItem key="snake">Snake</ComboboxItem>
      </Combobox>
    </Flex>
  ),
];

export const HelperText = Template.bind({});

HelperText.decorators = [
  () => (
    <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
      <Combobox helperText="Please select an animal">
        <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
        <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
        <ComboboxItem key="snake">Snake</ComboboxItem>
      </Combobox>
    </Flex>
  ),
];

export const Invalid = Template.bind({});

Invalid.decorators = [
  () => (
    <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
      <Combobox helperText="Error text" validationState="invalid">
        <ComboboxItem key="ardvark">Ardvark</ComboboxItem>
        <ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
        <ComboboxItem key="snake">Snake</ComboboxItem>
      </Combobox>
    </Flex>
  ),
];

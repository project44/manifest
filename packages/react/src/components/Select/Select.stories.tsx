import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Select, SelectItem, SelectSection } from '.';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: { SelectItem, SelectSection },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => (
  <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
    <Select {...args}>
      <SelectItem key="late">Running Late</SelectItem>
      <SelectItem key="early">Running Early</SelectItem>
      <SelectItem key="estimated">Estimated Time</SelectItem>
      <SelectItem key="planned">Planned Time</SelectItem>
      <SelectItem key="actual">Actual Time</SelectItem>
    </Select>
  </Flex>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Select time...',
};

export const Sizes = Template.bind({});

Sizes.decorators = [
  () => (
    <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
      <Select size="medium">
        <SelectItem key="Ardvark">Ardvark</SelectItem>
        <SelectItem key="Kangaroo">Kangaroo</SelectItem>
        <SelectItem key="Snake">Snake</SelectItem>
      </Select>
      <Select size="small">
        <SelectItem key="Ardvark">Ardvark</SelectItem>
        <SelectItem key="Kangaroo">Kangaroo</SelectItem>
        <SelectItem key="Snake">Snake</SelectItem>
      </Select>
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
      <Select label="Animal">
        <SelectItem key="Ardvark">Ardvark</SelectItem>
        <SelectItem key="Kangaroo">Kangaroo</SelectItem>
        <SelectItem key="Snake">Snake</SelectItem>
      </Select>
    </Flex>
  ),
];

export const HelperText = Template.bind({});

HelperText.decorators = [
  () => (
    <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
      <Select helperText="Please select an animal">
        <SelectItem key="Ardvark">Ardvark</SelectItem>
        <SelectItem key="Kangaroo">Kangaroo</SelectItem>
        <SelectItem key="Snake">Snake</SelectItem>
      </Select>
    </Flex>
  ),
];

export const Invalid = Template.bind({});

Invalid.decorators = [
  () => (
    <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
      <Select helperText="Error text" validationState="invalid">
        <SelectItem key="Ardvark">Ardvark</SelectItem>
        <SelectItem key="Kangaroo">Kangaroo</SelectItem>
        <SelectItem key="Snake">Snake</SelectItem>
      </Select>
    </Flex>
  ),
];

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [selected, setSelected] = React.useState<React.Key>('Kangaroo');

    return (
      <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
        <Select onSelectionChange={setSelected} selectedKey={selected}>
          <SelectItem key="Ardvark">Ardvark</SelectItem>
          <SelectItem key="Kangaroo">Kangaroo</SelectItem>
          <SelectItem key="Snake">Snake</SelectItem>
        </Select>
      </Flex>
    );
  },
];

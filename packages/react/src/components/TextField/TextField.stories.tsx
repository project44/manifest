import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { TextField } from './TextField';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

export default {
  title: 'Components/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => (
  <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
    <TextField {...args} />
  </Flex>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Enter name...',
};

export const Sizes = Template.bind({});

Sizes.decorators = [
  () => (
    <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
      <TextField placeholder="Enter name..." size="medium" />
      <TextField placeholder="Enter name..." size="small" />
    </Flex>
  ),
];

export const Icons = Template.bind({});

Icons.decorators = [
  () => (
    <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
      <TextField placeholder="Search..." endIcon={<Icon icon="search" />} />
      <TextField placeholder="Search..." startIcon={<Icon icon="search" />} />
    </Flex>
  ),
];

export const Label = Template.bind({});

Label.args = {
  label: 'Search',
  placeholder: 'Search...',
};

export const HelperText = Template.bind({});

HelperText.args = {
  helperText: 'Please input a search term.',
  placeholder: 'Search...',
};

export const Invalid = Template.bind({});

Invalid.args = {
  placeholder: 'Enter name...',
  validationState: 'invalid',
};

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [value, setValue] = React.useState('Kangaroo');

    return (
      <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
        <TextField onChange={setValue} value={value} />
      </Flex>
    );
  },
];

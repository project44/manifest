import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Flex } from '../Flex';
import { TextArea } from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => (
  <Flex css={{ gap: '$small', width: '25ch' }} orientation="vertical">
    <TextArea {...args} />
  </Flex>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Enter name...',
};

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
        <TextArea onChange={setValue} value={value} />
      </Flex>
    );
  },
];

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ListBox, ListBoxItem, ListBoxSection } from './ListBox';

export default {
  title: 'Components/ListBox',
  component: ListBox,
  subcomponents: { ListBoxItem, ListBoxSection },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = args => <ListBox {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  () => (
    <ListBox>
      <ListBoxItem key="ardvark">Ardvark</ListBoxItem>
      <ListBoxItem key="kangaroo">Kangaroo</ListBoxItem>
      <ListBoxItem key="snake">Snake</ListBoxItem>
    </ListBox>
  ),
];

export const SingleSelection = Template.bind({});

SingleSelection.decorators = [
  () => (
    <ListBox defaultSelectedKeys={['Kangaroo']} selectionMode="single">
      <ListBoxItem key="Ardvark">Ardvark</ListBoxItem>
      <ListBoxItem key="Kangaroo">Kangaroo</ListBoxItem>
      <ListBoxItem key="Snake">Snake</ListBoxItem>
    </ListBox>
  ),
];

export const MultipleSelection = Template.bind({});

MultipleSelection.decorators = [
  () => (
    <ListBox defaultSelectedKeys={['Kangaroo']} selectionMode="multiple">
      <ListBoxItem key="Ardvark">Ardvark</ListBoxItem>
      <ListBoxItem key="Kangaroo">Kangaroo</ListBoxItem>
      <ListBoxItem key="Snake">Snake</ListBoxItem>
    </ListBox>
  ),
];

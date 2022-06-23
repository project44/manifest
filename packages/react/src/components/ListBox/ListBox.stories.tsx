import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ListBox, ListBoxItem, ListBoxSection } from '.';
import { Icon } from '../Icon';

export default {
  title: 'Components/ListBox',
  component: ListBox,
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = args => (
  <ListBox {...args}>
    <ListBoxItem startIcon={<Icon icon="person" />}>Profile</ListBoxItem>
    <ListBoxItem startIcon={<Icon icon="search" />}>Search</ListBoxItem>
    <ListBoxSection title="Section">
      <ListBoxItem>Logout</ListBoxItem>
    </ListBoxSection>
  </ListBox>
);

export const Default = Template.bind({});

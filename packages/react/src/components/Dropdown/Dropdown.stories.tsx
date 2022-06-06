import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';
import { Dropdown } from './Dropdown';
import { DropdownItem } from './DropdownItem';
import { DropdownMenu } from './DropdownMenu';
import { DropdownTrigger } from './DropdownTrigger';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => (
  <Dropdown {...args}>
    <DropdownTrigger>
      <IconButton>
        <Icon icon="expand_more" />
      </IconButton>
    </DropdownTrigger>
    <DropdownMenu>
      <DropdownItem startIcon={<Icon icon="person" />}>Profile</DropdownItem>
      <DropdownItem startIcon={<Icon icon="search" />}>Search</DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

export const Default = Template.bind({});

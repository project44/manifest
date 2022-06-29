import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Dropdown, DropdownMenu, DropdownItem, DropdownSection } from './Dropdown';
import { IconButton } from '../Button';
import { Icon } from '../Icon';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  subcomponents: { DropdownMenu, DropdownItem, DropdownSection },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  () => (
    <Dropdown>
      <IconButton variant="primary">
        <Icon icon="expand_more" />
      </IconButton>
      <DropdownMenu>
        <DropdownItem startIcon={<Icon icon="person" />} key="profile">
          Profile
        </DropdownItem>
        <DropdownItem startIcon={<Icon icon="search" />} key="search">
          Search
        </DropdownItem>
        <DropdownSection>
          <DropdownItem key="logout">Sign out</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  ),
];

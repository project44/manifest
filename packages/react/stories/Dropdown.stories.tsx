import * as React from 'react';
import type { ComponentStory } from '@storybook/react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, Icon, IconButton } from '../src';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  subcomponents: { DropdownMenu, DropdownItem, DropdownSection },
};

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
    <IconButton variant="primary">
      <Icon icon="expand_more" />
    </IconButton>
    <DropdownMenu>
      <DropdownItem key="profile">Profile</DropdownItem>
      <DropdownItem key="search">Search</DropdownItem>
      <DropdownItem key="logout">Sign out</DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

export const Default = Template.bind({});

export const Sections = Template.bind({});

Sections.decorators = [
  () => (
    <Dropdown>
      <IconButton variant="primary">
        <Icon icon="expand_more" />
      </IconButton>
      <DropdownMenu>
        <DropdownItem key="profile">Profile</DropdownItem>
        <DropdownItem key="search">Search</DropdownItem>
        <DropdownSection title="Destructive">
          <DropdownItem key="logout">Sign out</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  ),
];

export const WithIcons = Template.bind({});

WithIcons.decorators = [
  () => (
    <Dropdown>
      <IconButton variant="primary">
        <Icon icon="expand_more" />
      </IconButton>
      <DropdownMenu css={{ minWidth: 224 }}>
        <DropdownItem key="profile" startIcon={<Icon icon="person" />}>
          Profile
        </DropdownItem>
        <DropdownItem key="search" startIcon={<Icon icon="search" />}>
          Search
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
];

export const SingleSelection = Template.bind({});

SingleSelection.decorators = [
  () => (
    <Dropdown>
      <IconButton variant="primary">
        <Icon icon="expand_more" />
      </IconButton>
      <DropdownMenu defaultSelectedKeys={['Profile']} selectionMode="single">
        <DropdownItem key="Profile">Profile</DropdownItem>
        <DropdownItem key="Search">Search</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
];

export const MultipleSelection = Template.bind({});

MultipleSelection.decorators = [
  () => (
    <Dropdown>
      <IconButton variant="primary">
        <Icon icon="expand_more" />
      </IconButton>
      <DropdownMenu defaultSelectedKeys={['Search']} selectionMode="multiple">
        <DropdownItem key="Profile">Profile</DropdownItem>
        <DropdownItem key="Search">Search</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
];

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [selected, setSelected] = React.useState<Set<React.Key> | 'all'>(new Set(['Search']));

    return (
      <Dropdown>
        <IconButton variant="primary">
          <Icon icon="expand_more" />
        </IconButton>
        <DropdownMenu
          selectedKeys={selected}
          selectionMode="single"
          onSelectionChange={setSelected}
        >
          <DropdownItem key="Profile">Profile</DropdownItem>
          <DropdownItem key="Search">Search</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  },
];

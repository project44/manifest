import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  Icon,
  IconButton,
} from '@project44-manifest/react';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  subcomponents: { DropdownMenu, DropdownItem, DropdownSection },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => (
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
        <DropdownItem startIcon={<Icon icon="person" />} key="profile">
          Profile
        </DropdownItem>
        <DropdownItem startIcon={<Icon icon="search" />} key="search">
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
    const [selected, setSelected] = React.useState<'all' | Set<React.Key>>(new Set(['Search']));

    return (
      <Dropdown>
        <IconButton variant="primary">
          <Icon icon="expand_more" />
        </IconButton>
        <DropdownMenu
          onSelectionChange={setSelected}
          selectionMode="single"
          selectedKeys={selected}
        >
          <DropdownItem key="Profile">Profile</DropdownItem>
          <DropdownItem key="Search">Search</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  },
];

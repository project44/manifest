import * as React from 'react';
import { IconButton } from '@project44-manifest/react-button';
import { Collapsed, Person, Search } from '@project44-manifest/react-icons';
import type { Meta, Story } from '@storybook/react';
import { Dropdown, DropdownProps } from '../src/components/Dropdown';
import { DropdownItem } from '../src/components/DropdownItem';
import { DropdownMenu } from '../src/components/DropdownMenu';
import { DropdownSection } from '../src/components/DropdownSection';

const meta: Meta<DropdownProps> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export default meta;

export const Default: Story<DropdownProps> = (props) => (
  <Dropdown {...props}>
    <IconButton variant="primary">
      <Collapsed />
    </IconButton>
    <DropdownMenu>
      <DropdownItem key="profile">Profile</DropdownItem>
      <DropdownItem key="search">Search</DropdownItem>
      <DropdownItem key="logout">Sign out</DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

export const Sections: Story<DropdownProps> = (props) => (
  <Dropdown {...props}>
    <IconButton variant="primary">
      <Collapsed />
    </IconButton>
    <DropdownMenu>
      <DropdownItem key="profile">Profile</DropdownItem>
      <DropdownItem key="search">Search</DropdownItem>
      <DropdownSection title="Destructive">
        <DropdownItem key="logout">Sign out</DropdownItem>
      </DropdownSection>
    </DropdownMenu>
  </Dropdown>
);

export const Icons: Story<DropdownProps> = (props) => (
  <Dropdown {...props}>
    <IconButton variant="primary">
      <Collapsed />
    </IconButton>
    <DropdownMenu css={{ minWidth: 224 }}>
      <DropdownItem key="profile" startIcon={<Person />}>
        Profile
      </DropdownItem>
      <DropdownItem key="search" startIcon={<Search />}>
        Search
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

export const SingleSelection: Story<DropdownProps> = (props) => (
  <Dropdown {...props}>
    <IconButton variant="primary">
      <Collapsed />
    </IconButton>
    <DropdownMenu defaultSelectedKeys={['Profile']} selectionMode="single">
      <DropdownItem key="Profile">Profile</DropdownItem>
      <DropdownItem key="Search">Search</DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

export const MultipleSelection: Story<DropdownProps> = (props) => (
  <Dropdown {...props}>
    <IconButton variant="primary">
      <Collapsed />
    </IconButton>
    <DropdownMenu defaultSelectedKeys={['Search']} selectionMode="multiple">
      <DropdownItem key="Profile">Profile</DropdownItem>
      <DropdownItem key="Search">Search</DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

export const Controlled: Story<DropdownProps> = (props) => {
  const [selected, setSelected] = React.useState<Set<React.Key> | 'all'>(new Set(['Search']));

  return (
    <Dropdown {...props}>
      <IconButton variant="primary">
        <Collapsed />
      </IconButton>
      <DropdownMenu selectedKeys={selected} selectionMode="single" onSelectionChange={setSelected}>
        <DropdownItem key="Profile">Profile</DropdownItem>
        <DropdownItem key="Search">Search</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

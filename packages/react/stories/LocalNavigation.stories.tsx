import { DropdownItem, DropdownMenu, LocalNavigation, LocalNavigationItem } from '../src';
import { LocalNavigationDropdownItem } from '../src/components/LocalNavigation';

export default {
  title: 'Components/LocalNavigation',
  component: LocalNavigation,
  subComponents: { LocalNavigationItem },
};

export const Default = () => (
  <LocalNavigation>
    <LocalNavigationItem>Overview</LocalNavigationItem>
    <LocalNavigationItem>Lanes</LocalNavigationItem>
    <LocalNavigationItem>Carriers</LocalNavigationItem>
    <LocalNavigationItem>Containers</LocalNavigationItem>
  </LocalNavigation>
);

export const Selected = () => (
  <LocalNavigation>
    <LocalNavigationItem isSelected>Overview</LocalNavigationItem>
    <LocalNavigationItem>Lanes</LocalNavigationItem>
    <LocalNavigationItem>Carriers</LocalNavigationItem>
    <LocalNavigationItem>Containers</LocalNavigationItem>
  </LocalNavigation>
);

export const WithDropdown = () => (
  <LocalNavigation>
    <LocalNavigationDropdownItem title="Parent section">
      <DropdownMenu>
        <DropdownItem key="Profile">Profile</DropdownItem>
        <DropdownItem key="Search">Search</DropdownItem>
      </DropdownMenu>
    </LocalNavigationDropdownItem>
    <LocalNavigationItem>Overview</LocalNavigationItem>
    <LocalNavigationItem>Lanes</LocalNavigationItem>
    <LocalNavigationItem>Carriers</LocalNavigationItem>
    <LocalNavigationItem>Containers</LocalNavigationItem>
  </LocalNavigation>
);

import { Dropdown, DropdownItem, DropdownMenu, IconButton } from '@project44-manifest/react';
import { Collapsed } from '@project44-manifest/react-icons';
import { withDemoWrapper } from '../../components/DemoWrapper';

function DropdownExample() {
  return (
    <Dropdown>
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
}

export default withDemoWrapper(DropdownExample);

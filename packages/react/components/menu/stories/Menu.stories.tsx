import { Carrier, Route } from '@project44-manifest/react-icons';
import { Menu, MenuGroup, MenuItem } from '../src';

export default {
  title: 'Components/Menu',
  component: Menu,
};

export const Default = () => (
  <Menu css={{ maxWidth: 240 }}>
    <MenuItem label="Track" startIcon={<Route />} />
    <MenuGroup label="Initiate" startIcon={<Carrier />}>
      <MenuItem label="Shipments" />
      <MenuItem label="Templates" />
    </MenuGroup>
  </Menu>
);

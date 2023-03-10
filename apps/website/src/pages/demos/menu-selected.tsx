import { Menu, MenuGroup, MenuItem } from '@project44-manifest/react';
import { Carrier, Route } from '@project44-manifest/react-icons';
import { withDemoWrapper } from '../../components/DemoWrapper';

function MenuSelectedExample() {
  return (
    <Menu css={{ maxWidth: 240 }}>
      <MenuItem isSelected label="Track" startIcon={<Route />} />
      <MenuGroup label="Initiate" startIcon={<Carrier />}>
        <MenuItem label="Shipments" />
        <MenuItem label="Templates" />
      </MenuGroup>
    </Menu>
  );
}

export default withDemoWrapper(MenuSelectedExample);

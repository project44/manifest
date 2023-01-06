import * as React from 'react';
import { useRouter } from 'next/router';
import { Box, pxToRem, Stack } from '@project44-manifest/react';
import SidebarItem from '../components/SidebarItem';
import items from '../data/sidebar';

function Sidebar() {
  const router = useRouter();

  return (
    <Box as="nav" css={{ flexShrink: 0, width: '$$sideNavWidth' }}>
      <Box
        css={{
          borderRight: '1px solid $border-primary',
          height: `calc(100vh - ${pxToRem(72)})`,
          overflowY: 'auto',
          padding: '$large',
          position: 'fixed',
          top: pxToRem(72),
          width: '$$sideNavWidth',
        }}
      >
        <Stack as="ul" css={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          {items.map((item) => (
            <SidebarItem
              key={item.slug}
              currentPath={router.asPath}
              items={item.items ?? null}
              slug={item.slug}
              title={item.title}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Sidebar;

import * as React from 'react';
import { Box, pxToRem, Stack } from '@project44-manifest/react';
import items from 'sidebar.config';
import SidebarItem from '../components/SidebarItem';
import { useRouter } from 'next/router';

function Sidebar() {
  const router = useRouter();

  return (
    <Box
      as="nav"
      css={{
        alignSelf: 'flex-start',
        borderRight: '1px solid $border-primary',
        height: `calc(100vh - ${pxToRem(72)})`,
        position: 'sticky',
        overflow: 'auto',
        overscrollBehavior: 'contain',
        pr: '$x-large',
        py: pxToRem(64),
        top: pxToRem(64),
        width: pxToRem(238),
      }}
    >
      <Stack as="ul" css={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {items.map(item => (
          <SidebarItem
            currentPath={router.asPath}
            slug={item.slug}
            key={item.slug}
            items={item.items ?? null}
            title={item.title}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Sidebar;

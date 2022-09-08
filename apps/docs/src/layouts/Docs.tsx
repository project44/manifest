import type { SidebarItem } from 'sidebar.config';
import type { TOCItem } from '../types';
import * as React from 'react';
import { Box, Container, pxToRem, Typography } from '@project44-manifest/react';
import isEmpty from 'lodash/isEmpty';
import Header from './Header';
import Sidebar from './Sidebar';
import TOC from './TOC';

interface DocsLayoutProps {
  children: React.ReactNode;
  description?: string;
  sidebarItems?: SidebarItem[];
  title?: string;
  toc?: TOCItem[];
}

function DocsLayout(props: DocsLayoutProps) {
  const { children, description, sidebarItems = [], title, toc = [] } = props;

  return (
    <>
      <Header />
      <Container as="main" css={{ display: 'flex' }}>
        {!isEmpty(sidebarItems) && <Sidebar items={sidebarItems} />}

        <Box as="article" css={{ flex: '1 1', py: pxToRem(64), px: pxToRem(80), width: '100%' }}>
          {title && (
            <Typography as="h1" css={{ marginBottom: '$x-large' }} variant="display">
              {title}
            </Typography>
          )}
          {description && <Typography variant="body">{description}</Typography>}
          {children}
        </Box>

        {!isEmpty(toc) && <TOC items={toc} />}
      </Container>
    </>
  );
}

export default DocsLayout;

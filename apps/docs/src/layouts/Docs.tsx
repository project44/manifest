import * as React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Box, Container, Flex, pxToRem, Stack } from '@project44-manifest/react';
import Head from '../components/Head';
import Meta from '../components/Meta';
import type { TOC as TOCType } from '../types';
import Header from './Header';
import Sidebar from './Sidebar';
import TOC from './TOC';

interface DocsLayoutProps {
  children: React.ReactNode;
  description?: string;
  title?: string;
  toc?: TOCType[];
}

function DocsLayout(properties: DocsLayoutProps) {
  const { children, description, title, toc = [] } = properties;

  return (
    <Box
      css={{ $$headerHeight: pxToRem(72), $$sideNavWidth: pxToRem(280), $$tocWidth: pxToRem(240) }}
    >
      <Head description={description} title={title} />
      <Header />
      <Sidebar />
      <Flex
        as="main"
        css={{
          px: '$large',
          marginLeft: '$$sideNavWidth',
          marginRight: '$$tocWidth',
          minHeight: '100vh',
        }}
      >
        <Container css={{ display: 'flex', px: 0 }} maxWidth="small">
          <Stack css={{ flexGrow: 1, pt: '$$headerHeight' }} orientation="vertical">
            <Meta description={description} title={title} />
            <Box css={{ pb: '$$headerHeight', width: '100%' }}>{children}</Box>
          </Stack>
        </Container>
      </Flex>
      {!isEmpty(toc) && <TOC items={toc} />}
    </Box>
  );
}

export default DocsLayout;

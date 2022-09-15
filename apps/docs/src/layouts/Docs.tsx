import type { TOC as TOCType } from '../types';
import * as React from 'react';
import { Box, Container, pxToRem, Stack } from '@project44-manifest/react';
import isEmpty from 'lodash/isEmpty';
import Header from './Header';
import Sidebar from './Sidebar';
import TOC from './TOC';
import Head from '../components/Head';
import Meta from '../components/Meta';

interface DocsLayoutProps {
  children: React.ReactNode;
  description?: string;
  title?: string;
  toc?: TOCType[];
}

function DocsLayout(props: DocsLayoutProps) {
  const { children, description, title, toc = [] } = props;

  return (
    <Box css={{ $$headerHeight: pxToRem(72), $$sideNavWidth: pxToRem(280) }}>
      <Head description={description} title={title} />
      <Header />
      <Container as="main" css={{ display: 'flex' }} maxWidth="large">
        <Sidebar />
        <Stack css={{ flexGrow: 1, pt: '$$headerHeight' }} orientation="vertical">
          <Meta description={description} title={title} />
          <Stack orientation="horizontal">
            <Box css={{ pb: '$$headerHeight', px: '$large', width: '100%' }}>{children}</Box>
            {!isEmpty(toc) && <TOC items={toc} />}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default DocsLayout;

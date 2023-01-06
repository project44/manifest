import * as React from 'react';
import { Box } from '@project44-manifest/react';
import Head from '../components/Head';
import Header from './Header';

interface DefaultLayoutProperties {
  children: React.ReactNode;
}

function DefaultLayout(properties: DefaultLayoutProperties) {
  const { children } = properties;

  return (
    <>
      <Head description="The design system for project44" title="Manifest Design System" />
      <Header />
      <Box as="main">{children}</Box>
    </>
  );
}

export default DefaultLayout;

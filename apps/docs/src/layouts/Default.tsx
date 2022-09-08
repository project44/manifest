import * as React from 'react';
import { Box } from '@project44-manifest/react';
import Header from './Header';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
    </>
  );
}

export default DefaultLayout;

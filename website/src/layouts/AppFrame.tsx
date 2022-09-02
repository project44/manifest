import * as React from 'react';
import { Box, pxToRem } from '@project44-manifest/react';
import Header from './Header';

interface AppFrameProps {
  children: React.ReactNode;
}

function AppFrame(props: AppFrameProps) {
  const { children } = props;

  return (
    <Box css={{ $$headerHeight: pxToRem(72), $$headerOffset: pxToRem(48) }}>
      <Header />
      {children}
    </Box>
  );
}

export default AppFrame;

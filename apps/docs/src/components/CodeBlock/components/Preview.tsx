import * as React from 'react';
import { Box, pxToRem } from '@project44-manifest/react';
import { LiveError, LivePreview } from 'react-live';

const Preview: React.FC<React.ComponentPropsWithRef<'div'>> = props => (
  <Box
    {...props}
    css={{
      fontFamily: '$text',
      backgroundColor: '$background-primary',
      overflow: 'scroll',
      padding: pxToRem(12),
    }}
  >
    <LivePreview />
    <LiveError />
  </Box>
);

export default Preview;

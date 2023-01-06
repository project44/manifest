import * as React from 'react';
import { LiveEditor } from 'react-live';
import { Box, pxToRem } from '@project44-manifest/react';

const Editor: React.FC<React.ComponentPropsWithRef<'div'>> = (properties) => (
    <Box
      {...properties}
      css={{
        fontFamily: '$mono',
        fontSize: '$small',
        padding: pxToRem(14),
        position: 'relative',
      }}
    >
      <LiveEditor />
    </Box>
  );

export default Editor;

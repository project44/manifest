import * as React from 'react';
import { Box, pxToRem } from '@project44-manifest/react';
import { LiveEditor } from 'react-live';

const Editor: React.FC<React.ComponentPropsWithRef<'div'>> = (props) => {
  return (
    <Box
      {...props}
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
};

export default Editor;

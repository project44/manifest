import * as React from 'react';
import { Box } from '@project44-manifest/react';

type InlineCodeProperties = React.ComponentPropsWithoutRef<typeof Box>;

function InlineCode(properties: InlineCodeProperties) {
  const { css, ...other } = properties;

  return (
    <Box
      as="code"
      css={{
        ...css,
        backgroundColor: '$palette-blue-50',
        borderRadius: '$small',
        fontFamily: '$mono',
        fontSize: '$small',
        lineHeight: '$medium',
        px: '$x-small',
      }}
      {...other}
    />
  );
}

export default InlineCode;

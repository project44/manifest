import * as React from 'react';
import { Box } from '@project44-manifest/react';

type BlockQuoteProperties = React.ComponentPropsWithoutRef<typeof Box>;

function BlockQuote(properties: BlockQuoteProperties) {
  const { css, ...other } = properties;

  return (
    <Box
      as="blockquote"
      css={{
        ...css,
        alignItems: 'center',
        backgroundColor: '$background-warning',
        borderLeft: '3px solid $border-warning',
        borderRadius: '$small',
        display: 'flex',
        my: '$large',
        overflow: 'hidden',
        padding: '$medium',
        width: '100%',
        typography: '$body',

        '> p': {
          margin: 0,
        },
      }}
      {...other}
    />
  );
}

export default BlockQuote;

import * as React from 'react';
import { Box, Typography } from '@project44-manifest/react';

interface MetaProps {
  description?: string;
  title?: string;
}

function Meta(props: MetaProps) {
  const { description, title } = props;

  return (
    <Box css={{ py: '$x-large' }}>
      {title && (
        <Typography
          as="h1"
          css={{ marginBottom: description ? '$medium' : 'inherit' }}
          variant="display"
        >
          {title}
        </Typography>
      )}
      {description && <Typography variant="body">{description}</Typography>}
    </Box>
  );
}

export default Meta;

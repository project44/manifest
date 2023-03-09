import { Box } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function BoxExample() {
  return (
    <Box
      as="button"
      css={{
        all: 'unset',
        backgroundColor: '$palette-indigo-500',
        color: '$palette-white',
        borderRadius: '$full',
        px: '$medium',
        py: '$small',
      }}
    >
      Button
    </Box>
  );
}

export default withDemoWrapper(BoxExample);

import { Box } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function BoxExample() {
  return (
    <Box
      css={{
        backgroundColor: '$palette-indigo-500',
        color: '$palette-white',
        borderRadius: '$small',
        padding: '$large',
      }}
    >
      Hello World
    </Box>
  );
}

export default withDemoWrapper(BoxExample);

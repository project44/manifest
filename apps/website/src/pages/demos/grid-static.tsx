import { Grid, GridItem } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function GridExample() {
  return (
    <Grid
      columns="repeat(5, 1fr)"
      css={{ height: '200px', width: '100%' }}
      gap="small"
      rows="repeat(2, 1fr)"
    >
      <GridItem column={1} css={{ backgroundColor: '$palette-green-500' }} row={2} />
      <GridItem column={2} css={{ backgroundColor: '$palette-purple-500' }} />
      <GridItem column={2} css={{ backgroundColor: '$palette-pink-500' }} />
      <GridItem column={4} css={{ backgroundColor: '$palette-blue-500' }} />
    </Grid>
  );
}

export default withDemoWrapper(GridExample);

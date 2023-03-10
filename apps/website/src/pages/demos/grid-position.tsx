import { Grid, GridItem } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function GridExample() {
  return (
    <Grid columns="repeat(6, 1fr)" css={{ width: '100%' }} gap="small">
      <GridItem
        column={2}
        css={{ backgroundColor: '$palette-green-500', height: '80px', width: '100%' }}
      />
      <GridItem
        columnEnd={6}
        columnStart={4}
        css={{ backgroundColor: '$palette-purple-500', height: '80px', width: '100%' }}
      />
    </Grid>
  );
}

export default withDemoWrapper(GridExample);

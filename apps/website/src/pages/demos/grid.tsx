import { Grid, GridItem } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function GridExample() {
  return (
    <Grid columns="repeat(3, 1fr)" css={{ width: '100%' }} gap="small">
      <GridItem css={{ backgroundColor: '$palette-green-500', height: '80px' }} />
      <GridItem css={{ backgroundColor: '$palette-purple-500', height: '80px' }} />
      <GridItem css={{ backgroundColor: '$palette-pink-500', height: '80px' }} />
    </Grid>
  );
}

export default withDemoWrapper(GridExample);

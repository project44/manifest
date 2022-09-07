import * as React from 'react';
import { Grid, GridItem, pxToRem } from '@project44-manifest/react';
import ActionCard from './ActionCard';

function GettingStartedGrid() {
  return (
    <Grid columns="repeat(2, 1fr)" css={{ py: pxToRem(64) }} gap="lg">
      <GridItem>
        <ActionCard
          href="/docs/getting-started/designers"
          src="/images/thumbnails/designers.png"
          title="For Designers"
        />
      </GridItem>
      <GridItem>
        <ActionCard
          href="/docs/getting-started/developers"
          src="/images/thumbnails/developers.png"
          title="For Developers"
        />
      </GridItem>
    </Grid>
  );
}

export default GettingStartedGrid;

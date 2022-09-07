import * as React from 'react';
import { Grid, GridItem, pxToRem } from '@project44-manifest/react';
import ActionCard from './ActionCard';

function ComponentGrid() {
  return (
    <Grid columns="repeat(3, 1fr)" css={{ py: pxToRem(64) }} gap="lg">
      <GridItem>
        <ActionCard
          href="/docs/components/avatar"
          src="/images/thumbnails/avatar.png"
          title="Avatar"
        />
      </GridItem>
      <GridItem>
        <ActionCard href="/docs/components/box" src="/images/thumbnails/box.png" title="Box" />
      </GridItem>
      <GridItem>
        <ActionCard
          href="/docs/components/button"
          src="/images/thumbnails/button.png"
          title="Button"
        />
      </GridItem>
    </Grid>
  );
}

export default ComponentGrid;

import type { DocMeta } from '../types';
import * as React from 'react';
import { Grid, GridItem, pxToRem } from '@project44-manifest/react';
import ActionCard from './ActionCard';
import { getThumbnailUrl } from 'src/utils';

interface ThumbnailsProps {
  items: DocMeta[];
}

function Thumbnails(props: ThumbnailsProps) {
  const { items } = props;

  return (
    <Grid columns="repeat(3, 1fr)" css={{ py: pxToRem(64) }} gap="large">
      {items.map(item => (
        <GridItem key={item.slug}>
          <ActionCard href={item.slug} src={getThumbnailUrl(item.title)} title={item.title} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default Thumbnails;

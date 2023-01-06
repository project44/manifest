import * as React from 'react';
import { getThumbnailUrl } from 'src/utils';
import { Grid, GridItem, pxToRem } from '@project44-manifest/react';
import type { DocMeta as DocumentMeta } from '../types';
import ActionCard from './ActionCard';

interface ThumbnailsProperties {
  items: DocumentMeta[];
}

function Thumbnails(properties: ThumbnailsProperties) {
  const { items } = properties;

  return (
    <Grid columns="repeat(3, 1fr)" css={{ py: pxToRem(64) }} gap="large">
      {items.map((item) => (
        <GridItem key={item.slug}>
          <ActionCard href={item.slug} src={getThumbnailUrl(item.title)} title={item.title} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default Thumbnails;

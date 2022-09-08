import * as React from 'react';
import * as tokens from '@project44-manifest/design-tokens';
import { Grid, GridItem } from '@project44-manifest/react';
import { getColorName, getCategoryColors } from 'src/utils/colors';
import ColorSwatch from './ColorSwatch';

interface ColorsProps {
  category?: string;
}

function Colors(props: ColorsProps) {
  const { category } = props;

  const colors = getCategoryColors(tokens as unknown as string[], category);

  return (
    <Grid css={{ py: '$large' }} columns="repeat(2, 1fr)" gap="large">
      {colors.map(token => {
        const name = getColorName(token, category);
        const hex = tokens[token];

        return (
          <GridItem key={name}>
            <ColorSwatch hex={hex} name={name} token={token} />
          </GridItem>
        );
      })}
    </Grid>
  );
}

export default Colors;

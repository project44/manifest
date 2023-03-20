import kebabCase from 'lodash.kebabcase';
import { color } from '@project44-manifest/design-tokens';
import { Grid, GridItem } from '@project44-manifest/react';
import { Swatch } from '../Swatch';

interface SwatchesProps {
  name: keyof typeof color;
}

export function Swatches(props: SwatchesProps) {
  const { name } = props;

  const swatch = color[name];

  return (
    <Grid columns="repeat(2, 1fr)" gap="medium">
      {Object.keys(swatch).map((item) => {
        const swatchName = `$color-${name}-${kebabCase(item)}`;
        const colorValue = swatch[item as keyof typeof swatch];

        return (
          <GridItem key={colorValue}>
            <Swatch hex={colorValue} name={swatchName} />
          </GridItem>
        );
      })}
    </Grid>
  );
}

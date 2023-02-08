import * as React from 'react';
import type { IconProps } from '@project44-manifest/react-icon';
import { Grid, Stack } from '@project44-manifest/react-layout';
import { Typography } from '@project44-manifest/react-typography';
import * as Icons from '../src';

export default {
  title: 'Components/Icons',
};

export const AllIcons = () => (
  <Grid columns="repeat(auto-fill, 120px)" gap="large">
    {Object.entries(Icons).map(([key, value]) => {
      const IconComponent = value as React.FC<IconProps>;

      return (
        <React.Fragment key={key}>
          <Stack css={{ alignItems: 'center' }} gap="small">
            <IconComponent />
            <Typography variant="caption">{key}</Typography>
          </Stack>
        </React.Fragment>
      );
    })}
  </Grid>
);

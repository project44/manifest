import * as React from 'react';
import { Box, pxToRem, Stack, Typography } from '@project44-manifest/react';

interface ColorSwatchProperties {
  hex: string;
  name: string;
  token: string;
}

function ColorSwatch(properties: ColorSwatchProperties) {
  const { hex, name, token } = properties;

  return (
    <Stack>
      <Box
        css={{
          backgroundColor: hex,
          borderTopLeftRadius: '$small',
          borderTopRightRadius: '$small',
          display: 'flex',
          minHeight: pxToRem(120),
        }}
      />
      <Stack
        css={{
          backgroundColor: '$background-secondary',
          borderBottomLeftRadius: '$small',
          borderBottomRightRadius: '$small',
          padding: '$large',
        }}
        gap="small"
      >
        <Typography variant="bodyBold">{name}</Typography>
        <Typography variant="subtext">{hex.toUpperCase()}</Typography>
        <Typography variant="subtext">{token}</Typography>
      </Stack>
    </Stack>
  );
}

export default ColorSwatch;

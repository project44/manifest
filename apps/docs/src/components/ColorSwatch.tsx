import * as React from 'react';
import { Box, Flex, Stack, pxToRem, Typography } from '@project44-manifest/react';

interface ColorSwatchProps {
  hex: string;
  name: string;
  token: string;
}

function ColorSwatch(props: ColorSwatchProps) {
  const { hex, name, token } = props;

  return (
    <Flex css={{ alignItems: 'center' }}>
      <Box
        css={{ backgroundColor: hex, borderRadius: '$small', mr: '$medium', size: pxToRem(80) }}
      />
      <Stack>
        <Typography variant="bodyBold">{name}</Typography>
        <Typography variant="subtext">{hex.toUpperCase()}</Typography>
        <Typography variant="subtext">{token}</Typography>
      </Stack>
    </Flex>
  );
}

export default ColorSwatch;

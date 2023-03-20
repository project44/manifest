import { shadow } from '@project44-manifest/design-tokens';
import { Stack, Typography } from '@project44-manifest/react';

interface ElevationProps {
  size: 'large' | 'medium' | 'small';
}

export function Elevation(props: ElevationProps) {
  const { size } = props;

  return (
    <Stack className="elevation" gap="small" style={{ boxShadow: shadow[size] }}>
      <Typography variant="bodyBold">$shadow-{size}</Typography>
      <Typography variant="subtext">{shadow[size]}</Typography>
    </Stack>
  );
}

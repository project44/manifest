import { Flex, Typography } from '@project44-manifest/react';

interface SwatchProps {
  hex: string;
  name: string;
}

export function Swatch(props: SwatchProps) {
  const { hex, name } = props;

  return (
    <Flex className="swatch">
      <div className="swatch__color" style={{ backgroundColor: hex }} />
      <Flex orientation="vertical">
        <Typography className="swatch__title" variant="subtextBold">
          {name}
        </Typography>
        <Typography className="swatch__subtitle" variant="subtext">
          {hex}
        </Typography>
      </Flex>
    </Flex>
  );
}

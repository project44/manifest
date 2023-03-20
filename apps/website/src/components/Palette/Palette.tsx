import { color, colorTextContrast, colorTextPrimary } from '@project44-manifest/design-tokens';
import { Flex, Stack, Typography } from '@project44-manifest/react';

interface PaletteProps {
  name: keyof typeof color.palette;
}

function getContrastColor(hexcolor: string) {
  let clonedHex = hexcolor;

  // If a leading # is provided, remove it
  if (hexcolor.startsWith('#')) {
    clonedHex = hexcolor.slice(1);
  }

  // Convert to RGB value
  const r = parseInt(clonedHex.substr(0, 2), 16);
  const g = parseInt(clonedHex.substr(2, 2), 16);
  const b = parseInt(clonedHex.substr(4, 2), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? colorTextPrimary : colorTextContrast;
}

export function Palette(props: PaletteProps) {
  const { name } = props;

  const scale = color.palette[name];

  return (
    <Stack className="palette">
      <Flex
        className="palette__header"
        orientation="vertical"
        style={{ color: getContrastColor(scale[500]), backgroundColor: scale[500] }}
      >
        <Typography className="palette__text" variant="subtitle">
          {name.toLocaleUpperCase()}
        </Typography>
        <Typography className="palette__text" variant="subtextBold">
          500
        </Typography>
      </Flex>
      <Stack className="palette__scale">
        {Object.keys(scale).map((shade) => {
          const colorShade = scale[shade as keyof typeof scale];
          const contrastColor = getContrastColor(colorShade);

          return (
            <Flex
              key={`${name}_${shade}`}
              wrap
              align="center"
              className="palette__scale-shade"
              justify="between"
              style={{ color: contrastColor, backgroundColor: colorShade }}
            >
              <Typography className="palette__text" variant="subtext">
                {shade}
              </Typography>
              <Typography className="palette__text" variant="subtext">
                {colorShade}
              </Typography>
            </Flex>
          );
        })}
      </Stack>
    </Stack>
  );
}

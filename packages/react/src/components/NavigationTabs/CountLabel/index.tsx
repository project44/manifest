import * as designTokens from '@project44-manifest/design-tokens';
import { CSS } from '@project44-manifest/react-styles';
import { Box } from '../../box';
import { Spinner } from '../../Spinner';
import { Typography } from '../../Typography';

interface Props {
  value: number | string;
  variant?: 'black' | 'blue' | 'darkBlue' | 'darkGrey' | 'default' | 'grey' | 'lightGrey' | 'red';
  dense?: boolean;
  css?: CSS;
  isLoading?: boolean;
}

export function CountLabel({ value, variant = 'default', dense = false, css, isLoading }: Props) {
  const theme = () => {
    switch (variant) {
      case 'black':
        return {
          backgroundColor: designTokens.colorTextPrimary,
          color: designTokens.colorTextContrast,
        };
      case 'blue':
        return {
          backgroundColor: designTokens.colorPrimaryActive,
          color: designTokens.colorPaletteWhite,
        };
      case 'darkBlue':
        return {
          backgroundColor: designTokens.colorPaletteBlue900,
          color: designTokens.colorPaletteWhite,
        };
      case 'lightGrey':
        return {
          backgroundColor: designTokens.colorPaletteGrey200,
          color: designTokens.colorPaletteBlack,
        };
      case 'grey':
        return {
          backgroundColor: designTokens.colorPaletteGrey100,
          color: designTokens.colorPaletteGrey900,
        };
      case 'darkGrey':
        return {
          backgroundColor: designTokens.colorPaletteGrey600,
          color: designTokens.colorTextContrast,
        };
      case 'red':
        return {
          backgroundColor: designTokens.colorPaletteRed100,
          color: designTokens.colorPaletteRed900,
        };
      default:
        return {
          backgroundColor: designTokens.colorPaletteBlack,
          color: designTokens.colorPaletteWhite,
        };
    }
  };

  return (
    <Box
      css={{
        display: 'inline-flex',
        alignItems: 'center',
        py: dense ? '1px' : '2px',
        px: dense ? '6px' : '12px',
        borderRadius: '100px',
        ...theme(),
        ...css,
      }}
      data-testid="counter-pill"
    >
      {isLoading ? (
        <Spinner size="small" />
      ) : (
        <Typography variant="captionBold">{value}</Typography>
      )}
    </Box>
  );
}

CountLabel.displayName = 'CountLabel';

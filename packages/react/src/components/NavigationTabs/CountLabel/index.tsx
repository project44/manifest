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
          backgroundColor: '$text-primary',
          color: '$text-contrast',
        };
      case 'blue':
        return {
          backgroundColor: '$primary-active',
          color: '$palette-white',
        };
      case 'darkBlue':
        return {
          backgroundColor: '$palette-blue-900',
          color: '$palette-white',
        };
      case 'lightGrey':
        return {
          backgroundColor: '$palette-grey-200',
          color: '$palette-black',
        };
      case 'grey':
        return {
          backgroundColor: '$palette-grey-100',
          color: '$palette-grey-900',
        };
      case 'darkGrey':
        return {
          backgroundColor: '$palette-grey-600',
          color: '$text-contrast',
        };
      case 'red':
        return {
          backgroundColor: '$palette-red-100',
          color: '$palette-red-900',
        };
      default:
        return {
          backgroundColor: '$palette-black',
          color: '$palette-white',
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

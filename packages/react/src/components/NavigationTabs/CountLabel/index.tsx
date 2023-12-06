import { CSS } from '@project44-manifest/react-styles';
import { Box } from '../../box';
import { Spinner } from '../../Spinner';
import { Typography } from '../../Typography';

export type Variant =
  | 'black'
  | 'blue'
  | 'darkBlue'
  | 'darkGrey'
  | 'default'
  | 'grey'
  | 'lightGrey'
  | 'red';

interface Props {
  value: number | string;
  variant?: Variant;
  dense?: boolean;
  css?: CSS;
  isLoading?: boolean;
}

const themeStyles: Record<Variant, CSS> = {
  black: {
    backgroundColor: '$text-primary',
    color: '$text-contrast',
  },
  blue: {
    backgroundColor: '$primary-active',
    color: '$palette-white',
  },
  darkBlue: {
    backgroundColor: '$palette-blue-900',
    color: '$palette-white',
  },
  lightGrey: {
    backgroundColor: '$palette-grey-200',
    color: '$palette-black',
  },
  grey: {
    backgroundColor: '$palette-grey-100',
    color: '$palette-grey-900',
  },
  darkGrey: {
    backgroundColor: '$palette-grey-600',
    color: '$text-contrast',
  },
  red: {
    backgroundColor: '$palette-red-100',
    color: '$palette-red-900',
  },
  default: {
    backgroundColor: '$palette-black',
    color: '$palette-white',
  },
};

export function CountLabel({ value, variant = 'default', dense = false, css, isLoading }: Props) {
  return (
    <Box
      css={{
        display: 'inline-flex',
        alignItems: 'center',
        py: dense ? '1px' : '2px',
        px: dense ? '6px' : '12px',
        borderRadius: '100px',
        ...themeStyles[variant],
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

import { styled } from '@project44-manifest/react-styles';

export const StyledStack = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
    gap: {
      large: {
        gap: '$large',
      },
      medium: {
        gap: '$medium',
      },
      small: {
        gap: '$small',
      },
      'x-large': {
        gap: '$x-large',
      },
      'x-small': {
        gap: '$x-small',
      },
    },
  },

  defaultVariants: {
    orientation: 'vertical',
  },
});

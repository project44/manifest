import { css } from '../../styles';

export const useStyles = css({
  $$spacing: '$x-small',

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

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
      lg: {
        gap: '$large',
      },
      md: {
        gap: '$medium',
      },
      sm: {
        gap: '$small',
      },
      xl: {
        gap: '$x-large',
      },
      xs: {
        gap: '$x-small',
      },
    },
  },

  defaultVariants: {
    orientation: 'vertical',
  },
});

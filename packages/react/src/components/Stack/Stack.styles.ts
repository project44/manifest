import { css } from '../../styles';

export const useStyles = css({
  $$spacing: '$x-small',

  display: 'flex',
  flexDirection: 'column',

  variants: {
    orientation: {
      horizontal: {
        '@sm': {
          flexDirection: 'row',
        },
      },
      vertical: {
        flexDirection: 'column',
      },
    },
    spacing:
  },

  defaultVariants: {
    orientation: 'vertical',
  },
});

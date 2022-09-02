import { css, pxToRem } from '../../styles';

export const useStyles = css({
  justifyContent: 'center',

  variants: {
    size: {
      medium: {
        px: '$small',
      },
      small: {
        px: pxToRem(7),
      },
    },
  },
});

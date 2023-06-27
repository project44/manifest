import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
  variants: {
    size: {
      medium: {
        '.manifest-numberfield-base__input': {
          py: pxToRem(9),
        },
      },
      small: {
        '.manifest-numberfield-base__input': {
          py: pxToRem(6),
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

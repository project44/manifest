import { css, pxToRem } from '../../styles';

export const useStyles = css({
  variants: {
    size: {
      medium: {
        '.manifest-textfield-base__icon': {
          fontSize: '$x-large',

          '> .material-icons': {
            fontSize: '$x-large',
          },
        },

        '.manifest-textfield-base__input': {
          py: pxToRem(9),
        },
      },
      small: {
        '.manifest-textfield-base__icon': {
          fontSize: pxToRem(18),

          '> .material-icons': {
            fontSize: pxToRem(18),
          },
        },

        '.manifest-textfield-base__input': {
          py: pxToRem(6),
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

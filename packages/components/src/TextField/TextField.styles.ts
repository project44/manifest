import { css, pxToRem } from '@project44-manifest/styles';

export const useTextFieldStyles = css({
  variants: {
    size: {
      medium: {
        '.manifest-textfield-base--icon': {
          fontSize: '$x-large',

          '> .material-icons': {
            fontSize: '$x-large',
          },
        },

        '.manifest-textfield-base--input': {
          py: pxToRem(9),
        },
      },
      small: {
        '.manifest-textfield-base--icon': {
          fontSize: pxToRem(18),

          '> .material-icons': {
            fontSize: pxToRem(18),
          },
        },

        '.manifest-textfield-base--input': {
          py: pxToRem(6),
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

export type { CSS } from '@project44-manifest/styles';
export { cx } from '@project44-manifest/styles';

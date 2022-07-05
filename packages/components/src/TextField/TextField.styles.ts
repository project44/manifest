import { css } from '@project44-manifest/styles';

export const useTextFieldStyles = css({
  variants: {
    size: {
      medium: {
        '.manifest-textfield-base--icon': {
          fontSize: '$x-large',
          size: '2.5rem',

          '> .material-icons': {
            fontSize: '$x-large',
          },
        },

        '.manifest-textfield-base--input': {
          height: '2.5rem',
        },
      },
      small: {
        '.manifest-textfield-base--icon': {
          fontSize: '1.125rem',
          size: '2.125rem',

          '> .material-icons': {
            fontSize: '1.125rem',
          },
        },

        '.manifest-textfield-base--input': {
          height: '2.125rem',
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

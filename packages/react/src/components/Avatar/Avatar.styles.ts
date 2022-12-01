import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
  alignItems: 'center',
  backgroundColor: '$background-secondary',
  borderRadius: '$full',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  outline: 'none',
  overflow: 'hidden',
  verticalAlign: 'middle',

  '.manifest-avatar__fallback': {
    alignItems: 'center',
    color: '$text-secondary',
    display: 'flex',
    fontFamily: '$text',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },

  '.manifest-avatar__image': {
    borderRadius: 'inherit',
    boxSizing: 'border-box',
    height: '100%',
    objectFit: 'cover',
    verticalAlign: 'middle',
    width: '100%',
  },

  variants: {
    size: {
      medium: {
        size: pxToRem(40),

        '.manifest-avatar__fallback': {
          fontSize: '$small',
          lineHeight: '$medium',
        },
      },
      small: {
        size: pxToRem(28),

        '.manifest-avatar__fallback': {
          fontSize: '$x-small',
          lineHeight: pxToRem(14),
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

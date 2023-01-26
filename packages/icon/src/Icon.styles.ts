import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledIcon = styled('svg', {
  flexShrink: 0,
  display: 'inline-block',
  fill: 'currentColor',
  height: '1em',
  userSelect: 'none',
  width: '1em',

  variants: {
    size: {
      large: {
        fontSize: pxToRem(24),
      },
      medium: {
        fontSize: pxToRem(20),
      },
      small: {
        fontSize: pxToRem(16),
      },
      'x-small': {
        fontSize: pxToRem(12),
      },
    },
  },

  defaultVariants: {
    size: 'large',
  },
});

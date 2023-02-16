import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledActionCardImage = styled('div', {
  display: 'block',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  objectFit: 'cover',

  variants: {
    size: {
      large: {
        height: pxToRem(180),
        minWidth: pxToRem(352),
      },
      small: {
        height: pxToRem(130),
        minWidth: pxToRem(320),
      },
    },
  },

  defaultVariants: {
    size: 'large',
  },
});

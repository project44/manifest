import { card, pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledActionCard = styled('a', card, {
  display: 'inline-block',
  color: '$text-primary',
  textDecoration: 'none',
});

export const StyledActionCardBody = styled('div', {
  px: '$large',
  paddingBottom: '$large',
  typography: '$body',
  width: '100%',
});

export const StyledActionCardHeader = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  p: '$large',
  typography: '$title',
});

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

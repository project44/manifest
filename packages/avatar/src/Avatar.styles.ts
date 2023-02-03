import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledAvatarImage = styled('img', {
  borderRadius: 'inherit',
  boxSizing: 'border-box',
  height: '100%',
  objectFit: 'cover',
  verticalAlign: 'middle',
  width: '100%',
});

export const StyledAvatarFallback = styled('span', {
  alignItems: 'center',
  color: '$text-secondary',
  display: 'flex',
  fontFamily: '$text',
  fontWeight: '$semibold',
  letterSpacing: '$medium',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

export const StyledAvatar = styled('div', {
  alignItems: 'center',
  backgroundColor: '$background-secondary',
  borderRadius: '$full',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  outline: 'none',
  overflow: 'hidden',
  verticalAlign: 'middle',

  variants: {
    size: {
      medium: {
        size: pxToRem(40),
        [`& ${StyledAvatarFallback}`]: {
          fontSize: '$small',
          lineHeight: '$medium',
        },
      },
      small: {
        size: pxToRem(28),
        [`& ${StyledAvatarFallback}`]: {
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

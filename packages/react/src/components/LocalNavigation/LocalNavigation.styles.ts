import { styled } from '@project44-manifest/react-styles';

export const StyledNavigation = styled('div', {
  alignItems: 'center',
  display: 'flex',
  gap: '$small',
  minH: '56px',
  px: '$large',
  variants: {
    variant: {
      primary: {
        bgColor: '$background-top-nav',
      },
      secondary: {
        bgColor: '$background-primary',
        borderBottom: '1px solid $border-primary',
      },
    },
  },
});

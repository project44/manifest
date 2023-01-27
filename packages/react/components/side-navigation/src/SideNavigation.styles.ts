import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledNavigation = styled('div', {
  boxSizing: 'border-box',
  flex: '0 0 auto',

  variants: {
    isOpen: {
      true: {
        width: pxToRem(240),
      },
      false: {
        width: pxToRem(56),
      },
    },
  },
});

export const StyledNavigationSurface = styled('div', {
  backgroundColor: '$background-primary',
  borderRight: '1px solid $colors$border-primary',
  display: 'flex',
  flex: '1 0 auto',
  flexDirection: 'column',
  height: '100%',
  left: 0,
  outline: 'none',
  overflowX: 'hidden',
  position: 'fixed',
  top: 0,

  variants: {
    isOpen: {
      true: {
        width: pxToRem(240),
      },
      false: {
        width: pxToRem(56),
      },
    },
  },
});

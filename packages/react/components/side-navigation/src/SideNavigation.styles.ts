import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledNavigation = styled('div', {
  boxSizing: 'border-box',
  backgroundColor: '$background-primary',
  borderRight: '1px solid $colors$border-primary',
  display: 'flex',
  flexDirection: 'column',
  transition: 'width 250ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms',
  width: pxToRem(56),

  variants: {
    isOpen: {
      true: {
        width: '100%',
      },
      false: {},
    },
    isHovered: {
      true: {},
      false: {},
    },
  },
});

import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledNavigation = styled('div', {
  boxSizing: 'border-box',
  backgroundColor: '$background-primary',
  display: 'flex',
  flexDirection: 'column',
  transition: 'width 200ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms',
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

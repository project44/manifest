import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledNavigation = styled('div', {
  $$sideNavWidth: pxToRem(240),

  boxSizing: 'border-box',
  flex: '0 0 auto',
  overflowX: 'hidden',
  position: 'relative',
  transition: 'width 200ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms',
  whiteSpace: 'nowrap',
  width: '$$sideNavWidth',

  '.manifest-navigation__container': {
    backgroundColor: '$background-primary',
    bottom: 0,
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
    left: 0,
    outline: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'absolute',
    top: 0,
    transition: 'width 200ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms',
    width: '$$sideNavWidth',
    zIndex: '$sticky',
  },

  variants: {
    isOpen: {
      true: {
        $$sideNavWidth: pxToRem(240),
      },
      false: {
        $$sideNavWidth: pxToRem(56),
      },
    },
    isHovered: {
      true: {},
      false: {},
    },
  },
});

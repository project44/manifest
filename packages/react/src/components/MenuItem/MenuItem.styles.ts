import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledMenuItem = styled('li', {
  boxSizing: 'border-box',
  display: 'block',
  position: 'relative',
  my: pxToRem(2),
  textAlign: 'left',
  textDecoration: 'none',
  width: '100%',

  '.manifest-menu-item__container': {
    alignItems: 'center',
    borderRadius: '$small',
    boxSizing: 'border-box',
    color: '$text-primary',
    cursor: 'pointer',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-start',
    margin: 0,
    minHeight: pxToRem(36),
    minWidth: 0,
    position: 'relative',
    px: pxToRem(12),
    textAlign: 'left',
    textDecoration: 'none',
    transition: 'background-color 100ms cubic-bezier(0.4, 0.14, 0.3, 1)',
    userSelect: 'none',
  },

  '.manifest-menu-item__label': {
    flex: '1 1 auto',
    minWidth: 0,
  },

  '&:hover': {
    '.manifest-menu-item__container': {
      backgroundColor: '$background-secondary',
    },
  },

  variants: {
    isGrouped: {
      true: {
        '.manifest-menu-item__container': {
          color: '$text-secondary',
          paddingLeft: pxToRem(48),
          paddingRight: '$medium',
        },
      },
    },
    isSelected: {
      true: {
        '.manifest-menu-item__container': {
          backgroundColor: '$background-secondary',
        },
      },
    },
  },

  compoundVariants: [
    {
      isGrouped: true,
      isSelected: true,
      css: {
        color: '$text-primary',
      },
    },
  ],
});

export const StyledMenuItemIcon = styled('div', {
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,

  variants: {
    placement: {
      end: {
        marginLeft: pxToRem(12),
      },
      start: {
        marginRight: pxToRem(12),
      },
    },
  },
});

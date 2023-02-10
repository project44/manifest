import { pxToRem, styled } from '@project44-manifest/react-styles';
import { Typography } from '@project44-manifest/react-typography';

export const StyledMenuItem = styled('div', {
  alignItems: 'center',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'pointer',
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-start',
  position: 'relative',
  px: '$small',
  textAlign: 'left',
  textDecoration: 'none',
  transition: 'background-color 100ms cubic-bezier(0.4, 0.14, 0.3, 1)',
  userSelect: 'none',
  width: '100%',

  '&:hover': {
    backgroundColor: '$background-secondary',
  },

  variants: {
    isGrouped: {
      true: {
        color: '$text-secondary',
        paddingLeft: pxToRem(44),
        paddingRight: '$medium',
      },
    },
    isSelected: {
      true: {
        backgroundColor: '$background-secondary',
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

export const StyledMenuItemLabel = styled(Typography, {
  flex: '1 1 auto',
  py: '$small',
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

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
  my: pxToRem(2),
  position: 'relative',
  px: pxToRem(12),
  textAlign: 'left',
  textDecoration: 'none',
  userSelect: 'none',
  width: '100%',

  '&:hover': {
    backgroundColor: '$background-secondary',
  },

  variants: {
    isGrouped: {
      true: {
        color: '$text-secondary',
        paddingLeft: pxToRem(52),
        paddingRight: '$medium',
      },
    },
    isSelected: {
      true: {
        backgroundColor: '$background-secondary',
      },
    },
  },
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
        marginLeft: '$medium',
      },
      start: {
        marginRight: '$medium',
      },
    },
  },
});

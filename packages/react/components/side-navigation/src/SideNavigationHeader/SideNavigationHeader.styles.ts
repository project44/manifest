import { IconButton } from '@project44-manifest/react-button';
import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledContent = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flex: '1 1 auto',
});

export const StyledButton = styled(IconButton, {
  position: 'absolute',
  right: pxToRem(8),
  top: pxToRem(12),
});

export const StyledSideNavigationHeader = styled('div', {
  boxSizing: 'border-box',
  color: '$text-primary',
  display: 'flex',
  alignItems: 'center',
  minHeight: pxToRem(64),
  position: 'relative',
  paddingLeft: '$medium',
  paddingRight: '$x-small',

  variants: {
    isOpen: {
      false: {
        [`& ${StyledButton}`]: {
          display: 'none',
        },

        '&:hover': {
          [`& ${StyledContent}`]: {
            display: 'none',
          },

          [`& ${StyledButton}`]: {
            display: 'inline-flex',
          },
        },
      },
    },
  },
});

import { IconButton } from '@project44-manifest/react-button';
import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledContent = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flex: '1 1 auto',
});

export const StyledButton = styled(IconButton, {
  position: 'absolute',
  backgroundColor: '$background-primary',
  right: pxToRem(8),
  top: pxToRem(12),
  transition: 'visibility 250ms ease 0ms',
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
          visibility: 'hidden',
        },

        '&:hover': {
          [`& ${StyledButton}`]: {
            visibility: 'visible',
          },
        },
      },
    },
  },
});

import { IconButton } from '@project44-manifest/react-button';
import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledLogo = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flex: '1 1 auto',
});

export const StyledIconButton = styled(IconButton, {
  position: 'absolute',
  right: pxToRem(8),
  top: pxToRem(12),
  transition: 'all 100ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms',
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

  [`${StyledIconButton}`]: {
    backgroundColor: '$background-primary',

    '&:hover': {
      backgroundColor: '$palette-grey-100',
    },
  },

  variants: {
    isOpen: {
      true: {
        [`${StyledIconButton}`]: {
          opacity: 1,
          visibility: 'visible',
        },
      },
      false: {
        [`${StyledIconButton}`]: {
          opacity: 0,
          visibility: 'hidden',
        },
      },
    },
    isHovered: {
      true: {},
    },
  },

  compoundVariants: [
    {
      isHovered: true,
      isOpen: false,
      css: {
        [`${StyledIconButton}`]: {
          opacity: 1,
          visibility: 'visible',
        },
      },
    },
  ],
});

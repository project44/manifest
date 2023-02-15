import { IconButton } from '@project44-manifest/react-button';
import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledSideNavigationHeaderLogo = styled('div', {
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  position: 'absolute',
  size: pxToRem(56),
  top: 0,
});

export const StyledSideNavigationHeaderContent = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flex: '1 1 auto',
});

export const StyledSideNavigationHeaderButton = styled(IconButton, {
  position: 'absolute',
  right: pxToRem(8),
  top: pxToRem(8),
  transition: 'all 100ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms',
});

export const StyledSideNavigationHeader = styled('div', {
  boxSizing: 'border-box',
  color: '$text-primary',
  display: 'flex',
  alignItems: 'center',
  minHeight: pxToRem(56),
  position: 'relative',
  px: '$x-small',

  [`${StyledSideNavigationHeaderButton}`]: {
    backgroundColor: '$background-primary',

    '&:hover': {
      backgroundColor: '$palette-grey-100',
    },
  },

  variants: {
    isOpen: {
      true: {
        [`${StyledSideNavigationHeaderButton}`]: {
          opacity: 1,
          visibility: 'visible',
        },
      },
      false: {
        [`${StyledSideNavigationHeaderButton}`]: {
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
        [`${StyledSideNavigationHeaderButton}`]: {
          opacity: 1,
          visibility: 'visible',
        },
      },
    },
  ],
});

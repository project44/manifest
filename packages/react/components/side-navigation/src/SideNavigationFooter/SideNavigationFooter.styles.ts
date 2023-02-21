import { ChevronDown } from '@project44-manifest/react-icons';
import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledSideNavigationFooterContent = styled('div', {
  alignItems: 'flex-start',
  boxSizing: 'border-box',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  px: pxToRem(12),
});

export const StyledSideNavigationFooterIcon = styled(ChevronDown, {
  color: '$text-secondary',
  transition: 'transform 100ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms',
});

export const StyledSideNavigationFooter = styled('button', {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderTop: '1px solid $colors$border-primary',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: '$text',
  fontSize: '$small',
  fontWeight: '$semibold',
  justifyContent: 'flex-start',
  letterSpacing: '$medium',
  lineHeight: '$small',
  minHeight: pxToRem(64),
  position: 'relative',
  paddingLeft: '$small',
  paddingRight: '$medium',
  outline: 'none',
  overflow: 'hidden',
  userSelect: 'none',
  whiteSpace: 'nowrap',

  '&[aria-expanded="true"]': {
    backgroundColor: '$background-secondary',

    [`& ${StyledSideNavigationFooterIcon}`]: {
      color: '$text-primary',
      transform: 'rotate(180deg)',
    },
  },

  variants: {
    isHovered: {
      true: {
        backgroundColor: '$background-secondary',
      },
    },
  },
});

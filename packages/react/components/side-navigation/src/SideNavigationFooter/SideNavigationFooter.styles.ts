import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledSideNavigationFooter = styled('div', {
  borderTop: '1px solid $colors$border-primary',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  minHeight: pxToRem(64),
  position: 'relative',
  px: '$small',
});

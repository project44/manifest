import { Button } from '@project44-manifest/react-button';
import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledSideNavigationFooterMenu = styled(Button, {
  justifyContent: 'flex-start',
  borderTop: '1px solid $colors$border-primary',
  minHeight: pxToRem(64),
  position: 'relative',
  paddingLeft: '$small',
  paddingRight: '$medium',
  overflow: 'hidden',
});

export const StyledSideNavigationFooterMenuContent = styled('div', {
  alignItems: 'flex-start',
  boxSizing: 'border-box',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  px: pxToRem(12),
});

import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledToaster = styled('div', {
  bottom: pxToRem(24),
  left: pxToRem(24),
  pointerEvents: 'none',
  position: 'fixed',
  right: pxToRem(24),
  top: pxToRem(24),
  zIndex: 9999,
});

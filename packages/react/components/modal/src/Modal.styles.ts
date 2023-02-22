import { styled } from '@project44-manifest/react-styles';

export const StyledModalWrapper = styled('div', {
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  inset: 0,
  justifyContent: 'center',
  pointerEvents: 'none',
  position: 'fixed',
  zIndex: 2,
});

export const StyledModal = styled('div', { pointerEvents: 'auto' });

export const StyledUnderlay = styled('div', {
  // TODO: update once we have opacity tokens
  backgroundColor: 'rgba(9, 21, 33, 0.2)',
  inset: 0,
  overflow: 'hidden',
  position: 'fixed',
  zIndex: 1,
});

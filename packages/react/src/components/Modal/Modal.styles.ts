import { css, styled } from '@project44-manifest/react-styles';

const modalStyles = css({
  opacity: 0,
  visibility: 'hidden',

  pointerEvents: 'none',

  transition: 'opacity 200ms ease-in-out, visibility 200ms linear 200ms',

  variants: {
    isOpen: {
      true: {
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto',
      },
    },
  },
});

export const StyledModalWrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  boxSizing: 'border-box',
  inlineSize: '100vw',
  height: '100vh',

  visibility: 'hidden',

  pointerEvents: 'none',

  zIndex: '$modal',

  transition: 'visibilty 200ms linear 200ms',

  variants: {
    isOpen: {
      true: {
        visibility: 'visible',
      },
    },
    position: {
      top: {
        top: '64px',
        inlineSize: 'auto',
        left: '0px',
        right: '0px',
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },

  defaultVariants: {
    position: 'top',
  },
});

export const StyledModal = styled(
  'div',
  {
    backgroundColor: '$background-surface',
    borderRadius: '$small',

    outline: 'none',
    overflow: 'hidden',

    zIndex: '$modal',
  },
  modalStyles,
);

export const StyledUnderlay = styled(
  'div',
  {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,

    overflow: 'hidden',
    zIndex: '$overlay',

    backgroundColor: '$background-backdrop',
    opacity: '0.6 !important',
  },
  modalStyles,
);

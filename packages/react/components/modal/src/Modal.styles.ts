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

  zIndex: 2,

  transition: 'visibilty 200ms linear 200ms',

  variants: {
    isOpen: {
      true: {
        visibility: 'visible',
      },
    },
  },
});

export const StyledModal = styled(
  'div',
  {
    backgroundColor: '$background-surface',
    borderRadius: '$small',

    outline: 'none',
    overflow: 'hidden',

    zIndex: 2,
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
    zIndex: 1,

    // TODO: update once we have opacity tokens
    backgroundColor: 'rgba(9, 21, 33, 0.2)',
  },
  modalStyles,
);

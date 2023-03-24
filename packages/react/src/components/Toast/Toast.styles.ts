import { keyframes, pxToRem, styled } from '@project44-manifest/react-styles';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';

const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

export const StyledToast = styled('div', {
  $$toastVariantColor: 'transparent',

  backgroundColor: '$background-surface',
  borderLeftColor: '$$toastVariantColor',
  borderLeftStyle: 'solid',
  borderLeftWidth: pxToRem(4),
  borderRadius: '$small',
  boxShadow: '$medium',
  boxSizing: 'border-box',
  display: 'flex',
  maxWidth: pxToRem(440),
  padding: pxToRem(20),
  pointerEvents: 'auto',
  position: 'relative',
  width: '100%',
  willChange: 'transform',

  '> .manifest-toast__icon': {
    color: '$$toastVariantColor',
    marginRight: pxToRem(20),
    size: pxToRem(32),
  },

  variants: {
    isVisible: {
      true: {
        animation: `${fadeIn} 200ms cubic-bezier(0.4, 0.14, 0.3, 1) forwards`,
      },
      false: {
        animation: `${fadeOut} 200ms forwards cubic-bezier(0.4, 0.14, 0.3, 1)`,
      },
    },
    variant: {
      default: {
        $$toastVariantColor: 'transparent',
      },
      info: {
        $$toastVariantColor: '$colors$palette-indigo-600',
      },
      warning: {
        $$toastVariantColor: '$colors$palette-orange-600',
      },
      success: {
        $$toastVariantColor: '$colors$palette-green-600',
      },
      error: {
        $$toastVariantColor: '$colors$palette-red-600',
      },
    },
  },
});

export const StyledToastContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginRight: '$x-large',
});

export const StyledToastActions = styled('div', {
  alignItems: 'center',
  display: 'flex',
  marginTop: '$medium',
});

export const StyledToastDismissButton = styled(IconButton, {
  position: 'absolute',
  right: pxToRem(12),
  top: pxToRem(12),
});

export const StyledToastDescription = styled(Typography, {
  marginTop: '$small',
});

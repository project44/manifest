import { focus, styled } from '../../styles';
import { Primitive } from '@radix-ui/react-primitive';

export const StyledButtonIcon = styled(Primitive.span, {
  alignSelf: 'center',
  display: 'inline-flex',
  flexShrink: 0,

  variants: {
    placement: {
      end: {
        marginLeft: '$small',
      },
      start: {
        marginRight: '$small',
      },
    },
  },
});

export const StyledButton = styled(
  Primitive.button,
  {
    $$buttonPadding: '$space$small',

    alignItems: 'center',
    appearance: 'none',
    border: 'none',
    borderRadius: '$small',
    boxSizing: 'border-box',
    display: 'inline-flex',
    fontFamily: '$text',
    fontSize: '$small',
    fontWeight: '$semibold',
    justifyContent: 'center',
    letterSpacing: '$medium',
    lineHeight: '$small',
    position: 'relative',
    px: '0.75rem',
    transition: '$color',
    userSelect: 'none',
    whiteSpace: 'nowrap',

    '&:disabled': {
      pointerEvents: 'none',
      opacity: 0.38,
    },

    variants: {
      variant: {
        danger: {
          backgroundColor: '$status-danger-500',
          boxShadow: '$small',
          color: '$contrast-danger',

          '&:hover': {
            backgroundColor: '$status-danger-600',
          },

          '&:active': {
            backgroundColor: '$status-danger-800',
            boxShadow: '$inset',
          },
        },
        brand: {
          background: '$brand-gradient',
          boxShadow: '$small',
          color: '$contrast-primary',
        },
        primary: {
          backgroundColor: '$primary',
          boxShadow: '$small',
          color: '$contrast-primary',

          '&:hover': {
            backgroundColor: '$palette-indigo-700',
          },

          '&:active': {
            backgroundColor: '$palette-indigo-900',
            boxShadow: '$inset',
          },
        },
        secondary: {
          backgroundColor: '$white',
          boxShadow: '$small',
          color: '$text-primary',

          '&:hover': {
            backgroundColor: '$palette-grey-100',
          },

          '&:active': {
            backgroundColor: '$palette-grey-300',
            boxShadow: '$inset',
          },
        },
        tertiary: {
          backgroundColor: 'transparent',
          color: '$text-primary',

          '&:hover': {
            backgroundColor: '$palette-grey-100',
          },

          '&:active': {
            backgroundColor: '$palette-grey-300',
          },
        },
      },
      size: {
        medium: {
          py: '$$buttonPadding',

          [`& ${StyledButtonIcon} > .material-icons`]: {
            fontSize: '$x-large',
          },
        },
        small: {
          $$buttonPadding: '0.375rem',
          py: '$$buttonPadding',

          [`& ${StyledButtonIcon} > .material-icons`]: {
            fontSize: '1.125rem',
          },
        },
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'primary',
    },
  },
  focus,
);

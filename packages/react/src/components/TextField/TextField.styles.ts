import { focus, styled } from '../../styles';

export const StyledInput = styled(
  'input',
  {
    $$backgroundColor: '$colors$background-primary',
    $$borderColor: '$colors$palette-grey-500',
    $$textColor: '$colors$text-primary',

    appearance: 'none',
    backgroundColor: '$$backgroundColor',
    border: '1px solid $$borderColor',
    borderRadius: '$small',
    boxSizing: 'border-box',
    color: '$$textColor',
    cursor: 'text',
    margin: 0,
    outline: 0,
    p: '0 $small',
    resize: 'none',
    transition: '$color',
    typography: '$subtext',
    width: '100%',

    '&::placeholder': {
      color: '$text-tertiary',
    },

    variants: {
      hasEndIcon: {
        true: {
          paddingRight: '2.5rem',
        },
      },
      hasStartIcon: {
        true: {
          paddingLeft: '2.5rem',
        },
      },
      isDisabled: {
        true: {
          $$backgroundColor: '$colors$palette-grey-50',
          $$textColor: '$colors$text-disabled',

          cursor: 'not-allowed',
        },
      },
      isHovered: {
        true: {
          $$borderColor: '$colors$palette-grey-600',
        },
      },
      isInvalid: {
        true: {
          $$borderColor: '$colors$border-danger',
          $$textColor: '$colors$text-danger',
        },
      },
      size: {
        medium: {
          height: '2.5rem',
        },
        small: {
          height: '2.125rem',
        },
      },
    },

    defaultVariants: {
      size: 'medium',
    },
  },
  focus,
);

export const StyledIcon = styled('span', {
  $$iconColor: '$colors$text-tertiary',

  alignItems: 'center',
  color: '$$iconColor',
  display: 'inline-flex',
  justifyContent: 'center',
  padding: '$small',
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  zIndex: 2,

  variants: {
    isInvalid: {
      true: {
        $$iconColor: '$colors$text-danger',
      },
    },
    placement: {
      end: { right: 0 },
      start: { left: 0 },
    },
    size: {
      medium: {
        fontSize: '$x-large',
        size: '2.5rem',

        '> .material-icons': {
          fontSize: '$x-large',
        },
      },
      small: {
        fontSize: '1.125rem',
        size: '2.125rem',

        '> .material-icons': {
          fontSize: '1.125rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

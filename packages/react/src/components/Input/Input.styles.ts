import { styled } from '../../styles';

export const StyledInputContainer = styled('div', {
  $$inputBackgroundColor: '$colors$background-primary',
  $$inputBorderColor: '$colors$palette-grey-200',

  backgroundColor: '$$inputBackgroundColor',
  border: '1px solid $$inputBorderColor',
  borderRadius: '$small',
  bottom: 0,
  boxSizing: 'border-box',
  left: 0,
  pointerEvents: 'none',
  position: 'absolute',
  right: 0,
  top: 0,
  transition: '$color',
  zIndex: 10,

  variants: {
    isDisabled: {
      true: {
        $$inputBackgroundColor: '$colors$palette-grey-50',
      },
    },
    isFocused: {
      true: {
        $$inputBorderColor: '$colors$primary',

        outline: '$colors$palette-indigo-200 solid 3px',
      },
    },
    isHovered: {
      true: {
        $$inputBorderColor: '$colors$palette-grey-600',
      },
    },
    isInvalid: {
      true: {
        $$inputBorderColor: '$colors$border-danger',
      },
    },
  },
});

export const StyledInput = styled('input', {
  $$inputTextColor: '$colors$text-primary',

  appearance: 'none',
  background: 'none',
  border: 'none',
  color: '$$inputTextColor',
  fontFamily: '$text',
  fontSize: '$small',
  fontWeight: '$regular',
  lineHeight: '$small',
  letterSpacing: '$medium',
  marge: 0,
  minWin: 0,
  outline: 0,
  px: '0.75rem',
  resize: 'none',
  textAlign: 'left',
  transition: '$color',
  width: '100%',
  zIndex: 20,

  '&:disabled': {
    pointerEvents: 'none',

    '&::placeholder': {
      color: '$text-disabled',
    },
  },

  '&::placeholder': {
    color: '$text-tertiary',
    opacity: 1,
    userSelect: 'none',
  },

  '&.mainfest-input__has-end-icon': {
    paddingRight: 0,
  },

  '&.manifest-input__has-start-icon': {
    paddingLeft: 0,
  },

  variants: {
    isInvalid: {
      true: {
        $$inputTextColor: '$colors$text-danger',

        '&::placeholder': {
          color: '$text-danger',
        },
      },
    },
    size: {
      medium: {
        minHeight: '2.5rem',
      },
      small: {
        minHeight: '2rem',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

export const StyledInputIcon = styled('div', {
  $$iconColor: '$colors$text-tertiary',

  alignItems: 'center',
  color: '$$iconColor',
  display: 'flex',
  justifyContent: 'center',
  pointerEvents: 'none',
  px: '0.75rem',
  zIndex: 11,

  variants: {
    isInvalid: {
      true: {
        $$iconColor: '$colors$text-danger',
      },
    },
  },
});

export const StyledInputWrapper = styled('div', {
  alignItems: 'center',
  border: 0,
  cursor: 'text',
  display: 'flex',
  margin: 0,
  padding: 0,
  position: 'relative',

  variants: {
    isDisabled: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
});

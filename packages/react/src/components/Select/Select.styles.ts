import { focusWithin, styled } from '../../styles';

export const StyledSelect = styled('select', {
  $$inputTextColor: '$colors$text-primary',

  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$small',
  color: '$$inputTextColor',
  cursor: 'pointer',
  margin: 0,
  outline: 0,
  resize: 'none',
  transition: '$color',
  typography: '$subtext',
  width: '100%',

  '&::placeholder': {
    color: '$text-tertiary',
  },

  variants: {
    isDisabled: {
      true: {
        $$inputTextColor: '$colors$text-disabled',

        cursor: 'not-allowed',

        '&::placeholder': {
          color: '$text-disabled',
        },
      },
    },
    isInvalid: {
      true: {
        $$inputTextColor: '$colors$text-danger',
      },
    },
    size: {
      medium: {
        padding: '0.625rem $small',
      },
      small: {
        padding: '0.375rem $small',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

export const StyledSelectIcon = styled('div', {
  $$iconColor: '$colors$text-tertiary',

  alignItems: 'center',
  color: '$$iconColor',
  display: 'inline-flex',
  justifyContent: 'center',
  px: '$x-small',

  variants: {
    isInvalid: {
      true: {
        $$iconColor: '$colors$text-danger',
      },
    },
    placement: {
      end: {
        right: 0,
        pointerEvents: 'none',
        position: 'absolute',
        transform: 'translateY(-50%)',
        top: '50%',
        zIndex: 10,
      },
      start: {
        borderBottomLefttRadius: '$small',
        borderTopLefttRadius: '$small',
        borderRight: '1px solid $palette-grey-200',
      },
    },
    size: {
      medium: {
        fontSize: '$x-large',

        '> .material-icons': {
          fontSize: '$x-large',
        },
      },
      small: {
        fontSize: '1.125rem',

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

export const StyledSelectOption = styled('option', {
  boxSizing: 'border-box',
  color: 'inherit',
});

export const StyledSelectWrapper = styled(
  'div',
  {
    $$inputBackgroundColor: '$colors$background-primary',
    $$inputBorderColor: '$colors$palette-grey-200',

    backgroundColor: '$$inputBackgroundColor',
    border: '1px solid $$inputBorderColor',
    borderRadius: '$small',
    boxSizing: 'border-box',
    cursor: 'text',
    display: 'flex',
    position: 'relative',
    transition: '$default',
    width: '100%',

    variants: {
      isDisabled: {
        true: {
          $$inputBackgroundColor: '$colors$palette-grey-50',

          cursor: 'not-allowed',
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
  },
  focusWithin,
);

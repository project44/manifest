import { css, pxToRem } from '../../styles';

export const useStyles = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-primary',

  display: 'flex',
  minWidth: pxToRem(48),
  position: 'relative',
  width: '100%',

  '.manifest-combobox__icon': {
    alignItems: 'center',
    color: '$$iconColor',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: '$small',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },

  '.manifest-combobox__icon--end': {
    right: 0,
  },

  '.manifest-combobox__icon--start': {
    left: 0,
  },

  '.manifest-combobox__input': {
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
    paddingRight: pxToRem(40),
    resize: 'none',
    transition: '$color',
    typography: '$subtext',
    width: '100%',

    '&::placeholder': {
      color: '$text-tertiary',
    },
  },

  variants: {
    hasStartIcon: {
      true: {
        '.manifest-combobox__input': {
          paddingLeft: pxToRem(40),
        },
      },
    },
    isDisabled: {
      true: {
        $$backgroundColor: '$colors$palette-grey-50',
        $$textColor: '$colors$text-disabled',

        '.manifest-combobox__input': {
          cursor: 'not-allowed',
        },
      },
    },
    isFocused: {
      true: {
        $$borderColor: '$colors$primary-default',
      },
    },
    isFocusVisible: {
      true: {
        '.manifest-combobox__input': {
          outline: '$colors$palette-indigo-200 solid 3px',
        },
      },
      false: {
        outline: 'none',
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
        $$iconColor: '$colors$text-danger',
        $$textColor: '$colors$text-danger',
      },
    },
    isPlaceholder: {
      true: {
        $$textColor: '$colors$text-tertiary',
      },
    },
    size: {
      medium: {
        '.manifest-combobox__icon': {
          fontSize: '$x-large',
          size: pxToRem(40),

          '> .material-icons': {
            fontSize: '$x-large',
          },
        },

        '.manifest-combobox__input': {
          height: pxToRem(40),
        },
      },
      small: {
        '.manifest-combobox__icon': {
          fontSize: pxToRem(18),
          size: pxToRem(34),

          '> .material-icons': {
            fontSize: pxToRem(18),
          },
        },

        '.manifest-combobox__input': {
          height: pxToRem(34),
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

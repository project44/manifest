import { css, pxToRem } from '../../styles';

export const useStyles = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-primary',

  '.manifest-multi-combobox__wrapper': {
    borderRadius: '$small',
    border: '1px solid $$borderColor',
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: pxToRem(40),
    minWidth: pxToRem(48),
    padding: `${pxToRem(7)} $small`,
    paddingRight: pxToRem(40),
    position: 'relative',
    width: '100%',
  },

  '.manifest-multi-combobox__icon': {
    alignItems: 'center',
    color: '$$iconColor',
    display: 'inline-flex',
    fontSize: '$x-large',
    justifyContent: 'center',
    padding: '$small',
    position: 'absolute',
    left: 0,
    size: pxToRem(40),
    top: 0,
    zIndex: 2,

    '> .material-icons': {
      fontSize: '$x-large',
    },
  },

  '.manifest-multi-combobox__button': {
    appearance: 'none',
    alignItems: 'center',
    background: 'none',
    border: 0,
    borderLeft: '1px solid $$borderColor',
    bottom: 0,
    color: '$$iconColor',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: '$x-large',
    justifyContent: 'center',
    margin: 0,
    outline: 'none',
    padding: '$small',
    position: 'absolute',
    right: -2,
    top: -1,
    zIndex: 2,

    '> .material-icons': {
      fontSize: '$x-large',
    },
  },

  '.manifest-multi-combobox__input': {
    appearance: 'none',
    border: 'none',
    backgroundColor: '$$backgroundColor',
    boxSizing: 'border-box',
    color: '$$textColor',
    cursor: 'text',
    flexGrow: 1,
    margin: 0,
    outline: 0,
    p: '0 $small',
    resize: 'none',
    transition: '$color',
    typography: '$subtext',
    width: '0',

    '&::placeholder': {
      color: '$text-tertiary',
    },
  },

  variants: {
    hasStartIcon: {
      true: {
        '.manifest-multi-combobox__input': {
          paddingLeft: pxToRem(40),
        },
      },
    },
    isDisabled: {
      true: {
        $$backgroundColor: '$colors$palette-grey-50',
        $$textColor: '$colors$text-disabled',

        '.manifest-multi-combobox__input': {
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
        '.manifest-multi-combobox__wrapper': {
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
  },
});

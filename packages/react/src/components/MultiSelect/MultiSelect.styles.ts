import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-primary',

  '.manifest-multi-select__wrapper': {
    alignItems: 'center',
    display: 'flex',
    minWidth: pxToRem(48),
    position: 'relative',
    width: '100%',
  },

  '.manifest-multi-select__icon': {
    alignItems: 'center',
    color: '$$iconColor',
    display: 'inline-flex',
    fontSize: '$x-large',
    justifyContent: 'center',
    padding: '$small',
    pointerEvents: 'none',
    position: 'absolute',
    size: pxToRem(40),
    top: 0,
    zIndex: 2,

    '> .manifest-icon': {
      fontSize: '$x-large',
    },
  },

  '.manifest-multi-select__icon--end': {
    right: 0,
  },

  '.manifest-multi-select__icon--start': {
    left: 0,
  },

  '.manifest-multi-select__input': {
    appearance: 'none',
    backgroundColor: '$$backgroundColor',
    border: '1px solid $$borderColor',
    borderRadius: '$small',
    boxSizing: 'border-box',
    color: '$$textColor',
    cursor: 'default',
    margin: 0,
    minHeight: pxToRem(40),
    outline: 0,
    padding: `${pxToRem(7)} $small`,
    paddingRight: pxToRem(40),
    textAlign: 'start',
    top: 0,
    width: '100%',
  },

  '.manifest-multi-select__text': {
    color: '$text-tertiary',
  },

  variants: {
    hasStartIcon: {
      true: {
        '.manifest-multi-select__input': {
          paddingLeft: pxToRem(40),
        },
      },
    },
    isActive: {
      true: {
        $$borderColor: '$colors$primary-active',
        $$iconColor: '$colors$text-secondary',
        $$textColor: '$colors$text-primary',
      },
    },
    isDisabled: {
      true: {
        $$backgroundColor: '$colors$palette-grey-50',
        $$textColor: '$colors$text-disabled',

        '.manifest-multi-select__input': {
          cursor: 'not-allowed',
        },
      },
    },
    isFocused: {
      true: {
        $$borderColor: '$colors$primary-active',
        $$iconColor: '$colors$text-secondary',
        $$textColor: '$colors$text-primary',
      },
    },
    isFocusVisible: {
      true: {
        '.manifest-multi-select__input': {
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
    isPressed: {
      true: {
        $$borderColor: '$colors$primary-active',
      },
    },
  },
});

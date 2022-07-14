import { css } from '@project44-manifest/styles';

export const useDatePickerStyles = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-tertiary',

  display: 'flex',
  minWidth: '3rem',
  position: 'relative',
  width: '100%',

  '.manifest-datepicker--icon': {
    alignItems: 'center',
    color: '$$iconColor',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: '$small',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },

  '.manifest-datepicker--icon__end': {
    right: 0,
  },

  '.manifest-datepicker--icon__start': {
    left: 0,
  },

  '.manifest-datepicker--input': {
    appearance: 'none',
    backgroundColor: '$$backgroundColor',
    border: '1px solid $$borderColor',
    borderRadius: '$small',
    boxSizing: 'border-box',
    color: '$$textColor',
    cursor: 'default',
    margin: 0,
    outline: 0,
    padding: '0 $small',
    paddingRight: '2.5rem',
    textAlign: 'start',
    width: '100%',
  },

  '.manifest-datepicker--text': {
    color: '$text-tertiary',
  },

  variants: {
    hasStartIcon: {
      true: {
        '.manifest-datepicker--input': {
          paddingLeft: '2.5rem',
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

        '.manifest-datepicker--input': {
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
        '.manifest-datepicker--input': {
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
        '.manifest-datepicker--icon': {
          fontSize: '$x-large',
          size: '2.5rem',

          '> .material-icons': {
            fontSize: '$x-large',
          },
        },

        '.manifest-datepicker--input': {
          height: '2.5rem',
        },
      },
      small: {
        '.manifest-datepicker--icon': {
          fontSize: '1.125rem',
          size: '2.125rem',

          '> .material-icons': {
            fontSize: '1.125rem',
          },
        },

        '.manifest-datepicker--input': {
          height: '2.125rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

export type { CSS } from '@project44-manifest/styles';
export { cx } from '@project44-manifest/styles';

import { css } from '@project44-manifest/styles';

export const useSelectStyles = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-primary',

  display: 'flex',
  minWidth: '3rem',
  position: 'relative',
  width: '100%',

  '.manifest-select--icon': {
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

  '.manifest-select--icon__end': {
    right: 0,
  },

  '.manifest-select--icon__start': {
    left: 0,
  },

  '.manifest-select--input': {
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

  '.manifest-select--text': {
    color: '$text-tertiary',
  },

  variants: {
    hasStartIcon: {
      true: {
        '.manifest-select--input': {
          paddingLeft: '2.5rem',
        },
      },
    },
    isDisabled: {
      true: {
        $$backgroundColor: '$colors$palette-grey-50',
        $$textColor: '$colors$text-disabled',

        '.manifest-select--input': {
          cursor: 'not-allowed',
        },
      },
    },
    isFocusVisible: {
      true: {
        '.manifest-select--input': {
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
        '.manifest-select--icon': {
          fontSize: '$x-large',
          size: '2.5rem',

          '> .material-icons': {
            fontSize: '$x-large',
          },
        },

        '.manifest-select--input': {
          height: '2.5rem',
        },
      },
      small: {
        '.manifest-select--icon': {
          fontSize: '1.125rem',
          size: '2.125rem',

          '> .material-icons': {
            fontSize: '1.125rem',
          },
        },

        '.manifest-select--input': {
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

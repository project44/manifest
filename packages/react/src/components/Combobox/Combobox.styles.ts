import { css } from '@project44-manifest/styles';

export const useComboboxStyles = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-primary',

  display: 'flex',
  minWidth: '3rem',
  position: 'relative',
  width: '100%',

  '.manifest-combobox--icon': {
    alignItems: 'center',
    color: '$$iconColor',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: '$small',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },

  '.manifest-combobox--icon__end': {
    right: 0,
  },

  '.manifest-combobox--icon__start': {
    left: 0,
  },

  '.manifest-combobox--input': {
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
    paddingRight: '2.5rem',
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
        '.manifest-combobox--input': {
          paddingLeft: '2.5rem',
        },
      },
    },
    isDisabled: {
      true: {
        $$backgroundColor: '$colors$palette-grey-50',
        $$textColor: '$colors$text-disabled',

        '.manifest-combobox--input': {
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
        '.manifest-combobox--input': {
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
        '.manifest-combobox--icon': {
          fontSize: '$x-large',
          size: '2.5rem',

          '> .material-icons': {
            fontSize: '$x-large',
          },
        },

        '.manifest-combobox--input': {
          height: '2.5rem',
        },
      },
      small: {
        '.manifest-combobox--icon': {
          fontSize: '1.125rem',
          size: '2.125rem',

          '> .material-icons': {
            fontSize: '1.125rem',
          },
        },

        '.manifest-combobox--input': {
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

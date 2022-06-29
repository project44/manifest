import { css } from '@project44-manifest/styles';

export const useTextFieldStyles = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',
  $$iconColor: '$colors$text-tertiary',
  $$textColor: '$colors$text-primary',

  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',

  '.manifest-text-field--icon': {
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

  '.manifest-text-field--icon__end': {
    right: 0,
  },

  '.manifest-text-field--icon__start': {
    left: 0,
  },

  '.manifest-text-field--input': {
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
  },

  variants: {
    hasEndIcon: {
      true: {
        '.manifest-text-field--input': {
          paddingRight: '2.5rem',
        },
      },
    },
    hasStartIcon: {
      true: {
        '.manifest-text-field--input': {
          paddingLeft: '2.5rem',
        },
      },
    },
    isDisabled: {
      true: {
        $$backgroundColor: '$colors$palette-grey-50',
        $$textColor: '$colors$text-disabled',

        cursor: 'not-allowed',
      },
    },
    isFocused: {
      true: {
        $$borderColor: '$colors$primary-default',
      },
    },
    isFocusVisible: {
      true: {
        '.manifest-text-field--input': {
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
    size: {
      medium: {
        '.manifest-text-field--icon': {
          fontSize: '$x-large',
          size: '2.5rem',

          '> .material-icons': {
            fontSize: '$x-large',
          },
        },

        '.manifest-text-field--input': {
          height: '2.5rem',
        },
      },
      small: {
        '.manifest-text-field--icon': {
          fontSize: '1.125rem',
          size: '2.125rem',

          '> .material-icons': {
            fontSize: '1.125rem',
          },
        },

        '.manifest-text-field--input': {
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

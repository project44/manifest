import { css } from '@project44-manifest/styles';

export const useTextFieldBaseStyles = css({
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

  '.manifest-textfield-base--icon': {
    alignItems: 'center',
    color: '$$iconColor',
    display: 'inline-flex',
    fontSize: '$x-large',
    justifyContent: 'center',
    padding: '$small',
    pointerEvents: 'none',
    position: 'absolute',
    size: '2.5rem',
    top: 0,
    zIndex: 2,

    '> .material-icons': {
      fontSize: '$x-large',
    },
  },

  '.manifest-textfield-base--icon__end': {
    right: 0,
  },

  '.manifest-textfield-base--icon__start': {
    left: 0,
  },

  '.manifest-textfield-base--input': {
    appearance: 'none',
    backgroundColor: '$$backgroundColor',
    border: '1px solid $$borderColor',
    borderRadius: '$small',
    boxSizing: 'border-box',
    color: '$$textColor',
    cursor: 'text',
    margin: 0,
    minHeight: '2.5rem',
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
        '.manifest-textfield-base--input': {
          paddingRight: '2.5rem',
        },
      },
    },
    hasStartIcon: {
      true: {
        '.manifest-textfield-base--input': {
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
        '.manifest-textfield-base--input': {
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
  },
});

export type { CSS } from '@project44-manifest/styles';
export { cx } from '@project44-manifest/styles';

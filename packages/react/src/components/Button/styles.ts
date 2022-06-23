import { focus, css } from '../../styles';

export const buttonStyles = css(
  {
    $$buttonBackgroundColor: 'transparent',
    $$buttonBoxShadow: '$shadows$small',
    $$buttonPaddingBottomTop: '$space$small',
    $$buttonTextcolor: '$colors$text-primary',

    all: 'unset',
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: '$$buttonBackgroundColor',
    border: 'none',
    borderRadius: '$small',
    boxShadow: '$$buttonBoxShadow',
    boxSizing: 'border-box',
    color: '$$buttonTextcolor',
    cursor: 'pointer',
    display: 'inline-flex',
    justifyContent: 'center',
    position: 'relative',
    px: '0.75rem',
    py: '$$buttonPaddingBottomTop',
    userSelect: 'none',
    whiteSpace: 'nowrap',

    '.manifest-button--icon': {
      alignSelf: 'center',
      display: 'inline-flex',
      flexShrink: 0,
    },

    '.manifest-button--text': {
      fontFamily: '$text',
      fontSize: '$small',
      fontWeight: '$semibold',
      letterSpacing: '$medium',
      lineHeight: '$small',
    },

    '.manifest-button--icon__end': {
      marginLeft: '$small',
    },

    '.manifest-button--icon__start': {
      marginRight: '$small',
    },

    variants: {
      isDisabled: {
        true: {
          cursor: 'not-allowed',
          pointerEvents: 'none',
          opacity: 0.57,
        },
      },
      isFocusVisible: {
        true: {},
      },
      isHovered: {
        true: {},
      },
      isPressed: {
        true: {},
      },
      variant: {
        danger: {
          $$buttonBackgroundColor: '$colors$palette-red-500',
          $$buttonTextcolor: '$colors$palette-white',
        },
        brand: {
          $$buttonTextcolor: '$colors$palette-white',

          background: '$colors$brand-gradient',
        },
        primary: {
          $$buttonBackgroundColor: '$colors$primary-default',
          $$buttonTextcolor: '$colors$palette-white',
        },
        secondary: {
          $$buttonBackgroundColor: '$colors$palette-white',
        },
        tertiary: {
          $$buttonBackgroundColor: 'transparent',
          $$buttonBoxShadow: 'none',
        },
      },
      size: {
        medium: {
          '.manifest-button--text': { py: '2px' },

          [`.manifest-button--icon > .material-icons`]: {
            fontSize: '$x-large',
          },
        },
        small: {
          $$buttonPaddingBottomTop: '0.375rem',

          [`.manifest-button--icon > .material-icons`]: {
            fontSize: '1.125rem',
          },
        },
      },
    },

    compoundVariants: [
      {
        isHovered: true,
        variant: 'primary',
        css: {
          $$buttonBackgroundColor: '$colors$primary-hover',
        },
      },
      {
        isHovered: true,
        variant: 'secondary',
        css: {
          $$buttonBackgroundColor: '$colors$palette-grey-100',
        },
      },
      {
        isHovered: true,
        variant: 'tertiary',
        css: {
          $$buttonBackgroundColor: '$colors$palette-grey-100',
        },
      },
      {
        isHovered: true,
        variant: 'brand',
        css: {
          background: '$colors$brand-hover',
        },
      },
      {
        isHovered: true,
        variant: 'danger',
        css: {
          background:
            'linear-gradient(0deg, rgba(9, 21, 33, 0.15), rgba(9, 21, 33, 0.15)), $colors$palette-red-500',
        },
      },
      {
        isPressed: true,
        variant: 'primary',
        css: {
          $$buttonBackgroundColor: '$colors$primary-active',
          $$buttonBoxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
        },
      },
      {
        isPressed: true,
        variant: 'secondary',
        css: {
          $$buttonBackgroundColor: '$colors$palette-grey-300',
          $$buttonBoxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
        },
      },
      {
        isPressed: true,
        variant: 'tertiary',
        css: {
          $$buttonBackgroundColor: '$colors$palette-grey-300',
        },
      },
      {
        isPressed: true,
        variant: 'brand',
        css: {
          background: '$colors$brand-active',
        },
      },
      {
        isPressed: true,
        variant: 'danger',
        css: {
          $$buttonBoxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',

          background:
            'linear-gradient(0deg, rgba(9, 21, 33, 0.3), rgba(9, 21, 33, 0.3)), $colors$palette-red-500',
        },
      },
    ],

    defaultVariants: {
      size: 'medium',
      variant: 'primary',
    },
  },
  focus,
);

export const buttonGroupStyles = css({
  boxSizing: 'border-box',
  display: 'inline-flex',

  variants: {
    isAttached: {
      true: {
        '> *:first-of-type:not(:last-of-type)': {
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
        },

        '> *:not(:first-of-type):not(:last-of-type)': { borderRadius: 0 },

        '> *:not(:first-of-type):last-of-type': {
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
        },
      },
      false: {
        '& > *:not(style) ~ *:not(style)': { marginLeft: '$small' },
      },
    },
  },

  defaultVariants: {
    isAttached: false,
  },
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

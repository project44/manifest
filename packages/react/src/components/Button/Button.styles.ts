import { focus, css } from '../../styles';

export const useButtonStyles = css(
  {
    $$backgroundColor: 'transparent',
    $$boxShadow: '$shadows$small',
    $$color: '$colors$text-primary',

    all: 'unset',
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: '$$backgroundColor',
    border: 'none',
    borderRadius: '$small',
    boxShadow: '$$boxShadow',
    boxSizing: 'border-box',
    color: '$$color',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: '$text',
    fontSize: '$small',
    fontWeight: '$semibold',
    justifyContent: 'center',
    letterSpacing: '$medium',
    lineHeight: '$small',
    position: 'relative',
    px: '0.75rem',
    userSelect: 'none',
    whiteSpace: 'nowrap',

    '.manifest-button--icon': {
      alignSelf: 'center',
      display: 'inline-flex',
      flexShrink: 0,
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
          $$backgroundColor: '$colors$palette-red-500',
          $$color: '$colors$palette-white',
        },
        brand: {
          $$color: '$colors$palette-white',

          background: '$colors$brand-gradient',
        },
        primary: {
          $$backgroundColor: '$colors$primary-default',
          $$color: '$colors$palette-white',
        },
        secondary: {
          $$backgroundColor: '$colors$palette-white',
        },
        tertiary: {
          $$backgroundColor: 'transparent',
          $$boxShadow: 'none',
        },
      },
      size: {
        medium: {
          height: '2.5rem',
          py: '$small',

          [`.manifest-button--icon > .material-icons`]: {
            fontSize: '$x-large',
          },
        },
        small: {
          height: '2rem',
          py: '0.375rem',

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
          $$backgroundColor: '$colors$primary-hover',
        },
      },
      {
        isHovered: true,
        variant: 'secondary',
        css: {
          $$backgroundColor: '$colors$palette-grey-100',
        },
      },
      {
        isHovered: true,
        variant: 'tertiary',
        css: {
          $$backgroundColor: '$colors$palette-grey-100',
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
          $$backgroundColor: '$colors$primary-active',
          $$boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
        },
      },
      {
        isPressed: true,
        variant: 'secondary',
        css: {
          $$backgroundColor: '$colors$palette-grey-300',
          $$boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
        },
      },
      {
        isPressed: true,
        variant: 'tertiary',
        css: {
          $$backgroundColor: '$colors$palette-grey-300',
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
          $$boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',

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

export const useButtonGroupStyles = css({
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

export const useIconButtonStyles = css({
  justifyContent: 'center',

  variants: {
    size: {
      medium: {
        padding: '$small',
      },
      small: {
        padding: '$x-small',
      },
    },
  },
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

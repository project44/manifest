import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledButton = styled('button', {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$small',
  boxShadow: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: 'inherit',
  fontSize: '$small',
  fontWeight: '$semibold',
  justifyContent: 'center',
  letterSpacing: '$medium',
  lineHeight: '$small',
  outline: 'none',
  position: 'relative',
  px: pxToRem(12),
  userSelect: 'none',
  whiteSpace: 'nowrap',

  variants: {
    hasEndIcon: {
      true: {
        paddingRight: '$small',
      },
    },
    hasStartIcon: {
      true: {
        paddingLeft: '$small',
      },
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: 0.57,
      },
    },
    isFocusVisible: {
      true: {
        '&:after': {
          backgroundColor: 'transparent',
          border: '2px solid $colors$palette-indigo-200',
          // TODO: replace with design token once its defined.s
          borderRadius: '4px',
          bottom: '-4px',
          content: '',
          display: 'block',
          left: '-4px',
          position: 'absolute',
          right: '-4px',
          top: '-4px',
        },
      },
      false: {},
    },
    isHovered: {
      true: {},
    },
    isPressed: {
      true: {},
    },
    variant: {
      danger: {
        backgroundColor: '$palette-red-500',
        color: '$palette-white',
      },
      brand: {
        background: '$brand-gradient',
        color: '$palette-white',
      },
      primary: {
        backgroundColor: '$primary-default',
        color: '$palette-white',
      },
      secondary: {
        backgroundColor: '$palette-white',
      },
      tertiary: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
    size: {
      medium: {
        height: pxToRem(40),
        py: '$small',

        '> .material-icons': {
          fontSize: '$x-large',
        },
      },
      small: {
        height: pxToRem(32),
        py: pxToRem(6),

        '> .material-icons': {
          fontSize: pxToRem(18),
        },
      },
    },
  },

  compoundVariants: [
    {
      isHovered: true,
      variant: 'primary',
      css: {
        backgroundColor: '$primary-hover',
      },
    },
    {
      isHovered: true,
      variant: 'secondary',
      css: {
        backgroundColor: '$palette-grey-100',
      },
    },
    {
      isHovered: true,
      variant: 'tertiary',
      css: {
        backgroundColor: '$palette-grey-100',
      },
    },
    {
      isHovered: true,
      variant: 'brand',
      css: {
        background: '$brand-hover',
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
        backgroundColor: '$primary-active',
        boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
      },
    },
    {
      isPressed: true,
      variant: 'secondary',
      css: {
        backgroundColor: '$palette-grey-300',
        boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
      },
    },
    {
      isPressed: true,
      variant: 'tertiary',
      css: {
        backgroundColor: '$palette-grey-300',
      },
    },
    {
      isPressed: true,
      variant: 'brand',
      css: {
        background: '$brand-active',
      },
    },
    {
      isPressed: true,
      variant: 'danger',
      css: {
        background:
          'linear-gradient(0deg, rgba(9, 21, 33, 0.3), rgba(9, 21, 33, 0.3)), $colors$palette-red-500',
        boxShadow: 'inset 0px 1px 1px rgba(5, 10, 26, 0.25)',
      },
    },
  ],

  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});

export const StyledButtonIcon = styled('span', {
  alignSelf: 'center',
  display: 'inline-flex',
  flexShrink: 0,

  variants: {
    placement: {
      end: {
        marginLeft: '$small',
        marginRight: '-$x-small',
      },
      start: {
        marginLeft: '-$x-small',
        marginRight: '$small',
      },
    },
    size: {
      medium: {
        fontSize: '$x-large',
      },
      small: {
        fontSize: pxToRem(18),
      },
    },
  },
});

export const StyledButtonGroup = styled('div', {
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

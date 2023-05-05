import { css, keyframes, pxToRem } from '@project44-manifest/react-styles';

const raiseFade = keyframes({
  '0%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 0, transform: `translateY(-${pxToRem(25)})` },
});

export const useStyles = css({
  position: 'relative',
  alignItems: 'center',
  appearance: 'none',
  background: 'none',
  border: '1px solid $colors$palette-grey-200',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  display: 'inline-flex',
  height: pxToRem(24),
  justifyContent: 'center',
  outline: 0,
  textDecoration: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  maxWidth: pxToRem(100),

  '.manifest-tag__icon-button': {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    color: '$text-secondary',
    p: '$x-small',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '0 1px 1px 0',
    background: 'none',
  },

  '.manifest-tag__icon-button:hover': {
    border: 'none',
    background: '$background-secondary',
  },

  '.manifest-tag__copy-icon': {
    display: 'none',
  },

  '.manifest-tag__text': {
    px: '$small',
    py: pxToRem(3),
    color: 'inherit',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  '.manifest-tag__start-adornment': {
    display: 'flex',
    marginLeft: '$small',
    marginRight: '-$x-small',
  },

  '&:focus': {
    outline: '1px solid $colors$palette-indigo-200',
    outlineOffset: pxToRem(1),
  },

  variants: {
    isCopied: {
      true: {
        '@media (prefers-reduced-motion: no-preference)': {
          '.manifest-tag__text::before': {
            content: 'attr(dataChildren)',
            position: 'absolute',
            top: 2,
            left: 8,
            animation: `${raiseFade} 0.7s`,
          },
        },
      },
    },
    isCopyable: {
      true: {
        cursor: 'pointer',

        '.manifest-tag__text': {
          paddingRight: pxToRem(8),
        },
      },
    },
    isRemovable: {
      true: {
        '.manifest-tag__text': {
          paddingRight: '$x-small',
        },
      },
    },
    isDisabled: {
      true: {
        opacity: 0.37,
        '.manifest-tag__icon-button': {
          pointerEvents: 'none',
        },

        '&:focus': {
          outline: 'none',
        },
      },
    },
    isHovered: {
      true: {
        border: '1px solid $colors$palette-grey-300',
      },
    },
  },

  compoundVariants: [
    {
      isHovered: true,
      isCopyable: true,
      css: {
        background: '$background-secondary',

        '.manifest-tag__copy-icon': {
          display: 'block',
          position: 'absolute',
          top: '15%',
          right: pxToRem(4),
          color: '$text-secondary',
        },

        '.manifest-tag__text::after': {
          content: '',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(to right, rgba(245, 245, 245, 0) 60%, rgba(245, 245, 245, 1) 75%)',
          borderRadius: '0 1px 1px 0',
          pointerEvents: 'none',
        },
      },
    },
  ],
});

import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
  $$switchBackgroundColor: '$colors$palette-grey-500',

  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',

  '.manifest-switch__control': {
    alignItems: 'center',
    backgroundColor: '$$switchBackgroundColor',
    borderRadius: '$full',
    boxSizing: 'border-box',
    color: '$palette-white',
    cursor: 'pointer',
    display: 'inline-flex',
    height: pxToRem(24),
    margin: 0,
    padding: 0,
    position: 'relative',
    width: pxToRem(44),
  },

  '.manifest-switch__indicator': {
    backgroundColor: '$palette-white',
    borderRadius: '$full',
    display: 'block',
    size: pxToRem(18),
    transform: 'translateX(3px)',
    transition: '$transform',
    willChange: 'transform',
  },

  '.manifest-switch__input': {
    cursor: 'pointer',
    height: '100%',
    left: 0,
    margin: 0,
    opacity: 0,
    padding: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },

  '.manifest-switch__text': {
    marginLeft: '$small',
  },

  variants: {
    isChecked: {
      true: {
        $$switchBackgroundColor: '$colors$primary-default',

        '.manifest-switch__indicator': {
          transform: 'translateX(23px)',
        },
      },
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.38,
        pointerEvents: 'none',
      },
    },
    isFocusVisible: {
      true: {
        '.manifest-switch__control': {
          '&:after': {
            backgroundColor: 'transparent',
            border: '2px solid $colors$palette-indigo-200',
            borderRadius: '$full',
            bottom: '-4px',
            content: '',
            display: 'block',
            left: '-4px',
            position: 'absolute',
            right: '-4px',
            top: '-4px',
          },
        },
      },
    },
    isHovered: {
      true: {
        $$switchBackgroundColor: '$colors$palette-grey-600',
      },
    },
    isActive: {
      true: {
        $$switchBackgroundColor: '$colors$palette-grey-800',
      }
    },
  },

  compoundVariants: [
    {
      isChecked: true,
      isHovered: true,
      css: {
        $$switchBackgroundColor: '$colors$primary-hover',
      },
    },
    {
      isChecked: true,
      isActive: true,
      css: {
        $$switchBackgroundColor: '$colors$primary-active',
      },
    },
  ],
});

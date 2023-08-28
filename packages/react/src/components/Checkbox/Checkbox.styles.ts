import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',

  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',

  '.manifest-checkbox__control': {
    backgroundColor: '$$backgroundColor',
    border: '2px solid $$borderColor',
    borderRadius: '$small',
    color: '$palette-white',
    cursor: 'pointer',
    position: 'relative',
    size: pxToRem(18),
  },

  '.manifest-checkbox__indicator': {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    pointerEvents: 'none',
    width: '100%',

    '> .manifest-checkbox__icon': {
      fontSize: pxToRem(18),
    },
  },

  '.manifest-checkbox__input': {
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

  '.manifest-checkbox__text': {
    marginLeft: '$small',
  },

  variants: {
    isChecked: {
      true: {
        $$backgroundColor: '$colors$primary-active',
        $$borderColor: '$colors$primary-active',
      },
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.38,
        pointerEvents: 'none',
      },
    },
    isActive: {
      true: {
        $$borderColor: '$colors$palette-grey-800',
      }
    },
    isFocusVisible: {
      true: {
        '.manifest-checkbox__control': {
          '&:after': {
            backgroundColor: 'transparent',
            border: '2px solid $colors$palette-indigo-200',
            // TODO: replace with design token once its defined.
            borderRadius: '4px',
            bottom: '-6px',
            content: '',
            display: 'block',
            left: '-6px',
            position: 'absolute',
            right: '-6px',
            top: '-6px',
          },
        },
      },
      false: {},
    },
    isHovered: {
      true: {
        $$borderColor: '$colors$palette-grey-600',
      },
    },
    isIndeterminate: {
      true: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: '$colors$primary-default',
      },
    },
  },

  compoundVariants: [
    {
      isChecked: true,
      isHovered: true,
      css: {
        $$backgroundColor: '$colors$primary-hover',
        $$borderColor: '$colors$primary-hover',
      },
    },
    {
      isIndeterminate: true,
      isHovered: true,
      css: {
        $$backgroundColor: '$colors$primary-hover',
        $$borderColor: '$colors$primary-hover',
      },
    },
    {
      isChecked: true,
      isFocusVisible: true,
      css: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: '$colors$primary-default',
      },
    },
    {
      isChecked: true,
      isActive: true,
      css: {
        $$backgroundColor: '$colors$primary-active',
        $$borderColor: '$colors$primary-active',
      },
    },
  ],
});

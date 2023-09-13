import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
  $$backgroundColor: '$colors$palette-white',
  $$borderColor: '$colors$palette-grey-500',
  $$indicatorSize: pxToRem(14),

  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',

  '.manifest-radio__control': {
    alignItems: 'center',
    backgroundColor: '$$backgroundColor',
    border: '3px solid $$borderColor',
    borderRadius: '$full',
    boxSizing: 'border-box',
    color: '$palette-white',
    display: 'inline-flex',
    justifyContent: 'center',
    position: 'relative',
    size: pxToRem(20),
  },

  '.manifest-radio__indicator': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',

    '&::after': {
      backgroundColor: '$palette-white',
      borderRadius: '$full',
      content: '""',
      display: 'block',
      size: '$$indicatorSize',
    },
  },

  '.manifest-radio__input': {
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

  '.manifest-radio__text': {
    marginLeft: '$small',
  },

  variants: {
    isChecked: {
      true: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: 'transparent',
        $$indicatorSize: pxToRem(10),
      },
    },
    isActive: {
      true: {
        $$borderColor: '$colors$primary-active',
      },
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: '$opacity$disabled',
        pointerEvents: 'none',
      },
    },
    isFocusVisible: {
      true: {
        '.manifest-radio__control': {
          '&:after': {
            backgroundColor: 'transparent',
            border: '2px solid $colors$palette-indigo-200',
            borderRadius: '$full',
            bottom: '-7px',
            content: '',
            display: 'block',
            left: '-7px',
            position: 'absolute',
            right: '-7px',
            top: '-7px',
          },
        },
      },
    },
    isHovered: {
      true: {
        $$borderColor: '$colors$palette-grey-600',
      },
    },
  },

  compoundVariants: [
    {
      isChecked: true,
      isHovered: true,
      css: {
        $$borderColor: '$colors$primary-hover',
        $$backgroundColor: '$colors$primary-hover',
      },
    },
    {
      isChecked: true,
      isFocusVisible: true,
      css: {
        $$borderColor: '$colors$primary-default',
        $$backgroundColor: '$colors$primary-default',
      },
    },
    {
      isChecked: false,
      isActive: true,
      css: {
        $$borderColor: '$colors$palette-grey-800',
      },
    },
    {
      isChecked: true,
      isActive: true,
      css: {
        $$borderColor: '$colors$primary-active',
        $$backgroundColor: '$colors$primary-active',
      },
    },
  ],
});

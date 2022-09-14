import { css, pxToRem } from '../../styles';

export const useStyles = css({
  height: pxToRem(32),
  textAlign: 'center',
  padding: '$x-small 0',
  position: 'relative',
  width: pxToRem(44),

  '.manifest-calendar-cell__button': {
    background: 'transparent',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'block',
    height: pxToRem(24),
    margin: 0,
    outline: 'none',
    padding: 0,
    position: 'relative',
    width: '100%',
  },

  '.manifest-calendar-cell__text': {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    borderRadius: '$full',
    color: '$text-primary',
    display: 'flex',
    justifyContent: 'center',
    left: pxToRem(10),
    outline: 'none',
    position: 'absolute',
    top: 0,
    typography: '$caption',
    size: pxToRem(24),
    whiteSpace: 'nowrap',
  },

  variants: {
    isDisabled: {
      true: {
        '.manifest-calendar-cell__button': {
          cursor: 'default',
          pointerEvents: 'none',
        },

        '.manifest-calendar-cell__text': {
          color: '$text-disabled',
        },
      },
    },
    isFocusVisible: {
      true: {
        '.manifest-calendar-cell__text': {
          boxShadow: '0 0 0 2px $colors$palette-indigo-200',
        },
      },
      false: {
        '.manifest-calendar-cell__text': {
          boxShadow: 'none',
        },
      },
    },
    isRangeEnd: {
      true: {},
    },
    isRangeSelection: {
      true: {},
    },
    isRangeStart: {
      true: {},
    },
    isSelected: {
      true: {},
    },
    isSelectionEnd: {
      true: {},
    },
    isSelectionStart: {
      true: {},
    },
    isToday: {
      true: {
        '.manifest-calendar-cell__button': {
          '&::after': {
            content: '""',
            backgroundColor: '$primary-default',
            height: 1,
            left: pxToRem(17),
            position: 'absolute',
            top: pxToRem(20),
            width: 11,
          },
        },

        '.manifest-calendar-cell__text': {
          fontWeight: '$semibold',
        },
      },
    },
    isUnavailable: {
      true: {
        '.manifest-calendar-cell__text': {
          color: '$text-disabled',
        },
      },
    },
  },

  compoundVariants: [
    {
      isSelected: true,
      isRangeSelection: false,
      css: {
        '.manifest-calendar-cell__button': {
          '&::after': {
            display: 'none',
          },
        },

        '.manifest-calendar-cell__text': {
          backgroundColor: '$primary-default',
          borderColor: '$palette-indigo-100',
          color: '$palette-white',
        },
      },
    },
    {
      isSelected: true,
      isRangeSelection: true,
      isSelectionStart: true,
      css: {
        '.manifest-calendar-cell__button': {
          background: 'linear-gradient(to left, $colors$palette-indigo-50 50%, transparent 50%)',

          '&::after': {
            display: 'none',
          },
        },

        '.manifest-calendar-cell__text': {
          backgroundColor: '$primary-default',
          borderColor: '$palette-indigo-100',
          color: '$text-contrast',
        },
      },
    },
    {
      isSelected: true,
      isRangeSelection: true,
      isSelectionEnd: true,
      css: {
        '.manifest-calendar-cell__button': {
          background: 'linear-gradient(to right, $colors$palette-indigo-50 50%, transparent 50%)',

          '&::after': {
            display: 'none',
          },
        },

        '.manifest-calendar-cell__text': {
          backgroundColor: '$primary-default',
          borderColor: '$palette-indigo-100',
          color: '$palette-white',
        },
      },
    },
    {
      isSelected: true,
      isRangeSelection: true,
      isSelectionEnd: true,
      isSelectionStart: true,
      css: {
        '.manifest-calendar-cell__button': {
          background: 'transparent',

          '&::after': {
            display: 'none',
          },
        },

        '.manifest-calendar-cell__text': {
          backgroundColor: '$primary-default',
          borderColor: '$palette-indigo-100',
          color: '$palette-white',
        },
      },
    },
    {
      isSelected: true,
      isRangeSelection: true,
      isSelectionEnd: false,
      isSelectionStart: false,
      css: {
        '.manifest-calendar-cell__button': {
          background: '$palette-indigo-50',
        },
      },
    },
    {
      isDisabled: true,
      isRangeSelection: true,
      css: {
        '.manifest-calendar-cell__text': {
          color: '$text-disabled',
        },
      },
    },
  ],
});

import { css, pxToRem } from '@project44-manifest/react-styles';

const calendarCellUnderlineLight = {
  '.manifest-calendar-cell__text': {
    '&::after': {
      content: '""',
      backgroundColor: 'white',
      borderRadius: '$full',
      height: 1,
      position: 'absolute',
      top: pxToRem(23),
      width: 12,
    },
  },
};

export const useStyles = css({
  height: pxToRem(32),
  textAlign: 'center',
  padding: '$x-small 0',
  position: 'relative',
  width: pxToRem(44),

  '&:last-of-type': {
    '.manifest-calendar-cell__button': {
      borderTopRightRadius: pxToRem(4),
      borderBottomRightRadius: pxToRem(4),
    },
  },

  '&:first-of-type': {
    '.manifest-calendar-cell__button': {
      borderTopLeftRadius: pxToRem(4),
      borderBottomLeftRadius: pxToRem(4),
    },
  },

  '.manifest-calendar-cell__button': {
    background: 'transparent',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'block',
    height: pxToRem(28),
    margin: 0,
    outline: 'none',
    padding: 0,
    position: 'relative',
    width: '100%',
  },

  '.manifest-calendar-cell__text': {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: pxToRem(4),
    color: '$text-primary',
    display: 'flex',
    justifyContent: 'center',
    left: pxToRem(10),
    outline: 'none',
    position: 'absolute',
    top: 0,
    typography: '$caption',
    size: pxToRem(28),
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
        '.manifest-calendar-cell__text': {
          '&::after': {
            content: '""',
            backgroundColor: '$text-primary',
            borderRadius: '$full',
            height: 1,
            position: 'absolute',
            top: pxToRem(23),
            width: 12,
          },
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
          background: 'linear-gradient(to left, $colors$palette-indigo-100 50%, transparent 50%)',

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
          background: 'linear-gradient(to right, $colors$palette-indigo-100 50%, transparent 50%)',

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
          background: '$palette-indigo-100',
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
    {
      isToday: true,
      isSelected: true,
      isRangeSelection: false,
      css: calendarCellUnderlineLight,
    },
    {
      isToday: true,
      isSelectionEnd: true,
      css: calendarCellUnderlineLight,
    },
    {
      isToday: true,
      isSelectionStart: true,
      css: calendarCellUnderlineLight,
    },
  ],
});

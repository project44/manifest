import { css, pxToRem } from '@project44-manifest/styles';

export const useCalendarStyles = css({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',

  '.manifest-calendar-table--wrapper': {
    padding: '$small',
  },
});

export const useCalendarDayStyles = css({
  $$backgroundColor: 'transparent',
  $$background: 'transparent',
  $$borderColor: 'transparent',
  $$color: '$colors$text-primary',

  background: '$$background',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'block',
  height: pxToRem(24),
  margin: 0,
  outline: 'none',
  padding: 0,
  position: 'relative',
  width: '100%',

  '.manifest-calendar-day--text': {
    alignItems: 'center',
    backgroundColor: '$$backgroundColor',
    border: '2px solid $$borderColor',
    borderRadius: '$full',
    color: '$$color',
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
        $$color: '$colors$text-disabled',

        cursor: 'default',
        pointerEvents: 'none',
      },
    },
    isFocusVisible: {
      true: {
        '.manifest-calendar-day--text': {
          boxShadow: '0 0 0 2px $colors$palette-indigo-200',
        },
      },
      false: {
        '.manifest-calendar-day--text': {
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
        '.manifest-calendar-day--text': {
          fontWeight: '$semibold',
        },

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
    },
    isUnavailable: {
      true: {
        $$color: '$colors$text-disabled',
      },
    },
  },

  compoundVariants: [
    {
      isSelected: true,
      isRangeSelection: false,
      css: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: '$colors$palette-indigo-100',
        $$color: '$colors$palette-white',

        '&::after': {
          display: 'none',
        },
      },
    },
    {
      isSelected: true,
      isRangeSelection: true,
      isSelectionStart: true,
      css: {
        $$backgroundColor: '$colors$primary-default',
        $$background: 'linear-gradient(to left, $colors$palette-indigo-50 50%, transparent 50%)',
        $$borderColor: '$colors$palette-indigo-100',
        $$color: '$colors$text-contrast',

        '&::after': {
          display: 'none',
        },
      },
    },
    {
      isSelected: true,
      isRangeSelection: true,
      isSelectionEnd: true,
      css: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: '$colors$palette-indigo-100',
        $$color: '$colors$palette-white',
        $$background: 'linear-gradient(to right, $colors$palette-indigo-50 50%, transparent 50%)',

        '&::after': {
          display: 'none',
        },
      },
    },
    {
      isSelected: true,
      isRangeSelection: true,
      isSelectionEnd: true,
      isSelectionStart: true,
      css: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: '$colors$palette-indigo-100',
        $$color: '$colors$palette-white',
        $$background: 'transparent',

        '&::after': {
          display: 'none',
        },
      },
    },
    {
      isSelected: true,
      isRangeSelection: true,
      isSelectionEnd: false,
      isSelectionStart: false,
      css: {
        $$background: '$colors$palette-indigo-50',
      },
    },
    {
      isDisabled: true,
      isRangeSelection: true,
      css: {
        $$color: '$colors$text-disabled',
      },
    },
  ],
});

export const useCalendarHeaderStyles = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
  padding: '$small $medium',
});

export const useCalendarTableStyles = css({
  $$cellHeight: pxToRem(32),
  $$cellWidth: pxToRem(44),

  borderCollapse: 'collapse',
  maxWidth: 'calc($$cellWidth * 7)',
  margin: 0,

  '.manifest-calendar-table--cell': {
    height: '$$cellHeight',
    textAlign: 'center',
    padding: '$x-small 0',
    position: 'relative',
    width: '$$cellWidth',
  },

  '.manifest-calendar-table--head, .manifest-calendar-table--body': {
    border: 0,
  },

  '.manifest-calendar-table--row': {
    height: '100%',
  },

  '.manifest-calendar-table--column': {
    height: '$$cellHeight',
    padding: 0,
    textAlign: 'center',
    typography: '$caption',
    verticalAlign: 'middle',
  },
});

export type { CSS } from '@project44-manifest/styles';
export { cx } from '@project44-manifest/styles';

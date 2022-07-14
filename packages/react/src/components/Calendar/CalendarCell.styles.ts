import { css, pxToRem } from '@project44-manifest/styles';

export const useStyles = css({
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

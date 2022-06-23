import { css } from '../../styles';

export const calendarStyles = css({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 308,
  minWidth: 224,

  '.manifest-separator': {
    my: '$small',
  },
});

export const calendarCellStyles = css({
  $$backgroundColor: 'transparent',
  $$borderColor: 'transparent',
  $$color: '$colors$text-primary',
  $$background: 'transparent',

  alignItems: 'center',
  display: 'inline-flex',
  height: '2rem',
  justifyContent: 'center',
  padding: '$x-small 0',
  position: 'relative',
  width: '2.75rem',

  '.manifest-calendar-grid--cell__date': {
    alignItems: 'center',
    background: '$$background',
    cursor: 'pointer',
    display: 'flex',
    height: 24,
    outline: 0,
    justifyContent: 'center',
    width: 44,
    userSelect: 'none',
  },

  '.manifest-calendar-grid--cell__date-text': {
    alignItems: 'center',
    backgroundColor: '$$backgroundColor',
    border: '2px solid $$borderColor',
    borderRadius: '$full',
    color: '$$color',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    size: 24,
  },

  variants: {
    isDisabled: {
      true: {
        '.manifest-calendar-grid--cell__date': {
          cursor: 'default',
        },

        '.manifest-calendar-grid--cell__date-text': {
          color: '$text-disabled',
        },
      },
    },
    isFocusVisible: {
      true: {
        '.manifest-calendar-grid--cell__date-text': {
          outline: '$colors$palette-indigo-200 solid 2px',
        },
      },
      false: {
        '.manifest-calendar-grid--cell__date-text': {
          outline: 'none',
        },
      },
    },
    isHovered: {
      true: {},
    },
    isOutsideMonth: {
      true: {},
    },
    isPressed: {
      true: {},
    },
    isRangeEnd: {
      true: {},
    },
    isRangeStart: {
      true: {},
    },
    isRangeSelection: {
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
        '.manifest-calendar-grid--cell__date-text': {
          fontWeight: '$semibold',

          '&::after': {
            content: '""',
            backgroundColor: '$primary-default',
            bottom: 0,
            height: 1,
            position: 'absolute',
            width: 11,
          },
        },
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
      },
    },
    {
      isSelected: true,
      isRangeSelection: true,
      isSelectionStart: true,
      css: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: '$colors$palette-indigo-100',
        $$color: '$colors$palette-white',
        $$background: 'linear-gradient(to left, $colors$palette-indigo-50 50%, transparent 50%)',

        '.manifest-calendar-grid--cell__date-text': {
          '&::after': {
            display: 'none',
          },
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

        '.manifest-calendar-grid--cell__date-text': {
          '&::after': {
            display: 'none',
          },
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

        '.manifest-calendar-grid--cell__date-text': {
          '&::after': {
            display: 'none',
          },
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
  ],
});

export const calendarGridStyles = css({
  boxSizing: 'border-box',
  margin: 0,
  outline: 0,
  padding: 0,
  width: '100%',

  '.manifest-calendar-grid--row': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

  '.manifest-calendar-grid--cell': {
    alignItems: 'center',
    display: 'inline-flex',
    height: '2rem',
    justifyContent: 'center',
    position: 'relative',
    width: '2.75rem',
  },
});

export const calendarHeaderStyles = css({
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'space-between',
  gap: '$small',
  px: '$small',
  width: '100%',
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

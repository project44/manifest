import { css } from '../../styles';

export const calendarStyles = css({
  display: 'flex',
  flexDirection: 'column',

  '.manifest-separator': {
    my: '$small',
  },
});

export const calendarCellStyles = css({
  $$backgroundColor: 'transparent',
  $$textColor: '$colors$text-secondary',

  alignItems: 'center',
  display: 'inline-flex',
  height: 32,
  justifyContent: 'center',
  position: 'relative',
  width: 44,

  '.manifest-calendar--cell-button': {
    all: 'unset',
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: '$$backgroundColor',
    border: 0,
    boxSizing: 'border-box',
    color: '$$textColor',
    cursor: 'pointer',
    display: 'inline-flex',
    height: 32,
    justifyContent: 'center',
    margin: 0,
    outline: 0,
    padding: 0,
    width: '100%',
  },

  '.manifest-calendar--cell-text': {
    alignItems: 'center',
    borderRadius: '$full',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    verticalAlign: 'middle',
    size: 32,
  },

  variants: {
    isDisabled: {
      true: {
        $$textColor: '$colors$text-disabled',

        cursor: 'default',
      },
    },
    isFocusVisible: {
      true: {
        ['.manifest-calendar--cell-text']: {
          outline: '$colors$palette-indigo-200 solid 3px',
        },
      },
    },
    isHovered: {
      true: {
        ['.manifest-calendar--cell-text']: {
          backgroundColor: '$palette-grey-200',
        },
      },
    },
    isOutsideMonth: {
      true: {
        $$textColor: '$colors$text-disabled',
      },
    },
    isPressed: {
      true: {},
    },
    isSelected: {
      true: {
        $$backgroundColor: '$colors$palette-indigo-50',
      },
    },
    isSelectionEnd: {
      true: {
        $$textColor: '$colors$white',

        background: 'linear-gradient(90deg, $colors$palette-indigo-50 50%, transparent 50%)',
        borderBottomRightRadius: '$full',
        borderTopRightRadius: '$full',

        ['.manifest-calendar--cell-text']: {
          backgroundColor: '$primary',
        },
      },
    },
    isSelectionStart: {
      true: {
        $$textColor: '$colors$white',

        background: 'linear-gradient(90deg, transparent 50%, $colors$palette-indigo-50 50%)',
        borderBottomLeftRadius: '$full',
        borderTopLeftRadius: '$full',

        ['.manifest-calendar--cell-text']: {
          backgroundColor: '$primary',
        },
      },
    },
    isToday: {
      true: {
        ['.manifest-calendar--cell-text']: {
          fontWeight: '$semibold',

          '&::after': {
            content: '""',
            backgroundColor: '$primary',
            height: 1,
            left: 11,
            position: 'absolute',
            top: 24,
            width: 11,
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      isHovered: true,
      isSelectionStart: true,
      css: {
        $$textColor: '$colors$white',

        ['.manifest-calendar--cell-text']: {
          backgroundColor: '$palette-indigo-700',
        },
      },
    },
    {
      isHovered: true,
      isSelectionEnd: true,
      css: {
        $$textColor: '$colors$white',

        ['.manifest-calendar--cell-text']: {
          backgroundColor: '$palette-indigo-700',
        },
      },
    },
    {
      isSelectionEnd: true,
      isSelectionStart: true,
      css: {
        background: 'transparent',
      },
    },
  ],
});

export const calendarGridStyles = css({
  '.manifest-calendar--grid-row': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    py: '$x-small',
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

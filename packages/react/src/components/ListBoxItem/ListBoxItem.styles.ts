import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
  $$backgroundColor: 'transparent',

  alignItems: 'center',
  backgroundColor: '$$backgroundColor',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'pointer',
  display: 'flex',
  outline: 'none',
  px: '$small',
  py: pxToRem(6),
  position: 'relative',

  '.manifest-listbox-item__icon': {
    alignSelf: 'center',
    color: '$text-secondary',
    display: 'inline-flex',
    flexShrink: 0,
  },

  '.manifest-listbox-item__icon--end': {
    color: '$primary-default',
    marginLeft: pxToRem(12),
  },

  '.manifest-listbox-item__icon--start': {
    marginRight: pxToRem(12),
  },

  '.manifest-listbox-item__text': {
    display: 'block',
    flex: '1 1 0%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: 0.57,
      },
    },
    isFocused: {
      true: {
        $$backgroundColor: '$colors$background-secondary',
      },
    },
    isHovered: {
      true: {
        $$backgroundColor: '$colors$background-secondary',
      },
    },
    isPressed: {
      true: {
        $$backgroundColor: '$colors$background-secondary',
      },
    },
    isSelected: {
      true: {},
    },
    selectionMode: {
      none: {},
      multiple: {},
      single: {},
    },
  },

  compoundVariants: [
    {
      selectionMode: 'single',
      isSelected: true,
      css: {
        $$backgroundColor: '$colors$background-secondary',
      },
    },
  ],
});

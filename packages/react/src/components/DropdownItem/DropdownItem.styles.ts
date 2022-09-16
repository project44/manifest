import { css, pxToRem } from '../../styles';

export const useStyles = css({
  $$backgroundColor: 'transparent',

  alignItems: 'center',
  backgroundColor: '$$backgroundColor',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'default',
  display: 'flex',
  height: pxToRem(32),
  outline: 'none',
  padding: '$x-small $small',
  position: 'relative',

  '&.manifest-dropdown-item--selectable': {
    paddingRight: '$x-large',
  },

  '&.manifest-dropdown-item--selected': {
    '.manifest-dropdown-item__icon--end': {
      display: 'inline-flex',
    },
  },

  '.manifest-dropdown-item__icon': {
    alignSelf: 'center',
    color: '$text-secondary',
    display: 'inline-flex',
    flexShrink: 0,

    '& > .manifest-icon': {
      fontSize: pxToRem(16),
    },
  },

  '.manifest-dropdown-item__icon--end': {
    display: 'none',
    color: '$primary-default',
    right: pxToRem(8),
    position: 'absolute',
    top: pxToRem(8),
  },

  '.manifest-dropdown-item__icon--start': {
    marginRight: '$small',
  },

  '.manifest-dropdown-item__text': {
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
      true: {
        $$backgroundColor: '$colors$background-secondary',
      },
    },
  },
});

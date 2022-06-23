import { css } from '../../styles';

export const useDropdownStyles = css({
  boxSizing: 'border-box',
  display: 'block',
  listStyleType: 'none',
  margin: 0,
  padding: '$small',
  outline: 0,
  overflow: 'auto',
  userSelect: 'none',

  '.manifest-dropdown-separator': {
    alignSelf: 'stretch',
    backgroundColor: '$border-primary',
    border: 'none',
    borderWidth: '$small',
    height: '1px',
    mx: '-$small',
    my: '$small',
    overflow: 'visible',
    width: 'auto',
  },
});

export const useDropdownItemBoxStyles = css({
  $$backgroundColor: 'transparent',

  alignItems: 'center',
  backgroundColor: '$$backgroundColor',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'default',
  display: 'flex',
  minHeight: '2rem',
  outline: 'none',
  padding: '$x-small $small',
  position: 'relative',

  '.manifest-dropdown-item--icon': {
    alignSelf: 'center',
    color: '$text-secondary',
    display: 'inline-flex',
    flexShrink: 0,
  },

  '.manifest-dropdown-item--icon__end': {
    marginLeft: '$small',
  },

  '.manifest-dropdown-item--icon__start': {
    marginRight: '$small',
  },

  '.manifest-dropdown-item--text': {
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

export const useDropdownSectionStyles = css({
  '.manifest-dropdown-section--group': {
    boxSizing: 'border-box',
    display: 'block',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'auto',
    userSelect: 'none',
  },

  '.manifest-dropdown-section--label': {
    color: '$text-tertiary',
    px: '$x-small',
  },
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

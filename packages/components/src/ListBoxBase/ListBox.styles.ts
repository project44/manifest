import { css } from '@project44-manifest/styles';

export const useListBoxStyles = css({
  boxSizing: 'border-box',
  margin: 0,
  outline: 'none',
  padding: '$small',
  position: 'relative',

  '.manifest-listbox-separator': {
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

export const useListItemBoxStyles = css({
  $$backgroundColor: 'transparent',

  alignItems: 'center',
  backgroundColor: '$$backgroundColor',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'pointer',
  display: 'flex',
  outline: 'none',
  padding: '0.375rem $small',
  position: 'relative',

  '.manifest-listbox-item--icon': {
    alignSelf: 'center',
    color: '$text-secondary',
    display: 'inline-flex',
    flexShrink: 0,

    '& > .manifest-icon': {
      fontSize: '1.125rem',
    },
  },

  '.manifest-listbox-item--icon__end': {
    color: '$primary-default',
    marginLeft: '$small',
  },

  '.manifest-listbox-item--icon__start': {
    marginRight: '$small',
  },

  '.manifest-listbox-item--text': {
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
  },
});

export const useListBoxSectionStyles = css({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,

  '.manifest-listbox-section--group': {
    margin: 0,
    padding: 0,
  },

  '.manifest-listbox-section--label': {
    color: '$text-tertiary',
    px: '$x-small',
  },
});

export type { CSS } from '@project44-manifest/styles';
export { cx } from '@project44-manifest/styles';

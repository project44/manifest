import { css } from '../../styles';

export const checkboxStyles = css({
  $$checkboxBackgroundColor: '$colors$background-primary',
  $$checkboxBorderColor: '$colors$palette-grey-500',

  alignItems: 'center',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',

  '.manifest-checkbox--control': {
    backgroundColor: '$$checkboxBackgroundColor',
    border: '2px solid $$checkboxBorderColor',
    borderRadius: '$small',
    color: '$palette-white',
    cursor: 'pointer',
    size: '1.125rem',
  },

  '.manifest-checkbox--indicator': {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    pointerEvents: 'none',
    width: '100%',

    [`& .manifest-icon`]: {
      fontSize: '1.125rem',
    },
  },

  '.manifest-checkbox--input': {
    cursor: 'pointer',
    height: '100%',
    left: 0,
    margin: 0,
    opacity: 0,
    padding: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },

  '.manifest-checkbox--text': {
    marginLeft: '$small',
  },

  variants: {
    isChecked: {
      true: {
        $$checkboxBackgroundColor: '$colors$primary-default',
        $$checkboxBorderColor: '$colors$primary-default',
      },
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.58,
        pointerEvents: 'none',
      },
    },
    isFocusVisible: {
      true: {
        '.manifest-checkbox--control': {
          outline: '$colors$palette-indigo-200 solid 3px',
        },
      },
      false: {
        outline: 'none',
      },
    },
    isHovered: {
      true: {
        $$checkboxBorderColor: '$colors$palette-grey-600',
      },
    },
  },
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

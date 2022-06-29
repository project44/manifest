import { css } from '@project44-manifest/styles';

export const useCheckboxStyles = css({
  $$backgroundColor: '$colors$background-primary',
  $$borderColor: '$colors$palette-grey-500',

  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',

  '.manifest-checkbox--control': {
    backgroundColor: '$$backgroundColor',
    border: '2px solid $$borderColor',
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
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: '$colors$primary-default',
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
        $$borderColor: '$colors$palette-grey-600',
      },
    },
    isIndeterminate: {
      true: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: '$colors$primary-default',
      },
    },
  },
});

export type { CSS } from '@project44-manifest/styles';
export { cx } from '@project44-manifest/styles';

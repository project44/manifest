import { css } from '../../styles';

export const useSwitchStyles = css({
  $$switchBackgroundColor: '$colors$palette-grey-500',

  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',

  '.manifest-switch--control': {
    alignItems: 'center',
    backgroundColor: '$$switchBackgroundColor',
    borderRadius: '$full',
    boxSizing: 'border-box',
    color: '$palette-white',
    cursor: 'pointer',
    display: 'inline-flex',
    height: '1.5rem',
    margin: 0,
    padding: 0,
    position: 'relative',
    width: '2.75rem',
  },

  '.manifest-switch--indicator': {
    backgroundColor: '$palette-white',
    borderRadius: '$full',
    display: 'block',
    size: '1.125rem',
    transform: 'translateX(3px)',
    transition: '$transform',
    willChange: 'transform',
  },

  '.manifest-switch--input': {
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

  '.manifest-switch--text': {
    marginLeft: '$small',
  },

  variants: {
    isChecked: {
      true: {
        $$switchBackgroundColor: '$colors$primary-default',

        '.manifest-switch--indicator': {
          transform: 'translateX(23px)',
        },
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
        '.manifest-switch--control': {
          outline: '$colors$palette-indigo-200 solid 3px',
        },
      },
      false: {
        outline: 'none',
      },
    },
    isHovered: {
      true: {
        $$switchBackgroundColor: '$colors$palette-grey-600',
      },
    },
  },
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

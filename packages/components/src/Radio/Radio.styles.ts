import { css } from '@project44-manifest/styles';

export const useRadioStyles = css({
  $$backgroundColor: '$colors$palette-white',
  $$borderColor: '$colors$palette-grey-500',

  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',

  '.manifest-radio--control': {
    alignItems: 'center',
    backgroundColor: '$$backgroundColor',
    border: '3px solid $$borderColor',
    borderRadius: '$full',
    boxSizing: 'border-box',
    color: '$palette-white',
    display: 'inline-flex',
    justifyContent: 'center',
    size: '1.125rem',
  },

  '.manifest-radio--indicator': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',

    '&::after': {
      backgroundColor: '$palette-white',
      borderRadius: '$full',
      content: '""',
      display: 'block',
      size: '0.625rem',
    },
  },

  '.manifest-radio--input': {
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

  '.manifest-radio--text': {
    marginLeft: '$small',
  },

  variants: {
    isChecked: {
      true: {
        $$backgroundColor: '$colors$primary-default',
        $$borderColor: 'transparent',
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
        '.manifest-radio--control': {
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
  },
});

export const useRadioGroupStyles = css({
  border: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$small',
  margin: 0,
  padding: 0,

  variants: {
    orientation: {
      horizontal: {
        flexFlow: 'row wrap',
      },
      vertical: {
        flexFlow: 'column wrap',
      },
    },
  },

  defaultVariants: {
    orientation: 'vertical',
  },
});

export type { CSS } from '@project44-manifest/styles';
export { cx } from '@project44-manifest/styles';

import { css } from '../config';

export const focus = css({
  variants: {
    isFocusVisible: {
      true: {
        outline: '$colors$palette-indigo-200 solid 2px',
      },
      false: {
        outline: 'none',
      },
    },
  },
});

export const focusWithin = css({
  '&:focus-within': {
    borderColor: '$primary',
    boxShadow: '0 0 0 3px $colors$palette-indigo-200',
    transition: '$shadow',
  },
});

import { css } from '../config';

export const focusVisible = css({
  variants: {
    isFocusVisible: {
      false: {
        outline: 'none',
      },
      true: {
        outline: '$colors$palette-indigo-200 solid 3px',
      },
    },
  },
});

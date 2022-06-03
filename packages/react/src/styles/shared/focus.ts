import { css } from '../config';

export const focus = css({
  WebkitTapHighlightColor: 'transparent',

  '&:focus:not(&:focus-visible)': {
    outline: 'none',
  },

  '&:focus': {
    outline: '$colors$palette-indigo-200 solid 3px',
  },
});

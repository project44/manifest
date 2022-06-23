import { css } from '../config';

export const focus = css({
  '&:focus': {
    boxShadow: '0 0 0 3px $colors$palette-indigo-200',
    transition: '$shadow',
  },
});

export const focusWithin = css({
  '&:focus-within': {
    borderColor: '$primary',
    boxShadow: '0 0 0 3px $colors$palette-indigo-200',
    transition: '$shadow',
  },
});

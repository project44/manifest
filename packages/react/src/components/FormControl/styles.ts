import { css } from '../../styles';
import { Typography } from '../Typography';

export const formControlStyles = css({
  $$helperTextColor: '$colors$text-tertiary',

  border: 0,
  display: 'inline-flex',
  margin: 0,
  padding: 0,
  position: 'relative',
  width: '100%',

  '.manifest-form-control--helper-text': {
    color: '$$helperTextColor',
    marginTop: '$x-small',
  },

  '.manifest-form-control--label': {
    color: '$text-secondary',
    padding: 0,
    marginBottom: '$small',
    position: 'relative',
    typography: '$subtext',
  },

  variants: {
    isInvalid: {
      true: {
        $$helperTextColor: '$colors$text-danger',
      },
    },
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },

  defaultVariants: {
    orientation: 'horizonal',
  },
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

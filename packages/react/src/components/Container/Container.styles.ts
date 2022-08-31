import { css } from '../../styles';

export const useStyles = css({
  boxSizing: 'border-box',
  display: 'block',
  mx: 'auto',
  px: '$medium',

  '@sm': {
    maxWidth: '$small',
  },
  '@md': {
    maxWidth: '$medium',
  },
  '@lg': {
    maxWidth: '$large',
  },
  '@xl': {
    maxWidth: '$x-large',
  },
});

import { css } from '../../styles';

export const useStyles = css({
  boxSizing: 'border-box',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '$medium',
  paddingRight: '$medium',
  width: '100%',

  '@sm': {
    maxWidth: '$small',
    paddingLeft: '$large',
    paddingRight: '$large',
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

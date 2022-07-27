import { css } from '../../styles';

export const useStyles = css({
  justifyContent: 'center',

  variants: {
    size: {
      medium: {
        padding: '$small',
      },
      small: {
        padding: '$x-small',
      },
    },
  },
});

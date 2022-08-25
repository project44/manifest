import { css } from '../../styles';

export const useStyles = css({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  minHeight: 289,

  variants: {
    showCalendar: {
      false: {
        minHeight: 112,
      },
    },
  },
});

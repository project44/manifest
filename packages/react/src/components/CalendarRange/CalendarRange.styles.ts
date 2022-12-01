import { css } from '@project44-manifest/react-styles';

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

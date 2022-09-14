import { css, pxToRem } from '../../styles';

export const useStyles = css({
  padding: '$small',

  '.manifest-calendar-table__table': {
    borderCollapse: 'collapse',
    maxWidth: `calc(${pxToRem(44)} * 7)`,
    margin: 0,
  },

  '.manifest-calendar-table__head, .manifest-calendar-table__body': {
    border: 0,
  },

  '.manifest-calendar-table__row': {
    height: '100%',
  },

  '.manifest-calendar-table__column': {
    height: pxToRem(32),
    padding: 0,
    textAlign: 'center',
    typography: '$caption',
    verticalAlign: 'middle',
  },
});

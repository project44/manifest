import { css } from '../../styles';

export const useStyles = css({
  backgroundColor: '$background-surface',
  borderRadius: '$small',
  boxSizing: 'border-box',
  boxShadow: '$medium',
  display: 'inline-flex',
  flexDirection: 'column',
  outline: 0,
  overflowY: 'auto',
  overflowX: 'hidden',
  transition: 'opacity 100ms cubic-bezier(0.25, 0.1, 0.25, 1)',
  willChange: 'opacity',
});

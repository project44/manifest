import { css } from '../../styles';

export const cardStyles = css({
  backgroundColor: '$background-surface',
  borderRadius: '$small',
  boxShadow: '$medium',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const cardBodyStyles = css({
  alignItems: 'inherit',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  height: 'auto',
  justifyContent: 'inherit',
  position: 'relative',
  px: '1.25rem',
  width: '100%',
});

export const cardFooterStyles = css({
  alignItems: 'center',
  display: 'flex',
  height: 'auto',
  justifyContent: 'flex-end',
  paddingBottom: '1.25rem',
  paddingTop: '$large',
  px: '1.25rem',
  width: '100%',
});

export const cardHeaderStyles = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  paddingTop: '1.25rem',
  paddingBottom: '$large',
  px: '1.25rem',
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

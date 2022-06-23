import { css } from '../../styles';

export const useLinkStyles = css({
  alignItems: 'baseline',
  color: '$text-primary',
  display: 'inline-flex',
  fontFamily: '$text',
  fontSize: '$medium',
  fontWeight: '$semibold',
  letterSpacing: '$medium',
  lineHeight: '$medium',
  textDecoration: 'underline',
  width: 'fitContent',
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

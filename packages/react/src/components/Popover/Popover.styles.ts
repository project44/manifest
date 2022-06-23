import { css } from '../../styles';

export const usePopoverStyles = css({
  backgroundColor: '$background-surface',
  borderRadius: '$small',
  boxShadow: '$medium',
  outline: 0,
  zIndex: '$popover',
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

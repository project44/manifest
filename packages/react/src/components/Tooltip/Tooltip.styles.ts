import { css } from '../../styles';

export const useTooltipStyles = css({
  backgroundColor: '$palette-grey-700',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$palette-white',
  overflow: 'hidden',
  padding: '$x-small $small',
  position: 'relative',
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

import { styled } from '../../styles';

export const StyledTooltip = styled('div', {
  backgroundColor: '$palette-grey-700',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$contrast-primary',
  overflow: 'hidden',
  padding: '$x-small $small',
  position: 'relative',
});

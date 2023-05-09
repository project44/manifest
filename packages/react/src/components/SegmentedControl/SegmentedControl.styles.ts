import { styled } from '@project44-manifest/react-styles';

export const StyledSegmentedControl = styled('div', {
  alignItems: 'center',
  backgroundColor: '$background-secondary',
  borderRadius: '$full',
  boxSizing: 'border-box',
  display: 'grid',
  gridAutoColumns: 'min-content',
  gridAutoFlow: 'column',
  gap: '$x-small',
  padding: '$x-small',
});

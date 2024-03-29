import { styled } from '@project44-manifest/react-styles';
import { IconButton } from '../button';

export const StyledDialogHeader = styled('div', {
  alignItems: 'center',
  borderBottom: '1px solid $border-primary',
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '$medium',
  position: 'relative',
});

export const StyledButton = styled(IconButton, {
  position: 'absolute',
  right: 0,
  top: -4,
});

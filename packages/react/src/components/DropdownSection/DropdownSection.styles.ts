import { styled } from '@project44-manifest/react-styles';
import { Typography } from '../Typography';

export const StyledDropdownSection = styled('li', {});

export const StyledDropdownSeperator = styled('li', {
  alignSelf: 'stretch',
  backgroundColor: '$border-primary',
  border: 'none',
  borderWidth: '$small',
  height: '1px',
  mx: '-$small',
  my: '$small',
  overflow: 'visible',
  width: 'auto',
});

export const StyledDropdownSectionGroup = styled('ul', {
  boxSizing: 'border-box',
  display: 'block',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'auto',
  userSelect: 'none',
});

export const StyledDropdownSectionLabel = styled(Typography, {
  color: '$text-tertiary',
  px: '$x-small',
});

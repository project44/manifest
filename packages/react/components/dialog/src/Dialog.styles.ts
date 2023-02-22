import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledDialog = styled('div', {
  backgroundColor: '$background-primary',
  borderRadius: '$small',
  boxShadow: '$small',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: `calc(100% - ${pxToRem(52)})`,
  maxWidth: pxToRem(442),
  outline: 0,
  padding: '$medium',
  position: 'relative',
});

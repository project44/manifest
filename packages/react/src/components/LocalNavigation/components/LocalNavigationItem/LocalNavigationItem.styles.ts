import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledItem = styled('button', {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$palette-indigo-50',
  cursor: 'pointer',
  display: 'inline-flex',
  outline: 'none',
  position: 'relative',
  p: `${pxToRem(6)} ${pxToRem(12)}`,
  typography: '$subtext',
  userSelect: 'none',
  whiteSpace: 'nowrap',

  '&:active': {
    backgroundColor: '$palette-white',
    color: '$text-primary',
  },

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '$text-contrast',
  },

  '&.manifest-local-navigation-item--selected': {
    backgroundColor: '$palette-white',
    color: '$text-primary',
    typography: '$subtext-bold',

    '&:hover, &:active': {
      backgroundColor: '$palette-white',
      color: '$text-primary',
    },
  },
});

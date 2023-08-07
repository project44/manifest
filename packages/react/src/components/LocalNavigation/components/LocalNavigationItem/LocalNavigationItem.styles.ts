import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledItem = styled('button', {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: 'inherit',
  outline: 'none',
  position: 'relative',
  p: `${pxToRem(6)} ${pxToRem(12)}`,
  typography: '$subtext',
  userSelect: 'none',
  whiteSpace: 'nowrap',

  '&:active': {
    backgroundColor: '$background-tertiary',
  },

  '&:hover': {
    backgroundColor: '$background-secondary',
  },

  '&.manifest-local-navigation-item--selected': {
    backgroundColor: '$background-tertiary',
    typography: '$subtext-bold',

    '&:hover, &:active': {
      backgroundColor: '$background-tertiary',
    },
  },
});

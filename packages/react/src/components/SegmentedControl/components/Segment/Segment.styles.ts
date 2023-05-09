import { styled } from '@project44-manifest/react-styles';

export const StyledSegment = styled('label', {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$full',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'pointer',
  display: 'inline-flex',
  outline: 'none',
  position: 'relative',
  p: '$small $x-small',
  typography: '$subtext',
  userSelect: 'none',
  whiteSpace: 'nowrap',

  '&.manifest-segment': {
    '&:active': {
      backgroundColor: '$palette-white',
      color: '$text-primary',
    },

    '&:hover': {
      backgroundColor: '$palette-grey-200',
    },

    '&--selected': {
      backgroundColor: '$palette-white',
      typography: '$subtext-bold',

      '&:hover, &:active': {
        backgroundColor: '$palette-white',
        color: '$text-primary',
      },
    },

    '&--focus-visible': {
      '&:after': {
        backgroundColor: 'transparent',
        border: '2px solid $colors$palette-indigo-200',
        borderRadius: '$full',
        bottom: '-4px',
        content: '',
        display: 'block',
        left: '-4px',
        position: 'absolute',
        right: '-4px',
        top: '-4px',
      },
    },
  },

  '.manifest-segment__text': {
    px: '$small',
  },

  '.manifest-segment__start-adornment': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '$small',
  },

  '.manifest-segment__end-adornment': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginRight: '$small',
  },
});

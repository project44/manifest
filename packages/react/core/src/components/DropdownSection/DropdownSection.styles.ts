import { css } from '@project44-manifest/react-styles';

export const useStyles = css({
  '.manifest-dropdown-section__group': {
    boxSizing: 'border-box',
    display: 'block',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'auto',
    userSelect: 'none',
  },

  '.manifest-dropdown-section__label': {
    color: '$text-tertiary',
    px: '$x-small',
  },
});

import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
  boxSizing: 'border-box',
  margin: 0,
  outline: 'none',
  padding: '$small',
  position: 'relative',

  '.manifest-listbox-separator': {
    alignSelf: 'stretch',
    backgroundColor: '$border-primary',
    border: 'none',
    borderWidth: '$small',
    height: '1px',
    mx: '-$small',
    my: '$small',
    overflow: 'visible',
    width: 'auto',
  },

  '.manifest-listbox__no-results-container': {
    py: '$small',
  },

  '.manifest-listbox__loading-container': {
    py: '$small',
    '.manifest-spinner': {
      height: pxToRem(24),
      width: pxToRem(24),
      color: '$text-secondary',
    },

    '.manifest-typography--caption': {
      alignSelf: 'center',
      color: '$text-secondary',
      pl: '$x-small',
    },
  },
});

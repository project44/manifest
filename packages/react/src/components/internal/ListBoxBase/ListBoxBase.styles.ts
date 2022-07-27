import { css } from '../../../styles';

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
});

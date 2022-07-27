import { css } from '../../styles';

export const useStyles = css({
  boxSizing: 'border-box',
  display: 'inline-block',
  listStyleType: 'none',
  margin: 0,
  padding: '$small',
  outline: 0,
  overflow: 'auto',
  userSelect: 'none',

  '.manifest-dropdown-separator': {
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

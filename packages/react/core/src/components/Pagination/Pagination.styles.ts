import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
  alignItems: 'center',
  boxSizing: 'border-box',
  columnGap: '$x-small',
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: '$small',

  '.manifest-pagination__ellipsis': {
    backgroundColor: '$palette-grey-50',
    border: '1px solid $colors$palette-grey-200',
    borderRadius: '$small',
    boxSizing: 'border-box',
    display: 'inline-flex',
    margin: 0,
    outline: 0,
    position: 'relative',
    px: pxToRem(12),
    py: pxToRem(6),
  },
});

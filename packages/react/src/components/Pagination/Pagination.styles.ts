import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledPagination = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',

  '.manifest-pagination__label': {
    color: '$text-secondary',
  },

  '.manifest-pagination__actions': {
    alignItems: 'center',
    boxSizing: 'border-box',
    columnGap: '$x-small',
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: '$small',
  },

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
    py: pxToRem(5),
  },
});

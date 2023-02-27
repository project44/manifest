import { styled } from '@project44-manifest/react-styles';

export const StyledTableRow = styled('tr', {
  overflow: 'visible',

  '&:hover': {
    '.manifest-table-cell': {
      backgroundColor: '$palette-grey-50',
    },
  },
});

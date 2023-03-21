import { styled, tableRow } from '@project44-manifest/react-styles';

export const StyledTableRow = styled('tr', tableRow, {
  '&:hover': {
    '.manifest-table-cell': {
      backgroundColor: '$palette-grey-50',
    },
  },
});

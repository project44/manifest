import { styled, tableRow } from '@project44-manifest/react-styles';

export const StyledDataTableRow = styled('tr', tableRow, {
  position: 'relative',

  '&:hover': {
    '.manifest-data-table-cell': {
      backgroundColor: '$palette-grey-50',
    },
  },
});

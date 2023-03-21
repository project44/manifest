import { styled, tableColumn } from '@project44-manifest/react-styles';

export const StyledTableColumn = styled('th', tableColumn, {
  '.manifest-table-column--icon': {
    bottom: 'calc(50% - 11px)',
    margin: '0 $x-small',
    position: 'absolute',
    transition: '$transform',
  },

  '.manifest-table-column--icon__ascending': {
    transform: 'rotate(180deg)',
    bottom: 'calc(50% - 14px)',
  },
});

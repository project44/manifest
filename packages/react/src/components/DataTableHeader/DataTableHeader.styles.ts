import { styled, tableHeader } from '@project44-manifest/react-styles';

export const StyledDataTableHeader = styled('thead', tableHeader, {
  '& th': {
    borderBottom: '2px solid $colors$border$primary',
  },
});

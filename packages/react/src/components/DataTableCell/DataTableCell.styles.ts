import { styled, tableCell } from '@project44-manifest/react-styles';

export const StyledDataTableCell = styled('td', tableCell, {
  variants: {
    isPinnedLeft: {
      true: {
        borderRight: '2px solid $colors$border$primary',
        backgroundColor: '$colors$background$primary',
        position: 'sticky',
        left: 0,
        zIndex: 1,
      },
    },
    isPinnedRight: {
      true: {
        borderLeft: '2px solid $colors$border$primary',
        backgroundColor: '$colors$background$primary',
        position: 'sticky',
        right: 0,
        zIndex: 1,
      },
    },
  },

  defaultVariants: {
    isPinnedLeft: false,
    isPinnedRight: false,
  },
});

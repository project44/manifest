import { styled, tableColumn } from '@project44-manifest/react-styles';

export const StyledDataTableColumn = styled('th', tableColumn, {
  '.manifest-data-table-column--icon': {
    bottom: 'calc(50% - 11px)',
    margin: '0 $x-small',
    position: 'absolute',
    transition: '$transform',
  },

  '.manifest-data-table-column--icon__ascending': {
    transform: 'rotate(180deg)',
    bottom: 'calc(50% - 14px)',
  },

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

import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledTableColumn = styled('th', {
  borderBottom: '1px solid $colors$border-primary',
  color: '$text-secondary',
  cursor: 'default',
  height: pxToRem(56),
  position: 'relative',
  px: '$large',
  typography: '$subtext-bold',
  userSelect: 'none',

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

  variants: {
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
      justify: {
        textAlign: 'justify',
      },
    },
    isActive: {
      true: {
        color: '$primary',
      },
    },
    isSortable: {
      true: {
        cursor: 'pointer',
      },
    },
  },

  defaultVariants: {
    align: 'left',
  },
});

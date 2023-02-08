import { css, pxToRem } from '@project44-manifest/react-styles';

export const useStyles = css({
  borderBottom: '1px solid $colors$border-primary',
  color: '$text-secondary',
  cursor: 'default',
  height: pxToRem(56),
  position: 'relative',
  px: '$large',
  typography: '$subtext-bold',
  userSelect: 'none',

  '.manifest-table-column--icon': {
    bottom: 'calc(50% - 12px)',
    margin: '0 $x-small',
    position: 'absolute',
    transition: '$transform',
  },

  '.manifest-table-column--icon__ascending': {
    transform: 'rotate(180deg)',
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
    isHovered: {
      true: {
        backgroundColor: '$colors$palette-grey-50',
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

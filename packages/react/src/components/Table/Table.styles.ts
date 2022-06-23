import { css } from '../../styles';

const alignment = css({
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
  },

  defaultVariants: {
    align: 'left',
  },
});

export const useTableStyles = css({
  borderCollapse: 'collapse',
  borderSpacing: 0,
  width: '100%',
});

export const useTableCellStyles = css(
  {
    borderBottom: '1px solid $colors$border-primary',
    color: '$text-primary',
    overflow: 'hidden',
    padding: '$medium $large',
    textOverflow: 'ellipsis',
    typography: '$subtext',
    verticalAlign: 'inherit',
    whiteSpace: 'nowrap',
  },
  alignment,
);

export const useTableColumnStyles = css(
  {
    borderBottom: '1px solid $colors$border-primary',
    color: '$text-secondary',
    cursor: 'default',
    height: '3.5rem',
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
  },
  alignment,
);

export const useTableRowStyles = css({
  overflow: 'visible',

  variants: {
    isHovered: {
      true: {
        '.manifest-table-cell': {
          backgroundColor: '$palette-grey-50',
        },
      },
    },
  },
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';

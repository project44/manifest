import { css, focus, styled } from '../../styles';
import { Icon } from '../Icon';

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

export const StyledTable = styled('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
  width: '100%',
});

export const StyledTableBody = styled('tbody');

export const StyledTableCell = styled(
  'td',
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

export const StyledTableColumn = styled(
  'th',
  {
    borderBottom: '1px solid $colors$border-primary',
    color: '$text-secondary',
    cursor: 'default',
    height: '3.5rem',
    position: 'relative',
    px: '$large',
    typography: '$subtext-bold',

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

export const StyledTableContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$small',
  boxShadow: '$medium',
  overflowX: 'auto',
  width: '100%',
});

export const StyledTableHeader = styled('thead');

export const StyledTableFooter = styled('tfoot', { height: '3.5rem' });

export const StyledTableRow = styled('tr', {
  overflow: 'visible',

  variants: {
    isHovered: {
      true: {
        [`& ${StyledTableCell}`]: {
          backgroundColor: '$palette-grey-100',
        },
      },
    },
  },
});

export const StyledTableSortIcon = styled(Icon, {
  color: '$primary',
  bottom: 'calc(50% - 9px)',
  fontSize: '$medium',
  margin: '0 $x-small',
  position: 'absolute',
  transition: '$transform',

  variants: {
    sortDirection: {
      ascending: {
        transform: 'rotate(180deg)',
      },
      descending: {},
    },
  },
});

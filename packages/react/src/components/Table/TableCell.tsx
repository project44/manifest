import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { chainCallbacks } from '../../utils';
import { StyledTableCell } from './Table.styles';
import { useMergedRefs } from '../../hooks';

type TableCellElement = React.ElementRef<typeof StyledTableCell>;
type TableCellNativeProps = React.ComponentPropsWithoutRef<typeof StyledTableCell>;

export interface TableCellProps
  extends VariantProps<typeof StyledTableCell>,
    TableCellNativeProps {}

export const TableCell = React.forwardRef<TableCellElement, TableCellProps>(
  (props, forwardedRef) => {
    const { align, className, children, onMouseEnter, ...other } = props;

    const title = typeof children === 'string' ? children : '';

    const cellRef = React.useRef<HTMLTableCellElement>(null);

    const [isOverflown, setIsOverflown] = React.useState(false);

    const handleMouseEnter = React.useCallback(() => {
      const cell = cellRef?.current;

      if (cell) {
        setIsOverflown(cell.scrollWidth > cell.offsetWidth);
      }
    }, [cellRef]);

    return (
      <StyledTableCell
        {...other}
        className={cx('manifest-table--cell', className)}
        align={align}
        onMouseEnter={chainCallbacks(handleMouseEnter, onMouseEnter)}
        ref={useMergedRefs(cellRef, forwardedRef)}
        title={isOverflown ? title : undefined}
      >
        {children}
      </StyledTableCell>
    );
  },
);

import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { StyledTableColumn, StyledTableSortIcon } from './Table.styles';

type TableColumnElement = React.ElementRef<typeof StyledTableColumn>;
type TableColumnNativeProps = React.ComponentPropsWithoutRef<typeof StyledTableColumn>;

export interface TableColumnProps
  extends VariantProps<typeof StyledTableColumn>,
    Omit<TableColumnNativeProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave'> {
  /**
   * The sort direction of the column.
   *
   * @default 'asc'
   */
  sortDirection?: 'asc' | 'desc';
  /**
   * Callback executed on column click, used for column sort only.
   */
  onClick?(event: React.MouseEvent<TableColumnElement>): void;
}

export const TableColumn = React.forwardRef<TableColumnElement, TableColumnProps>(
  (props, forwardedRef) => {
    const {
      align,
      children,
      className,
      isActive,
      isSortable,
      sortDirection = 'asc',
      ...other
    } = props;

    const [isHovered, setIsHovered] = React.useState(false);

    let ariaSort = null;

    if (sortDirection) {
      ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
    }

    const handleMouseEnter = React.useCallback(() => {
      if (!isSortable) return;

      setIsHovered(true);
    }, [isSortable]);

    const handleMouseLeave = React.useCallback(() => {
      if (!isSortable) return;

      setIsHovered(false);
    }, [isSortable]);

    return (
      <StyledTableColumn
        {...other}
        align={align}
        aria-sort={isSortable ? (ariaSort as React.AriaAttributes['aria-sort']) : undefined}
        className={cx('manifest-table--column', className)}
        isActive={isActive}
        isHovered={isHovered}
        isSortable={isSortable}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={forwardedRef}
      >
        {children}
        {isSortable && isActive && (
          <StyledTableSortIcon
            icon="expand_more"
            sortDirection={sortDirection === 'asc' ? 'ascending' : 'descending'}
          />
        )}
      </StyledTableColumn>
    );
  },
);

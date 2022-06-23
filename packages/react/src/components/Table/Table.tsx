import * as React from 'react';
import { chain, mergeRefs } from '@react-aria/utils';
import {
  CSS,
  cx,
  useTableStyles,
  useTableCellStyles,
  useTableColumnStyles,
  useTableRowStyles,
} from './Table.styles';
import { Icon } from '../Icon';

type Align = 'center' | 'justify' | 'left' | 'right';

/**
 * -----------------------------------------------------------------------------------------------
 * TableContext
 * -----------------------------------------------------------------------------------------------
 */

interface TableContextOptions {
  showHover?: boolean;
  onMouseEnter?(event: React.MouseEvent): void;
  onMouseLeave?(event: React.MouseEvent): void;
}

const TableContext = React.createContext<TableContextOptions>({});

const useTableContext = () => React.useContext(TableContext);

type TableElement = React.ElementRef<'table'>;
type TableNativeProps = Omit<React.ComponentPropsWithoutRef<'table'>, keyof TableContextOptions>;

interface TableProps extends TableNativeProps, TableContextOptions {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const Table = React.forwardRef<TableElement, TableProps>((props, forwardedRef) => {
  const {
    className: classNameProp,
    css,
    showHover = false,
    onMouseEnter,
    onMouseLeave,
    ...other
  } = props;

  const { className } = useTableStyles({ css });

  return (
    <TableContext.Provider value={{ onMouseEnter, onMouseLeave, showHover }}>
      <table
        {...other}
        className={cx('manifest-table', className, classNameProp)}
        ref={forwardedRef}
      />
    </TableContext.Provider>
  );
});

if (__DEV__) {
  Table.displayName = 'ManifestTable';
}

Table.toString = () => '.manifest-table';

/**
 * -----------------------------------------------------------------------------------------------
 * TableBody
 * -----------------------------------------------------------------------------------------------
 */

type TableBodyElement = React.ElementRef<'tbody'>;
type TableBodyNativeProps = React.ComponentPropsWithoutRef<'tbody'>;

type TableBodyProps = TableBodyNativeProps;

const TableBody = React.forwardRef<TableBodyElement, TableBodyProps>(
  ({ className, ...other }, forwardedRef) => (
    <tbody {...other} className={cx('manifest-table-body', className)} ref={forwardedRef} />
  ),
);

if (__DEV__) {
  TableBody.displayName = 'ManifestTableBody';
}

TableBody.toString = () => '.manifest-table-body';

/**
 * -----------------------------------------------------------------------------------------------
 * TableCell
 * -----------------------------------------------------------------------------------------------
 */

type TableCellElement = React.ElementRef<'td'>;
type TableCellNativeProps = React.ComponentPropsWithoutRef<'td'>;

interface TableCellProps extends TableCellNativeProps {
  /**
   * Text alignment of the table cell.
   *
   * @default 'left'
   */
  align?: Align;
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const TableCell = React.forwardRef<TableCellElement, TableCellProps>((props, forwardedRef) => {
  const { align = 'left', className: classNameProp, css, children, onMouseEnter, ...other } = props;

  const title = typeof children === 'string' ? children : '';

  const cellRef = React.useRef<HTMLTableCellElement>(null);

  const [isOverflown, setIsOverflown] = React.useState(false);

  const { className } = useTableCellStyles({ align, css });

  const handleMouseEnter = React.useCallback(() => {
    const cell = cellRef?.current;

    if (cell) {
      setIsOverflown(cell.scrollWidth > cell.offsetWidth);
    }
  }, [cellRef]);

  return (
    <td
      {...other}
      className={cx('manifest-table-cell', className, classNameProp)}
      onMouseEnter={chain(handleMouseEnter, onMouseEnter)}
      ref={mergeRefs(cellRef, forwardedRef)}
      title={isOverflown ? title : undefined}
    >
      {children}
    </td>
  );
});

if (__DEV__) {
  TableCell.displayName = 'ManifestTableCell';
}

TableCell.toString = () => '.manifest-table-cell';

/**
 * -----------------------------------------------------------------------------------------------
 * TableColumn
 * -----------------------------------------------------------------------------------------------
 */

type TableColumnElement = React.ElementRef<'th'>;
type TableColumnNativeProps = React.ComponentPropsWithoutRef<'th'>;

interface TableColumnProps
  extends Omit<TableColumnNativeProps, 'onClick' | 'onMouseEnter' | 'onMouseLeave'> {
  /**
   * Text alignment of the table column.
   *
   * @default 'left'
   */
  align?: Align;
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * Whether the current column is actively sorted.
   */
  isActive?: boolean;
  /**
   * Whether the column supports sorting.
   */
  isSortable?: boolean;
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

const TableColumn = React.forwardRef<TableColumnElement, TableColumnProps>(
  (props, forwardedRef) => {
    const {
      align,
      children,
      className: classNameProp,
      css,
      isActive,
      isSortable,
      sortDirection = 'asc',
      ...other
    } = props;

    const [isHovered, setIsHovered] = React.useState(false);

    const { className } = useTableColumnStyles({ align, css, isActive, isHovered, isSortable });

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
      <th
        {...other}
        aria-sort={isSortable ? (ariaSort as React.AriaAttributes['aria-sort']) : undefined}
        className={cx('manifest-table-column', className, classNameProp)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={forwardedRef}
      >
        {children}
        {isSortable && isActive && (
          <Icon
            className={cx('manifest-table-column--icon', {
              'manifest-table-column--icon__ascending': sortDirection === 'asc',
            })}
            icon="expand_more"
          />
        )}
      </th>
    );
  },
);

if (__DEV__) {
  TableColumn.displayName = 'ManifestTableColumn';
}

TableColumn.toString = () => '.manifest-table-column';

/**
 * -----------------------------------------------------------------------------------------------
 * TableFooter
 * -----------------------------------------------------------------------------------------------
 */

type TableFooterElement = React.ElementRef<'tfoot'>;
type TableFooterNativeProps = React.ComponentPropsWithoutRef<'tfoot'>;

type TableFooterProps = TableFooterNativeProps;

const TableFooter = React.forwardRef<TableFooterElement, TableFooterProps>(
  ({ className, ...other }, forwardedRef) => (
    <tfoot {...other} className={cx('manifestui-table-footer', className)} ref={forwardedRef} />
  ),
);

if (__DEV__) {
  TableFooter.displayName = 'ManifestTableFooter';
}

TableFooter.toString = () => '.manifest-table-footer';

/**
 * -----------------------------------------------------------------------------------------------
 * TableHeader
 * -----------------------------------------------------------------------------------------------
 */

type TableHeaderElement = React.ElementRef<'thead'>;
type TableHeaderNativeProps = React.ComponentPropsWithoutRef<'thead'>;

type TableHeaderProps = TableHeaderNativeProps;

const TableHeader = React.forwardRef<TableHeaderElement, TableHeaderProps>(
  ({ className, ...other }, forwardedRef) => (
    <thead {...other} className={cx('manifestui-table-header', className)} ref={forwardedRef} />
  ),
);

if (__DEV__) {
  TableHeader.displayName = 'ManifestTableHeader';
}

TableHeader.toString = () => '.manifest-table-header';

/**
 * -----------------------------------------------------------------------------------------------
 * TableRow
 * -----------------------------------------------------------------------------------------------
 */

type TableRowElement = React.ElementRef<'tr'>;
type TableRowNativeProps = React.ComponentPropsWithoutRef<'tr'>;

interface TableRowProps extends TableRowNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const TableRow = React.forwardRef<TableRowElement, TableRowProps>((props, forwardedRef) => {
  const {
    className: classNameProp,
    onMouseEnter: onMouseEnterProp,
    onMouseLeave: onMouseLeaveProp,
    ...other
  } = props;

  const { onMouseEnter, onMouseLeave, showHover } = useTableContext();

  const [isHovered, setIsHovered] = React.useState(false);

  const { className } = useTableRowStyles({ isHovered });

  const handleMouseEnter = React.useCallback(() => {
    if (!showHover) return;

    setIsHovered(true);
  }, [setIsHovered, showHover]);

  return (
    <tr
      {...other}
      className={cx('manifestui-table-row', className, classNameProp)}
      onMouseEnter={chain(handleMouseEnter, onMouseEnter, onMouseEnterProp)}
      onMouseLeave={chain(() => setIsHovered(false), onMouseLeave, onMouseLeaveProp)}
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  TableRow.displayName = 'ManifestTableRow';
}

TableRow.toString = () => '.manifest-table-row';

export { Table, TableBody, TableCell, TableColumn, TableFooter, TableHeader, TableRow };
export type {
  TableProps,
  TableBodyProps,
  TableCellProps,
  TableColumnProps,
  TableFooterProps,
  TableHeaderProps,
  TableRowProps,
};
